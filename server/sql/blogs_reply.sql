-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-29 20:24:53
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
-- 資料表結構 `blogs_reply`
--

CREATE TABLE `blogs_reply` (
  `b_rid` smallint(11) NOT NULL COMMENT '回文編號',
  `blogId` smallint(11) NOT NULL COMMENT '部落格編號',
  `id` smallint(11) NOT NULL COMMENT '會員編號',
  `r_nick` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回文者暱稱',
  `b_r_content` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '回文內容',
  `b_r_replys` smallint(11) NOT NULL COMMENT '回文回復次數',
  `b_r_date` datetime NOT NULL DEFAULT current_timestamp() COMMENT '回文日期'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blogs_reply`
--

INSERT INTO `blogs_reply` (`b_rid`, `blogId`, `id`, `r_nick`, `b_r_content`, `b_r_replys`, `b_r_date`) VALUES
(1, 104, 0, '訪客', 'testtesttesttest', 0, '2020-06-29 23:59:29'),
(2, 104, 0, '訪客', 'testtesttesttest', 0, '2020-06-30 00:01:51'),
(3, 104, 0, '訪客', 'testtesttesttest', 0, '2020-06-30 00:01:53'),
(4, 104, 0, '訪客', 'testtesttesttest', 0, '2020-06-30 00:14:24'),
(5, 104, 0, '訪客', 'testtesttesttest', 0, '2020-06-30 00:14:26'),
(12, 83, 0, '訪客', '測試一下', 0, '2020-06-30 00:55:43'),
(18, 83, 0, '訪客', '6666', 0, '2020-06-30 01:24:47'),
(19, 83, 0, '訪客', '555', 0, '2020-06-30 01:27:39'),
(20, 83, 0, '訪客', '1111', 0, '2020-06-30 01:32:56'),
(21, 98, 0, '訪客', '@@', 0, '2020-06-30 01:36:16'),
(22, 98, 0, '訪客', 'test', 0, '2020-06-30 01:36:28'),
(23, 97, 0, '訪客', 'test', 0, '2020-06-30 01:50:23'),
(24, 100, 0, '訪客', 'testtest', 0, '2020-06-30 02:24:21');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blogs_reply`
--
ALTER TABLE `blogs_reply`
  ADD PRIMARY KEY (`b_rid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blogs_reply`
--
ALTER TABLE `blogs_reply`
  MODIFY `b_rid` smallint(11) NOT NULL AUTO_INCREMENT COMMENT '回文編號', AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
