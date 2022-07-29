//import db from '../db/connection.js';
import table from 'console.table';

import mysql from 'mysql2';
//makes connections
const db = mysql.createConnection({
  host: 'localhost',
  
  user: 'root',
  
  password: 'DTet789t',
  database: 'departments'
});

//selects departments
let getDept = function() {
   
    const sql = `SELECT * FROM department`;


db.query(sql, (err, result) => {
    console.table(result);
    return result;
    
  });
  
  
};
// selects roles
let getRole = function() {
    const sql = `SELECT * FROM roles`;
    
    
    db.query(sql, (err, result) => {
        console.table(result);
        return result;
        
      });
     
    };
//selects employees
let getEmployee = function() {
    const sql = `SELECT * FROM employee`;
    
    
    db.query(sql, (err, result) => {
        console.table(result);
        return result;
        
      });
      
    };
    // takes input from app file and inserts into database
let addEmployee = function(first,last,role,manager){
    const sql = `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES (?,?,?,?)`;
    const params = [first, last,role,manager];
  
    db.query(sql, params, (err, result) => {
        console.table(result);
        return result;
        
    });
    
};
//takes info from role and inserts in to database
let addRole = function(name,salary,dept){
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  const params = [name,salary,dept];

    db.query(sql, params, (err, result) => {
    console.table(result);
    
  });
 
};
// makes new department
let addDept = function(name){
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [name];
  
    db.query(sql, params, (err, result) => {
    console.table(result);
    return result;
    });
  };
//updates employee
let putEmployee = function(emp_id,role_id){
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  const params = [role_id, emp_id];

db.query(sql, params, (err, result) => {
    console.table(result);
    return result;
})

};
export {db,getDept,getRole,getEmployee,addEmployee,addRole,addDept,putEmployee};



