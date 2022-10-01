package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="courses_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)

public class Course extends BaseEntity{
	@Column(name="course_name",length = 30,unique = true)
	private String courseName;
	@Column(name="course_desc",length = 100)
	private String description;
//	public course() {
//		// TODO Auto-generated constructor stub
//	}
	public Course(String courseName, String description) {
		super();
		this.courseName = courseName;
		this.description = description;
	}
	
}
