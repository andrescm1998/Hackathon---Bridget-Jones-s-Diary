DROP TABLE IF EXISTS diary;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS user_account;



CREATE TABLE user_account (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) UNIQUE NOT NULL,
    user_password CHAR(60) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (user_id)
);

CREATE TABLE diary (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (1000) NOT NULL,
    date_created VARCHAR (50) NOT NULL,
    is_public BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (entry_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES user_account("user_id")
);
