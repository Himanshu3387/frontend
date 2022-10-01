package com.app.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.CourseRepository;
import com.app.dao.TutoRepo;
import com.app.dao.UserRepository;
import com.app.dto.TutorialDTO;
import com.app.entities.Course;
import com.app.entities.Tutorial;
import com.app.entities.User;


@Service
@Transactional
public class TutorialserviceImpl implements ITutorialService{
	@Autowired
	private TutoRepo tutRepo;
	@Autowired
	private CourseRepository courseRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public String getTutNamesByTopic(long courseId) {
	if(courseId==1||courseId==2) {
		return tutRepo.findTutNamesByCourseId(courseId);
	}
	else
	{
		throw new ResourceNotFoundException("Wrong course Id");
	}
	}
	@Override
	public List<Tutorial> getTutorialsList(String courseName) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public Tutorial addTutorial(TutorialDTO tut) {
		//get course from courseId
		Course c=courseRepo.findById(tut.getSelectedCourse()).orElseThrow(()->new ResourceNotFoundException("Invalid course id"));
		//get teacher from teacherId
		User u=userRepo.findById(tut.getTeacher()).orElseThrow(()->new ResourceNotFoundException("Invalid teacher id"));
		//map tut DTO to entity
		Tutorial tutorial = mapper.map(tut, Tutorial.class);
		//establish unidirectional rel from tut to course
		tutorial.setSelectedCourse(c);
		tutorial.setTeacher(u);
		return tutRepo.save(tutorial);
	}


	
	
	}
