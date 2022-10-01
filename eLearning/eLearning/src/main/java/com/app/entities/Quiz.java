package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="quiz_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Quiz extends BaseEntity{
	@Column(name="quiz_name",length = 30,unique = true)
	private String quizName;
	@Column(name="quiz_desc",length = 100)
	private String description;
	@Column(name="que_no")
	private int queNo;
	@Column(name="answer")
	private transient String answer;
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "teacher_id",nullable = false) 
	private User teacher;
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "student_id",nullable = false) 
	private User student;
}
