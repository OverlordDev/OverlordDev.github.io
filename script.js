function openModal(image, title, text, author, editor, date) {
    const modal = document.getElementById('newsModal');
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalAuthor').innerText = author;
    document.getElementById('modalEditor').innerText = editor;
    document.getElementById('modalDate').innerText = date;

    modal.classList.add('show');
    modal.classList.remove('hide'); 
    }

    function closeModal() {
        const modal = document.getElementById('newsModal');
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('show', 'hide');
        }, 300); 
    }
    function addNews(image, title, shortText, fullText, author, editor, date) {
        const newsList = document.querySelector('.news-list');
        let lastDate = newsList.lastElementChild?.getAttribute('data-date');
        if (lastDate !== date) {
            const dateElement = document.createElement('p');
            dateElement.className = 'date';
            dateElement.textContent = date;
            dateElement.setAttribute('data-date', date);
            newsList.appendChild(dateElement);
        }
        const article = document.createElement('article');
        article.className = 'news-item';
        article.setAttribute('onclick', `openModal('${image}', '${title}', '${fullText}', '${author}', '${editor}', '${date}')`);
    
        const img = document.createElement('img');
        img.src = image;
        img.alt = title;
    
        const textDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.textContent = title;
        const p = document.createElement('p');
        p.textContent = shortText;
    
        textDiv.appendChild(h3);
        textDiv.appendChild(p);
        article.appendChild(img);
        article.appendChild(textDiv);
    
        newsList.appendChild(article);
    }
    function filterNews() {
        const query = document.getElementById('search').value.toLowerCase();
        document.querySelectorAll('.news-item').forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'flex' : 'none';
        });
    }
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loadingScreen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0'; 
        }, 100); 
        setTimeout(() => {
            loadingScreen.style.display = 'none'; 
        }, 600); 
    });
    
    addNews('news1.jpg', 'Nyhet 5', 'Kort beskrivelse...', 'Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...Full tekst...', 'Anna Nilsen', 'Ole Olsen', '22.12.1212');
    addNews('news1.jpg', 'Nyhet 2', 'Kort beskrivelse...', 'Full tekst...', 'Anna Nilsen', 'Ole Olsen', '22.12.1212');
    addNews('news1.jpg', 'Nyhet 1', 'Kort beskrivelse...', 'Full tekst...', 'Anna Nilsen', 'Ole Olsen', '22.12.1212');