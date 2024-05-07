package com.example.back.model.requestsAndResponses;

import com.example.back.model.Role;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Data
public class RegisterRequest {
    private String email;
    private String username;
    private String password;
    private String confirmPassword;
    private Role role;
}
