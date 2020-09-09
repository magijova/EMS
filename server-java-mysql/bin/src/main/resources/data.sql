DROP TABLE COMPANY;
commit;
DROP TABLE EMPLOYEE;
commit;
CREATE TABLE COMPANY (COMPANY_ID INT AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(255)NOT NULL);
commit;

INSERT INTO COMPANY(COMPANY_ID,NAME) values (1,'Deutsche Bahn');
commit;

CREATE TABLE EMPLOYEE(EMPLOYEE_ID INT AUTO_INCREMENT PRIMARY KEY,COMPANY_ID INT,NAME VARCHAR(255) NOT NULL,SURNAME VARCHAR(255),EMAIL VARCHAR(255) NOT NULL,ADDRESS VARCHAR(255),SALARY DECIMAL, FOREIGN KEY (COMPANY_ID) REFERENCES COMPANY(COMPANY_ID));
commit;

    
INSERT INTO EMPLOYEE ( NAME,SURNAME, EMAIL, ADDRESS, SALARY, COMPANY_ID) VALUES ('Santa Clause', 'Xmas', 'santa@xmas.com', 'High in the sky, Frankfurt','15000',1);
commit;