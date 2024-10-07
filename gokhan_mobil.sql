-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 04 Eki 2020, 09:46:03
-- Sunucu sürümü: 10.3.17-MariaDB
-- PHP Sürümü: 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `gokhan_mobil`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ayarlar`
--

CREATE TABLE `ayarlar` (
  `id` int(11) NOT NULL,
  `MisGirisler` enum('e','h') CHARACTER SET latin5 NOT NULL DEFAULT 'h',
  `ResimGonder` enum('e','h','d') CHARACTER SET latin5 NOT NULL DEFAULT 'e',
  `SesGonder` enum('e','h','d') CHARACTER SET latin5 NOT NULL DEFAULT 'e',
  `YouTubeGonder` enum('e','h','d') CHARACTER SET latin5 NOT NULL DEFAULT 'e',
  `BasKonusGonder` enum('e','h','d') CHARACTER SET latin5 NOT NULL DEFAULT 'e',
  `OzelMesajGonder` enum('e','h','d') CHARACTER SET latin5 NOT NULL DEFAULT 'e',
  `radyokodu` varchar(255) NOT NULL,
  `sitetitle` varchar(800) NOT NULL,
  `sitedescription` varchar(800) NOT NULL,
  `sitekeyword` varchar(800) NOT NULL,
  `googlemeta` varchar(500) NOT NULL,
  `siteismi` varchar(100) NOT NULL,
  `anasayfayazi` text NOT NULL,
  `anaresim` varchar(500) NOT NULL,
  `radyoistek` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `ayarlar`
--

INSERT INTO `ayarlar` (`id`, `MisGirisler`, `ResimGonder`, `SesGonder`, `YouTubeGonder`, `BasKonusGonder`, `OzelMesajGonder`, `radyokodu`, `sitetitle`, `sitedescription`, `sitekeyword`, `googlemeta`, `siteismi`, `anasayfayazi`, `anaresim`, `radyoistek`) VALUES
(1, 'h', 'e', 'e', 'e', 'e', 'e', 'https://radio.radyotescil.net/8088/stream', 'GooGLeSeSLi | Mobil Sesli | Mobil Sohbet', 'GooGLeSeSLi | Mobil Sesli | Mobil Sohbet', 'mobil sesli, mobil sohbet, sesli chat, google sohbet, google sesli', '', 'GooGLeSeSLi', '<a target=\"_blank\" href=\"https://www.googlesesli.com\">\n<img style=\"LEFT: 0px; POSITION: absolute; TOP: 0px\" alt=\"TÃœRKÄ°YE CANIM FEDA\" border=\"0\"     src=\"https://i.hizliresim.com/Uip2OC.png\" /><center>              <span style=\"text-decoration: none\">                                                                                                                                                                                                                                                                                                      \n</span>\n<a target=\"_blank\" href=\"https://api.whatsapp.com/send?phone=+905384018058&text=&source=&data=&app_absent=\">\n<img src=\"https://i.hizliresim.com/esGkyq.png\" style=\"position:fixed; top: 0px;right:0px;border:none;z-index:5; background-color: transparent;\" width=\"75\" height=\"75\"/></a><p style=\"color: rgb(0, 0, 0); font-family: Arial; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-style: initial; text-decoration-color: initial; text-align: center;\">\n<p align=\"center\">\n<img border=\"0\" src=\"https://i.hizliresim.com/Vc8KYs.png\" width=\"374\" height=\"47\"></p>\n<p align=\"center\">\n<img src=\"https://i.imgyukle.com/2020/02/14/naco6A.png\" width=\"50\"></b></p>\n<p align=\"center\"><b><font size=\"5\"><font color=\"#FF0000\">KURUCU <br>\n********************</font> <br>\n《 LaNeTLy 》<br>\n<font color=\"#FF0000\">********************</font></font></b></p>\n<p align=\"center\">\n<img border=\"0\" src=\"https://i.hizliresim.com/EJdOjF.png\" width=\"355\" height=\"43\"></p>\n<p align=\"center\">\n	<img src=\"https://i.hizliresim.com/0r2PQZ.gif\" width=\"220\"></p>\n<p align=\"center\"><b><font size=\"5\"><font color=\"#FF0000\">********************<br>\nRadyo SorumLusu </font><br>《 LaNeTLy 》 <br>\n<font color=\"#FF0000\">********************</font></font></b></p><p align=\"center\"><b><font size=\"5\"> </font>Türkiyenin En büyük\n<font color=\"#FF0000\">Mobil Sohbet</font> Platformu. <br>\nGünümüzde <font color=\"#FF0000\">sohbet odaları</font> internet üzerinden en \nhızlı arkadaş bulma siteleri olarak kullanılmaktadır. <br>\nsizlerin hem eğlenip hemde hızlı bir şekilde <font color=\"#FF0000\">bay ve bayan \narkadaş </font>bulabileceğiniz<font color=\"#FF0000\"> bedava sohbet</font> \nhizmeti <br>\nsağlıyan bir <font color=\"#FF0000\">arkadaşlık</font> sitesidir. Chat sitemizde \nhem sesli sohbet hemde kameralı sohbet ederek yüzlerce <br>\ninsanla sohbet odalarımızda tanışma fırsatı yakalayabilirsiniz.\n<font color=\"#FF0000\">Mobil sohbet</font> odalarımız sizlere <br>\n7/24 ücretsiz hizmet sağlamaktadır. <br>\nMobil Chat, Kameralı <font color=\"#FF0000\">Chat, Sesli Sohbet</font>, Sohbet \nsitesi, Chat Odaları,<br>\nGörüntülü Sohbet, <font color=\"#FF0000\">Mobil Sohbet, Sohbet, Chat, Canlı Sohbet</font>, \nÜcretsiz Sohbet, <br>\nSitemiz Bir Aile Sitesidir Sohbet Odalarında Hakaret, küfür,<br>\nrencide edici davranışlarda Bulunmak Yasaktır, Reklam Vermek, <br>\n<font color=\"#FF0000\">İletişim Adresi vermek Yasaktır</font></b></p>\n<p align=\"center\">\n<img border=\"0\" src=\"https://i.hizliresim.com/MwG97T.png\" width=\"187\" height=\"159\"></p>', 'anaresim-1593364245860.jpg', '');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `ban_listesi`
--

CREATE TABLE `ban_listesi` (
  `id` int(9) NOT NULL,
  `banlayan` varchar(120) NOT NULL,
  `banlanan` varchar(50) NOT NULL,
  `banlananip` varchar(50) NOT NULL,
  `SuperBan` varchar(60) NOT NULL,
  `cihaztespit` varchar(50) NOT NULL,
  `bantarihi` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `durum_mod`
--

CREATE TABLE `durum_mod` (
  `id` int(11) NOT NULL,
  `durumadi` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `durum_mod`
--

INSERT INTO `durum_mod` (`id`, `durumadi`) VALUES
(1, '⛔️ Görünmez'),
(2, '✔️ Çevrimiçi '),
(3, '⌛ Meşgul '),
(4, '♚ Dönecek ♚'),
(5, '☠ Ekranda Yok ☠'),
(6, '♚ Tv İzliyor ♚'),
(7, '♚ Dışarda ♚'),
(8, '☎ Telefonda ☎'),
(9, '♚ Çalışıyor ♚'),
(10, '♬ Müzik Dinliyor ♬'),
(11, '☊ Dj Yayında ☊'),
(12, '♚ Uyuyorum ♚'),
(13, '⚽️ Oyunda ⚽️');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `giris_kayitlari`
--

CREATE TABLE `giris_kayitlari` (
  `id` int(12) NOT NULL,
  `rumuz` varchar(50) NOT NULL,
  `rumuz2` varchar(50) NOT NULL,
  `yetki` int(4) DEFAULT NULL,
  `statu` varchar(100) NOT NULL,
  `cinsiyet` enum('e','k') NOT NULL DEFAULT 'e',
  `ip` varchar(20) NOT NULL,
  `mobile` enum('e','h') NOT NULL DEFAULT 'h',
  `tarih` int(10) NOT NULL,
  `tarih_date` varchar(50) NOT NULL,
  `tarih_goster` varchar(50) NOT NULL,
  `onceki_rumuzlar` text NOT NULL,
  `aid` varchar(255) NOT NULL,
  `mobilemi` varchar(100) NOT NULL,
  `appmi` varchar(100) NOT NULL,
  `appmiID` varchar(250) NOT NULL,
  `browser` varchar(200) NOT NULL,
  `isletim_sistemi` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

--
-- Tablo döküm verisi `giris_kayitlari`
--

INSERT INTO `giris_kayitlari` (`id`, `rumuz`, `rumuz2`, `yetki`, `statu`, `cinsiyet`, `ip`, `mobile`, `tarih`, `tarih_date`, `tarih_goster`, `onceki_rumuzlar`, `aid`, `mobilemi`, `appmi`, `appmiID`, `browser`, `isletim_sistemi`) VALUES
(9, 'Yigit', '0', 0, 'Misafir', 'e', '188.119.39.85', 'h', 1593948235, '2020-07-05 07:23:55', '5 Temmuz 2020 / 07:23:55', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 83.0.4103.116', 'Windows NT 4.0'),
(10, 'Yigit', '0', 0, 'Misafir', 'e', '188.119.39.85', 'h', 1593948524, '2020-07-05 07:28:43', '5 Temmuz 2020 / 07:28:43', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 83.0.4103.116', 'Windows NT 4.0'),
(11, 'User-765', '0', 0, 'Misafir', 'e', '176.40.230.6', 'h', 1595639258, '2020-07-25 04:7:37', '25 Temmuz 2020 / 04:07:37', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 84.0.4147.89', 'Windows NT 4.0'),
(12, 'arsız1bela', '0', 0, 'Misafir', 'e', '176.40.231.83', 'h', 1596215475, '2020-07-31 20:11:15', '31 Temmuz 2020 / 20:11:15', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 84.0.4147.105', 'Windows NT 4.0'),
(13, 'arsız1bela', '0', 0, 'Misafir', 'e', '176.40.231.83', 'h', 1596215934, '2020-07-31 20:18:54', '31 Temmuz 2020 / 20:18:54', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 84.0.4147.105', 'Windows NT 4.0'),
(14, 'User-57', '0', 0, 'Misafir', 'e', '212.253.154.104', 'h', 1596552184, '2020-08-04 17:43:04', '4 Ağustos 2020 / 17:43:04', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 84.0.4147.105', 'Windows NT 4.0'),
(15, 'edanur', '0', 0, 'Misafir', 'k', '176.236.195.59', 'e', 1596906628, '2020-08-08 20:10:27', '8 Ağustos 2020 / 20:10:27', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 84.0.4147.111', 'Android 7.0'),
(16, 'Hepchat-53', '0', 0, 'Misafir', 'e', '176.40.231.243', 'h', 1596997850, '2020-08-09 21:30:49', '9 Ağustos 2020 / 21:30:49', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 84.0.4147.105', 'Windows NT 4.0'),
(17, 'Ali', '0', 0, 'Misafir', 'e', '176.240.233.181', 'h', 1597012716, '2020-08-10 01:38:35', '10 Ağustos 2020 / 01:38:35', 'onceki rumuzlar', '', '0', '0', '', 'Opera ve Chrome 68.0.3618.206', 'Windows NT 4.0'),
(18, 'jjl', '0', 0, 'Misafir', 'e', '88.241.52.170', 'h', 1601397770, '2020-09-29 12:12:12', '29 Eylül 2020 / 12:12:12', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(19, 'mogff', '0', 0, 'Misafir', 'e', '185.128.120.204', 'h', 1601398789, '2020-09-29 12:12:12', '29 Eylül 2020 / 12:12:12', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(20, 'hmmmm', '0', 0, 'Misafir', 'e', '182.182.49.87', 'h', 1601402560, '2020-09-29 14:14:14', '29 Eylül 2020 / 14:14:14', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(21, 'hmmmm', '0', 0, 'Misafir', 'e', '182.182.49.87', 'h', 1601402561, '2020-09-29 14:14:14', '29 Eylül 2020 / 14:14:14', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(22, 'nijio', '0', 0, 'Misafir', 'e', '176.30.230.35', 'h', 1601403304, '2020-09-29 14:14:14', '29 Eylül 2020 / 14:14:14', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 86.0.4240.42', 'Windows 7'),
(23, 'Erdem', '0', 0, 'Misafir', 'e', '176.55.167.113', 'e', 1601405537, '2020-09-29 14:14:14', '29 Eylül 2020 / 14:14:14', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(24, 'Erdem', '0', 0, 'Misafir', 'e', '176.55.167.113', 'e', 1601405709, '2020-09-29 14:14:14', '29 Eylül 2020 / 14:14:14', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(25, 'virane', '0', 0, 'Misafir', 'e', '178.246.27.92', 'e', 1601414742, '2020-09-29 17:17:17', '29 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(26, 'seyyar_user', '0', 0, 'Misafir', 'e', '37.154.220.206', 'e', 1601415548, '2020-09-29 17:17:17', '29 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.101', 'Android 6.0.1'),
(27, 'Miu_miu', '0', 0, 'Misafir', 'k', '95.12.91.4', 'e', 1601415679, '2020-09-29 17:17:17', '29 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(28, 'Barmen41', '0', 0, 'Misafir', 'e', '151.135.13.184', 'e', 1601438253, '2020-09-29 23:23:23', '29 Eylül 2020 / 23:23:23', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.81', 'Android 10'),
(29, 'VİRANE', '0', 0, 'Misafir', 'e', '178.246.27.92', 'e', 1601452812, '2020-09-30 04:4:04', '30 Eylül 2020 / 04:04:04', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(30, 'VİRANE', '0', 0, 'Misafir', 'e', '178.246.27.92', 'e', 1601462466, '2020-09-30 06:6:06', '30 Eylül 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(31, 'BaRAN', '0', 0, 'Misafir', 'e', '5.24.133.226', 'e', 1601462475, '2020-09-30 06:6:06', '30 Eylül 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 69.0.3497.100', 'Android 8.1.0'),
(32, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601464924, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(33, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601464975, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(34, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465132, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(35, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465140, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(36, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465175, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(37, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465216, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(38, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465257, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(39, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465307, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(40, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465327, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(41, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465401, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(42, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465430, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(43, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465450, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(44, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465744, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(45, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465788, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(46, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465812, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(47, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465853, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(48, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601465877, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(49, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466027, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(50, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466131, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(51, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466227, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(52, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466351, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(53, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466598, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(54, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466645, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(55, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466803, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(56, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466833, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(57, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601466951, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(58, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467090, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(59, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467127, '2020-09-30 07:7:07', '30 Eylül 2020 / 07:07:07', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(60, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467263, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(61, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467387, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(62, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467434, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(63, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467508, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(64, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467570, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(65, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467603, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(66, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467898, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(67, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467924, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(68, 'testt', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601467963, '2020-09-30 08:8:08', '30 Eylül 2020 / 08:08:08', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(69, 'erdem', '0', 0, 'Misafir', 'e', '88.236.64.248', 'h', 1601488019, '2020-09-30 13:13:13', '30 Eylül 2020 / 13:13:13', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(70, 'Barmen41', '0', 0, 'Misafir', 'k', '151.135.13.184', 'e', 1601493142, '2020-09-30 15:15:15', '30 Eylül 2020 / 15:15:15', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.81', 'Android 10'),
(71, 'Erdem', '0', 0, 'Misafir', 'e', '176.54.118.207', 'e', 1601494626, '2020-09-30 15:15:15', '30 Eylül 2020 / 15:15:15', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(72, 'erdem', '0', 0, 'Misafir', 'e', '188.125.160.27', 'h', 1601498937, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(73, 'test', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601498989, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(74, 'test', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601499080, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(75, 'test66', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601499120, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(76, 'test66', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601499231, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(77, 'erdem', '0', 0, 'Misafir', 'e', '188.125.160.27', 'h', 1601499255, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(78, 'erdem', '0', 0, 'Misafir', 'e', '188.125.160.27', 'h', 1601499316, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(79, 'Mir', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601499345, '2020-09-30 16:16:16', '30 Eylül 2020 / 16:16:16', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(80, 'test66', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601499911, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(81, 'Mir', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601499922, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(82, 'Mir', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601499933, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(83, 'test66', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601499963, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(84, 'Mir', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601499985, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(85, 'test66', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601500032, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(86, 'User-84066', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601500148, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(87, 'erdem', '0', 0, 'Misafir', 'e', '188.125.160.27', 'h', 1601500181, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(88, 'Mir', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601500305, '2020-09-30 17:17:17', '30 Eylül 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(89, 'VİRANE', '0', 0, 'Misafir', 'e', '188.57.25.75', 'e', 1601514632, '2020-09-30 21:21:21', '30 Eylül 2020 / 21:21:21', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(90, 'User-84066', '0', 0, 'Misafir', 'e', '88.227.61.106', 'h', 1601543804, '2020-10-01 05:5:05', '1 Ekim 2020 / 05:05:05', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows 7'),
(91, 'Dene', '0', 0, 'Misafir', 'e', '31.142.174.186', 'e', 1601544410, '2020-10-01 05:5:05', '1 Ekim 2020 / 05:05:05', 'onceki rumuzlar', '', '1', '0', '', 'Safari 604.1', 'iOS 12.4.0'),
(92, 'Dene', '0', 0, 'Misafir', 'e', '31.142.174.186', 'e', 1601544690, '2020-10-01 05:5:05', '1 Ekim 2020 / 05:05:05', 'onceki rumuzlar', '', '1', '0', '', 'Safari 604.1', 'iOS 12.4.0'),
(93, 'erdem', '0', 0, 'Misafir', 'e', '188.125.160.27', 'h', 1601591779, '2020-10-01 18:18:18', '1 Ekim 2020 / 18:18:18', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Windows NT 4.0'),
(94, 'ÖzGüR', '0', 0, 'Misafir', 'e', '46.154.209.4', 'e', 1601634503, '2020-10-02 06:6:06', '2 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 79.0.3945.116', 'Android 5.0.2'),
(95, 'ÖzGüR', '0', 0, 'Üye', 'e', '46.154.209.4', 'e', 1601634698, '2020-10-02 06:6:06', '2 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 79.0.3945.116', 'Android 5.0.2'),
(96, 'PIRLANTA', '0', 0, 'Misafir', 'k', '37.121.160.34', 'e', 1601634746, '2020-10-02 06:6:06', '2 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(97, 'EzGi', '0', 0, 'Misafir', 'k', '88.230.144.17', 'e', 1601635005, '2020-10-02 06:6:06', '2 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 10'),
(98, 'Denemer', '0', 0, 'Misafir', 'e', '178.247.24.25', 'e', 1601638345, '2020-10-02 07:7:07', '2 Ekim 2020 / 07:07:07', 'onceki rumuzlar', '', '1', '0', '', 'Safari 12.1.2', 'iOS 12.4.8'),
(99, 'VİRANE', '0', 0, 'Misafir', 'e', '24.133.252.113', 'e', 1601721810, '2020-10-03 06:6:06', '3 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(100, 'VİRANE', '0', 0, 'Üye', 'e', '24.133.252.113', 'e', 1601721969, '2020-10-03 06:6:06', '3 Ekim 2020 / 06:06:06', 'onceki rumuzlar', '', '1', '0', '', 'Chrome 85.0.4183.127', 'Android 9'),
(101, 'merhaba', '0', 0, 'Misafir', 'e', '81.214.105.88', 'h', 1601761207, '2020-10-03 17:17:17', '3 Ekim 2020 / 17:17:17', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 85.0.4183.121', 'Mac OS X 10_15_4'),
(102, 'mimubb', '0', 0, 'Misafir', 'e', '5.46.153.157', 'h', 1601765360, '2020-10-03 18:18:18', '3 Ekim 2020 / 18:18:18', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 86.0.4240.42', 'Windows 7'),
(103, 'mimubb', '0', 0, 'Misafir', 'e', '5.46.153.157', 'h', 1601765360, '2020-10-03 18:18:18', '3 Ekim 2020 / 18:18:18', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 86.0.4240.42', 'Windows 7'),
(104, 'mimubb', '0', 0, 'Misafir', 'e', '5.46.153.157', 'h', 1601765370, '2020-10-03 18:18:18', '3 Ekim 2020 / 18:18:18', 'onceki rumuzlar', '', '0', '0', '', 'Chrome 86.0.4240.42', 'Windows 7');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hareketler`
--

CREATE TABLE `hareketler` (
  `id` int(12) NOT NULL,
  `admin` varchar(20) NOT NULL,
  `hedef` varchar(100) NOT NULL,
  `islem` text NOT NULL,
  `tarih` varchar(50) NOT NULL,
  `tarihgoster` varchar(50) NOT NULL,
  `yetki` int(10) NOT NULL,
  `ip` varchar(122) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `odalar`
--

CREATE TABLE `odalar` (
  `id` int(12) NOT NULL,
  `adi` varchar(20) NOT NULL,
  `sifre` varchar(20) NOT NULL,
  `yazi` varchar(255) NOT NULL,
  `sahibi` varchar(20) NOT NULL,
  `fon` varchar(255) NOT NULL,
  `sohbeticrenk` varchar(6) NOT NULL,
  `sessiz` enum('e','h') NOT NULL DEFAULT 'h',
  `listesiralama` int(11) NOT NULL DEFAULT 100
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

--
-- Tablo döküm verisi `odalar`
--

INSERT INTO `odalar` (`id`, `adi`, `sifre`, `yazi`, `sahibi`, `fon`, `sohbeticrenk`, `sessiz`, `listesiralama`) VALUES
(1, 'Loby', '', 'GooGLeSeSLi Yeni Nesil Mobil Sohbet', '', 'odaresim-1601414584709.jpg', 'ffffff', 'h', 1),
(11, 'Gececiler', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 11),
(12, 'TımarHane', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 12),
(7, 'Son Durak', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 7),
(3, 'Sohbet', '', 'Oda Kuralı', '', 'odaresim-1601414626153.jpg', 'ffffff', 'h', 3),
(5, 'Aşıklar Parkı', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 5),
(16, 'İstanbul', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 16),
(14, 'Türküler', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 14),
(9, 'Avrupa', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 9),
(18, 'Gül Bahçesi', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 18),
(6, 'Siyaset', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 6),
(2, 'Canlı Müzik', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 2),
(8, 'Türkiyem', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 8),
(13, 'Arabesk', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 13),
(15, 'Her Telden', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 15),
(17, 'Yarışma', '', 'Oda Kuralı', '', 'odaresim-1601414641265.jpg', 'ffffff', 'h', 17),
(10, 'Çılgınlar', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 10),
(20, 'Sorun - Satış', '', 'Oda Kuralı', '', 'odaresim-1601414670932.jpg', 'ffffff', 'h', 19),
(101, 'Toplantı Odası', '', 'Meeting', '', '', 'ffffff', 'h', 20),
(4, 'Mobilciler', '', 'Oda Kuralı', '', '', 'ffffff', 'h', 4);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `uyeler`
--

CREATE TABLE `uyeler` (
  `id` int(12) NOT NULL,
  `rumuz` varchar(18) NOT NULL,
  `sifre` varchar(50) NOT NULL,
  `cinsiyet` enum('e','k') NOT NULL DEFAULT 'e',
  `yetki` int(3) NOT NULL DEFAULT 0,
  `resim` int(12) NOT NULL DEFAULT 0,
  `songiris` int(20) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `kayittarihi` int(20) NOT NULL,
  `uyekayittarihi` varchar(50) NOT NULL,
  `songiristarihi` varchar(50) NOT NULL,
  `uye_bitir` varchar(10) NOT NULL DEFAULT '12-12-2030',
  `kilit` enum('e','h') NOT NULL DEFAULT 'h',
  `ozel_mesaj` enum('e','h') NOT NULL DEFAULT 'h',
  `log_yetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `ban_yetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `ip_gorme` enum('e','h') NOT NULL DEFAULT 'h',
  `admin_hareketleri` enum('e','h') NOT NULL DEFAULT 'h',
  `oda_yonetimi` enum('e','h') NOT NULL DEFAULT 'h',
  `uye_yonetimi` enum('e','h') NOT NULL DEFAULT 'h',
  `genel_atma` enum('e','h') NOT NULL DEFAULT 'h',
  `nickdegis` enum('e','h') NOT NULL DEFAULT 'h',
  `koruma_altinda` enum('e','h') NOT NULL DEFAULT 'h',
  `flash` varchar(255) NOT NULL,
  `kuralli_ban` enum('e','h') NOT NULL DEFAULT 'h',
  `admin_ayarlar` enum('e','h') NOT NULL DEFAULT 'h',
  `sapkano` int(2) NOT NULL,
  `yetkigoster` enum('e','h') NOT NULL DEFAULT 'h',
  `catiyotkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `toplantiyetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `nickbar` varchar(255) NOT NULL,
  `admin_panel` enum('e','h') NOT NULL DEFAULT 'h',
  `rutbe_yonetimi` enum('e','h') NOT NULL DEFAULT 'h',
  `yetkiadi` varchar(200) NOT NULL,
  `yildizrengi` varchar(20) NOT NULL,
  `mute_yetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `atma_yetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `kamera_yetkisi` enum('e','h') NOT NULL DEFAULT 'h',
  `botdurum` int(11) NOT NULL,
  `botoda` varchar(250) NOT NULL,
  `botdurummodu` varchar(100) NOT NULL,
  `loglardagizle` enum('e','h') NOT NULL DEFAULT 'h'
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

--
-- Tablo döküm verisi `uyeler`
--

INSERT INTO `uyeler` (`id`, `rumuz`, `sifre`, `cinsiyet`, `yetki`, `resim`, `songiris`, `ip`, `kayittarihi`, `uyekayittarihi`, `songiristarihi`, `uye_bitir`, `kilit`, `ozel_mesaj`, `log_yetkisi`, `ban_yetkisi`, `ip_gorme`, `admin_hareketleri`, `oda_yonetimi`, `uye_yonetimi`, `genel_atma`, `nickdegis`, `koruma_altinda`, `flash`, `kuralli_ban`, `admin_ayarlar`, `sapkano`, `yetkigoster`, `catiyotkisi`, `toplantiyetkisi`, `nickbar`, `admin_panel`, `rutbe_yonetimi`, `yetkiadi`, `yildizrengi`, `mute_yetkisi`, `atma_yetkisi`, `kamera_yetkisi`, `botdurum`, `botoda`, `botdurummodu`, `loglardagizle`) VALUES
(136, 'VİRANE', 'ba4023f391d2c709045a627923d7f9b0', 'e', 0, 0, 1601721966, '24.133.252.113', 1601721932, '3 Ekim 2020 / 06:06:06', '3 Ekim 2020 / 06:06:06', '12-12-2030', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', '', 'h', 'h', 0, 'h', 'h', 'h', '', 'h', 'h', 'Üye', '000000', 'h', 'h', 'h', 0, '', '', 'h'),
(135, 'ÖzGüR', '2d15df5085b2adc0c8427f5d4f4ece57', 'e', 16, 0, 1601634695, '46.154.209.4', 1601634642, '2 Ekim 2020 / 06:06:06', '2 Ekim 2020 / 06:06:06', '12-12-2030', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'avatar_1601634874891.jpg', 'h', 'h', 15, 'h', 'h', 'h', 'bayrak', 'h', 'h', 'Root', '000000', 'h', 'h', 'h', 0, '', '', 'h'),
(134, 'GooGLeSeSLi', '82ee7e40a36660a0682979aafb3adf3b', 'e', 14, 0, 1601395934, '185.85.85.185', 1601395934, '29 Eylül 2020 / 12:12:12', '29 Eylül 2020 / 12:12:12', '12-12-2030', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', '', 'h', 'h', 14, 'h', 'h', 'h', 'bayrak', 'h', 'h', 'KingBoss ®', '3700ff', 'h', 'h', 'h', 1, 'Loby', '?? Çevrimiçi ', 'h');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `yetkiler`
--

CREATE TABLE `yetkiler` (
  `id` int(11) NOT NULL,
  `adi` varchar(25) NOT NULL,
  `rutbe` int(4) NOT NULL DEFAULT 0,
  `miksure` int(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin5;

--
-- Tablo döküm verisi `yetkiler`
--

INSERT INTO `yetkiler` (`id`, `adi`, `rutbe`, `miksure`) VALUES
(1, 'Üye', 0, 7200),
(2, 'Operatör', 1, 7200),
(3, 'Admin', 2, 7200),
(4, 'CoAdmin', 3, 7200),
(5, 'SüperAdmin', 4, 7200),
(6, 'ChatAdmin', 5, 7200),
(7, 'ChatMaster', 6, 7200),
(8, 'Agent', 7, 7200),
(9, 'SüperMaster', 8, 7200),
(10, 'SüperVisor', 9, 7200),
(11, 'King ®', 10, 7200),
(12, 'Ceo ®', 11, 7200),
(13, 'System  ®', 12, 7200),
(14, 'BigBoss ®', 13, 7200),
(15, 'KingBoss ®', 14, 7200),
(16, 'Ceo Lord ®', 15, 7200),
(17, 'Root', 16, 2800),
(18, 'System Root®', 17, 5000);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `yorumlar`
--

CREATE TABLE `yorumlar` (
  `yrmid` int(11) NOT NULL,
  `gonderenid` int(11) NOT NULL,
  `yorumalan_id` int(11) NOT NULL,
  `yorumalan_rmz_krp` varchar(250) NOT NULL,
  `alanadi` varchar(30) NOT NULL,
  `yorumkendisi` varchar(500) NOT NULL,
  `onay` int(11) NOT NULL,
  `yrm_tarih` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `ayarlar`
--
ALTER TABLE `ayarlar`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `ban_listesi`
--
ALTER TABLE `ban_listesi`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `durum_mod`
--
ALTER TABLE `durum_mod`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `giris_kayitlari`
--
ALTER TABLE `giris_kayitlari`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `hareketler`
--
ALTER TABLE `hareketler`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `odalar`
--
ALTER TABLE `odalar`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `uyeler`
--
ALTER TABLE `uyeler`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rumuz` (`rumuz`),
  ADD KEY `yetki` (`yetki`,`resim`,`songiris`,`kayittarihi`);

--
-- Tablo için indeksler `yetkiler`
--
ALTER TABLE `yetkiler`
  ADD UNIQUE KEY `adi` (`adi`),
  ADD UNIQUE KEY `rutbe` (`rutbe`),
  ADD KEY `id` (`id`);

--
-- Tablo için indeksler `yorumlar`
--
ALTER TABLE `yorumlar`
  ADD PRIMARY KEY (`yrmid`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `ayarlar`
--
ALTER TABLE `ayarlar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `ban_listesi`
--
ALTER TABLE `ban_listesi`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `durum_mod`
--
ALTER TABLE `durum_mod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Tablo için AUTO_INCREMENT değeri `giris_kayitlari`
--
ALTER TABLE `giris_kayitlari`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- Tablo için AUTO_INCREMENT değeri `hareketler`
--
ALTER TABLE `hareketler`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `odalar`
--
ALTER TABLE `odalar`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2294;

--
-- Tablo için AUTO_INCREMENT değeri `uyeler`
--
ALTER TABLE `uyeler`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;

--
-- Tablo için AUTO_INCREMENT değeri `yetkiler`
--
ALTER TABLE `yetkiler`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=898990;

--
-- Tablo için AUTO_INCREMENT değeri `yorumlar`
--
ALTER TABLE `yorumlar`
  MODIFY `yrmid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
