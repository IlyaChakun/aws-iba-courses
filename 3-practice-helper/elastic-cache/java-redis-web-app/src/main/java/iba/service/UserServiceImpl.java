package iba.service;

import iba.dto.UserDto;
import iba.entity.User;
import iba.exception.ResourceNotFoundException;
import iba.mapper.UserMapper;
import iba.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.redisson.api.RBucket;
import org.redisson.api.RedissonClient;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final RedissonClient redissonClient;

    private static final String REDIS_USER_KEY = "user";

    @Override
    public UserDto save(UserDto userDto) {

        User user = userMapper.toEntity(userDto);
        User saved = userRepository.save(user);

        RBucket<UserDto> bucket = redissonClient.getBucket(REDIS_USER_KEY + "_" + saved.getId());
        UserDto cachedUser = userMapper.toDto(saved);
        bucket.set(cachedUser);

        return cachedUser;
    }

    @Override
    public UserDto getUserById(String userId) {
        RBucket<UserDto> userRBucket = redissonClient.getBucket(REDIS_USER_KEY + "_" + userId);
        if (userRBucket.isExists()) {
            System.out.println("get from cache");
            return userRBucket.get();
        } else {
            System.out.println("get from db");
            User user = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new ResourceNotFoundException(userId));
            return userMapper.toDto(user);
        }
    }

}