package com.simran.blog.blog_backend.security;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component

public class JwtUtil {

	
	public String generateToken(String email, String role) {
		final String SECRET_KEY = "my_secret_key";
		return Jwts.builder()
				.setSubject(email)
				.claim("role", role)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis()+86400000))
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY)
				.compact();
	}
}
