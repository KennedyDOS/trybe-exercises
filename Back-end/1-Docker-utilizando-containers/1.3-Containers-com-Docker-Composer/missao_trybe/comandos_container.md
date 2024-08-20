
# 1.Comando para criar um servidor e vincular a minha porta:

docker run -d --name site-trybe -p 4545:80 -v "<CAMINHO DO DIRETÓRIO ONDE ESTÁ SEU HTML>:/usr/local/apache2/htdocs" httpd:2.4.54

# 2. Rodar a html do servidor pelo endreço do arquivo:

http://localhost:4545/missao_trybe.html

# 3. Pegando o id do container: 

docker ps

# 4. Obetando o MOUNT e o volume do container pelo inspect:

docker inspect 9eabaa8df96

# 5. Comando para pausar o cotainer: 

docker stop 9eabaa8df96

# 6. Comando para excluir o container:

docker rm 9eabaa8df96

# 7. Obtendo imagens do servidor: 

docker images