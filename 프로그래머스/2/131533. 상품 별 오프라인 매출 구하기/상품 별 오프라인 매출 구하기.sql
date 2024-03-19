-- 코드를 입력하세요
SELECT p.PRODUCT_CODE , sum(p.price*  o.sales_amount)  as SALES
from product p
join OFFLINE_SALE  o
on  p.product_id = o.product_id
group by PRODUCT_CODE
order by SALES desc, PRODUCT_CODE
