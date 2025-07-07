package com.simran.blog.blog_backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simran.blog.blog_backend.Model.Post;

public interface PostRepo extends JpaRepository<Post, Integer> {
	List<Post> findByCategory(String category);
}
