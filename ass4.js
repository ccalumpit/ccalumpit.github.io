let employeeCount = 0;

function addEmployee() {
  const name = document.getElementById('name').value;
  const daysWorked = parseInt(document.getElementById('daysWorked').value);
  const dailyRate = parseFloat(document.getElementById('dailyRate').value);
  const deduction = parseFloat(document.getElementById('deduction').value);

  const grossPay = daysWorked * dailyRate;
  const netPay = grossPay - deduction;

  employeeCount++;

  const table = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${employeeCount}</td>
    <td>${name}</td>
    <td>${daysWorked}</td>
    <td>${dailyRate.toFixed(2)}</td>
    <td>${grossPay.toFixed(2)}</td>
    <td>${deduction.toFixed(2)}</td>
    <td>${netPay.toFixed(2)}</td>
    <td><button onclick="deleteEmployee(this)">Delete</button></td>
  `;

  document.getElementById('payrollForm').reset();
}

function deleteEmployee(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  const table = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerText = i + 1;
  }

  employeeCount--;
}