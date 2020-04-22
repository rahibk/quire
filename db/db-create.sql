/* CREATE DATABASE charity; */


CREATE TABLE users (
	user_id   SERIAL PRIMARY KEY,
	first_name	VARCHAR(255) NOT NULL,
	last_name	VARCHAR(255) NOT NULL,
	e_mail VARCHAR(255) NOT NULL
);

CREATE TABLE messages(
	message_id SERIAL PRIMARY KEY,
	sender_id INTEGER,
	receiver_id INTEGER,
	title VARCHAR(255) NOT NULL,
	body VARCHAR(255) NOT NULL,
	m_timestamp TIMESTAMP,
	FOREIGN KEY (sender_id)
		REFERENCES users(user_id),
	FOREIGN KEY (receiver_id)
		REFERENCES users(user_id)
);

CREATE TABLE charity(
	charity_id SERIAL PRIMARY KEY ,
	charity_name VARCHAR(255),
	tagline VARCHAR(255),
	summary VARCHAR(255)
);

CREATE TABLE contracts(
	contract_id SERIAL PRIMARY KEY,
	influencer_id INTEGER,
	buyer_id INTEGER,
	monetary_value FLOAT,
	charity_id INTEGER,
	is_finished BOOLEAN,
	FOREIGN KEY (charity_id)
		REFERENCES charity(charity_id),
	FOREIGN KEY (influencer_id)
		REFERENCES users(user_id),
	FOREIGN KEY (buyer_id)
		REFERENCES users(user_id)
);

CREATE TABLE contract_messages(
	contract_id INTEGER,
	message_id INTEGER,
	PRIMARY KEY (contract_id, message_id),
	FOREIGN KEY (contract_id)
		REFERENCES contracts (contract_id),
	FOREIGN KEY (message_id)
		REFERENCES messages(message_id)
);

CREATE TABLE influencers(
	influencer_id INTEGER,
	charity_id INTEGER,
	amount_raised FLOAT,
	PRIMARY KEY (influencer_id),
	FOREIGN KEY (influencer_id)
		REFERENCES users(user_id),
	FOREIGN KEY (charity_id)
		REFERENCES charity(charity_id)
);

insert into users (first_name, last_name,e_mail)
VALUES ("Chloe", "Macklin", "chloe@lg.org")