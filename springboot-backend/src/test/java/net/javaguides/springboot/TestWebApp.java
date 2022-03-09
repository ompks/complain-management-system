package net.javaguides.springboot;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

public class TestWebApp extends SpringbootBackendApplicationTests {

	@Autowired
	private WebApplicationContext webApplicationContext;
	
	private MockMvc mockMvc;
	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
	}
	
	@Test
	public void testEmployee() throws Exception {
		mockMvc.perform(get("http://localhost:8080/api/v1/employees/35")).andExpect(status().isOk())
				.andExpect(content().contentType("application/json"))
				.andExpect(jsonPath("$.firstName").value("Om")).andExpect(jsonPath("$.lastName").value("Prakash"))
				.andExpect(jsonPath("$.emailId").value("ompks95@gmail.com")).andExpect(jsonPath("$.password").value("1234"));

	}
	
	@Test
	public void testEmployee2() throws Exception {
		mockMvc.perform(get("http://localhost:8080/api/v1/employees/39")).andExpect(status().isOk())
				.andExpect(content().contentType("application/json"))
				.andExpect(jsonPath("$.firstName").value("vivek")).andExpect(jsonPath("$.lastName").value("ranjan"))
				.andExpect(jsonPath("$.emailId").value("test@gmail.com")).andExpect(jsonPath("$.password").value("1234"));

	}
}
