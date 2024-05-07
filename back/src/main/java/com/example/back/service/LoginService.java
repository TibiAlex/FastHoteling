package com.example.back.service;

import com.example.back.model.requestsAndResponses.AuthenticationRequest;
import com.example.back.model.requestsAndResponses.AuthenticationResponse;
import com.example.back.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final AppUserService appUserService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    /**
     * metoda ce verifica credentialele si genereaza un token
     * @param authenticationRequest  private String username;
     *                                  private String password;
     * @return private final String jwt;
     */
    public ResponseEntity<?> tryLogin(AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                            authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            return new ResponseEntity<>("Useraname sau parola incorecte", HttpStatus.OK);
        }

        final UserDetails userDetails = appUserService.
                loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}