create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

CREATE table category (id int  PRIMARY KEY auto_increment not null, name VARCHAR(255) not NULL);

create table program (id int PRIMARY KEY auto_increment not null, title varchar(255) not null, synopsis text not null, poster VARCHAR(255) not null, country varchar(255) not null, year INTEGER NOT NULL, category_id INTEGER not NULL, FOREIGN KEY (category_id) REFERENCES category(id));
