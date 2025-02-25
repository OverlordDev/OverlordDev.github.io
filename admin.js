// Подключаем Supabase
const supabaseUrl = 'https://cxebkrlkhzlymzkafvdh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZWJrcmxraHpseW16a2FmdmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTkxMjAsImV4cCI6MjA1NjA3NTEyMH0.5l4emzi54lI5hKb-qhS08xtDrg_IYWtFfYuFNtfAdxg';  // Замените на ваш ключ
const supabase = createClient(supabaseUrl, supabaseKey);

// Слушаем событие отправки формы
document.getElementById("articleForm").addEventListener("submit", async function(event) {
    event.preventDefault();  // Отключаем стандартное поведение формы

    // Получаем данные из формы
    const image = document.getElementById("image").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;
    const editor = document.getElementById("editor").value;
    const date = document.getElementById("date").value;

    // Логируем данные для отладки
    console.log('Data to insert:', { image, title, content, author, editor, date });

    try {
        // Отправляем данные в Supabase
        const { data, error } = await supabase
            .from('News')  // Название таблицы в Supabase
            .insert([
                { 
                    image: image, 
                    title: title, 
                    text: content, 
                    author: author, 
                    editor: editor, 
                    date: date 
                }
            ]);

        if (error) {
            console.error('Error inserting data:', error);
            alert('Feil ved publisering: ' + error.message);
        } else {
            console.log('Article published successfully:', data);
            alert('Artikkel publisert!');
            document.getElementById("articleForm").reset();  // Очищаем форму
        }
    } catch (err) {
        console.error('Unexpected error:', err);
        alert('En uventet feil oppstod: ' + err.message);
    }
}); 