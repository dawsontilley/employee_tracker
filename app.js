

import inquirer from 'inquirer';
import {db,getDept,getRole,getEmployee,addEmployee,addRole,addDept,putEmployee} from './Query/query.js';




const promptUser = inputData =>{
  inquirer.prompt([
    {
    type: 'list',
    name:'firstChoice',
    message:'Select one of the following options:',
    choices:[
      'View Departments',
      'View Roles',
      'View Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'

    ],
    default:0
    }
  ]).then((value)=>{
    switch(value.firstChoice){
      case'View Departments':
      getDept();
      promptUser();
      
      
      break;
      case 'View Roles':
      getRole();
      promptUser();
      break;
      case'View Employees':
      getEmployee();
      promptUser();
      break;
      case 'Add Department':
      promptDept().then((val)=>promptUser())
      //repeatMenu();
      break;
      case 'Add Role':
      promptRole().then((val)=>promptUser());
      //repeatMenu();
      break;
      case 'Add Employee':
      promptEmployee().then((val)=>promptUser());
      //repeatMenu();
      break;
      case 'Update Employee Role':
      promptUpdate().then((val)=>promptUser());
      
      break;
      case 'Exit':
      console.log('Exiting');
      if (db.connection){
      db.end();}
      process.kill(process.pid,'SIGTERM');
      break;

    
    
    }
    }
    
    
    );
}
const repeatMenu = repeatVal=>{
  inquirer.prompt([
    {type: 'list',
    name:'redo',
    message:'Would you like to see the options again?',
    choices:['yes','no'],
    default:0
}


  ]).then((value)=>{
    switch(value.firstChoice){
      case'yes':
      promptUser();
      break;
     
      case 'no':
      console.log('Exiting');
      process.kill(process.pid,'SIGTERM');
      break;
      
    }
    }
    
    
    );
}

const promptDept = deptData =>{
  return inquirer.prompt([
    {type: 'input',
     name: 'deptname',
     message:'Enter a new Department Name'

    }
  ]).then((deptData)=>
  addDept(deptData.deptname)).then((val)=>repeatMenu());
}

const promptRole = roleData =>{
  return inquirer.prompt([
    {type: 'input',
     name: 'name',
     message:'Enter the roles name'

    },
    {
      type:'input',
      name: 'salary',
     message:'Enter the roles salary'

    },
    {type:'input',
    name: 'dept',
   message:'Enter the roles dept_id'
  }

  ]).then((roleData)=>
  addRole(roleData.name,roleData.salary,roleData.dept)).then((val)=>repeatMenu());
  
}

const promptEmployee = empData =>{
  return inquirer.prompt([
    {type: 'input',
     name: 'firstName',
     message:'Enter the employees first name'

    },
    {
      type:'input',
      name: 'lastName',
     message:'Enter the employees last name'

    },
    {type:'input',
    name: 'role',
   message:'Enter the employees role id'
  },{
    type:'input',
    name: 'manager',
   message:'Enter the employees manager id'
  }

  ]).then((empData)=>
  addEmployee(empData.firstName,empData.lastName,empData.role,empData.manager)).then((val)=>repeatMenu());
  
}

const promptUpdate = param =>{
  return inquirer.prompt([
    {
      type:'input',
    name: 'emp_id',
   message:'Enter the employees id that you wish to update.'
    },{
      type:'input',
    name: 'nRole',
   message:'Enter the employees new Role by ID number.'
    }

  ]).then((roleUpdate)=>
  putEmployee(roleUpdate.emp_id,roleUpdate.nRole)).then((val)=>repeatMenu());
  

}

promptUser();
/*
promptUser.then((value)=>{
switch(value.firstChoice){
  case'View Departments':
  getDept();
  break;
  case 'View Roles':
  getRole();
  break;
  case'View Employees':
  getEmployee();
  break;
  case 'Add Department':
  promptDept();
  break;
  case 'Add Role':
  promptRole();
  break;
  case 'Add Employee':
  promptEmployee();
  break;
  case 'Update Employee Role':
  promptUpdate();
  break;


}
}


)
*/

