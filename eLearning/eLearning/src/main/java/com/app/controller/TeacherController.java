package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.QuizDTO;
import com.app.entities.Quiz;
import com.app.entities.Schedule;
import com.app.entities.User;
import com.app.service.IQuizService;
import com.app.service.IScheduleService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/teacher")
@Validated
@CrossOrigin(origins = "*")
public class TeacherController {
	
	@Autowired
	IUserService userService;
	@Autowired
	IScheduleService scService;
	@Autowired
	IQuizService qService;
	
	@GetMapping("/getAllStudents")
	public List<User>getAllStudents(){
		return userService.getAllUsers();
	}

	@GetMapping("/getSchedule")
	public List<Schedule> getSchedule(){
		return scService.getScheduleDetails();
	}
	@PostMapping("/quiz")
	public Quiz addQuiz(@RequestBody @Valid QuizDTO q) 
	{
	
			System.out.println("in add quiz  " +q);
			return qService.addQuiz(q);
	
	}

}
