/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.remiel.springreact.service;

import com.remiel.springreact.model.Course;
import java.util.List;

/**
 *
 * @author ReMieL
 */
public interface CourseService {
    
    
    public List<Course> getAllCourses();
    
    public void  deleteCourse(int id);
    
    public boolean findCourseById(int id);
    
    public Course findCourseByIdCourse(int id);
    
    public Course updateCourse(Course course, int id);
    
    public Course insertCourse (Course course);
    
}
