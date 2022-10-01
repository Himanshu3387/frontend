package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.entities.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class QuizDTO {
	private String quizName;
	private String description;
	private int queNo;
	private transient String answer;
	private long teacher;
	private long student;
}
