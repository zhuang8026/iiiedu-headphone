SELECT `A_id`, `A_name`,

(SELECT COUNT(*) FROM `tableB` WHERE  `tableB`.`A_id`=`tableA`.`A_id`) AS `B_count`,  

(SELECT COUNT(*) FROM `tableC` WHERE  `tableC`.`A_id`=`tableA`.`A_id`) AS `C_count`,  

FROM `tableA`;


SELECT `A_id`, `A_name`,

(SELECT COUNT(*) FROM `tableB` WHERE  `tableB`.`A_id`=`tableA`.`A_id`) AS `B_count`,  

(SELECT COUNT(*) FROM `tableC` WHERE  `tableC`.`A_id`=`tableA`.`A_id`) AS `C_count`,  

FROM `tableA`;


SELECT (SELECT COUNT(*) FROM `items` WHERE `itemsbrand` = "SONY") AS `A_count`, (SELECT COUNT(*) FROM `items` WHERE `itemsbrand` = "Shure") AS `B_count` FROM `items` WHERE `itemsbrand`
SELECT `itemsbrand` FROM `items` WHERE 1