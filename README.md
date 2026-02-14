# 📖 Bible API

API RESTful para consulta de múltiplas versões da Bíblia em formato JSON.

Suporta:

- 📚 Listagem de livros
- 📖 Consulta de livro específico
- 📑 Listagem de capítulos
- 🔎 Consulta de capítulo específico
- 🌍 Múltiplas versões (ACF, NVI, KJA, etc)

---

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- CORS
- File System (JSON local)
- Cache em memória

---

## 📂 Estrutura do Projeto

src/
├── controllers/
├── services/
├── helpers/
├── routes.ts
└── server.ts

data/
├── ACF.json
├── NVI.json
└── KJA.json

---

## ▶️ Como rodar localmente

````bash
npm install
npm run dev
Servidor padrão:

http://localhost:3333
🌍 Deploy
Compatível com:

Vercel

Render

Railway

VPS Node

📌 Endpoints
🔹 Listar versões disponíveis
GET /versions
Resposta
["ACF", "NVI", "KJA"]
🔹 Listar livros
GET /books?version=NVI
Resposta
["Gênesis", "Êxodo", "Levítico", ...]
🔹 Buscar livro específico
GET /specificBook/Gênesis?version=ACF
🔹 Listar capítulos de um livro
GET /chapters/João?version=NVI
Resposta
[1, 2, 3, 4, 5, ...]
🔹 Buscar capítulo específico
GET /specificChapter/João/3?version=KJA
Resposta
[
  "Versículo 1",
  "Versículo 2",
  "Versículo 3"
]
⚡ Performance
A API utiliza cache em memória para evitar múltiplas leituras do arquivo JSON.

🧠 Arquitetura
Controller → recebe requisição

Service → regra de negócio

Helper → carrega versão da Bíblia dinamicamente

Cache → evita reprocessamento

📜 Licença
MIT
