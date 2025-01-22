let form = document.getElementById('form');
let nameInput = document.getElementById('name');
let ageInput = document.getElementById('age');
let telInput = document.getElementById('tel');
let monthInput = document.getElementById('month');
let table = document.getElementById('table').querySelector('tbody');
let data = [];

document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); 
    let isValid = true;

    let name = nameInput.value.trim();
    let age = ageInput.value.trim();
    let phone = telInput.value.trim();
    let month = monthInput.value.trim();
    let radio = document.querySelector('input[name="fav_language"]:checked');

    let nameError = document.getElementById('name-eror');
    let ageError = document.getElementById('eror');
    let phoneError = document.getElementById('tel-eror');
    let monthError = document.getElementById('month-eror');
    let radioError = document.getElementById('radio-eror');

    if (!name) {
        nameError.textContent = 'Name kiriting';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!age || isNaN(age)) {
        ageError.textContent = 'Yoshingizni kiriting (faqat raqam)';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    if (!phone || phone.length < 9 || !phone.startsWith('+998')) {
        phoneError.textContent = 'To‘g‘ri telefon raqamini kiriting';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    if (!month) {
        monthError.textContent = 'Oy tanlang';
        isValid = false;
    } else {
        monthError.textContent = '';
    }

    if (!radio) {
        radioError.textContent = 'Jinsni tanlang';
        isValid = false;
    } else {
        radioError.textContent = '';
    }

    if (isValid) {
        let userObj = {
            name: name,
            age: age,
            phone: phone,
            month: month,
            gender: radio.value,
        };

        data.push(userObj);

        table.innerHTML = '';
        data.forEach((value) => {
            let row = `
            <tr>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td>${value.phone}</td>
                <td>${value.month}</td>
                <td>${value.gender}</td>
            </tr>
            `;
            table.innerHTML += row;
        });

        form.reset();
    }
});













localStorage.setItem("data", JSON.stringify(data));


(function (){
    data = JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data"))
    : [];

    console.log(data);
    
    readuser()
})()


