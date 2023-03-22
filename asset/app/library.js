const myBooks = document.getElementById('allBook');

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
                <button class ="myBtn_love" onclick="love()">❤️<span id="myLove"></span></button>
            </div>
        `;


        if (book.isRead === true){
            allBook.appendChild(bukuKu);
        };
    });
};


function love(){
    document.getElementById('myLove').innerText++;
};

document.addEventListener('DOMContentLoaded', showBooks);
