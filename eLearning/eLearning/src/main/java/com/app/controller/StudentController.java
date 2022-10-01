package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequestDTO;
import com.app.entities.Course;
import com.app.entities.Quiz;
import com.app.entities.Schedule;
import com.app.entities.Tutorial;
import com.app.service.ICourseService;
import com.app.service.IQuizService;
import com.app.service.IScheduleService;
import com.app.service.ITutorialService;
import com.app.service.IUserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/student") 
@Validated
public class StudentController {
	@Autowired
	ICourseService courseService;
	@Autowired
	IScheduleService scService;
	@Autowired
	IQuizService qService;
	@GetMapping("/getAllCourses")
	public List<Course> getAllCourses() {
		System.out.println("in course list ");
		return courseService.getListOfAllCourse();
	}
	@Autowired(required=true)
	ITutorialService tutService;
	@GetMapping("/{courseId}")
	public ResponseEntity<?>  getTutorialsByTopic(@PathVariable long courseId) //String --> long automatically done  by SC ---> WC
	{
		//System.out.println("in get tuts "+courseId+" ");
		return new ResponseEntity<>(tutService.getTutNamesByTopic(courseId), HttpStatus.OK);
	}
	
	@GetMapping("/getSchedule")
	public List<Schedule> getSchedule(){
		return scService.getScheduleDetails();
	}

	@GetMapping("/showQuizes")
	public List<Quiz> getQuiz(){
		return qService.showQuiz();
	}
}
