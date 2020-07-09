-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-09 06:16:50
-- 服务器版本： 10.4.11-MariaDB
-- PHP 版本： 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `chat`
--

-- --------------------------------------------------------

--
-- 表的结构 `chat_data`
--

CREATE TABLE `chat_data` (
  `id` int(11) NOT NULL COMMENT '流水號',
  `roomId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '房間編號',
  `loginId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memberId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '會員編號',
  `message` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '訊息內容',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '建立時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `chat_data`
--

INSERT INTO `chat_data` (`id`, `roomId`, `loginId`, `memberId`, `message`, `created_at`) VALUES
(1, 'E20030001', 'bbb', 'M20010002', '安安你好', '2020-03-28 11:09:26'),
(2, 'E20030001', 'aaa', 'M20010001', '安安你好安安你好安安你好', '2020-03-28 12:09:26'),
(3, 'E20030001', 'aaa', 'M20010001', 'E20040001', '2020-03-28 12:15:47'),
(19, 'E20030001', 'bbb', 'M20010002', '123', '2020-03-28 14:02:31'),
(36, 'E20030001', 'bbb', 'M20010002', '哈囉~', '2020-03-28 15:26:30'),
(37, 'E20030001', 'bbb', 'M20010002', '我好嗎', '2020-03-28 15:26:35'),
(38, 'E20030001', 'bbb', 'M20010002', '你好嗎', '2020-03-28 15:26:41'),
(39, 'E20030001', 'bbb', 'M20010002', '真D酷炫', '2020-03-28 15:28:17'),
(64, 'E20030001', 'bbb', 'M20010002', '讚', '2020-03-28 19:35:01'),
(65, 'E20030001', 'bbb', 'M20010002', '時間測試', '2020-03-28 19:57:20'),
(66, 'E20030001', 'bbb', 'M20010002', '123', '2020-03-28 20:23:37'),
(155, 'E20030001', 'bbb', 'M20010002', '哈囉', '2020-03-29 16:52:30'),
(156, 'E20030001', 'aaa', 'M20030001', '我再', '2020-03-29 16:53:36'),
(157, 'E20030001', 'aaa', 'M20030001', '在', '2020-03-29 16:53:40'),
(158, 'E20030001', 'ccc', 'M20030003', '3號', '2020-03-29 17:07:24'),
(159, 'E20030001', 'bbb', 'M20010002', '2號', '2020-03-29 17:07:27'),
(160, 'E20030001', 'aaa', 'M20030001', '1號', '2020-03-29 17:07:30'),
(161, 'E20030002', 'bbb', 'M20010002', '其他房間', '2020-03-29 17:08:05');

--
-- 转储表的索引
--

--
-- 表的索引 `chat_data`
--
ALTER TABLE `chat_data`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `chat_data`
--
ALTER TABLE `chat_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=162;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
