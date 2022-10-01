package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CourseRepository;
import com.app.entities.Course;
import com.app.entities.Tutorial;
@Service
@Transactional
public class CourseServiceImpl implements ICourseService{
	@Autowired
	CourseRepository courseRepo;
	@Override
	public List<Course> getListOfAllCourse() {
		
		return courseRepo.findAll();
	}
	@Override
	public Course getDetails(String courseName) {
		Course course = courseRepo.findByCourseName(courseName)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid tut name!!!!"));
		// tutorial : PERSISTENT
		return course;
	}
	@Override
	public Course addCourse(Course course) {
		// TODO Auto-generated method stub
		return courseRepo.save(course) ;
	}

}
