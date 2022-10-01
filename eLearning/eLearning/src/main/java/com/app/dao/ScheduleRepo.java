package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Schedule;
import com.app.entities.User;

public interface ScheduleRepo extends JpaRepository<com.app.entities.Schedule, Long>{
	@Query("select s from  Schedule  s")
	List<Schedule> getSchedule();
}
