window.addEventListener('DOMContentLoaded' , (event)=> {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('#name-error');

    name.addEventListener('input', function () {
    if(name.value.length == 0)
    {
        nameError.textContent = "";
        return;
    }
    try{
        (new PayrollModel()).name = name.value;
        nameError.textContent = "";
    }
    catch(e){
        nameError.textContent = e
    }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});
function save(){
    try{    
        createEmployeePayroll();
    }
    catch(e)
    {
        alert(e);
        return;
    }
}
let empPayroll = [];
function createEmployeePayroll()
{
    
    let payRollDetail = new PayRollDetails();
    payRollDetail.name = getInputValueById('#name');
    payRollDetail.profile = getSelectedValues('[name = profile]').pop();
    payRollDetail.gender = getSelectedValues('[name=gender]').pop();
    payRollDetail.department = getSelectedValues('[name=department]');
    payRollDetail.salary = getInputValueById('#salary');
    payRollDetail.note = getInputValueById('#notes');
    let date = getInputValueById('#year') + "-"+ getInputValueById('#month') + "/" + getInputValueById('#day');
    payRollDetail.startDate = new Date(date);
    empPayroll.push(payRollDetail)
    alert("Your entry is successfully done");
    alert(empPayroll);
}
function getSelectedValues(attribute)
{
    let allItems = document.querySelectorAll(attribute);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked)
        selItems.push(item.value);
    });
    return selItems;
}
function getInputValueById(id){
    let value = document.querySelector(id).value;
    return value;
}
function save(){
    try{    
        let employeepayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeepayrollData);
    }
    catch(e)
    {
        alert(e);
        return;
    }
}
function createAndUpdateStorage(employeepayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined)
        employeePayrollList.push(employeepayrollData);
    else
        employeePayrollList = [employeepayrollData];
    
    alert("Added Object to the local Storage" + employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}

const resetForm = () => {
    document.querySelector("#name").value = "";
    unsetSelectedValues("[name=profile]");
    unsetSelectedValues("[name=gender]");
    unsetSelectedValues("[name=department]");
    document.querySelector(".salary-output").textContent=400000;
    document.querySelector("#day").value = 01;
    document.querySelector("#month").value = 01;
    document.querySelector("#year").value = 2020;
    document.querySelector("#notes").value= "";
    document.querySelector(".date-error").textContent = "";
}

const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item=>{
        item.checked = false;
    });
}