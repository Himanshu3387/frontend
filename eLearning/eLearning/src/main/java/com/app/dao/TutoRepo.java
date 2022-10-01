package com.app.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.entities.Tutorial;

public interface TutoRepo extends JpaRepository<com.app.entities.Tutorial, Long> 
{
	//@Query("select e from Employee e join e.dept d where d.id=:id")
	@Query("select t.tutName from Tutorial t join t.selectedCourse tp where tp.id=:id")
	List<Tutorial> findByCourse(@Param(value = "id") long selectedCourse);
	Optional<Tutorial> findByTutName(String tutName);
	@Query("select t.tutName from Tutorial t join t.selectedCourse tp where tp.id=?1")
	String findTutNamesByCourseId(long courseId);
	
}
