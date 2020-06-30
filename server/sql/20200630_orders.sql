-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-30 10:26:06
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.6

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
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL COMMENT '訂單編號',
  `userId` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '買家id',
  `total` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '訂單總金額',
  `orderRemark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '訂單備註',
  `payment` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '付款方式',
  `delivery` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '配送方式',
  `paymentState` int(3) NOT NULL DEFAULT 1 COMMENT '付款狀態',
  `deliveryState` int(3) NOT NULL DEFAULT 1 COMMENT '配送狀態',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='結帳資料表';

--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `total`, `orderRemark`, `payment`, `delivery`, `paymentState`, `deliveryState`, `created_at`, `updated_at`) VALUES
(1000520520, '3', '15900', '請交樓下給管理員', '2', '3', 2, 2, '2020-06-30 15:09:35', '2020-06-30 16:19:35'),
(1000520521, '2', '15900', '白天沒人收', '2', '4', 1, 1, '2020-06-30 16:25:07', '2020-06-30 16:25:07');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=1000520522;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
