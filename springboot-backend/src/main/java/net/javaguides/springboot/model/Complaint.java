package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "complaint")
public class Complaint {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "complain_name")
	private String complainName;

	@Column(name = "complain_description")
	private String complainDescription;

	@Column(name = "complain_type")
	private String complainType;

	@Column(name = "complain_pin_code")
	private String complainPinCode;

	@Column(name = "complain_status")
	private String complainStatus;

	@Column(name = "assigned_to")
	private String assignedTo;

	@Column(name = "raised_by")
	private String raisedBy;

	public Complaint() {

	}

	public Complaint(String complainName, String complainDescription, String complainType, String complainPinCode,
			String complainStatus, String assignedTo, String raisedBy) {
		super();
		this.complainName = complainName;
		this.complainDescription = complainDescription;
		this.complainType = complainType;
		this.complainPinCode = complainPinCode;
		this.complainStatus = complainStatus;
		this.assignedTo = assignedTo;
		this.raisedBy = raisedBy;
	}

	public String getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

	public String getRaisedBy() {
		return raisedBy;
	}

	public void setRaisedBy(String raisedBy) {
		this.raisedBy = raisedBy;
	}

	public String getComplainStatus() {
		return complainStatus;
	}

	public void setComplainStatus(String complainStatus) {
		this.complainStatus = complainStatus;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getComplainName() {
		return complainName;
	}

	public void setComplainName(String complainName) {
		this.complainName = complainName;
	}

	public String getComplainDescription() {
		return complainDescription;
	}

	public void setComplainDescription(String complainDescription) {
		this.complainDescription = complainDescription;
	}

	public String getComplainType() {
		return complainType;
	}

	public void setComplainType(String complainType) {
		this.complainType = complainType;
	}

	public String getComplainPinCode() {
		return complainPinCode;
	}

	public void setComplainPinCode(String complainPinCode) {
		this.complainPinCode = complainPinCode;
	}

}
