package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Schedule;
import com.app.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{
	//User authenticateUser(String email, String pass);
	Optional<User> findByEmailAndPassword(String email, String pass);
	@Query("select u from User u")
	List<User> getAllUsers();
	//Schedule save(Schedule schedule);
	//@Query(value="select * from user_tbl  where id = :serid ",nativeQuery = true)
	
	
}
