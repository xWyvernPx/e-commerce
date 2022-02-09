CREATE DATABASE University
go

use University
GO

create TABLE professor (
    SSN VARCHAR(10) PRIMARY KEY UNIQUE,
    name nvarchar(100) NOT NULL,
    age int ,
    rank FLOAT,
    research_specialty NVARCHAR(75) NOT NULL
)
GO

CREATE TABLE department (
    department_number int primary KEY ,
    name nvarchar(100) ,
    main_office nvarchar(100),
    chairmain varchar(10) NOT NULL ,
    CONSTRAINT FK_department_professor FOREIGN KEY (chairmain)
    REFERENCES professor(SSN)
)
go
create table project (
    Project_Number int PRIMARY KEY UNIQUE,
    Sponsor_Name NVARCHAR(100),
    starting_date DATE ,
    ending_date DATE,
    budget int ,
    PPI varchar(10) NOT NULL ,
    CONSTRAINT FK_ProjectPPI FOREIGN KEY (PPI) 
    REFERENCES professor(SSN)
)
GO

create table graduate_student (
    SSN VARCHAR(10) PRIMARY KEY ,
 name nvarchar(100) NOT NULL,
    age int ,
    degree_program NVARCHAR(50),
    department_id int NOT NULL, 
    advisor VARCHAR(50) NOT NULL,
    CONSTRAINT FK_Student_Advisor FOREIGN KEY (advisor)
    REFERENCES graduate_student(SSN), 
    CONSTRAINT FK_Student_Department FOREIGN KEY (department_id)
    REFERENCES department(department_number)
)
GO

create table PCI(
    id int IDENTITY PRIMARY KEY ,
    project_id int NOT NULL ,
    professor_ssn VARCHAR(10),
    CONSTRAINT FK_PCI_Project FOREIGN KEY (project_id)
    REFERENCES project(Project_Number),
    CONSTRAINT FK_PCI_Professor FOREIGN KEY (professor_ssn)
    REFERENCES professor(SSN),
)
GO

CREATE TABLE PRA (
    id int IDENTITY PRIMARY KEY ,
    project_id int NOT NULL ,
    student_ssn VARCHAR(10),
    supervisor VARCHAR(10)
    CONSTRAINT FK_PRA_Project FOREIGN KEY (project_id)
    REFERENCES project(Project_Number),
    CONSTRAINT FK_PRA_Student FOREIGN KEY (student_ssn)
    REFERENCES graduate_student(SSN),
    CONSTRAINT FK_PRA_Professor FOREIGN KEY (supervisor)
    REFERENCES professor(SSN),
    
)



create table departmentWorker(
    id int IDENTITY PRIMARY KEY,
    department_id int NOT NULL ,
    professor_ssn VARCHAR(10),
    CONSTRAINT FK_DW_Department FOREIGN KEY (department_id)
    REFERENCES department(department_number),
    CONSTRAINT FK_DW_Professor FOREIGN KEY (professor_ssn)
    REFERENCES professor(SSN),
)