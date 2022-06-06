CREATE DATABASE aza_fx_transactions_db;

CREATE  TABLE IF NOT EXISTS `transactions` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `customer_id` VARCHAR(10) NOT NULL,
  `customer_name` VARCHAR(255) NOT NULL,
  `input_currency` VARCHAR(10) NOT NULL,
  `input_amount` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  `output_currency` VARCHAR(10) NOT NULL,
  `output_amount` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


INSERT INTO `aza_fx_transactions_db`.`transactions` (`customer_id`, `customer_name`, `input_currency`, `input_amount`, `output_currency`, `output_amount`, `created_at`) VALUES ('CS123', 'John Doe', 'EUR', '100.00', 'USD', '126.45', '2022-06-06 15:30:30');

INSERT INTO `aza_fx_transactions_db`.`transactions` (`customer_id`, `customer_name`, `input_currency`, `input_amount`, `output_currency`, `output_amount`, `created_at`) VALUES ('JD123', 'Jane Doe', 'ZAR', '40000.00', 'KES', '300000.00', '2022-06-06 15:30:30');
