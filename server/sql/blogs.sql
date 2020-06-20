-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-20 14:51:10
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.4

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
-- 資料表結構 `blogs`
--

CREATE TABLE `blogs` (
  `blogId` int(11) NOT NULL COMMENT '流水號',
  `id` int(11) NOT NULL COMMENT '會員編號',
  `blogTitle` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '文章標題',
  `blogContent01` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '第一段內容',
  `blogContent01_img01` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '第一段第一張圖',
  `blogContent01_img02` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '第一段第二張圖',
  `blogContent01_img03` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '第一段第三張圖',
  `blogContent02` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '第二段內容',
  `blogContent02_img01` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '第二段第一張圖',
  `blogContent02_img02` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '第二段第二張圖',
  `blogContent02_img03` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '第二段第三張圖',
  `blogExpectedTime` datetime DEFAULT current_timestamp() COMMENT '預計發布時間',
  `blogPublishTime` datetime DEFAULT current_timestamp() COMMENT '發布時間',
  `blogUpdateTime` datetime DEFAULT current_timestamp() COMMENT '最後編輯時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `blogs`
--

INSERT INTO `blogs` (`blogId`, `id`, `blogTitle`, `blogContent01`, `blogContent01_img01`, `blogContent01_img02`, `blogContent01_img03`, `blogContent02`, `blogContent02_img01`, `blogContent02_img02`, `blogContent02_img03`, `blogExpectedTime`, `blogPublishTime`, `blogUpdateTime`) VALUES
(2, 1, 'user01第二篇', 'user01第二篇', 'user01第二篇', NULL, NULL, 'user01第二篇', 'user01第二篇', NULL, NULL, '2020-06-19 20:20:07', '2020-06-19 20:20:07', '2020-06-19 20:20:07'),
(3, 2, 'user02第一篇', 'user02第一篇', 'user02第一篇', NULL, NULL, 'user02第一篇', 'user02第一篇', NULL, NULL, '2020-06-19 20:21:25', '2020-06-19 20:21:25', '2020-06-19 20:21:25'),
(4, 2, 'user02第二篇', 'user02第二篇', 'user02第二篇', NULL, NULL, 'user02第二篇', 'user02第二篇', NULL, NULL, '2020-06-19 20:21:25', '2020-06-19 20:21:25', '2020-06-19 20:21:25'),
(5, 1, 'user01第三篇', 'user01第三篇', 'user01第三篇', NULL, NULL, 'user01第三篇', 'user01第三篇', NULL, NULL, '2020-06-19 20:22:11', '2020-06-19 20:22:11', '2020-06-19 20:22:11'),
(6, 5, 'user05第一篇', 'user05第一篇', 'user05第一篇', NULL, NULL, 'user05第一篇', 'user05第一篇', NULL, NULL, '2020-06-19 20:22:11', '2020-06-19 20:22:11', '2020-06-19 20:22:11'),
(7, 11, 'user11第一篇', 'user11第一篇', 'user11第一篇', NULL, NULL, 'user11第一篇', 'user11第一篇', NULL, NULL, '2020-06-19 20:22:51', '2020-06-19 20:22:51', '2020-06-19 20:22:51'),
(8, 8, 'user08第一篇', 'user08第一篇', 'user08第一篇', NULL, NULL, 'user08第一篇', 'user08第一篇', NULL, NULL, '2020-06-19 20:22:51', '2020-06-19 20:22:51', '2020-06-19 20:22:51'),
(9, 1, 'user01第四篇', 'user01第四篇', 'user01第四篇', NULL, NULL, 'user01第四篇', 'user01第四篇', NULL, NULL, '2020-06-19 20:24:47', '2020-06-19 20:24:47', '2020-06-19 20:24:47'),
(10, 10, 'user10第一篇', 'user10第一篇', 'user10第一篇', NULL, NULL, 'user10第一篇', 'user10第一篇', NULL, NULL, '2020-06-19 20:24:47', '2020-06-19 20:24:47', '2020-06-19 20:24:47'),
(11, 25, 'user25第一篇', 'user25第一篇', 'user25第一篇', NULL, NULL, 'user25第一篇', 'user25第一篇', NULL, NULL, '2020-06-19 20:25:26', '2020-06-19 20:25:26', '2020-06-19 20:25:26'),
(12, 19, 'user19第一篇', 'user19第一篇', 'user19第一篇', NULL, NULL, 'user19第一篇', 'user19第一篇', NULL, NULL, '2020-06-19 20:25:26', '2020-06-19 20:25:26', '2020-06-19 20:25:26'),
(13, 99, 'user99第一篇', 'user99第一篇', 'user99第一篇', NULL, NULL, 'user99第一篇', 'user99第一篇', NULL, NULL, '2020-06-19 20:27:02', '2020-06-19 20:27:02', '2020-06-19 20:27:02'),
(14, 2, 'user99第三篇', 'user99第三篇', 'user99第三篇', NULL, NULL, 'user99第三篇', 'user99第三篇', NULL, NULL, '2020-06-19 20:27:02', '2020-06-19 20:27:02', '2020-06-19 20:27:02'),
(15, 2, 'user02第四篇', 'user02第四篇', 'user02第四篇', NULL, NULL, 'user02第四篇', 'user02第四篇', NULL, NULL, '2020-06-19 20:28:11', '2020-06-19 20:28:11', '2020-06-19 20:28:11'),
(16, 22, 'user22第一篇', 'user22第一篇', 'user22第一篇', NULL, NULL, 'user22第一篇', 'user22第一篇', NULL, NULL, '2020-06-19 20:28:11', '2020-06-19 20:28:11', '2020-06-19 20:28:11'),
(17, 50, 'user50第一篇', 'user50第一篇', 'user50第一篇', NULL, NULL, 'user50第一篇', 'user50第一篇', NULL, NULL, '2020-06-19 20:29:35', '2020-06-19 20:29:35', '2020-06-19 20:29:35'),
(18, 66, 'user66第一篇', 'user66第一篇', 'user66第一篇', NULL, NULL, 'user66第一篇', 'user66第一篇', NULL, NULL, '2020-06-19 20:29:35', '2020-06-19 20:29:35', '2020-06-19 20:29:35'),
(21, 9999, '9999', '9999', '9999', NULL, NULL, '9999', '9999', NULL, NULL, '2020-06-20 17:10:49', '2020-06-20 17:10:49', '2020-06-20 17:10:49'),
(22, 9999, '9999', '9999', '9999', NULL, NULL, '9999', '9999', NULL, NULL, '2020-06-20 17:10:50', '2020-06-20 17:10:50', '2020-06-20 17:10:50'),
(23, 9999, '9999', '9999', '9999', NULL, NULL, '9999', '9999', NULL, NULL, '2020-06-20 17:10:50', '2020-06-20 17:10:50', '2020-06-20 17:10:50'),
(24, 9999, '9999', '9999', '9999', NULL, NULL, '9999', '9999', NULL, NULL, '2020-06-20 17:10:51', '2020-06-20 17:10:51', '2020-06-20 17:10:51'),
(25, 9999, '9988', '9999', '9999', NULL, NULL, '9999', '9999', NULL, NULL, '2020-06-20 19:10:14', '2020-06-20 19:10:14', '2020-06-20 19:10:14');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blogId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blogId` int(11) NOT NULL AUTO_INCREMENT COMMENT '流水號', AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
