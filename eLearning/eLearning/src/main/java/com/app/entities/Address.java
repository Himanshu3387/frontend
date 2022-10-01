package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//addrLine1, addrLine2,city,state country,zipCode
@Entity
@Table(name="address_tbl")
@Getter
@Setter
@NoArgsConstructor
@ToString(exclude = "owner")
public class Address extends BaseEntity{
	@Column(name="address_line1",length = 50)
	@NotBlank(message = "address can't be null")
	private String addressLine1;
	@Column(name="address_line2",length = 50)
	@NotBlank(message = "address can't be null")
	private String addressLine2;
	@Column(length = 20)
	private String  city;
	@Column(length = 20)
	private String state;
	@Column(length = 20)
	private String country;
	
	@Column(name="zip_code",length = 20)
	private String zipCode;
	@Size(min=10,max=10)
	@NotBlank(message = "phone number can't be null")
	private String phoneNo;
	//additional mapping property for uni dir one-to-one : User  1<----1 Address
	@OneToOne(fetch = FetchType.LAZY) //mandatory : def fetch type : EAGER /LAZY
	@JoinColumn(name="user_id",nullable = false)//optional
	@MapsId //to tell hibernate to use shared PK approach
	private User owner;
	
//	public Address() {
//		// TODO Auto-generated constructor stub
//	}

	public Address(String addressLine1, String addressLine2, String city, String state, String country,
			String zipCode,String phoneNo) {
		super();
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zipCode = zipCode;
		this.phoneNo=phoneNo;
	}



}
