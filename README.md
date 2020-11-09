# Teste - Quero Educação

## API para exibição e filtragem de ofertas de curso
---
### Resumo

O projeto foi desenvolvido utilizando **Node.JS**, com o **Express**. Foi utilizado o **ORM Sequelize** para manipulação dos Models, gerenciamento de migrations/seeders. Foi utilizado a biblioteca **chai** para confecção dos testes automatizados.

---

### Instalação

O projeto conta com um arquivo de variáveis de ambiente (**.env.example**), o primeiro passo é copia-lo renomeando para `.env` alterando os valores de cada chave referente ao seu uso (Como nome do banco de dados, API_KEY para configuração do JWT, entre outras informações).

* **Primeiro passo**
É necessário rodar um `npm install`, após a conclusão, podemos seguir com a criação das tablas e inserção dos dados para o banco de dados.

* **Migrations & Seeds**
Para realizar as migrações da tabela, execute `npx sequelize db:migrate`, após as migrações, rode os seeders com `npx sequelize db:seed:all`

---

### Execução
Para rodar do projeto, execute o arquivo principal com o seguinte comando `node index.js`.

A API estará acessível/visível pelo endereço http://localhost:8080 na sua máquina (Por padrão será utilizado a porta 8080, mas para alterar, basta mudar o valor da chave **PORT** no arquivo **.env**)

---

### Testes Automatizados
Para rodar os testes presentes no projeto, basta executar `npx mocha`

---

### Endpoints Principais

O desafio conta com dois endpoints principais, referentes a listagem de cursos e ofertas.

**Autenticação:**

O projeto conta com autenticação **JWT**, a maioria dos endpoints (Todos os principais) estarão protegidos com Middlewares referente ao JWT, e não serão acessíveis a menos que seja adicionado a **`header: Authorization`** no cabeçalho de cada requisição.

* **`api/login [POST]`**

Para autenticação está sendo utilizado o usuário de teste criado no seeder. Ficando o corpo da requisição e a resposta da mesma, da seguinte forma, respectivamente:

**Request**
```
{
	"email": "nicolas.pedroso2145@gmail.com",
	"password": "loremipsum123"
}
```

**Response**
```
{
    "message": "Successfully authorized",
    "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA0OTUxMjUyLCJleHAiOjE2MDQ5NTY0NTJ9.mbqAKLj4Fdr-d5uQG6fmcTNLULFkdwVxpP3c5lXPlPg",
    "expiresIn": 5200
}
```

Lembrando que token obtido na resposta (authorization), deverá ser adicionado no cabeçalho de cada requisição.

**Cursos:**

* **`api/courses [GET]`**

Endpoint para listagem de cursos, opcionalmente você pode adicionar query params (parâmetros GET) na URL, para fazer o filtro dos cursos.

**Query params**:
```
filterBy - Por qual opção será filtrado
filterValue - O valor referente a opção que o filtro está sendo
aplicado

Exemplo: http//localhost:8080/api/courses?filterBy=kind&filterValue=Presencial
```

* **`api/courses/:id [GET]`** (`id` é o id desejado)

Endpoint para listagem de cursos especificados pelo ID.Esse endpoint foi feito como um recurso a mais do que foi solicitado.

**Ofertas:**

* **`api/offers [GET]`**

Endpoint para listagem de cursos, opcionalmente você pode adicionar query params (parâmetros GET) na URL, para fazer o filtro dos cursos.

**Query params**:
```
filterBy - Por qual opção será filtrado
filterValue - O valor referente a opção que o filtro está sendo
aplicado

Exemplo: http//localhost:8080/api/offers?filterBy=university_name&filterValue=UNIP
```

* `api/offers/:id [GET]` (Onde **:id** é o id desejado)

Endpoint para listagem de ofertas especificadas pelo ID. Esse endpoint foi feito como um recurso a mais do que foi solicitado.

---

### Produção

Foi realizado deploy da aplicação para produção utilizando a plataforma Heroku, a API está acessível através do link http://api-quero-edu-backend/

**Obs:** Por configuração interna do provedor do serviço MySQL utilizado, o auto incremento no banco de dados está com incremento de 10 (De 10 em 10), então a sequência de IDs se mostrará por (1, 11, 21, 31.. etc).

---

### Diferenciais

O Projeto conta com autenticação JWT. Cacheamento de endpoints previamente executados, para otimização de mesmas requisições futuras.