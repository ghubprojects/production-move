-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bigcorp
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productparams`
--

DROP TABLE IF EXISTS `productparams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productparams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productCode` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `screen` varchar(255) DEFAULT NULL,
  `CPU` varchar(255) DEFAULT NULL,
  `VGA` varchar(255) DEFAULT NULL,
  `RAM` varchar(255) DEFAULT NULL,
  `SSD` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productparams`
--

LOCK TABLES `productparams` WRITE;
/*!40000 ALTER TABLE `productparams` DISABLE KEYS */;
INSERT INTO `productparams` VALUES (4,'100340','Gigabyte Gaming G5 GE i5 12500H (51VN263SH)','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','1.9 kg'),(5,'100341','Asus TUF Gaming FX517ZC-HN077W i5 12450H\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.0 kg'),(6,'100342','Lenovo Gaming IdeaPad 3 15IAH7 i5 12500H/82S900H2VN\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','16 GB (2 sticks of 8GB)','512 GB','2.25 kg'),(7,'100343','Asus TUF Gaming FX517ZE-HN045W i5 12450H\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 Ti 4GB','8 GB ','512 GB','2.0 kg'),(8,'100344','Dell Inspiron 16 N5620 i5 1240P/N6I5003W1\r\n','16 inch','Core i5','NVIDIA GeForce MX570 2GB','16 GB (2 sticks of 8GB)','512 GB','1.97 kg'),(9,'100345','MSI Gaming Katana GF66 12UCK-805VN i7 12650H\r\n','15.6 inch','Core i7','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.25 kg'),(10,'100346','Lenovo Yoga Slim 7 Pro 14IHU5O i5 11300H/82NH00AFVN\r\n','14 inch','Core i5','Intel Iris Xe Graphics','16 GB ','512 GB','1.4 kg'),(11,'100347','Laptop Lenovo IdeaPad 5 Pro 16IAH7 i7-12700H/82SK008CVN\r\n','16 inch','Core i7','Intel Iris Xe Graphics','16 GB (2 sticks of 8GB)','512 GB','1.95 kg'),(12,'100348','Asus Gaming TUF FX517ZM-HN480W i7 12650H\r\n','15.6 inch','Core i7','NVIDIA GeForce RTX 3060 6GB','8 GB (1 stick of 8GB)','512 GB','2.0 kg'),(13,'100349','Acer Nitro Gaming 5 AN515-58-52SP i5 12500H (NH.QFHSV.001)\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.5 kg'),(14,'100350','Asus TUF Gaming FX506LHB-HN188W i5 10300H','15.6 inch','Core i5','NVIDIA GeForce GTX 1650 4GB','8 GB (1 stick of 8GB)','512 GB','2.3 kg'),(15,'100351','MSI Gaming GF63 Thin 11SC-1090VN i5 11400H\r\n','15.6 inch','Core i5','NVIDIA GeForce GTX 1650 4GB','8 GB (1 stick of 8GB)','512 GB','1.86 kg'),(16,'100352','MSI Modern 14 B11MOU-1028VN i3 1115G4\r\n','14 inch','Core i3','Intel UHD Graphics','8 GB ','256 GB','1.3 kg'),(17,'100353','HP 15s-fq2663TU i3 1115G4/6K796PA\r\n','15.6 inch','Core i3','Intel UHD Graphics','4 GB (1 stick of 4GB)','256 GB','1.7 kg'),(18,'100354','Asus Vivobook X515EA-BR2045W i3 1115G4\r\n','15.6 inch','Core i3','Intel UHD Graphics','4 GB','512 GB','1.8 kg'),(19,'100355','Asus Gaming ROG G513IC-HN729W R7 4800H\r\n','15.6 inch','Ryzen 7','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.1 kg'),(20,'100356','MSI Gaming GF63 Thin 11SC-663VN i7 11800H\r\n','15.6 inch','Core i7','NVIDIA GeForce GTX 1650 Max-Q 4GB','8 GB ','512 GB','1.86 kg'),(21,'100357','Acer Nitro Gaming AN515-57-54MV i5 11400H (NH.QENSV.003)\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.2 kg'),(22,'100358','MSI GF63 Thin 11UC 444VN i5 11400H\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB ','512 GB','1.86 kg'),(23,'100359','Asus TUF Gaming FA506IHRB-HN019W R5 4600H\r\n','15.6 inch','Ryzen 5','NVIDIA GeForce GTX 1650 4GB','8 GB (1 stick of 8GB)','512 GB','2.3 kg'),(24,'100360','Asus Vivobook M1403QA-LY022W R5 5600H\r\n','14 inch','Ryzen 5','AMD Radeon Graphics','8 GB (1 stick of 8GB)','512 GB','1.6 kg'),(25,'100361','MSI Modern 15 A5M 235VN R7 5700U Win 11\r\n','15.6 inch','Ryzen 7','AMD Radeon Graphics','8 GB ','512 GB','1.6 kg'),(26,'100362','Lenovo IdeaPad 3 14IAU7 i5-1235U/(82RJ001DVN)\r\n','14 inch','Core i5','Intel Iris Xe Graphics','8 GB ','512 GB','1.63 kg'),(27,'100363','HP Pavilion 15-eg2057TU i5 1240P/6K787PA\r\n','15.6 inch','Core i5','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','512 GB','1.702 kg'),(28,'100364','Asus Vivobook M1503QA-L1026W R5 5600H\r\n','15.6 inch','Ryzen 5','AMD Radeon Graphics','8 GB (1 stick of 8GB)','512 GB','1.7 kg'),(29,'100365','Lenovo IdeaPad 5 Pro 16IAH7 i5 12500H/82SK008BVN\r\n','16 inch','Core i5','Intel Iris Xe Graphics','16 GB (1 stick of 16GB)','512 GB','1.95 kg'),(30,'100366','MSI Modern 14 B11MOU-1031VN i7 1195G7\r\n','14 inch','Core i7','Intel Iris Xe Graphics','8 GB ','512 GB','1.3 kg'),(31,'100367','HP Pavilion 14-dv2034TU i5 1235U (6K770PA)\r\n','16 inch','Core i5','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','512 GB','1.41 kg'),(32,'100368','Lenovo ThinkBook 14 G2 ITL i5 1135G7/20VD00Y4VN\r\n','14 inch','Core i5','Intel Iris Xe Graphics','8 GB ','512 GB','1.4 kg'),(33,'100369','MSI Gaming Katana GF66 12UCK-815VN i5 12450H\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.25 kg'),(34,'100370','Asus TUF Gaming FX507ZE-HN093W i7 12700H\r\n','15.6 inch','Core i7','NVIDIA GeForce RTX 3050 Ti 4GB','8 GB (1 stick of 8GB)','512 GB','2.2 kg'),(35,'100371','Lenovo Gaming Legion 5 15ARH7 R5 6600H/82RE002VVN\n','15.6 inch','Ryzen 5','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.35 kg'),(36,'100372','Asus Vivobook A515EA-BQ3013W i3 1115G4\r\n','15.6 inch','Core i3','Intel UHD Graphics','8 GB ','256 GB','1.8 kg'),(37,'100373','MSI Modern 14 B11MOU-1030VN i3 1115G4/8GB/256GB/14\"FHD/Win 11\n','14 inch','Core i3','Intel UHD Graphics','8 GB ','256 GB','1.3 kg'),(38,'100374','MSI Gaming GF63 Thin 11SC-666VN i5 11400H\r\n','15.6 inch','Core i5','NVIDIA GeForce GTX 1650 4GB','8 GB (1 stick of 8GB)','512 GB','1.86 kg'),(39,'100375','Asus Expertbook B1400CEAE-EB3182W i5 1135G7','14 inch','Core i5','Intel Iris Xe Graphics','8 GB (1 stick of 8GB)','512 GB','1.452 kg'),(40,'100376','HP Pavilion 15-eg2058TU i5-1240P/6K788PA\r\n','15.6 inch','Core i5','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','256 GB','1.702 kg'),(41,'100377','HP 15s-fq5080TU i5-1235U/6K7A0PA\r\n','15.6 inch','Core i5','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','256 GB','1.69 kg'),(42,'100378','HP 15s-fq5145TU i7-1255U/76B24PA\r\n','15.6 inch','Core i7','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','256 GB','1.69 kg'),(43,'100379','Asus Vivobook X415E-EK1387W i3 1115G4\r\n','14 inch','Core i3','Intel UHD Graphics','8 GB (1 stick of 8GB)','256 GB','1.6 kg'),(44,'100380','HP Pavilion 14-dv2035TU i5 1235U/6K771PA\r\n','14 inch','Core i5','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','256 GB','1.41 kg'),(45,'100381','Dell Gaming G15 5515 R7 5800H (70266674)\r\n','15.6 inch','Ryzen 7','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.81 kg'),(46,'100382','Dell Gaming G15 5511 i5 11400H (70266676)\r\n','15.6 inch','Core i5','NVIDIA GeForce RTX 3050 4GB','8 GB ','256 GB','2.81 kg'),(47,'100383','Asus TUF Gaming FA507RC-HN051W R7 6800H\r\n','15.6 inch','Ryzen 7','NVIDIA GeForce RTX 3050 4GB','8 GB (1 stick of 8GB)','512 GB','2.2 kg'),(48,'100384','Acer Nitro Gaming AN515-45-R6EV R5 5600H (NH.QBMSV.006)\n','15.6 inch','Ryzen 5','NVIDIA GeForce GTX 1650 4GB','8 GB ','512 GB','2.2 kg'),(49,'100385','HP Pavilion 15-eg2055TU i7 1260P/6K785PA\r\n','15.6 inch','Core i7','Intel Iris Xe Graphics','8 GB (2 sticks of 4GB)','512 GB','1.72 kg'),(50,'100386','Lenovo Yoga 7-14ACN6 R7 5800U (82N7002LVN)\r\n','14 inch','Ryzen 7','AMD Radeon Graphics','8 GB ','512 GB','1.45 kg'),(51,'100387','Dell Inspiron 14 N5420 i5 1235U (P157G001ASL)\r\n','14 inch','Core i5','Intel Iris Xe Graphics','8 GB (1 stick of 8GB)','256 GB','1.55 kg'),(52,'100388','Acer Nitro Gaming AN515-57-5669 i5 11400H (NH.QEHSV.001)\n','15.6 inch','Core i5','NVIDIA GeForce GTX 1650 4GB','8 GB ','512 GB','2.2 kg'),(53,'100389','HP Envy 13-ba1536TU i5 1135G7 (4U6M5PA)\r\n','13.3 inch','Core i5','Intel Iris Xe Graphics','8 GB ','512 GB','1.3 kg');
/*!40000 ALTER TABLE `productparams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-30 15:29:50
