    let form = document.getElementById("form")
    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let tel = document.getElementById("tel")
    let btn = document.getElementById("btn")
    let eror = document.getElementById("eror")
    let table = document.getElementById("table")

    let data = [];


btn.addEventListener("click",function(event) {
    event.preventDefault();

    let userobj = {
        name:name.value,
        age:age.value,
        phone:tel.value,
        
    };

    data.push(userobj);

    console.log(data);
    
    data.forEach(function (value){
        table.innerHTML = `
        <tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.phone}</td>
      </tr>
        `
    })
}  )


document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); 
    let isValid = true;


    const name = document.getElementById('name').value;
    const nameError = document.getElementById('name-eror');
    if (!name.trim()) {
        nameError.textContent = 'Name kiriting';
        isValid = false;
    } else {
        nameError.textContent = '';
    }


    let age = document.getElementById('age').value;
    let ageError = document.getElementById('eror');
    if (!age.trim()) {
        ageError.textContent = 'Age kiriting';
        ageError.style.color = 'red';
        isValid = false;
    } else {
        ageError.textContent = '';
    }


    let phone = document.getElementById('tel').value;
    let phoneError = document.getElementById('tel-eror');
    if (!phone.trim() || phone === '+998') {
        phoneError.textContent = 'Telefon raqam kiriting';
        phoneError.style.color = 'red';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }

    const month = document.getElementById('month').value;
    const monthError = document.getElementById('month-eror');
    if (!month.trim()) {
        monthError.textContent = 'Oy tanlang';
        monthError.style.color = 'red';
        isValid = false;
    } else {
        monthError.textContent = '';
    }

    const radio = document.querySelector('input[name="fav_language"]:checked');
    const radioError = document.getElementById('radio-eror');
    if (!radio) {
        radioError.textContent = 'Jinsni tanlang';
        isValid = false;
    } else {
        genderError.textContent = '';
    }
   
});


