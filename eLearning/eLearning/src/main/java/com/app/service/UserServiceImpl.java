package com.app.service;



import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.LoginRequestDTO;
import com.app.dto.UserDTO;
import com.app.entities.*;


@Service 
@Transactional 
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userDao;
	@Autowired
	private ModelMapper mapper;
	@Override
	public User authenticateUser(String email, String pass) {
		
		Optional<User> optional = userDao.findByEmailAndPassword(email, pass);
		
		return optional.orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials"));
		//return optional or if error is present go in custom exception package and give message
	}
	@Override
	public String deleteUserDetails(long userId) {
		String mesg = "Deleting student details failed !!!!!";
		// TODO Auto-generated method stub
		// if you want to confirm the id :
				if (userDao.existsById(userId)) {
					userDao.deleteById(userId);
					mesg = "Deleted user details of user of " + userId;
				}
		return mesg;
	}
	@Override
	public User getStudentDetails(long userId) {
		return userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!!!"));
	}
	@Override
	public User updateUserDetails(User user, long id) {
		user.setId(id);
		userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!!!"));
		return userDao.save(user);
	}
	@Override
	public User getTeacherDetails(long teacherId) {
		return userDao.findById(teacherId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!!!"));
	}
	@Override
	public User getUserDetails(long userId) {
		
		return userDao.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!!!!!!"));
	}
	@Override
	public User insertUserDetails(User transientUser) {
		return userDao.save(transientUser);
	}
//	@Override
//	public Employee insertEmpDetails(Employee transientEmp) {
//		// TODO Auto-generated method stub
//		return empRepo.save(transientEmp);
//	}
	@Override
	public List<User> getAllUsers() {
		
		return userDao.getAllUsers();
	}
}
