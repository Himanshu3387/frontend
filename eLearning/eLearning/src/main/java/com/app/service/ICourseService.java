package com.app.service;

import java.util.List;

import com.app.entities.Course;
import com.app.entities.Tutorial;

public interface ICourseService {
	List<Course>getListOfAllCourse();
	Course getDetails(String courseName);
	Course addCourse(Course course);
}
