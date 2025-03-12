

function openModal(image, title, text, author, editor, date) {
    const modal = document.getElementById('newsModal');
    document.getElementById('modalImage').src = image;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalAuthor').innerText = author;
    document.getElementById('modalEditor').innerText = editor;
    document.getElementById('modalDate').innerText = date;

    modal.classList.add('show');
    modal.classList.remove('hide'); // Убираем класс скрытия, если он был
    }

    function closeModal() {
        const modal = document.getElementById('newsModal');
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('show', 'hide');
        }, 300); // Ожидание завершения анимации перед скрытием
    }
