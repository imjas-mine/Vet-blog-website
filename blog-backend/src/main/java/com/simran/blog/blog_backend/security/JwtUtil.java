package com.simran.blog.blog_backend.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

	
	public String generateToken(String email, String role) {
		final String SECRET_KEY = "my_secret_key_for_jwt_token_should_be_long_enough_12345";
		final SecretKey key=Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
		return Jwts.builder()
				.setSubject(email)
				.claim("role", role)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis()+86400000))
				.signWith(key)
				.compact();
	}
}
