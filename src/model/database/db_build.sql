BEGIN;
    DROP TABLE IF EXISTS products, categories, supermarkets, origins, flags, entries
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
    category_id INTEGER NOT NULL REFERENCES categories (id)
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
    flag_id INTEGER NOT NULL REFERENCES flags (id)
);

CREATE TABLE entries
(
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES products (id),
    supermarket_id INTEGER NOT NULL REFERENCES supermarkets (id),
    origin_id INTEGER NOT NULL REFERENCES origins (id),
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
    ('Apple', 1),
    ('Broccoli',2),
    ('Sweet Potato',2),
    ('Spinach',2),
    ('Mushroom',2),
    ('Strawberries',1),
    ('Orange',1),
    ('Bacon',3),
    ('Chicken',3);
INSERT INTO supermarkets
    (name)
VALUES
    ('Sainsbury''s'),
    ('Tesco'),
    ('Lidl'),
    ('Aldi'),
    ('Waitrose'),
    ('M&S');
INSERT INTO flags
    (emoji_code)
VALUES
    ('&#x1F1E7;&#x1F1F7;'),
    ('&#x1F1EE;&#x1F1EA;'),
    ('&#x1F1EC;&#x1F1E7;'),
    ('&#x1F1F5;&#x1F1F1;'),
    ('&#x1F1EF;&#x1F1F5;'),
    ('&#x1F1EA;&#x1F1F8;');
INSERT INTO origins
    (name, score, flag_id)
VALUES
    ('Brazil', 4, 1),
    ('Ireland', 2, 2),
    ('Kent/UK',1,3),
    ('Yorkshire/UK',2,3),
    ('Harefordshire/UK',1,3),
    ('Poland',3,4),
    ('Japan',4,5),
    ('Spain',3,6);
COMMIT;