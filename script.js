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
    
})();


let deleteBtn = document.getElementById("deleteBtn");
let editBtn = document.getElementById("editBtn");

deleteBtn.addEventListener("click", () => {
  if (confirm("Haqiqatan o'chirmoqchimisiz?")) {
    data = [];
    table.innerHTML = ""; 
    localStorage.removeItem("data");
    alert("Barcha ma'lumotlar o'chirildi.");
  }
});


editBtn.addEventListener("click", () => {
  let editIndex = prompt("Qaysi foydalanuvchini tahrirlashni xohlaysiz? (0 dan boshlab raqam kiriting):");
  if (editIndex !== null && !isNaN(editIndex) && data[editIndex]) {
    
    let user = data[editIndex];
    let newName = prompt("Yangi ismni kiriting:", user.name);
    let newAge = prompt("Yangi yoshni kiriting:", user.age);
    let newPhone = prompt("Yangi telefonni kiriting:", user.phone);
    let newMonth = prompt("Yangi oyning nomini kiriting:", user.month);
    let newGender = prompt("Yangi jinsni kiriting (Erkak/Ayol):", user.gender);

    if (newName && newAge && newPhone && newMonth && newGender) {

      data[editIndex] = {
        name: newName,
        age: newAge,
        phone: newPhone,
        month: newMonth,
        gender: newGender,
      };

 
      table.innerHTML = "";
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

      
      localStorage.setItem("data", JSON.stringify(data));
      alert("Ma'lumot muvaffaqiyatli yangilandi!");
    } else {
      alert("Tahrirlash bekor qilindi yoki noto'g'ri qiymat kiritildi.");
    }
  } else {
    alert("Kiritilgan indeks noto'g'ri yoki mavjud emas.");
  }
});



