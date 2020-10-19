/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.remiel.springreact.controller;

import com.remiel.springreact.model.Course;
import com.remiel.springreact.service.CourseService;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author ReMieL
 */
@CrossOrigin (origins = {"http://localhost:3000"})
@RestController
public class CourseController {
    
    @Autowired
    CourseService courseService;
    
    
    @GetMapping("/instructors/{username}/courses")
    public List<Course> getAllCourses (@PathVariable String username) {
        
        return courseService.getAllCourses();
    }
    
    
    @DeleteMapping ("/instructors/{username}/courses/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable int id) {
        
        courseService.deleteCourse(id);
        
        if (courseService.findCourseById(id)){
            
            return ResponseEntity.notFound().build();
        }else{
            
            return ResponseEntity.noContent().build();
        }
        
        
    }
    
    
    @GetMapping("/instructors/{username}/courses/{id}")
    public Course getCourse(@PathVariable String username, @PathVariable int id) {
        
        
        return courseService.findCourseByIdCourse(id);
    }
    
    @PutMapping("/instructors/{username}/courses/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable int id,
                                                @RequestBody Course course) {
        
        Course courseUpdated = courseService.updateCourse(course, id);
        
        return new ResponseEntity<Course>(courseUpdated, HttpStatus.OK);
        
    }
    
    
    @PostMapping("/instructors/{username}/courses/")
    public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course){
        course.setUsername(username);
        Course createdCourse = courseService.insertCourse(course);
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
                   .toUri();
        
        return ResponseEntity.created(uri).build();
        
    }
    
    
    
}
