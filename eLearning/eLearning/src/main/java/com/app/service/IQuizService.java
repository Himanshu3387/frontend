package com.app.service;

import java.util.List;

import com.app.dto.QuizDTO;
import com.app.entities.Quiz;

public interface IQuizService {
	Quiz addQuiz(QuizDTO quiz);
	List<Quiz> showQuiz();
}
