INSERT INTO cocktail_us (name, username, email, phone_number, password)
VALUES ($1, $2, $3, $4, $5)
RETURNING *