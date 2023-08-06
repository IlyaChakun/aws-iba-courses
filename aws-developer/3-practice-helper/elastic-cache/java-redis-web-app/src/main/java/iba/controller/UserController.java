package iba.controller;

import iba.dto.UserDto;
import iba.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController()
@RequestMapping("/api/v1/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable("id") String userId) {
        UserDto user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @PostMapping
    public ResponseEntity<?> saveUser(@RequestBody UserDto user) {
        UserDto saved = userService.save(user);
        return ResponseEntity
                .created(URI.create("/api/v1/users/" + user.getId()))
                .body(saved);
    }
}