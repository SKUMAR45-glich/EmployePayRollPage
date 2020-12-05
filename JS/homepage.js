window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img class="profile" alt="" src="../Assest/Profile(2).jpg">
        </td>
        <td>Saurabh Kumar</td>
        <td>Male</td>
        <td>
            <div class="dept-label">Engineer</div>
            <div class="dept-label">Senior Analyst</div>
        </td>
        <td>50000</td>
        <td>18 September 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../Assest/delete.jpg" width="50px" height="50px">
            <img id="1" onclick="update(this)" alt="update" src="../Assest/update.png" width="50px" height="50px">
        </td>
    </tr>`;
    document.querySelector('#display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _id: new Date().getTime(),
            _name: "Saurabh Kumar",
            _salary: "₹ 50000", 
            _gender: "Male",
            _department: ["Engineer","Senior Analyst"],
            _notes: "Virat Kohli",
            _profile: "../Assest/Profile(3).png",
            _startDate: "18/09/2018, 12:00:00 AM"
        },
        {
            _id: new Date().getTime() + 1,
            _name: "Ganju", 
            _salary: "₹ 50000",
            _gender: "Male",
            _department: ["Engineer", "Sales"],
            _notes: "Wingmate",
            _profile: "../Assest/Profile(4).png",
            _startDate: "10/08/2019, 12:00:00 AM"
        }
    ];
    return employeePayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}