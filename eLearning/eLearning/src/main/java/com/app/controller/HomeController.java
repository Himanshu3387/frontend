package com.app.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
public class HomeController {
	@RequestMapping("/home")
	public String showHomePage()
	{
		System.out.println("in show home page");
		return "in home page";
	}
}
