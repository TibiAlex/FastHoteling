package com.example.back.controller;

import com.example.back.model.requestsAndResponses.AuthenticationRequest;
import com.example.back.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/Benny")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class LoginController {

    private final LoginService loginService;

    /**
     * ednpoit pentru login
     * @param authenticationRequest private String username;
     *                              private String password;
     * @return login token if credentiols correct, error otherwise
     */
    @PostMapping(path = "/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        return loginService.tryLogin(authenticationRequest);
    }
}
