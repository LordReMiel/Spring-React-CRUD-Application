/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.remiel.springreact.repos;

import com.remiel.springreact.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ReMieL
 */

@Repository
public interface CourseRepository  extends JpaRepository<Course, Integer>{
    
}
