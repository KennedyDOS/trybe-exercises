/* Exercicio 1 */
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';

/* Exercicio 2 */
SELECT 1, 2, 3;

/* Exercicio 3 */
SELECT 10 + 15;

/* Exercicio 4 */
SELECT (3 * 4) + 12;

/* Exercicio 5 */
SELECT * FROM Scientists;

/* Exercicio 6 */
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

/* Exercicio 7 */
SELECT Name FROM Scientists
ORDER BY Name ASC;

/* Exercicio 8 */
SELECT Name FROM Projects
ORDER BY Name DESC;

/* Exercicio 9 */
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;

/* Exercicio 10 */
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;

/* Exercicio 11 */
SELECT DISTINCT Project FROM AssignedTo;

/* Exercicio 12 */
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;

/* Exercicio 13 */
SELECT Name FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;

/* Exercicio 14 */
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;

/* Exercicio 15 */
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;
