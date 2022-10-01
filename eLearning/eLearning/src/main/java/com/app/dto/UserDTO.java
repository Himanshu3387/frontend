package com.app.dto;

import java.time.LocalDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


//This DTO will be used as request DTO for emp registration , updation(POST / PUT)
//SAME DTO can be used as response DTO for login resp as well as reg / updation resp
@Getter
@Setter
@ToString(exclude = "password")
public class UserDTO {
	
	@NotBlank(message = "First Name must be supplied")
	@Length(min = 5,max=20,message = "Invalid length of chars for  first name")
	private String firstName;// firstName
	
	@NotBlank(message = "Last Name must be supplied")
	private String lastName;
	
	@NotBlank(message = "Email must be supplied ...")
	@Email(message = "Invalid Email Format")
	private String email;
	
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid password")
	//password should it added during :1.  serialization(java->json) 2. de- serialization(json-->java) 
	//Ans : 2
	@JsonProperty(access =Access.WRITE_ONLY)
	
	private String password;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;
	//@Enumerated(EnumType.STRING)
	private String role;

}
