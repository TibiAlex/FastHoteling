package com.example.back.service;

import com.example.back.handlers.UserNotFoundException;
import com.example.back.model.Role;
import com.example.back.model.entities.AppUser;
import com.example.back.repository.AppUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppUserService implements UserDetailsService {
    private final AppUserRepo appUserRepo;

    /**
     * fucntie ce cauta un utilizator dupa username
     * @param username un string
     * @return un user
     * @throws UsernameNotFoundException exceptie
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserRepo.findByUsername(username).orElseThrow(() ->
                new UsernameNotFoundException(
                        String.format("Utilizatorul cu numele %s nu a fost gasit", username)
                ));
    }
}
