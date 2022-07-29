INSERT INTO department
  (name)
VALUES
  ('Accounting'),
  ('Tech'),
  ('HR')
  
INSERT INTO roles
  (title, salary,department_id)
VALUES
  ('Accountant',40000.0,1),
  ('Comptroller',80000.0,1),
  ('CFO',12000.0,1),
  ('IT Professional',50000.0,2),
  ('Engineer',60000.0,2),
  ('Senior Engineer',75000.0,2),
  ('Recruiter',40000.0,3)
INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Dawson', 'Till', 4, 1),
  ('Virginia', 'Woolf', 6, NULL),
  ('Piers', 'Gaveston', 6, NULL),
  ('Charles', 'LeRoi', 2, NULL),
  ('Katherine', 'Li', 1, 4),
  ('Dora', 'Carrington', 1, 4),
  ('Edward', 'Bellamy', 3, NULL),
  ('Montague', 'Summers', 0, 4),
  ('Octavia', 'Butler', 6, NULL),
 
  