//const jsonData = JSON.parse(json)

// Example data (if you want to avoid external JSON file)
const jsonData = [
    {
        "id": "1",
        "status": "в обработке",
        "name": "Алексей",
        "number": "88005553535",
        "pets": "Змея (ядовитая)",
        "id_serv": "7.4",
        "address": "Москва, Кремль",
        "begin": "04.02.2006",
        "end": "15.12.2024"
    },
    {
        "id": "2",
        "status": "отказано",
        "name": "Георгий",
        "number": "89152784556",
        "pets": "Сырный латте",
        "id_serv": "4.4",
        "address": "Отель",
        "begin": "12.02.2022",
        "end": "22.03.2022"
    },
    {
        "id": "3",
        "status": "успешно",
        "name": "Кирилл",
        "number": "89892455656",
        "pets": "Кот",
        "id_serv": "4.9",
        "address": "Москва, общежитие 6",
        "begin": "01.09.2023",
        "end": "28.06.2027"
    },
    {
        "id": "4",
        "status": "отказано",
        "name": "Сармат",
        "number": "89892455656",
        "pets": "Вилоцераптор",
        "id_serv": "2.6",
        "address": "Москва, общежитие а111а",
        "begin": "21.09.2073",
        "end": "28.06.2077"
    },
    {
        "id": "5",
        "status": "в обработке",
        "name": "Никита",
        "number": "89152785656",
        "pets": "Собака",
        "id_serv": "12.6",
        "address": "Отель",
        "begin": "04.02.2006",
        "end": "15.12.2024"
    }
];


async function loadTableData(jsonURL=null, jsonData=null)
{
    let data;
    if(jsonURL){
        try {
            const response = await fetch(jsonURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            data = await response.json();
        } catch (error) {
            console.error("Ошибка:", error);
            return;
        }
    }
    else if(jsonData){
        data = jsonData;
    }

    if(!data)
    {
        alert("No valid json URL or data provided")
        console.log("No valid json URL or data provided")
        return;
    }

    const table = document.getElementById('reqTable');
    const headers = Object.keys(data[0]);

    
    data.forEach(item => {
        const row = document.createElement('tr');
        
        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = item[header];
            if(item[header] == 'отказано'){
                row.classList.add('reject');
            }
            if(item[header] == 'успешно'){
                row.classList.add('success');
            }
            if(item[header] == 'в обработке'){
                row.classList.add('inprocess');
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

loadTableData(null, jsonData);