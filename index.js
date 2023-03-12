const employee = {
    name: "Tohil",
    streetAddress: "Rex Ln"
};

 /*function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  };*/


  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee; 
  };
  const newEmployee = updateEmployeeWithKeyAndValue (
    employee,
    "name",
    "Jupiter"
  );
  employee.name;
  newEmployee.name;
  

  function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
  };
  destructivelyUpdateEmployeeWithKeyAndValue (
    employee, 
    "streetAddress",
    "First Ln"
    );
employee.streetAddress;


/* function deleteFromEmployeeByKey(employee, key) {
    const newEmployeE = {...employee} 
    delete newEmployeE.name;
    return newEmployeE
}
deleteFromEmployeeByKey(employee, "name");
employee; */

const newEmployeeUpdate = {...employee};
function deleteFromEmployeeByKey() {
    delete newEmployeeUpdate.name;
    return newEmployeeUpdate;
}
deleteFromEmployeeByKey ();
newEmployeeUpdate;


function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
};
destructivelyDeleteFromEmployeeByKey(employee, "name");
employee;