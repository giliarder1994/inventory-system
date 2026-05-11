# 📦 Inventory System - API REST

API REST para gerenciamento de inventário, produtos, fornecedores e movimentações de estoque.
Desenvolvida com **Node.js**, **Express**, **Sequelize** e **MySQL**, utilizando arquitetura em camadas, transações no banco de dados e testes automatizados para garantir consistência e confiabilidade das operações.

---

# 🚀 Tecnologias

* **Node.js** — Ambiente de execução JavaScript
* **Express** — Framework para construção da API
* **MySQL** — Banco de dados relacional
* **Sequelize** — ORM para modelagem e manipulação do banco
* **Jest** — Framework de testes
* **Supertest** — Testes de integração para rotas HTTP
* **dotenv** — Variáveis de ambiente
* **nodemon** — Reload automático em desenvolvimento

---

# 📁 Estrutura do Projeto

```bash id="inv001"
src/
 ├── config/
 │    └── database.js        # Configuração do Sequelize
 │
 ├── controllers/
 │    ├── productController.js
 │    ├── stockController.js
 │    └── supplierController.js
 │
 ├── middlewares/
 │    └── errorHandler.js    # Middleware global de erros
 │
 ├── models/
 │    ├── Product.js
 │    ├── Supplier.js
 │    ├── StockMovement.js
 │    └── index.js           # Relacionamentos entre entidades
 │
 ├── routes/
 │    ├── productRoutes.js
 │    ├── stockRoutes.js
 │    ├── supplierRoutes.js
 │    └── index.js
 │
 ├── services/
 │    └── stockService.js    # Regras de negócio do estoque
 │
 ├── app.js
 └── server.js

tests/
 ├── integration/
 │    └── stockRoutes.test.js
 │
 └── unit/
      └── stockService.test.js

sql/
 └── setup.sql               # Script de criação do banco
```

---

# ⚙️ Funcionalidades

## 📦 Produtos

* Cadastro de produtos
* Listagem de produtos
* Controle de quantidade em estoque
* Definição de estoque mínimo

---

## 🤝 Fornecedores

* Cadastro de fornecedores
* Associação de fornecedores aos produtos
* Listagem de fornecedores

---

## 📊 Controle de Estoque

* Entrada de estoque
* Saída de estoque
* Registro de movimentações
* Validação de estoque insuficiente

---

## 🧪 Testes Automatizados

O projeto possui:

* Testes unitários
* Testes de integração
* Simulação de operações de estoque
* Validação de regras críticas de negócio

---

# 🗄️ Estrutura do Banco de Dados

O sistema possui 3 tabelas principais:

## 📦 products

Armazena os produtos cadastrados no sistema.

## 🤝 suppliers

Armazena os fornecedores vinculados aos produtos.

## 📊 stock_movements

Registra todas as movimentações de entrada e saída de estoque.

---

# ⚙️ Como rodar localmente

## 1. Clone o repositório

```bash id="inv002"
git clone https://github.com/seu-usuario/inventory-system.git

cd inventory-system
```

---

## 2. Instale as dependências

```bash id="inv003"
npm install
```

---

## 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env id="inv004"
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=inventory_db
```

---

## 4. Configure o banco de dados

Execute o script SQL localizado em:

```bash id="inv005"
sql/setup.sql
```

Você pode utilizar:

* MySQL Workbench
* DBeaver
* phpMyAdmin
* Terminal MySQL

---

## 5. Inicie o servidor

### Ambiente de desenvolvimento

```bash id="inv006"
npm run dev
```

### Ambiente normal

```bash id="inv007"
npm start
```

Servidor disponível em:

👉 [http://localhost:3000](http://localhost:3000)

---

# 🧪 Executando os Testes

## Rodar todos os testes

```bash id="inv008"
npm test
```

Os testes incluem:

* Validação de entrada e saída de estoque
* Verificação de estoque insuficiente
* Testes de rotas HTTP
* Simulação de transações

---

# 📋 Principais Rotas

## 📦 Produtos

| Método | Rota      | Descrição       |
| ------ | --------- | --------------- |
| GET    | /products | Listar produtos |
| POST   | /products | Criar produto   |

---

## 🤝 Fornecedores

| Método | Rota       | Descrição           |
| ------ | ---------- | ------------------- |
| GET    | /suppliers | Listar fornecedores |
| POST   | /suppliers | Criar fornecedor    |

---

## 📊 Estoque

| Método | Rota       | Descrição          |
| ------ | ---------- | ------------------ |
| POST   | /stock/in  | Entrada de estoque |
| POST   | /stock/out | Saída de estoque   |

---

# 🔒 Integridade e Consistência

O sistema utiliza:

* Transactions do Sequelize
* Relacionamentos entre entidades
* Validação de estoque mínimo
* Controle de movimentações
* Middleware global de erros

As operações de entrada e saída de estoque são executadas de forma transacional para evitar inconsistências no banco de dados.

---

# 🧠 Arquitetura e Boas Práticas

O projeto segue uma arquitetura organizada em camadas:

* **Controllers** → tratamento das requisições
* **Services** → regras de negócio
* **Models** → entidades do banco de dados
* **Routes** → endpoints da API
* **Middlewares** → tratamento global de erros

Além disso, o projeto utiliza:

* ORM Sequelize
* Relacionamentos entre tabelas
* Separação de responsabilidades
* Estrutura escalável para evolução futura

---

# 👨‍💻 Autor

Desenvolvido por **Giliarde Rodrigues**

Estudante de Engenharia de Software focado em desenvolvimento Back-end com Node.js, APIs REST, bancos relacionais e arquitetura de sistemas.
