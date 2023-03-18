const myBooks = document.getElementById('allBook');
const loveBtn = document.querySelector('.myBtn_love');

function showBooks() {
    const bookCover = {
        '': '/asset/img/Default.png',
        'Horor': '/asset/img/horror.png',
        'Fantasi': '/asset/img/fantasi.png',
        'Sci-Fi': '/asset/img/scifi.png',
        'Romance': '/asset/img/romance.png',
        'Mystery': '/asset/img/mystery.png',
        'Adventure': '/asset/img/adventure.png',
        'Biography': '/asset/img/biografi.png',
        'Filsafat': '/asset/img/filsafat.png',
        'Journal': '/asset/img/jurnal.png'
    };

    let books = JSON.parse(localStorage.getItem('books')) || [];

    myBooks.innerHTML = "";

    books.forEach((book) => {
        let bukuKu = document.createElement('div');
        bukuKu.classList.add('mybooks');
        bukuKu.innerHTML = `
            <img src="${bookCover[book.genre]}" alt="Book Cover">
            <div class="text_container">
                <h3>${book.judul}</h3>
                <p class="text_tag">${book.penulis}</p>
                <p class="text_tag">${book.tahun}</p>
                <p class="text_tag">${book.genre}</p>
                <button class ="myBtn_love">❤️</button>
            </div>
        `;


        if (book.isRead === true){
            allBook.appendChild(bukuKu);
        };
    });
};

document.addEventListener('DOMContentLoaded', showBooks);
