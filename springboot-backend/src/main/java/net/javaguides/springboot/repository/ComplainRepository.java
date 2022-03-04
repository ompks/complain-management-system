package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Complaint;

public interface ComplainRepository extends JpaRepository<Complaint, Long>{

}
