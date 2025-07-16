package com.simran.blog.blog_backend.filter;

import java.io.IOException;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

	private final String SECRET_KEY="my_secret_key_for_jwt_token_should_be_long_enough_12345";
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,FilterChain filterChain ) throws IOException, ServletException {
		String authHeader=request.getHeader("Authorization");
		if(authHeader!=null && authHeader.startsWith("Bearer ")) {
			String jwt=authHeader.substring(7);
			System.out.println("auth header"+authHeader);
			System.out.println("jwt"+jwt);
			
			try {
				SecretKey key=Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
				Claims claims=Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
				String email=claims.getSubject();
				String role=(String)claims.get("role");
				
				   UsernamePasswordAuthenticationToken authentication =
			                new UsernamePasswordAuthenticationToken(
			                    email,
			                    null,
			                    java.util.List.of(new SimpleGrantedAuthority("ROLE_" + role))
			                );
			            SecurityContextHolder.getContext().setAuthentication(authentication);
			}
			catch(Exception e){
				e.printStackTrace();
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				return;
			}
		}
		filterChain.doFilter(request, response);
	}
}
