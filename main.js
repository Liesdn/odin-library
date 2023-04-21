function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        console.log(title, author, pages, read)
    }
};

let dune = new book('Dune', 'by Frank Herbert.', '896 pages,', 'read.');
let theHobbit = new book ('The Hobbit', 'by J. R. R. Tolkien.', '295 pages,', 'read.');
let threeBody = new book('The Three Body Problem', 'by Liu Cixin.', '302 pages,', 'not read.');


// --- --- MODAL --- ---

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btnOpenModal');
const closeModalBtn = document.querySelector('.btnCloseModal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

openModalBtn.addEventListener('click', openModal);

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});