package com.example.back.handlers;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.BAD_REQUEST, reason="Utilizatorul nu a fost gasit!")  // 400
public class UserNotFoundException extends RuntimeException {
}
