//import db from '../db/connection.js';
import table from 'console.table';

import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'DTet789t',
  database: 'departments'
});

//async function getDept(){
let getDept = function() {
   /* const depts=await db.getall('SELECT * FROM department');//
    console.table(depts);
    */
    const sql = `SELECT * FROM department`;


db.query(sql, (err, result) => {
    console.table(result);
    return result;
    
  });
  //db.end();
  
};

let getRole = function() {
    const sql = `SELECT * FROM roles`;
    //const params = [req.params.id];
    
    db.query(sql, (err, result) => {
        console.table(result);
        return result;
        
      });
      //db.end();
    };

let getEmployee = function() {
    const sql = `SELECT * FROM employee`;
    //const params = [req.params.id];
    
    db.query(sql, (err, result) => {
        console.table(result);
        return result;
        
      });
      //db.end();
    };
let addEmployee = function(first,last,role,manager){
    const sql = `INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES (?,?,?,?)`;
    const params = [first, last,role,manager];
  
    db.query(sql, params, (err, result) => {
        console.table(result);
        return result;
        
    });
    
};

let addRole = function(name,salary,dept){
  const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
  const params = [name,salary,dept];

    db.query(sql, params, (err, result) => {
    console.table(result);
    
  });
  //db.end();
};

let addDept = function(name){
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [name];
  
    db.query(sql, params, (err, result) => {
    console.table(result);
    return result;
    });
  };

let putEmployee = function(emp_id,role_id){
  const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  const params = [role_id, emp_id];

db.query(sql, params, (err, result) => {
    console.table(result);
    return result;
})
//db.end();
};
export {db,getDept,getRole,getEmployee,addEmployee,addRole,addDept,putEmployee};



