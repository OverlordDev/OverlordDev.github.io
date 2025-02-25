import sqlite3

# Подключение к базе (создаст файл my_database.db, если его нет)
conn = sqlite3.connect("my_database.db")
cursor = conn.cursor()

# Создание таблицы (например, пользователей)
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
)
""")

# Сохранение изменений и закрытие соединения
conn.commit()
conn.close()

print("База данных создана успешно!")
