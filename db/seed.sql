CREATE TABLE Cocktail_Us (
	user_id SERIAL PRIMARY KEY,
	name VARCHAR(75) NOT NULL,
	username VARCHAR(75) NOT NULL,
	email TEXT NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	password TEXT
)

