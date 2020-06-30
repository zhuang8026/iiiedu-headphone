-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-29 20:25:04
-- 伺服器版本： 10.4.13-MariaDB
-- PHP 版本： 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `otis_store`
--

-- --------------------------------------------------------

--
-- 資料表結構 `blogs_reply_reply`
--

CREATE TABLE `blogs_reply_reply` (
  `b_r_rid` smallint(11) NOT NULL COMMENT '回文回覆編號',
  `b_rid` smallint(11) NOT NULL COMMENT '回文編號',
  `id` smallint(11) NOT NULL COMMENT '會員編號',
  `r_r_nick` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回文回覆者暱稱',
  `b_r_r_content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回文回覆內容',
  `b_r_r_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '回文回覆日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blogs_reply_reply`
--
ALTER TABLE `blogs_reply_reply`
  ADD PRIMARY KEY (`b_r_rid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blogs_reply_reply`
--
ALTER TABLE `blogs_reply_reply`
  MODIFY `b_r_rid` smallint(11) NOT NULL AUTO_INCREMENT COMMENT '回文回覆編號';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
