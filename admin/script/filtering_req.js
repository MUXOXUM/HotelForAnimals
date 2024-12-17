const filterBtnAll = document.getElementById('filterA');
const filterBtnTextAll = document.getElementById('filterTextA');

const filterBtnSuccsess = document.getElementById('filterS');
const filterBtnTextSuccsess = document.getElementById('filterTextS');

const filterBtnReject = document.getElementById('filterR');
const filterBtnTextReject = document.getElementById('filterTextR');

const filterBtnProcess = document.getElementById('filterI');
const filterBtnTextProcess = document.getElementById('filterTextI');

document.getElementById('filterToolOn').style.display = 'none';



function toggleVisibility(){
    
    const filterToolOn = document.getElementById('filterToolOn');

    if (filterToolOn) {
        if (filterToolOn.style.display === 'none') {
            filterToolOn.style.display = 'block';
            filterBtnTextAll.textContent = "фильтрация: on"
        } else {
            filterToolOn.style.display = 'none';
            filterBtnTextAll.textContent = "фильтрация: off"
        }
    } else {
        console.log(`Ошибка`);
    }
}


function toggleRows(filterBy) {

    const table = document.getElementById('reqTable');
    const rows = table.querySelectorAll('tr');

    rows.forEach(row => {
        const secondCell = row.cells[1];
        if(filterBy === 'все'){
            row.style.display = '';
        }else if(secondCell && secondCell.textContent.trim() !== filterBy && secondCell.textContent.trim() !== "Статус заявки") {
            row.style.display = 'none';
        }else{
            row.style.display = '';      
        }
        
    });
}




filterBtnAll.addEventListener('click', () => toggleVisibility());
filterBtnAll.addEventListener('click', () => toggleRows('все'));
filterBtnSuccsess.addEventListener('click', () => toggleRows('успешно'));
filterBtnReject.addEventListener('click', () => toggleRows('отказано'));
filterBtnProcess.addEventListener('click', () => toggleRows('в обработке'));
