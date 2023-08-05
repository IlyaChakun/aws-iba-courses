package iba.service;

import iba.dto.UserDto;

public interface UserService {

    UserDto save(UserDto user);

    UserDto getUserById(String userId);

}
