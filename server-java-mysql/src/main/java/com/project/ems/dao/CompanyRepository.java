package com.project.ems.dao;

import org.springframework.data.repository.CrudRepository;

import com.project.ems.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends CrudRepository<Company,Integer> {

}
