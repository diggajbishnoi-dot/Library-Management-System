create database library_manager;
use library_manager;
create table books (BookId int primary key AUTO_INCREMENT,Title varchar(200) NOT NULL, Author varchar (150) NOT NULL,IsIssued boolean NOT NULL DEFAULT FALSE,DateAdded DATETIME  DEFAULT CURRENT_TIMESTAMP,LastModified datetime  Default CURRENT_TIMESTAMP);
 create INDEX index_title on books(Title);
 show tables