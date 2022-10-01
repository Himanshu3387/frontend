package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.springframework.web.bind.annotation.RequestBody;
import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.app.dto.*;
import com.app.dto.ApiResponse;
import com.app.dto.ScheduleDTO;
import com.app.dto.TutorialDTO;
import com.app.entities.Course;
import com.app.entities.Schedule;
import com.app.entities.Tutorial;
import com.app.entities.User;
import com.app.service.ICourseService;
import com.app.service.IScheduleService;
import com.app.service.ITutorialService;
import com.app.service.IUserService;
@RestController // =@Controller + @ResponseBody
@RequestMapping("/api/admin") // resource : class level pattern
@CrossOrigin(origins = "*")
@Validated 
public class AdminController 
{
	@Autowired
	ITutorialService tutService;
	@Autowired
	ICourseService courseService;
	@Autowired
	IUserService userService;
	@Autowired
	IScheduleService scService;
	
	@DeleteMapping("/deleteUser/{uid}")
	public String deleteUserDetails(@PathVariable @Valid @NotNull @Range(min = 1, max = 100) long uid) 
	{
		System.out.println("in del emp dtls " + uid);
		return userService.deleteUserDetails(uid);
	}

	@PutMapping("/{userId}")
	public User updateUserDetails(@RequestBody  User user , @PathVariable long id)
	{    
		return userService.updateUserDetails( user,id );
	}
	
	@GetMapping("/{userId}")
	public User getUserDetails(@PathVariable long userId) //String --> long automatically done  by SC ---> WC
	{
//		User user=new User();
//		if(user.getRole()=="teacher") {
//			return new ResponseEntity<>(userService.getTeacherDetails(userId), HttpStatus.OK);
//		}
//		else
			return userService.getUserDetails(userId);		
	}
	
	@PostMapping("/addNewUser")
	public ResponseEntity<?> addNewUser(@RequestBody @Valid User user) {
		try 
		{
			System.out.println("in add new user " + user.getId());// id : null
			return ResponseEntity.status(HttpStatus.CREATED).body(userService.insertUserDetails(user));
		} 
		catch (RuntimeException e) 
		{
			System.out.println("in add new user err " + e);
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
	}
	

	@PostMapping("/schedule")
	public Schedule addSchedule(@RequestBody @Valid ScheduleDTO sc) 
	{
	
			System.out.println("in add schedule  " +sc);
			return scService.addSchedule(sc);
	
	}
	@PostMapping("/addTutorial")
	public String processNewTutorialForm(@RequestBody TutorialDTO t)
	{
		System.out.println("in add new tutorial"+t);//all the fields set as per form data : except : emp id , dept id
		//System.out.println("Added new emp "+tut.addEmpDetails(e,(long)session.getAttribute("dept_id")));
		System.out.println("Added new tut" +tutService.addTutorial(t));
		return "succesfully new tutorial added";
	}
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers()
	{
		return userService.getAllUsers();
	}
	@GetMapping("/getSchedule")
	public List<Schedule> getSchedule(){
		return scService.getScheduleDetails();
	}
	@PostMapping("/addCourse")
	public String processNewTutorialForm(@RequestBody Course t)
	{
		System.out.println("in add new course"+t);//all the fields set as per form data : except : emp id , dept id
		//System.out.println("Added new emp "+tut.addEmpDetails(e,(long)session.getAttribute("dept_id")));
		System.out.println("Added new course" +courseService.addCourse(t));
		return "succesfully new course added";
	}
}
