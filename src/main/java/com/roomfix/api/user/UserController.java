package com.roomfix.api.user;

import java.util.List;

import com.roomfix.api.common.exceptionhandling.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<User> getAllUser() {
        List<User> users = this.userRepository.findAll();
        return users;
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User getUserById(@PathVariable("id") long userId) {
        User user = this.userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
        return user;
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public User addUser(@RequestBody User newUser) {
        return this.userRepository.save(newUser);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User deleteUserById(@PathVariable("id") long userId) {
        User userToDelete = this.userRepository.findById(userId).orElseThrow(ResourceNotFoundException::new);
        this.userRepository.delete(userToDelete);
        return userToDelete;
    }

}
