package com.app.service;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.app.dto.LoginRequestDTO;
import com.app.dto.UserDTO;
import com.app.entities.*;


public interface IUserService {
//	UserDTO authenticateUser(LoginRequestDTO request);
	User authenticateUser(String email, String pass);
	String deleteUserDetails(long uId);
	User getStudentDetails(long studentId);
	User updateUserDetails( User user, long id);
	User getTeacherDetails(long teacherId);
	User getUserDetails(long Id);
	User insertUserDetails(User transientUser);
	//@Query("select * from User u where u.getRole='student'")
	List<User> getAllUsers();
}
