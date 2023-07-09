package com.antwerpvelostations.antwerpvelostations.service;

import com.antwerpvelostations.antwerpvelostations.config.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    @Autowired
    public AuthenticationService(AuthenticationManager authenticationManager, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public String authenticateUser(String username, String password) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        System.out.println(authentication);
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(username);
        } else {
            throw new BadCredentialsException("invalid credentials");
        }
    }

    public boolean isUserAuthenticated(String token){
        return jwtService.validateToken(token);
    }

}
