const books = [
    {name:"Alkimyogar", img:"https://picsum.photos/200?1"},
    {name:"O'tkan kunlar", img:"https://picsum.photos/200?2"},
    {name:"Mehrobdan chayon", img:"https://picsum.photos/200?3"},
    {name:"Sariq devni minib", img:"https://picsum.photos/200?4"},
    {name:"Ufq", img:"https://picsum.photos/200?5"},
    {name:"Dunyoning ishlari", img:"https://picsum.photos/200?6"},
    {name:"Boburnoma", img:"https://picsum.photos/200?7"},
    {name:"Temur tuzuklari", img:"https://picsum.photos/200?8"},
    {name:"Ikki eshik orasi", img:"https://picsum.photos/200?9"},
    {name:"Qasos", img:"https://picsum.photos/200?10"},
    {name:"Urush va tinchlik", img:"https://picsum.photos/200?11"},
    {name:"Jinoyat va jazo", img:"https://picsum.photos/200?12"},
];

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
            <input type="number" min="1" placeholder="Necha kun?">
            <button onclick="reserve('${book.name}')">Band qilish</button>
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
function reserve(name){
    reserved.push(name);
    alert(name+" band qilindi!");
}

// BAND QILINGANLAR SAHIFASI
function showReserved(){
    document.getElementById("mainPage").classList.add("hidden");
    document.getElementById("reservedPage").classList.remove("hidden");

    let html="";
    reserved.forEach(r=>{
        html+="<p>"+r+"</p>";
    });
    document.getElementById("reservedList").innerHTML=html;
}

function back(){
    document.getElementById("reservedPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
}

// REKLAMA ANIMATSIYA
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