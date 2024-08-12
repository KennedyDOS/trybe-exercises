## Manipulando imagens no Docker.


# Exercicio:

1.Crie um Dockerfile utilizando a imagem betrybe/figtrybe-artify.

2.Defina um ENTRYPOINT para a execução do comando.

• Observe que o executável figtrybe-artify está nos caminhos "node", "app.js";
• Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos  passar   parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.

3.Utilize o CMD para definir uma mensagem padrão.

4.Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

5.Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -f Ghost para adicionar a fonte Ghost e então executar algo como docker container run figtrybe-artify -f Ghost "VQV TRYBE", para exibir a mensagem com uma nova fonte como o exemplo abaixo:


# Solução


1.Criando o docker file usando uma imagem da betrybe:
FROM betrybe/figtrybe-artify:latest

2.Definindo ENTRYPOINT: 
ENTRYPOINT [ "node", "app.js" ]

3.Definindo menssagem padrão pelo CMD:
CMD [ "#VQV Trybe" ]

4.Gerando a build e executando a imagem sem passar commandos: 
docker image build ./ -t figtrybe-artify

5. Executando o container e passando a menssagem para testar:

docker container run --rm figtrybe-artify "Bora Trybe!"

