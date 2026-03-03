const books = [
    {id:1, title:"O'tkan Kunlar"},
    {id:2, title:"Mehrobdan Chayon"},
    {id:3, title:"Alkimyogar"},
    {id:4, title:"Urush va Tinchlik"},
    {id:5, title:"Jinoyat va Jazo"}
];

// 1000 ta qilish uchun avtomatik generatsiya
for(let i=6; i<=1000; i++){
    books.push({id:i, title:"Badiiy Kitob " + i});
}

let reservedBooks = [];
let selectedBook = null;

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

function displayBooks(list){
    bookList.innerHTML = "";
    list.forEach(book=>{
        bookList.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <button onclick="openModal(${book.id})">Band qilish</button>
            </div>
        `;
    });
}

displayBooks(books);

searchInput.addEventListener("input", ()=>{
    const value = searchInput.value.toLowerCase();
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(value)
    );
    displayBooks(filtered);
});

function openModal(id){
    selectedBook = books.find(b=>b.id===id);
    document.getElementById("modalTitle").innerText = selectedBook.title;
    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

document.getElementById("confirmReserve").addEventListener("click", ()=>{
    const days = document.getElementById("days").value;
    reservedBooks.push({
        title: selectedBook.title,
        days: days
    });
    closeModal();
    alert("Kitob band qilindi!");
});

document.getElementById("viewReserved").addEventListener("click", ()=>{
    document.getElementById("reservedPage").style.display = "block";
    document.body.children[1].style.display = "none";
    showReserved();
});

function showReserved(){
    const list = document.getElementById("reservedList");
    list.innerHTML = "";
    reservedBooks.forEach(book=>{
        list.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <p>${book.days} kunga olingan</p>
            </div>
        `;
    });
}

function goBack(){
    document.getElementById("reservedPage").style.display = "none";
    document.body.children[1].style.display = "block";
}
