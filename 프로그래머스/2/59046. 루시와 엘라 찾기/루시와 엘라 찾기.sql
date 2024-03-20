-- 코드를 입력하세요
SELECT ANIMAL_ID,	NAME,	SEX_UPON_INTAKE
from  ANIMAL_INS
where name = "Lucy" or name = "Ella" or name = "Rogan"   or name =  "Sabrina"  or name = "Mitty"  or name = "Pickle"
order by animal_id