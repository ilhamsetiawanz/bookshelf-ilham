const form = document.querySelector('form');
const notFinishList = document.getElementById('notFinishList');
const finishList = document.getElementById('finishList');

function add(evet) {
    const bookName= document.getElementById('book_title').value;
    const bookAuthor = document.getElementById('book_owner').value;
    const bookRealse = document.getElementById('book_years').value;
    const bookGenre  = document.getElementById('genre').value;
    const bookRead = document.getElementById('selesaiBaca').checked;
    
    const book ={
        id : Math.floor(Math.random()* 1000000).toString().padStart(6, "0"),
        judul : bookName,
        penulis : bookAuthor,
        tahun : bookRealse,
        genre : bookGenre,
        isRead : bookRead
    };

    let books =JSON.parse(localStorage.getItem('books')) || [];

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

    bookShelf();
    
};
function bookShelf() {
    let books =JSON.parse(localStorage.getItem('books')) || [];

    const bookCover ={
            '' : './asset/img/Default.png',
            'Horor' : './asset/img/horror.png',
            'Fantasi' : './asset/img/fantasi.png',
            'Sci-Fi' : './asset/img/scifi.png',
            'Romance' : './asset/img/romance.png',
            'Mystery' : './asset/img/mystery.png',
            'Adventure' : '/asset/img/adventure.png',
            'Biography' : './asset/img/biografi.png',
            'Filsafat' : './asset/img/filsafat.png',
            'Journal' : '/asset/img/filsafat.png'

    };

    notFinishList.innerHTML = "";
    finishList.innerHTML = "";

    books.forEach((book, item)=> {
        let bukuKu = document.createElement('div');
        bukuKu.classList.add('bukuKu')
        bukuKu.innerHTML = `
        <img src="${bookCover[book.genre]}" alt = "Book Cover">
        <div class = "text_container">
            <h3>${book.judul}</h3>
            <p class="text_tag">${book.penulis}</p>
            <p class="text_tag">${book.tahun}</p>
            <p class="text_tag">${book.genre}</p>
        </div>
        <div class = "button_container">
            <button id ="action_status" class ="button_status" data-index="${item}">${book.isRead ? 'Belum Selesai' : 'Selesai Baca'}</button>
            <button id="remove_item" class="button_delete" data-index="${item}">Hapus</button>
        </div>
        `;

        if (book.isRead === true) {
            finishList.appendChild(bukuKu);
        } else if(book.isRead === false){
            notFinishList.appendChild(bukuKu);
        };

        const deleteItem = bukuKu.querySelector('.button_delete');
        deleteItem.addEventListener('click', () => {
            books.splice(item, 1);
            localStorage.setItem("books", JSON.stringify(books));
            bookShelf();
            alert('Buku Telah Dihapus Dari List');
        });

        const statusModifier = bukuKu.querySelector('.button_status');
        statusModifier.addEventListener('click', () => {
            book.isRead = !book.isRead;
            localStorage.setItem("books", JSON.stringify(books));
            bookShelf();
        });

    
    });
};
document.addEventListener('DOMContentLoaded', bookShelf);
