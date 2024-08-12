## Utilizando Containers no Docker

O exercicio do contéudo do dia foi entra no site Docker Hub e fazer uma pesquisa do debian, 
depois entramos na página da imagem e usamos o comando "docker pull debian" para puxar essa
imagem para o computador. Porém em um dos exercicios foi pedido para baixar uma versão compactar
então ultilizamos o comando "docker pull debian:stable-20230109-slim".

Depois disso foi pedido para criar e executar o container com o comando "docker container create -it debian:stable-20230109-slim", dentro do container conseguimos usar o comando "cat /etc/*-release" 
que retorna os dados de distribuição dentro do container.

Em seguida ultilizamos "exit" para encerrar o terminal.