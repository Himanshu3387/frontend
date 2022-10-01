package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ScheduleDTO {
	private String subName;
	private String teacherName;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	private String meetingId;
	private String meetingPassword;
	private long admin;
	private long studentId;
	private long teacher_id;
}
