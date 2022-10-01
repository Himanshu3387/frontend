package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.app.dto.ApiResponse;
import com.app.dto.LoginRequestDTO;
import com.app.dto.UserDTO;
import com.app.entities.Course;
import com.app.entities.User;
import com.app.service.ICourseService;
import com.app.service.IUserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user") 
@Validated
public class UserController {
	@Autowired
	IUserService userService;
	@Autowired
	ICourseService courseService;
	
	public UserController() {
		System.out.println("in ctor of " + getClass());
	}
	@PostMapping("/signin") 
	public ResponseEntity<?> processLoginForm(@RequestBody User user, Model map,
			HttpSession session, RedirectAttributes flashMap) {
			System.out.println("entered processloginform"+user.getEmail()+ " "+user.getPassword());
		try {
			User u = userService.authenticateUser(user.getEmail(), user.getPassword());
			
//			session.setAttribute("user_details", u);
//			
//			flashMap.addFlashAttribute("mesg", "Hello , " + u.getFirstName()
//					+ " . You have successfully logged in under " + u.getRole() + " role");
		
//			if (u.getRole() =="ADMIN") 
//				return ResponseEntity.ok(u);
				//return "redirect:/admin/display";
			System.out.println(u);
			return ResponseEntity.ok(u);	
			//return "redirect:/user/display";
				
		} catch (RuntimeException e) {
			
			return (ResponseEntity<?>) ResponseEntity.badRequest();
			//return "/user/login";
		}
	}
	@GetMapping("/logout")
	public String userLogout(HttpSession session,
			HttpServletResponse resp,HttpServletRequest request)
	{
		System.out.println("In logout");
		session.invalidate();
		resp.setHeader("refresh", "5;url="+request.getContextPath());
		return"In logout";
	}
	
	@PostMapping("/signup")
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
}
