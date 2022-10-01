package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TutorialDTO {
	
	private String tutName;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate publishDate;
	
	
	private String contents;
												
	private long selectedCourse ;
	
	private long teacher;

	
}
