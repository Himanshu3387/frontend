package com.app.service;

import java.util.List;

import com.app.dto.ScheduleDTO;
import com.app.entities.Schedule;


public interface IScheduleService {
	//Schedule createSchedule(Schedule sc);
	Schedule addSchedule(ScheduleDTO tut);
	List<Schedule> getScheduleDetails();
}
