fetch('test.json')
    .then(response => response.json())
    .then(data => {
        const element = document.querySelector('pre');

        console.log(JSON.stringify(data, null, '\t'));
    });