/*
Name: Assignment Of Training
Version: 1.0.0
Description: Smart. Flexible. Beautiful. Employee Management System
Author: Neetish Kumar
Author URI: https://www.facebook.com/neetish2
*/
function Person() {
  this.fullName = "Neetish Kumar";
  this.age = 24;
  this.permanentAddr = "F-1549 5th Avanue Gaur City Gr. Noida(West) 201309";
  this.currentAddr = "C-94c Noida Sector 19 (Near Mother Diary)";
  this.phoneNumber = "+91-991-059-2744";
  this.gender = "Male";
  this.dob = "30-10-1994";
}
function Employee() {
    this.employeeId = "T005S";
    this.salary = 25000;
    this.desig = "Ui Developer";
    this.dept = "Information Techonlogy";
    this.email = "Neetish3b@gmail.com";
    this.salaryUpdate = function(){
        document.write(`<h2>you salary already credit in your account. The amount is <span>${this.salary}</span> </h2>`);
    }
  }
  // function Salary(){
  //   this.hra = 10000;
  //   this.da = 10500;
  //   this.ta = 2000;
  //   this.tds = 2500;
  //   this.toalSala = function(){
  //     this.totalSalary = hra + da + ta + tds;
  //     document.write(`<h2>you salary already credit in your account. The amount is <span>${this.totalSalary}</span> </h2>`);
  // }
  // }
  function Project(){
    this.projectName = "Rectus";
    this.teamSize = 11;
    this.workModule = 5;
    this.expectedTime = "4 Week";
    this.teamLeader = function() {
        document.write(`<h2>You are selected as a Team Leader for <span> ${this.projectName}</span> Project</h2>`);
    }
    this.projectinfo = function(){
        document.write(`<h2>The Team size During this project is <span>${this.teamSize}</span>`);
        document.write(`<h2>The expected time to  given this project is <span>${this.expectedTime}</span>`);
        document.write(`<h2>you have to work on all the given <span>${this.workModule} Module</span>`);
    }
  }
Employee.prototype  = new Person();
Project.prototype = new Person();
var Project1 = new Project();
var employee1 = new Employee();
    document.write(`<h1>Employee Infomation</h1>`)
    document.write(`<h2>The Name of Employee is <span>${employee1.fullName}</span></h2>`);
    document.write(`<h2>The Age of Employee is <span>${employee1.age}</span></h2>`);
    document.write(`<h2>The Permanent Address of Employee is <span>${employee1.permanentAddr}</span></h2>`);
    document.write(`<h2>The Current Address of Employee is <span>${employee1.currentAddr}</span></h2>`);
    document.write(`<h2>The Phone Number of Employee is <span>${employee1.phoneNumber}</span></h2>`);
    document.write(`<h2>The gender of Employee is <span>${employee1.gender}</span></h2>`);
    document.write(`<h2>The Date of Birth address of Employee is <span>${employee1.dob}</span></h2>`);
    document.write(`<h2>The Employee Id of Employee is <span>${employee1.employeeId}</span></h2>`);
    document.write(`<h2>The Salary of Employee is <span>${employee1.salary}</span></h2>`);
    document.write(`<h2>The Designation of Employee is <span>${employee1.desig}</span></h2>`);
    document.write(`<h2>The Department of Employee is <span>${employee1.dept}</span></h2>`);
    document.write(`<h2>The Email ID of Employee is <span>${employee1.email}</span></h2>`);
    document.write(`<h1>Employee Salary Update Infomation</h1>`);
    employee1.salaryUpdate();
    document.write(`<h1>Employee Project Releated Infomation</h1>`);
    Project1.teamLeader();
    Project1.projectinfo();
    // Salary.totalSalary();
  





