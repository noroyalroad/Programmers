-- 코드를 작성해주세요

select ID,	EMAIL,	FIRST_NAME,	LAST_NAME  from DEVELOPER_INFOS 
where skill_1 like '%Python%' or skill_2 like '%Python%' or skill_3 like '%Python%' order by id