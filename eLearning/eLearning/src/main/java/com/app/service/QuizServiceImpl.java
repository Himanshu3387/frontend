package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.QuizRepo;
import com.app.dao.UserRepository;
import com.app.dto.QuizDTO;
import com.app.dto.ScheduleDTO;
import com.app.entities.Quiz;
import com.app.entities.Schedule;
import com.app.entities.User;

@Service
@Transactional
public class QuizServiceImpl implements IQuizService{
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private QuizRepo quizRepo;
	@Autowired
	private ModelMapper mapper;

	@Override
	public Quiz addQuiz(QuizDTO q) 
	{
			User t=userRepo.findById(q.getTeacher()).orElseThrow(()->new ResourceNotFoundException("Invalid teacher id"));
			User s=userRepo.findById(q.getStudent()).orElseThrow(()->new ResourceNotFoundException("Invalid student id"));
			Quiz quiz = mapper.map(q, Quiz.class);
			quiz.setTeacher(t);
			quiz.setStudent(s);
			return quizRepo.save(quiz);
	}

	@Override
	public List<Quiz> showQuiz() {
		
		return quizRepo.findAll();
	}
}
