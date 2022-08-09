create database dec10;
use dec10;

/* table schema */
create table product (
  id integer primary key auto_increment, 
  title varchar(100), 
  description varchar(2000), 
  price float, 
  category varchar(100)
);

/* insert dummy products */
insert into product 
  (title, description, price, category) 
  values 
  ('iPhone 13', 'the best iPhone ever', 179000, 'mobile'),
  ('iMac', 'the best iMac ever', 750000, 'desktop'),
  ('magic mouse', 'the best mouse ever', 7500, 'mouse'),
  ('magic keyboard', 'the best keyboard ever', 75000, 'keyboard');



/* ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; */
/* FLUSH PRIVILEGES; */
