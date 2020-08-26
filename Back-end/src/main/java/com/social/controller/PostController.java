package com.social.controller;

import com.social.model.Post;
import com.social.repository.PostRepository;
import com.social.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/posts/")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private PostRepository postRepository;

    @PostMapping
    public ResponseEntity<Void> createPost(@RequestPart("imageFile")MultipartFile file,
                                           @RequestPart("postText") String text) throws IOException {

        postService.save(file,text);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts(){
        List<Post> posts = postRepository.findAllByOrderByCreatedDateDesc();
        return ResponseEntity.status(HttpStatus.OK).body(posts);
    }

}
