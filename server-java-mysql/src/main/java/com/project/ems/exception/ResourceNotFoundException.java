package com.project.ems.exception;

public class ResourceNotFoundException extends Exception{
	
	@Override
	public String getMessage() {
		return "Requested resource not found.";
		
	}

}
