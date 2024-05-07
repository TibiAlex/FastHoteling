package com.example.back.controller;


import com.example.back.model.requestsAndResponses.RegisterRequest;
import com.example.back.service.RegisterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/Benny")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RegisterController {
    private final RegisterService registerService;

    @PostMapping(path = "/register")
    public ResponseEntity<?> registerNewUser(@RequestBody RegisterRequest registerRequest) {
        return registerService.tryRegister(registerRequest);
    }
}
