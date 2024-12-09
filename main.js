const form = document.getElementById('signup')
const names = [];
const phone = [];

let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLine();
    updateTable();
})

function addLine() {
    const inputName = document.getElementById('input-name');
    const inputPhone = document.getElementById('input-phone');

    if (names.includes(inputName.value)) {
        alert(`You're already registered!`)
    } else {
        names.push(inputName.value);
        phone.push(parseFloat(inputPhone.value));

        let phoneRow = '<tr>';
        phoneRow += `<td>${inputName.value}</td>`;
        phoneRow += `<td>${inputPhone.value}</td>`;
        phoneRow += '</tr>'

        rows += phoneRow;

        inputName.value = '';
        inputPhone.value = '';
    }
}

function updateTable() {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = rows;
}