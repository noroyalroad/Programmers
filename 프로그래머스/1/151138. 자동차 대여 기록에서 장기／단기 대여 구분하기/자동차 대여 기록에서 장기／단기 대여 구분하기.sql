SELECT 
    HISTORY_ID,
    CAR_ID,
    date_format(START_DATE,'%Y-%m-%d') as START_DATE,
    date_format(END_DATE,'%Y-%m-%d') as END_DATE,
    
    CASE 
        WHEN DATEDIFF( END_DATE,START_DATE) >= 29 THEN '장기 대여'
        ELSE '단기 대여'
    END AS RENT_TYPE
FROM 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY 
WHERE 
    date_format(start_date,'%Y-%m') = "2022-09"
    order by history_id desc