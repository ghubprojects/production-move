-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2022 at 02:54 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `big_corp`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `role` enum('admin','productionFacilities','distributors','serviceCenter') NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `fullname`, `role`, `email`, `password`, `address`) VALUES
(1, 'Pham Bich Ngoc', 'admin', 'ngocngoc@gmail.com', '123123', 'Ha Noi'),
(2, 'Tang The Anh', 'admin', 'anhadmin@gmail.com', '123123', 'Ha Noi'),
(3, 'Quan Vi Hoai Vu', 'productionFacilities', 'vu123@gmail.com', '123456', 'Ha Tinh'),
(4, 'Le Tien Dat', 'productionFacilities', 'dat123123@gmail.com', '123456', 'Nghe An'),
(5, 'Pham Khac Nghiem', 'distributors', 'nghiemzai@gmail.com', '123412', 'Lang Giang'),
(6, 'Nguyen Van Manh', 'distributors', 'manhdat@gmail.com', '123123', 'Bac Giang'),
(7, 'Nguyen Tien Dat', 'serviceCenter', 'dat12dat34@gmail.com', '123123', 'Kien Giang'),
(8, 'Cao Van Bac', 'serviceCenter', 'levancaobac1@gmail.com', '123123', 'Nghe An');

-- --------------------------------------------------------

--
-- Table structure for table `product_informations`
--

CREATE TABLE `product_informations` (
  `id` int(10) NOT NULL,
  `productCode` int(20) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `leadTime` varchar(50) NOT NULL,
  `warrantyTime` varchar(50) NOT NULL,
  `error` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_informations`
--

INSERT INTO `product_informations` (`id`, `productCode`, `productName`, `leadTime`, `warrantyTime`, `error`) VALUES
(1, 100340, 'Gigabyte Gaming G5 GE i5 12500H (51VN263SH)', '15 weeks', '2 years', 'no'),
(2, 100341, 'Asus TUF Gaming FX517ZC-HN077W i5 12450H', '12 weeks', '1 year', 'no'),
(3, 100342, 'Lenovo Gaming IdeaPad 3 15IAH7 i5 12500H/82S900H2VN\r\n', '15 weeks', '1.5 years', 'no'),
(4, 100343, 'Asus TUF Gaming FX517ZE-HN045W i5 12450H', '20 weeks', '1 year', 'no'),
(5, 100344, 'Dell Inspiron 16 N5620 i5 1240P/N6I5003W1', '21 weeks', '1 year', 'no'),
(6, 100345, 'MSI Gaming Katana GF66 12UCK-805VN i7 12650H', '20 weeks', '1 year', 'no'),
(7, 100346, 'Lenovo Yoga Slim 7 Pro 14IHU5O i5 11300H/82NH00AFVN', '17 weeks', '1.5 years', 'no'),
(8, 100347, 'Laptop Lenovo IdeaPad 5 Pro 16IAH7 i7-12700H/82SK008CVN', '17 weeks', '2 years', 'no'),
(9, 100348, 'Asus Gaming TUF FX517ZM-HN480W i7 12650H', '17 weeks', '1 year', 'no'),
(10, 100349, 'Acer Nitro Gaming 5 AN515-58-52SP i5 12500H (NH.QFHSV.001)', '21 weeks', '1.3 years', 'no'),
(11, 100350, 'Asus TUF Gaming FX506LHB-HN188W i5 10300H', '17 weeks', '1.3 years', 'no'),
(12, 100351, 'MSI Gaming GF63 Thin 11SC-1090VN i5 11400H', '21 weeks', '1 year', 'no'),
(13, 100352, 'MSI Modern 14 B11MOU-1028VN i3 1115G4', '15 weeks', '2 years', 'no'),
(14, 100353, 'HP 15s-fq2663TU i3 1115G4/6K796PA', '12 weeks', '2 years', 'no'),
(15, 100354, 'Asus Vivobook X515EA-BR2045W i3 1115G4', '17 weeks', '2 years', 'no'),
(16, 100355, 'Asus Gaming ROG G513IC-HN729W R7 4800H', '21 weeks', '1.5 years', 'no'),
(17, 100356, 'MSI Gaming GF63 Thin 11SC-663VN i7 11800H', '18 weeks', '1.5 years', 'no'),
(18, 100357, 'Acer Nitro Gaming AN515-57-54MV i5 11400H (NH.QENSV.003)', '22 weeks', '1.7 years', 'no'),
(19, 100358, 'MSI GF63 Thin 11UC 444VN i5 11400H', '20 weeks', '2 years', 'Laptop does not display, fan is still running.'),
(20, 100359, 'Asus TUF Gaming FA506IHRB-HN019W R5 4600H', '17 weeks', '2 years', 'no'),
(21, 100360, 'Asus Vivobook M1403QA-LY022W R5 5600H', '15 weeks', '2 years', 'no'),
(22, 100361, 'MSI Modern 15 A5M 235VN R7 5700U Win 11', '19 weeks', '1.7 years', 'no'),
(23, 100362, 'Lenovo IdeaPad 3 14IAU7 i5-1235U/(82RJ001DVN)', '17 weeks', '2 years', 'no'),
(24, 100363, 'HP Pavilion 15-eg2057TU i5 1240P/6K787PA', '15 weeks', '1.5 years', 'no'),
(25, 100364, 'Asus Vivobook M1503QA-L1026W R5 5600H', '18 weeks', '1 year', 'Laptop won\'t open to main screen.'),
(26, 100365, 'Lenovo IdeaPad 5 Pro 16IAH7 i5 12500H/82SK008BVN', '18 weeks', '1.5 years', 'no'),
(27, 100366, 'MSI Modern 14 B11MOU-1031VN i7 1195G7', '17 weeks', '1.3 years', 'no'),
(28, 100367, 'HP Pavilion 14-dv2034TU i5 1235U (6K770PA)', '18 weeks', '1.7 years', 'no'),
(29, 100368, 'Lenovo ThinkBook 14 G2 ITL i5 1135G7/20VD00Y4VN', '15 weeks', '2 years', 'no'),
(30, 100369, 'MSI Gaming Katana GF66 12UCK-815VN i5 12450H', '20 weeks', '1.5 years', 'no'),
(31, 100370, 'Asus TUF Gaming FX507ZE-HN093W i7 12700H', '19 weeks', '1.9 years', 'no'),
(32, 100371, 'Lenovo Gaming Legion 5 15ARH7 R5 6600H/82RE002VVN', '17 weeks', '1.5 years', 'no'),
(33, 100372, 'Asus Vivobook A515EA-BQ3013W i3 1115G4', '21 weeks', '2 years', 'Laptop won\'t open to main screen.'),
(34, 100373, 'MSI Modern 14 B11MOU-1030VN i3 1115G4/8GB/256GB/14\"FHD/Win 11', '16 weeks', '1.7 years', 'Laptop screen error has dead spots.'),
(35, 100374, 'MSI Gaming GF63 Thin 11SC-666VN i5 11400H', '18 weeks', '1 year', 'no'),
(36, 100375, 'Asus Expertbook B1400CEAE-EB3182W i5 1135G7', '21 weeks', '2 years', 'no'),
(37, 100376, 'HP Pavilion 15-eg2058TU i5-1240P/6K788PA', '20 weeks', '1.5 years', 'no'),
(38, 100377, 'HP 15s-fq5080TU i5-1235U/6K7A0PA', '17 weeks', '2 years', 'no'),
(39, 100378, 'HP 15s-fq5145TU i7-1255U/76B24PA', '18 weeks', '1.3 years', 'no'),
(40, 100379, 'Asus Vivobook X415E-EK1387W i3 1115G4', '18 weeks', '2.5 years', 'no'),
(41, 100380, 'HP Pavilion 14-dv2035TU i5 1235U/6K771PA', '14 weeks', '1 year', 'Laptop screen error has dead spots.'),
(42, 100381, 'Dell Gaming G15 5515 R7 5800H (70266674)', '21 weeks', '2 years', 'no'),
(43, 100382, 'Dell Gaming G15 5511 i5 11400H (70266676)', '20 weeks', '1 year', 'Laptop does not display, fan is still running.'),
(44, 100383, 'Asus TUF Gaming FA507RC-HN051W R7 6800H', '19 weeks', '1.5 years', 'Laptop does not display, fan is still running.'),
(45, 100384, 'Acer Nitro Gaming AN515-45-R6EV R5 5600H (NH.QBMSV.006)', '19 weeks', '1.3 years', 'no'),
(46, 100385, 'HP Pavilion 15-eg2055TU i7 1260P/6K785PA', '22 weeks', '1 year', 'no'),
(47, 100386, 'Lenovo Yoga 7-14ACN6 R7 5800U (82N7002LVN)', '19 weeks', '2.1 years', 'Laptop won\'t open to main screen.'),
(48, 100387, 'Dell Inspiron 14 N5420 i5 1235U (P157G001ASL)', '15 weeks', '1.6 years', 'no'),
(49, 100388, 'Acer Nitro Gaming AN515-57-5669 i5 11400H (NH.QEHSV.001)', '21 weeks', '1 year', 'Laptop does not display, fan is still running.'),
(50, 100389, 'HP Envy 13-ba1536TU i5 1135G7 (4U6M5PA)', '18 weeks', '2 years', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `product_parameters`
--

CREATE TABLE `product_parameters` (
  `id` int(10) NOT NULL,
  `productCode` int(20) NOT NULL,
  `productName` varchar(100) NOT NULL,
  `screen` varchar(50) NOT NULL,
  `CPU` varchar(50) NOT NULL,
  `VGA` varchar(50) NOT NULL,
  `RAM` varchar(50) NOT NULL,
  `SSD` varchar(50) NOT NULL,
  `weight` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_parameters`
--

INSERT INTO `product_parameters` (`id`, `productCode`, `productName`, `screen`, `CPU`, `VGA`, `RAM`, `SSD`, `weight`) VALUES
(1, 100340, 'Gigabyte Gaming G5 GE i5 12500H (51VN263SH)', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '1.9 kg'),
(2, 100341, 'Asus TUF Gaming FX517ZC-HN077W i5 12450H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.0 kg'),
(3, 100342, 'Lenovo Gaming IdeaPad 3 15IAH7 i5 12500H/82S900H2VN\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '16 GB (2 sticks of 8GB)', '512 GB', '2.25 kg'),
(4, 100343, 'Asus TUF Gaming FX517ZE-HN045W i5 12450H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 Ti 4GB', '8 GB ', '512 GB', '2.0 kg'),
(5, 100344, 'Dell Inspiron 16 N5620 i5 1240P/N6I5003W1\r\n', '16 inch', 'Core i5', 'NVIDIA GeForce MX570 2GB', '16 GB (2 sticks of 8GB)', '512 GB', '1.97 kg'),
(6, 100345, 'MSI Gaming Katana GF66 12UCK-805VN i7 12650H\r\n', '15.6 inch', 'Core i7', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.25 kg'),
(7, 100346, 'Lenovo Yoga Slim 7 Pro 14IHU5O i5 11300H/82NH00AFVN\r\n', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '16 GB ', '512 GB', '1.4 kg'),
(8, 100347, 'Laptop Lenovo IdeaPad 5 Pro 16IAH7 i7-12700H/82SK008CVN\r\n', '16 inch', 'Core i7', 'Intel Iris Xe Graphics', '16 GB (2 sticks of 8GB)', '512 GB', '1.95 kg'),
(9, 100348, 'Asus Gaming TUF FX517ZM-HN480W i7 12650H\r\n', '15.6 inch', 'Core i7', 'NVIDIA GeForce RTX 3060 6GB', '8 GB (1 stick of 8GB)', '512 GB', '2.0 kg'),
(10, 100349, 'Acer Nitro Gaming 5 AN515-58-52SP i5 12500H (NH.QFHSV.001)\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.5 kg'),
(11, 100350, 'Asus TUF Gaming FX506LHB-HN188W i5 10300H', '15.6 inch', 'Core i5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.3 kg'),
(12, 100351, 'MSI Gaming GF63 Thin 11SC-1090VN i5 11400H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB (1 stick of 8GB)', '512 GB', '1.86 kg'),
(13, 100352, 'MSI Modern 14 B11MOU-1028VN i3 1115G4\r\n', '14 inch', 'Core i3', 'Intel UHD Graphics', '8 GB ', '256 GB', '1.3 kg'),
(14, 100353, 'HP 15s-fq2663TU i3 1115G4/6K796PA\r\n', '15.6 inch', 'Core i3', 'Intel UHD Graphics', '4 GB (1 stick of 4GB)', '256 GB', '1.7 kg'),
(15, 100354, 'Asus Vivobook X515EA-BR2045W i3 1115G4\r\n', '15.6 inch', 'Core i3', 'Intel UHD Graphics', '4 GB', '512 GB', '1.8 kg'),
(16, 100355, 'Asus Gaming ROG G513IC-HN729W R7 4800H\r\n', '15.6 inch', 'Ryzen 7', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.1 kg'),
(17, 100356, 'MSI Gaming GF63 Thin 11SC-663VN i7 11800H\r\n', '15.6 inch', 'Core i7', 'NVIDIA GeForce GTX 1650 Max-Q 4GB', '8 GB ', '512 GB', '1.86 kg'),
(18, 100357, 'Acer Nitro Gaming AN515-57-54MV i5 11400H (NH.QENSV.003)\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.2 kg'),
(19, 100358, 'MSI GF63 Thin 11UC 444VN i5 11400H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB ', '512 GB', '1.86 kg'),
(20, 100359, 'Asus TUF Gaming FA506IHRB-HN019W R5 4600H\r\n', '15.6 inch', 'Ryzen 5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.3 kg'),
(21, 100360, 'Asus Vivobook M1403QA-LY022W R5 5600H\r\n', '14 inch', 'Ryzen 5', 'AMD Radeon Graphics', '8 GB (1 stick of 8GB)', '512 GB', '1.6 kg'),
(22, 100361, 'MSI Modern 15 A5M 235VN R7 5700U Win 11\r\n', '15.6 inch', 'Ryzen 7', 'AMD Radeon Graphics', '8 GB ', '512 GB', '1.6 kg'),
(23, 100362, 'Lenovo IdeaPad 3 14IAU7 i5-1235U/(82RJ001DVN)\r\n', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB ', '512 GB', '1.63 kg'),
(24, 100363, 'HP Pavilion 15-eg2057TU i5 1240P/6K787PA\r\n', '15.6 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '512 GB', '1.702 kg'),
(25, 100364, 'Asus Vivobook M1503QA-L1026W R5 5600H\r\n', '15.6 inch', 'Ryzen 5', 'AMD Radeon Graphics', '8 GB (1 stick of 8GB)', '512 GB', '1.7 kg'),
(26, 100365, 'Lenovo IdeaPad 5 Pro 16IAH7 i5 12500H/82SK008BVN\r\n', '16 inch', 'Core i5', 'Intel Iris Xe Graphics', '16 GB (1 stick of 16GB)', '512 GB', '1.95 kg'),
(27, 100366, 'MSI Modern 14 B11MOU-1031VN i7 1195G7\r\n', '14 inch', 'Core i7', 'Intel Iris Xe Graphics', '8 GB ', '512 GB', '1.3 kg'),
(28, 100367, 'HP Pavilion 14-dv2034TU i5 1235U (6K770PA)\r\n', '16 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '512 GB', '1.41 kg'),
(29, 100368, 'Lenovo ThinkBook 14 G2 ITL i5 1135G7/20VD00Y4VN\r\n', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB ', '512 GB', '1.4 kg'),
(30, 100369, 'MSI Gaming Katana GF66 12UCK-815VN i5 12450H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.25 kg'),
(31, 100370, 'Asus TUF Gaming FX507ZE-HN093W i7 12700H\r\n', '15.6 inch', 'Core i7', 'NVIDIA GeForce RTX 3050 Ti 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.2 kg'),
(32, 100371, 'Lenovo Gaming Legion 5 15ARH7 R5 6600H/82RE002VVN\n', '15.6 inch', 'Ryzen 5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.35 kg'),
(33, 100372, 'Asus Vivobook A515EA-BQ3013W i3 1115G4\r\n', '15.6 inch', 'Core i3', 'Intel UHD Graphics', '8 GB ', '256 GB', '1.8 kg'),
(34, 100373, 'MSI Modern 14 B11MOU-1030VN i3 1115G4/8GB/256GB/14\"FHD/Win 11\n', '14 inch', 'Core i3', 'Intel UHD Graphics', '8 GB ', '256 GB', '1.3 kg'),
(35, 100374, 'MSI Gaming GF63 Thin 11SC-666VN i5 11400H\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB (1 stick of 8GB)', '512 GB', '1.86 kg'),
(36, 100375, 'Asus Expertbook B1400CEAE-EB3182W i5 1135G7', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (1 stick of 8GB)', '512 GB', '1.452 kg'),
(37, 100376, 'HP Pavilion 15-eg2058TU i5-1240P/6K788PA\r\n', '15.6 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '256 GB', '1.702 kg'),
(38, 100377, 'HP 15s-fq5080TU i5-1235U/6K7A0PA\r\n', '15.6 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '256 GB', '1.69 kg'),
(39, 100378, 'HP 15s-fq5145TU i7-1255U/76B24PA\r\n', '15.6 inch', 'Core i7', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '256 GB', '1.69 kg'),
(40, 100379, 'Asus Vivobook X415E-EK1387W i3 1115G4\r\n', '14 inch', 'Core i3', 'Intel UHD Graphics', '8 GB (1 stick of 8GB)', '256 GB', '1.6 kg'),
(41, 100380, 'HP Pavilion 14-dv2035TU i5 1235U/6K771PA\r\n', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '256 GB', '1.41 kg'),
(42, 100381, 'Dell Gaming G15 5515 R7 5800H (70266674)\r\n', '15.6 inch', 'Ryzen 7', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.81 kg'),
(43, 100382, 'Dell Gaming G15 5511 i5 11400H (70266676)\r\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce RTX 3050 4GB', '8 GB ', '256 GB', '2.81 kg'),
(44, 100383, 'Asus TUF Gaming FA507RC-HN051W R7 6800H\r\n', '15.6 inch', 'Ryzen 7', 'NVIDIA GeForce RTX 3050 4GB', '8 GB (1 stick of 8GB)', '512 GB', '2.2 kg'),
(45, 100384, 'Acer Nitro Gaming AN515-45-R6EV R5 5600H (NH.QBMSV.006)\n', '15.6 inch', 'Ryzen 5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB ', '512 GB', '2.2 kg'),
(46, 100385, 'HP Pavilion 15-eg2055TU i7 1260P/6K785PA\r\n', '15.6 inch', 'Core i7', 'Intel Iris Xe Graphics', '8 GB (2 sticks of 4GB)', '512 GB', '1.72 kg'),
(47, 100386, 'Lenovo Yoga 7-14ACN6 R7 5800U (82N7002LVN)\r\n', '14 inch', 'Ryzen 7', 'AMD Radeon Graphics', '8 GB ', '512 GB', '1.45 kg'),
(48, 100387, 'Dell Inspiron 14 N5420 i5 1235U (P157G001ASL)\r\n', '14 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB (1 stick of 8GB)', '256 GB', '1.55 kg'),
(49, 100388, 'Acer Nitro Gaming AN515-57-5669 i5 11400H (NH.QEHSV.001)\n', '15.6 inch', 'Core i5', 'NVIDIA GeForce GTX 1650 4GB', '8 GB ', '512 GB', '2.2 kg'),
(50, 100389, 'HP Envy 13-ba1536TU i5 1135G7 (4U6M5PA)\r\n', '13.3 inch', 'Core i5', 'Intel Iris Xe Graphics', '8 GB ', '512 GB', '1.3 kg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_informations`
--
ALTER TABLE `product_informations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_parameters`
--
ALTER TABLE `product_parameters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_informations`
--
ALTER TABLE `product_informations`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `product_parameters`
--
ALTER TABLE `product_parameters`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
