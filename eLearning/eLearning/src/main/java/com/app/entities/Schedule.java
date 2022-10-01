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
@Table(name = "Shedule_tbl")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Schedule extends BaseEntity{
	@Column(name = "sub_name",  length = 100, nullable = false)
  private String  subName;
	@Column(name = "teacher_name",  length = 100, nullable = false)
  private String  teacherName;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;  
	@Column(name = "meeting_name",  length = 10, nullable = false)
	private String meetingId;
	@Column(name = "meeting_password",  length = 10, nullable = false)
	private String meetingPassword;
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "admin_id", nullable = false) 
	private User admin; 
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "student_id", nullable = false) 
	private User studentId; 
	@ManyToOne(fetch = FetchType.EAGER) 
	@JoinColumn(name = "teacher_id", nullable = false) 
	private User teacher_id; 
}


