#Teste frond-end Digesto

Projeto front-end para realização de busca de processos via consumo de API.
Após digitar o número do processo e clicar no botão "Buscar", o resultado
de sua busca será exibido em tela.

## Autora

- [@amandapergon](https://github.com/amandapergon)

## Para rodar o projeto:

Fazer um clone do repositório no GitHub;
Entrar na pasta do projeto;
Rodar o comando "npm install" para instalar as dependências;
Rodar o comando "npm run".

#### Retorna todos os itens

```http
  GET /api/tribproc/${id}
```

| Parâmetro | Tipo     | Descrição                                         |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID (CNJ) do item que você quer |

Retorna número do processo, instância, partes e movimentações após acesso dos dados requeridos

\*\*Foi necessário adicionar no começo do link da requisição o link "https://cors-anywhere.herokuapp.com" por conta do header Access-Control-Allow-Origin que não está presente
("Blocked by Cors policy")

\*\*\*Para alterar o token será necessaŕio acessar https://op.digesto.com.br/#/companyadmin/api,
gerar um token e criar um arquivo .env. No ".env.example" há a variável de ambiente
que armazena o token para autenticação. Basta inserir o token após o sinal "=", sem aspas.

## Stack utilizada

**Front-end:** React, Context

## Aprendizados

1. Durante a feitura do projeto houve a dificuldade com o cors, que eu não sabia como resolver
   e precisei pesquisar para compreender como poderia fazer funcionar sem alterar o lado do
   servidor.

2. Nunca tinha realizado testes unitários em React. Tentei implementar e não obtive sucesso. Porém,
   reconheço a importância e já estou estudando jest e "@testing-library/react". Me comprometo a aprimorar
   meus conhecimentos.

![Página inicial](teste-frontend-digesto/prints/initialpage.png)
![Formato inválido](teste-frontend-digesto/prints/formValidation2.png)
![Campo de busca vazio](teste-frontend-digesto/prints/formValidation1.png)
![Buscando processos](teste-frontend-digesto/prints/searchingcases.png)
![Processo não encontrado](teste-frontend-digesto/prints/caseNotFound.png)
![Exibição dos dados](teste-frontend-digesto/prints/caseDetails1.png)
![exibição dos dados](teste-frontend-digesto/prints/caseDetails2.png)
