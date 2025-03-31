# 📌 Autenticação com JWT (Node.js + React)

Este projeto consiste em um sistema de autenticação utilizando **JWT (JSON Web Token)**, desenvolvido com **Node.js no back-end** e **React no front-end**. O objetivo é permitir que usuários se registrem, façam login e acessem informações protegidas com um token de autenticação.

## 🛠️ Tecnologias Utilizadas

### 📌 **Back-end (Node.js + Express)**

-   **Express** - Framework para roteamento e middleware
-   **MongoDB + Mongoose** - Banco de dados NoSQL
-   **bcrypt** - Criptografia de senhas
-   **jsonwebtoken (JWT)** - Autenticação segura
-   **dotenv** - Gerenciamento de variáveis de ambiente
-   **CORS** - Permitir comunicação entre diferentes origens

### 🎨 **Front-end (React + Vite)**

-   **React Router** - Gerenciamento de rotas
-   **Axios** - Requisições HTTP
-   **Tailwind CSS** - Estilização rápida e responsiva

## 📂 Estrutura de Pastas

```
/auth-jwt
│── backend
│   ├── config/
│   │   ├── db.js
│   ├── models/
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   ├── app.js
│   ├── .env
│   ├── package.json
│
│── frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
```

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```sh
git clone https://github.com/seu-usuario/auth-jwt.git
cd auth-jwt
```

### 2️⃣ Configurar e rodar o **Back-end**

```sh
cd backend
npm install
```

Crie um arquivo **.env** na pasta `backend` e adicione:

```
MONGO_URI=sua_url_do_mongodb
SECRET=sua_chave_secreta
PORT=3000
```

Agora inicie o servidor:

```sh
npm start
```

### 3️⃣ Configurar e rodar o **Front-end**

```sh
cd ../frontend
npm install
npm run dev
```

## 🔄 Fluxo de Autenticação

1. **Registro de Usuário** - Envia nome, e-mail e senha para o back-end
2. **Geração de Token** - Ao fazer login, um JWT é gerado e armazenado
3. **Acesso Protegido** - Rotas protegidas verificam o token antes de permitir acesso

## 🚀 Funcionalidades

✅ Registro de usuário ✅ Login e autenticação via JWT ✅ Proteção de rotas com token ✅ Recuperação de dados do usuário autenticado ✅ Interface responsiva com Tailwind CSS

## 📌 Melhorias Futuras

-   🔹 Logout e expiração de token
-   🔹 Reset de senha via e-mail
-   🔹 Testes automatizados

---

Feito com 💙 por [Seu Nome](https://github.com/seu-usuario)
