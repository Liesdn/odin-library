// --- --- MODAL --- ---

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btnOpenModal');
const closeModalBtn = document.querySelector('.btnCloseModal');
const form = document.getElementById('form');
const btnSubmit = document.querySelector('.btnSubmit');

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

openModalBtn.addEventListener('click', openModal);

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    form.reset();
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});

btnSubmit.addEventListener('click', function(event){
    event.preventDefault();
    addBookToLibrary();
    closeModal();
});

// --- --- BOOK --- ---

let myLibrary = [];

// constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function makeBookCard(){
    let content = document.querySelector('.content');
    content.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement('div');
        bookCard.innerHTML = 
        `<div class="card">
            <div class="buttonCard">
                <button class="btnDel"><span class="material-symbols-outlined">delete</span></button>
                <button class="btnRead"><span class="material-symbols-outlined">toggle_on</span></button>
            </div>
            <div class="book">
                <p class="title">${book.title}</p>
                <p class="author">by ${book.author}</p>
                <p class="pages">${book.pages} pages</p>
            </div>
        </div>`;
        content.appendChild(bookCard);
    }
}

function addBookToLibrary() {
    let title = document.getElementById('text-title').value;
    let author = document.getElementById('text-author').value;
    let pages = document.getElementById('text-pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    makeBookCard();
}
