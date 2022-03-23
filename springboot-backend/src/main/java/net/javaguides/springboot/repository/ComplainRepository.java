package net.javaguides.springboot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Complaint;

public interface ComplainRepository extends JpaRepository<Complaint, Long>{
	
    Optional<List> findAllByRaisedBy(String raisedByValue);
    Optional<List> findAllByAssignedTo(String assignedToValue);


}
