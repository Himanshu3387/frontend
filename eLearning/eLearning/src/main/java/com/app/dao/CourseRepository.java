package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Course;
import com.app.entities.Tutorial;

public interface CourseRepository extends JpaRepository<Course,Long>{

	Optional<Course> findByCourseName(String courseName);
}
