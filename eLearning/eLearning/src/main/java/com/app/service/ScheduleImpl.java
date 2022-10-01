package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.ScheduleRepo;
import com.app.dao.UserRepository;
import com.app.dto.ScheduleDTO;
import com.app.entities.Schedule;
import com.app.entities.User;
@Service
@Transactional
public class ScheduleImpl implements IScheduleService {
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private ScheduleRepo scRepo;
	
	@Autowired
	private ModelMapper mapper;
	@Override
	public Schedule addSchedule(ScheduleDTO sc) 
	{
			User a=userRepo.findById(sc.getAdmin()).orElseThrow(()->new ResourceNotFoundException("Invalid admin id"));
			User s=userRepo.findById(sc.getStudentId()).orElseThrow(()->new ResourceNotFoundException("Invalid student id"));
			User t=userRepo.findById(sc.getTeacher_id()).orElseThrow(()->new ResourceNotFoundException("Invalid teacher id"));
			Schedule schedule = mapper.map(sc, Schedule.class);
			schedule.setAdmin(a);
			schedule.setStudentId(s);
			schedule.setTeacher_id(t);
			return scRepo.save(schedule);
	}
	@Override
	public List<Schedule> getScheduleDetails() {
		
		return scRepo.getSchedule();
	}

}
