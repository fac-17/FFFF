SELECT
    products.name,
    supermarkets.name,
    origins.name,
    origins.score,
    flags.emoji_code
FROM
    products
    JOIN entries ON entries.product_id = products. id
    JOIN supermarkets ON supermarkets.id = entries.supermarket_id
    JOIN origins ON origins.id = entries.origin_id
    JOIN flags ON flags.id = origins.flag_id
WHERE
    products.id IN (1, 3, 4)
ORDER BY
    score;

