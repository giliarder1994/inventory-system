# 📦 Inventory System - API REST

API REST para gerenciamento de inventário, produtos e fornecedores.
Desenvolvida com Node.js, Express e Sequelize (MySQL), com foco em arquitetura organizada, separação de responsabilidades e testes automatizados.


## 🚀 Tecnologias

Node.js — Ambiente de execução
Express — Framework web
Sequelize — ORM para MySQL
Jest & Supertest — Testes unitários e de integração
Dotenv — Gerenciamento de variáveis de ambiente


## 📁 Estrutura do Projeto

```
src/
| ├── config/          # Configuração do banco de dados (Sequelize)
| ├── controllers/     # Orquestração das requisições HTTP
| ├── models/          # Definição das entidades e tabelas
| ├── services/        # Regras de negócio
| ├── routes/          # Definição dos endpoints
| ├── middlewares/     # Tratamento de erros e interceptadores
| └── app.js           # Configuração principal do Express
|
tests/
 ├── unit/            # Testes unitários (services)
 └── integration/     # Testes de integração (rotas)
```
 
## ⚙️ Como rodar localmente

# 1. Clone o repositório

git clone https://github.com/seu-usuario/inventory-system.git
cd inventory-system

# 2. Instale as dependências

npm install

# 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto:

DB_HOST=127.0.0.1
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=inventory_db
PORT=3000

# 4. Execute os testes (opcional)
Antes de rodar os testes, certifique-se de que o banco de dados está configurado corretamente:

npm test

# 5. Inicie o servidor

npm start

Servidor disponível em:
👉 http://localhost:3000


## 📋 Principais Rotas

# 📦 Produtos

| Método |	Rota	          | Descrição                    |
|--------|----------------|------------------------------|
| GET    |	/products      |	Listar todos os produtos     |
| POST   |	/products      |	Cadastrar novo produto       |
| PUT    |	/products/:id  |	Atualizar produto            |
| DELETE	| /products/:id  |	Remover produto              |

# 📊 Estoque (Stock)

| Método |	Rota	                       | Descrição                        |
|--------|-----------------------------|----------------------------------|
| POST	  | /stock/in	                  | Registrar entrada de mercadoria  |
| POST   |	/stock/out                  |	Registrar saída de mercadoria    |
| GET    |	/stock/history/:productId   |	Histórico de movimentações       |

# 🤝 Fornecedores (Suppliers)
| Método |	Rota	          | Descrição                    |
|--------|----------------|------------------------------|
| GET	   | /suppliers     |	Listar fornecedores          |
| POST   |	/suppliers     |	Cadastrar fornecedor         |


## ✅ Qualidade de Código

O projeto aplica conceitos de TDD (Test Driven Development) em partes críticas.
O stockService possui validações para garantir que o estoque nunca fique inconsistente durante operações de entrada e saída.


👨‍💻 Autor

Desenvolvido por Giliarde Rodrigues
