CREATE DATABASE carlos;

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  full_name VARCHAR(255),
  email_address VARCHAR(255),
  phone_number VARCHAR(255),
  message TEXT,
  shared_id SERIAL
);