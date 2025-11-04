-- Таблица клиентов
CREATE TABLE IF NOT EXISTS clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица записей/бронирований
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id),
    wedding_date DATE NOT NULL,
    package_type VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    total_price DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для быстрого поиска
CREATE INDEX idx_clients_phone ON clients(phone);
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_bookings_client_id ON bookings(client_id);
CREATE INDEX idx_bookings_wedding_date ON bookings(wedding_date);
CREATE INDEX idx_bookings_status ON bookings(status);

-- Комментарии к таблицам
COMMENT ON TABLE clients IS 'Таблица клиентов студии VINSTART';
COMMENT ON TABLE bookings IS 'Таблица записей и бронирований свадебных съёмок';

COMMENT ON COLUMN bookings.package_type IS 'Тип пакета: classic, video, premium';
COMMENT ON COLUMN bookings.status IS 'Статус записи: pending, confirmed, completed, cancelled';