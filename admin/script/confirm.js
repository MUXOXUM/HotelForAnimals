let selectedRow = null;


function handleRowClick(event) {
    const row = event.target.closest('tr');
    if (row) {
        if (selectedRow) {
            selectedRow.classList.remove('selected'); 
        }
        row.classList.add('selected'); 
        selectedRow = row 
    }
}

function setSuccessful() {
    if (selectedRow) {
        selectedRow.removeAttribute('class');
        selectedRow.classList.add('success');
        selectedRow.cells[1].textContent = 'успешно'; 
        selectedRow = null;
        const highlightedRows = document.querySelectorAll(".selected");
        highlightedRows.forEach(row => row.classList.remove("selected"));
    }
}

function setReject() {
    if (selectedRow) {
        selectedRow.removeAttribute('class');
        selectedRow.classList.add('reject'); 
        selectedRow.cells[1].textContent = 'отказано'; 
        selectedRow = null;
        const highlightedRows = document.querySelectorAll(".selected");
        highlightedRows.forEach(row => row.classList.remove("selected"));
    }
}

const table = document.getElementById('reqTable');
table.addEventListener('click', handleRowClick);


const successButton = document.getElementById('successButton');
successButton.addEventListener('click', setSuccessful);

const rejectButton = document.getElementById('rejectButton');
rejectButton.addEventListener('click', setReject);