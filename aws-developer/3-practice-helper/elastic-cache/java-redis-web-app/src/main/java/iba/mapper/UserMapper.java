package iba.mapper;

import iba.dto.UserDto;
import iba.entity.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface UserMapper {

    UserDto toDto(User user);

    User toEntity(UserDto userDto);

}
