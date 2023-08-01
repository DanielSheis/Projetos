CREATE TABLE nome (
    id_nome SERIAL PRIMARY KEY;
    sobrenome VARCHAR(40) NOT NULL;
    idade INT NOT NULL;
    cor_preferida VARCHAR(30) NOT NULL
)