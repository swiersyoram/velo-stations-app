package com.antwerpvelostations.antwerpvelostations.rest;

import com.antwerpvelostations.antwerpvelostations.dao.StationDao;
import com.antwerpvelostations.antwerpvelostations.models.authentication.AuthRequest;
import com.antwerpvelostations.antwerpvelostations.models.authentication.AuthResponse;
import com.antwerpvelostations.antwerpvelostations.models.database.Station;
import com.antwerpvelostations.antwerpvelostations.service.AuthenticationService;
import com.antwerpvelostations.antwerpvelostations.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.server.Cookie;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class restController {
    StationDao stationDao;
    AuthenticationService authenticationService;
    @Autowired
    public restController(StationDao stationDao, AuthenticationService authenticationService) {
        this.stationDao = stationDao;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthRequest authRequest){
       String token = authenticationService.authenticateUser(authRequest.getUsername(), authRequest.getPassword());
        AuthResponse authResponse = new AuthResponse(authRequest.getUsername(), token);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, "token="+token+"; Max-Age=3600; HttpOnly; SameSite=None; Secure");
       return ResponseEntity.ok().headers(headers).body(authResponse);
    }

    @PostMapping("/logout")
    public ResponseEntity logout() {
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.SET_COOKIE, "token=null; Max-Age=0; HttpOnly; SameSite=None; Secure");
        return ResponseEntity.ok().headers(headers).build();
    }

    @GetMapping("/authenticate")
    public ResponseEntity authenticate(@CookieValue(value="token") String token){
        return ResponseEntity.ok().build();
    };

    @GetMapping("/stations")
    public List<Station> getStations(){
        List<Station> stations = stationDao.findAllStations();
        return stations;
    }
}
