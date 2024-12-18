document.getElementById('regForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Остановить стандартное поведение формы

    const formData = new FormData(e.target);
    //const data = Object.fromEntries(formData.entries());
    const date = {
        "email": "john.doe@example.com",
        "password": "securepassword",
        "name": "John",
        "surname": "Doe",
        "phone": 123456789
    }

    console.log(JSON.stringify(date))
    
    try {
        let response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(date),
            
            
        });
        

        // Получаем тело ответа
        const result = await response.json();
        console.log(result)
        // if (response.ok) {
        //     // Проверяем содержимое успешного ответа
        //     if (result.success) {
        //         alert('Регистрация успешна: ' + result.message);
        //     } else {
        //         alert('Ошибка регистрации: ' + (result.message || 'Неизвестная ошибка'));
        //     }
        // } else {
        //     // Обработка ошибки HTTP
        //     alert('Ошибка HTTP: ' + (result.message || 'Неизвестная ошибка'));
        // }
    } catch (err) {
        console.error('Ошибка подключения:', err);
        alert('Произошла ошибка при подключении к серверу.');
    }
});