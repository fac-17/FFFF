BEGIN;
    DROP TABLE IF EXISTS products
    CASCADE;
DROP TABLE IF EXISTS categories
CASCADE;
DROP TABLE IF EXISTS supermarkets
CASCADE;
DROP TABLE IF EXISTS origins
CASCADE;
DROP TABLE IF EXISTS flags
CASCADE;
DROP TABLE IF EXISTS entries
CASCADE;



CREATE TABLE categories
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INTEGER REFERENCES categories (id)
);
CREATE TABLE supermarkets
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE flags
(
    id SERIAL PRIMARY KEY,
    emoji_code VARCHAR(100) NOT NULL
);
CREATE TABLE origins
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    score INTEGER NOT NULL, 
    flag_id INTEGER REFERENCES flags (id)
);

CREATE TABLE entries
(
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products (id),
    supermarket_id INTEGER REFERENCES supermarkets (id),
    origin_id INTEGER REFERENCES origins (id),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories
    (name)
VALUES
    ('Fruit'),
    ('Vegetables'),
    ('Meat');
INSERT INTO products
    (name, category_id)
VALUES
    ('Banana', 1),
    ('Potato', 2 ),
    ('Sausages', 3),
    ('Apple', 1);
INSERT INTO supermarkets
    (name)
VALUES
    ('Sainsburys'),
    ('Tesco');
INSERT INTO flags
    (emoji_code)
VALUES
    ('U+1F1F7'),
    ('U+1F1EE');
INSERT INTO origins
    (name, flag_id)
VALUES
    ('Brazil', 1),
    ('Ireland', 2);
INSERT INTO entries
    (product_id, supermarket_id, origin_id)
VALUES
    (1, 1, 1),
    (1, 2, 2),
    (2, 1, 1),
    (2, 2, 2),
    (3, 2, 1);

COMMIT;