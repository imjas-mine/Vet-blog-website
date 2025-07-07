package com.simran.blog.blog_backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simran.blog.blog_backend.Model.User;

public interface UserRepo extends JpaRepository<User,Integer> {
	Optional<User> findByEmail(String email);
}


