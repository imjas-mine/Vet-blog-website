package com.simran.blog.blog_backend.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simran.blog.blog_backend.Model.User;
import com.simran.blog.blog_backend.Repository.UserRepo;
import com.simran.blog.blog_backend.payload.LoginRequest;
import com.simran.blog.blog_backend.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	 private UserRepo userRepo;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@PostMapping("/login")
	 public ResponseEntity<String> login(@RequestBody LoginRequest request){
		 Optional<User> userOpt=userRepo.findByEmail(request.getEmail());
		 
		 if(userOpt.isEmpty()) {
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email not found");
		 }
		 
		 User user=userOpt.get();
		
		 if(!user.getPassword().equals(request.getPassword())) {
			 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong Password");
		 }
		 String token=jwtUtil.generateToken(user.getEmail(),user.getRole());
		 return ResponseEntity.ok(token);
	 }
}
