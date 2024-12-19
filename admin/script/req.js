//const jsonData = JSON.parse(json)

// Example data (if you want to avoid external JSON file)
const jsonData = [
    {
        "id": "1",
        "status": "в обработке",
        "name": "Алексей Д.В.",
        "number": "88005553535",
        "pets": "Змея (питон)",
        "id_serv": "21",
        "address": "Москва, ул. Трактовая, 24, кв. 43",
        "begin": "04.02.2024",
        "end": "15.06.2024"
    },
    {
        "id": "2",
        "status": "отказано",
        "name": "Георгий К.В.",
        "number": "89152784556",
        "pets": "Кошка (сфинкс)",
        "id_serv": "44",
        "address": "Омск, ул. Чапаева, 11, кв. 84",
        "begin": "12.02.2023",
        "end": "22.03.2023"
    },
    {
        "id": "3",
        "status": "успешно",
        "name": "Кирилл З.М.",
        "number": "89892455656",
        "pets": "Хомяк (сирийский)",
        "id_serv": "49",
        "address": "Москва, ул. Молодежная, 32, кв. 96",
        "begin": "01.09.2024",
        "end": "28.10.2024"
    },
    {
        "id": "4",
        "status": "отказано",
        "name": "Сармат С.Л.",
        "number": "89892455656",
        "pets": "Попугай (ара)",
        "id_serv": "28",
        "address": "Москва, ул. 8 Марта, 41, кв. 2",
        "begin": "21.04.2024",
        "end": "28.06.2024"
    },
    {
        "id": "5",
        "status": "в обработке",
        "name": "Никита П.Н.",
        "number": "89152785656",
        "pets": "Собака (пудель)",
        "id_serv": "16",
        "address": "Ярославль, ул. Фрунзе, 20, кв. 78",
        "begin": "04.02.2024",
        "end": "15.12.2024"
    },
    {
        "id": "6",
        "status": "успешно",
        "name": "Анна В.С.",
        "number": "89951234567",
        "pets": "Кошка (сиамская)",
        "id_serv": "32",
        "address": "Санкт-Петербург, пр-т Просвещения, 23, кв. 45",
        "begin": "10.05.2024",
        "end": "25.07.2024"
    },
    {
        "id": "7",
        "status": "в обработке",
        "name": "Игорь К.М.",
        "number": "89098765432",
        "pets": "Хомяк (сирийский)",
        "id_serv": "18",
        "address": "Нижний Новгород, ул. Белинского, 11, кв. 9",
        "begin": "01.03.2024",
        "end": "30.09.2024"
    },
    {
        "id": "8",
        "status": "успешно",
        "name": "Елена Р.Д.",
        "number": "89212345678",
        "pets": "Рыбки (гуппи)",
        "id_serv": "24",
        "address": "Казань, ул. Пушкина, 55, кв. 3",
        "begin": "17.08.2024",
        "end": "31.10.2024"
    },
    {
        "id": "9",
        "status": "отказано",
        "name": "Дмитрий А.В.",
        "number": "89332109876",
        "pets": "Птица (канарейка)",
        "id_serv": "19",
        "address": "Новосибирск, ул. Ленина, 89, кв. 1",
        "begin": "15.06.2024",
        "end": "14.08.2024"
    },
    {
        "id": "10",
        "status": "в обработке",
        "name": "Ольга Ю.И.",
        "number": "89776543210",
        "pets": "Морская свинка",
        "id_serv": "27",
        "address": "Краснодар, ул. Красная, 100, кв. 12",
        "begin": "22.10.2024",
        "end": "29.12.2024"
    }

];


async function loadTableData(jsonURL = null, jsonData = null) {
    let data;
    if (jsonURL) {
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
    else if (jsonData) {
        data = jsonData;
    }

    if (!data) {
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
            if (item[header] == 'отказано') {
                row.classList.add('reject');
            }
            if (item[header] == 'успешно') {
                row.classList.add('success');
            }
            if (item[header] == 'в обработке') {
                row.classList.add('inprocess');
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

loadTableData(null, jsonData);