
# AdonisJS CSR + PostgreSQL App

A simple client-side rendered (CSR) web application using AdonisJS and PostgreSQL.

## 🧰 Tech Stack

- Backend: AdonisJS (TypeScript)
- Frontend: HTML + JavaScript (CSR)
- Database: PostgreSQL

## 📦 Features

- View all users
- Add a new user

## 🏗️ Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/adonis-csr-postgres-app.git
cd adonis-csr-postgres-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment

Copy `.env.example` to `.env` and edit PostgreSQL credentials:

```dotenv
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=yourpassword
PG_DB_NAME=adonis_csr
```

Create the database `adonis_csr` in PostgreSQL manually if it doesn't exist.

### 4. Run migrations

```bash
node ace migration:run
```

### 5. Start the server

```bash
node ace serve --watch
```

App runs at: `http://localhost:3333`

---

## 🌐 Frontend

CSR frontend is available at `http://localhost:3333/index.html`

---

## 👤 Author

Nama: Andre Gunawan  
NIM: 23EO50006  
Repository: https://github.com/AgaZUp/uts_webprograming_andregunawan_23eo50006.git
