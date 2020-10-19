/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.remiel.springreact.service;

import com.remiel.springreact.model.Course;
import com.remiel.springreact.repos.CourseRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ReMieL
 */

@Service
public class CourseServiceImpl  implements CourseService{
    
    @Autowired
    CourseRepository  courseRepository;

    @Override
    public List<Course> getAllCourses() {
        
        return courseRepository.findAll();
    }

    @Override
    public void deleteCourse(int id) {
       
      
       courseRepository.deleteById(id);
       
        
    }

    @Override
    public boolean findCourseById(int id) {
        
        Optional<Course> optCourse =courseRepository.findById(id);
        
        
        return optCourse.isPresent();
        
    }

    @Override
    public Course findCourseByIdCourse(int id) {
        
        Optional<Course> optCourse =courseRepository.findById(id);
        
        if (optCourse.isPresent()){
            
            return optCourse.get();
        }else{
            
            return null;
        }
        
    }

    @Override
    public Course updateCourse(Course course,int id) {
        
        courseRepository.save(course);
        
        return findCourseByIdCourse(id);
    }

    @Override
    public Course insertCourse(Course course) {
        
        
        Course createdCourse = courseRepository.save(course);
        
        int id = createdCourse.getId();
        
        return findCourseByIdCourse(id);
    }
    
    
   
    
}
