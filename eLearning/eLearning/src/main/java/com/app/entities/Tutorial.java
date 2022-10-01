package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "tutorials_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString(exclude ={"selectedCourse","teacher"},callSuper = true)
public class Tutorial extends BaseEntity {
	@Column(name = "tut_name", unique = true, length = 100, nullable = false)
	private String tutName;
	@Column(name = "publish_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate publishDate;
	
	@Column(length = 400, nullable = false)
	private String contents;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course_id", nullable = false) 												
	private Course selectedCourse;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "teacher_id",nullable = false) 
	private User teacher;

	public Tutorial(String tutName, LocalDate publishDate) {
		super();
		this.tutName = tutName;
		this.publishDate = publishDate;
		
		}

	


}
