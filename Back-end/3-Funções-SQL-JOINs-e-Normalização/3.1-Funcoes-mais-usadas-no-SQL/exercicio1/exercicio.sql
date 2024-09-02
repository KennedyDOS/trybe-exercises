/* Exercicio 1 */
SELECT MAX(salary)
FROM hr.employees;

/* Exercicio 2 */
SELECT MAX(salary) - MIN(salary)
FROM hr.employees;

/* Exercicio 3 */
SELECT job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

/* Exercicio 4 */
SELECT SUM(salary)
FROM hr.employees;

/* Exercicio 5 */
SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2)
FROM hr.employees;

/* Exercicio 6 */
SELECT job_id , COUNT(*)
AS 'total'
FROM hr.employees
WHERE job_id = "it_prog";

/* Exercicio 7 */
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;

/* Exercicio 8 */
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id
HAVING job_id = "it_prog";

/* Exercicio 9 */
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY average_salary DESC;

/* Exercicio 10 */
SELECT department_id, AVG(salary) 'average_salary' , COUNT(*) 'number_of_employees'
FROM hr.employees
GROUP BY department_id
HAVING number_of_employees > 10;

/* Exercicio 11 */
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

/* Exercicio 12 */
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

/* Exercicio 13 */
SELECT employee_id, first_name, LEFT(hire_date, 4) 'hire_year'
FROM hr.employees;

/* Exercicio 14 */
SELECT employee_id, first_name, MID(hire_date, 9, 2) 'hire_day'
FROM hr.employees;

/* Exercicio 15 */
SELECT employee_id, first_name, SUBSTRING(hire_date, 6, 2) 'hire_month'
FROM hr.employees;

/* Exercicio 16 */
SELECT UPPER(CONCAT(first_name, " ", last_name))
FROM hr.employees;

/* Exercicio 17 */
SELECT last_name, hire_date
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';

/* Exercicio 18 */
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , hire_date) 'days_worked'
FROM hr.employees;