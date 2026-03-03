// REAL KITOB NOMLARI
const bookNames = [
"Alkimyogar",
"O'tkan kunlar",
"Mehrobdan chayon",
"Sariq devni minib",
"Ufq",
"Dunyoning ishlari",
"Boburnoma",
"Temur tuzuklari",
"Ikki eshik orasi",
"Qasos",
"Urush va tinchlik",
"Jinoyat va jazo",
"Anna Karenina",
"Otello",
"Hamlet",
"Romeo va Julietta",
"Cho‘lpon she'rlari",
"Kecha va kunduz",
"Sherlok Holms",
"Don Kixot",
"Yulduzli tunlar",
"Qirq kunlik",
"Oq kema",
"Chol va dengiz",
"1984",
"Hayvonlar xo‘jaligi",
"Farg‘ona tongi",
"Shum bola",
"Bahor qaytmaydi",
"Tungi mehmon"
];

// 1000+ KITOB GENERATSIYA
const books = [];
let idCounter = 1;

for(let i = 0; i < 40; i++){   // 40 x 30 = 1200 ta
    bookNames.forEach(name=>{
        books.push({
            id: idCounter,
            name: name + " (" + (i+1) + ")",
            img: "https://picsum.photos/200?random=" + idCounter
        });
        idCounter++;
    });
}

let reserved = [];

// LOGIN
function login(){
    let l = document.getElementById("login").value;
    let p = document.getElementById("password").value;

    if(l==="37-maktab" && p==="mutalipov"){
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("mainPage").classList.remove("hidden");
        loadBooks(books);
    } else {
        document.getElementById("error").innerText="Xato parol kiritdingiz";
    }
}

// KITOBLARNI CHIQARISH
function loadBooks(list){
    let html="";
    list.forEach(book=>{
        html+=`
        <div class="book">
            <img src="${book.img}">
            <h4>${book.name}</h4>
            <input type="number" min="1" placeholder="Necha kun?" id="day-${book.id}">
            <button onclick="reserve(${book.id})">Band qilish</button>
        </div>
        `;
    });
    document.getElementById("bookList").innerHTML=html;
}

// QIDIRUV
function searchBook(){
    let value=document.getElementById("search").value.toLowerCase();
    let filtered=books.filter(b=>b.name.toLowerCase().includes(value));

    if(filtered.length>0){
        loadBooks(filtered);
    } else {
        document.getElementById("bookList").innerHTML="<h3>Hech narsa topilmadi</h3>";
    }
}

// BAND QILISH
function reserve(id){
    let book = books.find(b => b.id === id);
    let dayInput = document.getElementById("day-"+id);
    let days = dayInput ? dayInput.value : "";

    if(!days){
        alert("Necha kunga band qilishni kiriting!");
        return;
    }

    if(reserved.some(r => r.id === id)){
        alert("Bu kitob allaqachon band qilingan!");
        return;
    }

    reserved.push({
        id: book.id,
        name: book.name,
        img: book.img,
        days: days
    });

    alert(book.name + " " + days + " kunga band qilindi!");
}

// BAND QILINGANLAR
function showReserved(){
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("reservedPage").classList.remove("hidden");
    renderReserved();
}

function renderReserved(){
    let html="";

    if(reserved.length === 0){
        html = "<h3>Hozircha band qilingan kitob yo‘q</h3>";
    } else {
        reserved.forEach(r=>{
            html+=`
            <div class="book">
                <img src="${r.img}">
                <h4>${r.name}</h4>
                <p>${r.days} kun band qilingan</p>
                <button class="cancel-btn" onclick="cancelReserve(${r.id})">
                    Bekor qilish
                </button>
            </div>
            `;
        });
    }

    document.getElementById("reservedList").innerHTML=html;
}

// BEKOR QILISH
function cancelReserve(id){
    reserved = reserved.filter(r => r.id !== id);
    renderReserved();
}

// ORQAGA
function back(){
    document.getElementById("reservedPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
}

// REKLAMA
const ads=[
"1000 dan ortiq kitoblar mavjud!",
"Eng sara asarlar bizda!",
"Yangi adabiyotlar kelib tushdi!"
];

let adIndex=0;

setInterval(()=>{
    adIndex=(adIndex+1)%ads.length;
    document.getElementById("ad").innerText=ads[adIndex];
},3000);
