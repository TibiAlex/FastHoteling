package com.example.back.service;

import com.example.back.model.entities.AppUser;
import com.example.back.model.requestsAndResponses.RegisterRequest;
import com.example.back.repository.AppUserRepo;
import com.example.back.security.PasswordEncoder;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RegisterService {

    private final AppUserService appUserService;
    private final AppUserRepo appUserRepo;
    private final PasswordEncoder passwordEncoder;

    public ResponseEntity<?> tryRegister(RegisterRequest registerRequest) {
        if (registerRequest.getPassword() == null || registerRequest.getPassword().length() < 6) {
            return new ResponseEntity<>("Password must be at least 6 characters", HttpStatus.BAD_REQUEST);
        } else if (!registerRequest.getPassword().equals(registerRequest.getConfirmPassword())) {
            return new ResponseEntity<>("Passwords do not match", HttpStatus.BAD_REQUEST);
        } else {
            String pass = passwordEncoder.bCryptPasswordEncoder().encode(registerRequest.getPassword());
            appUserRepo.save(new AppUser(registerRequest.getUsername(),
                    pass,
                    registerRequest.getEmail(),
                    registerRequest.getRole()));
            return new ResponseEntity<>("User successfully registered", HttpStatus.OK);
        }
    }
}
