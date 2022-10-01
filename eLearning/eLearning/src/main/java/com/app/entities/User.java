package com.app.entities;

import java.beans.Transient;
import java.time.LocalDate;
import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity

@Table(name="user_tbl",uniqueConstraints = @UniqueConstraint(columnNames = {"first_name","last_name"} ))
@ToString(exclude = {"password","confirmPassword"})
@NoArgsConstructor
@Getter
@Setter

public class User extends BaseEntity{
	@Column(length = 20,name="first_name")
	private String firstName;
	@Column(length = 20,name="last_name")
	private String lastName;
	@Column(length = 20,unique = true)
	private String email;
	@Column(length = 20)
	private String password;
	private transient String confirmPassword;
	private LocalDate dob;
	
    private String role;

	
	public User(String firstName, String lastName, String email, String password, LocalDate dob, String role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.role = role;
	}

	

}
