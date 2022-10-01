package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.TutorialDTO;
import com.app.entities.Tutorial;

public interface ITutorialService {
	String getTutNamesByTopic(long courseId);
	List<Tutorial> getTutorialsList(String courseName);
	Tutorial addTutorial(TutorialDTO tut);
}
