package com.project.ems.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.ems.model.Employee;

@Repository
public interface EmployeeRepository<P> extends CrudRepository<Employee, Integer> {
	List<Employee> findByCompanyId(int id);
	
	@Query("select avg(e.salary) from Employee e where e.company.id=?1")
    Double findAvgSalaryByCompany(int id);
}
