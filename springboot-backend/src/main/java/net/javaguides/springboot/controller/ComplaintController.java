package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Complaint;
import net.javaguides.springboot.repository.ComplainRepository;;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ComplaintController {

	@Autowired
	private ComplainRepository complainRepository;
	
	// get all employees
	@GetMapping("/complains")
	public List<Complaint> getAllComplains(){
		return complainRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/complains")
	public Complaint createComplaint(@RequestBody Complaint complaint) {
		return complainRepository.save(complaint);
	}
	
	// get employee by id rest api
	@GetMapping("/complains/{id}")
	public ResponseEntity<Complaint> getEmployeeById(@PathVariable Long id) {
		Complaint complaint = complainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(complaint);
	}
	
	// update employee rest api
	
	@PutMapping("/complains/{id}")
	public ResponseEntity<Complaint> updateComplaint(@PathVariable Long id, @RequestBody Complaint complaintDetails){
		Complaint complaint = complainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		complaint.setComplainName(complaintDetails.getComplainName());
		complaint.setComplainDescription(complaintDetails.getComplainDescription());
		complaint.setComplainType(complaintDetails.getComplainType());
		complaint.setComplainPinCode(complaintDetails.getComplainPinCode());
		complaint.setComplainStatus(complaintDetails.getComplainStatus());
		Complaint updatedComplaint= complainRepository.save(complaint);
//		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedComplaint);
	}
	
	// delete employee rest api
	@DeleteMapping("/complains/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Complaint complaint = complainRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		complainRepository.delete(complaint);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
