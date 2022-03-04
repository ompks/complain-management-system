package net.javaguides.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	Optional<Employee> findByEmailId(String x);
	
    Optional<Employee> findByEmailIdAndPassword(String emailId, String password);
////    Optional<Employee> findByUsername(String username);
//    Boolean existsByUsername(String emailId);
//    Boolean existsByEmail(String emailId);

}
