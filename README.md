# 💸 Gastança CE

Aplicação web que exibe os **gastos com cota parlamentar dos deputados do estado do Ceará**.

Este projeto visa promover a **transparência pública** de forma simples e acessível. Desenvolvido com **Rails 8**, **React**, **SQLite** e **Styled Components**.

![image](https://github.com/user-attachments/assets/82017e34-1ed7-4a4e-8fe8-fc5a011d028f)
![image](https://github.com/user-attachments/assets/80f08a40-ad13-40ee-a499-06ad4fd023c4)

---

## 🚀 Tecnologias Utilizadas

## Stack

[![Icons](https://skillicons.dev/icons?i=ruby,rails,react,styledcomponents,sqlite,githubactions,docker,vscode)](https://skillicons.dev)

- **Ruby on Rails 8**
- **React.js**
- **Styled Components**
- **SQLite3**
- **GitHub Actions**
- **Docker + Docker Compose**
- **Dev Containers (VS Code)**

---

## 🔧 Como rodar o projeto localmente

Você pode subir o projeto de três formas diferentes:

### 1. Usando Dev Containers (VS Code)

> Recomendado se você já utiliza VS Code com extensão "Dev Containers".

- Certifique-se de que o Docker esteja rodando.
- Abra o projeto no VS Code.
- Pressione `F1` e selecione:  
  **“Dev Containers: Reopen in Container”**

O ambiente será preparado automaticamente.

---

### 2. Usando Docker Compose (modo desenvolvimento)

Se você prefere rodar com Docker direto no terminal:

```bash
docker compose -f docker-compose.dev.yml up
```

### 3. Rodando localmente (sem Docker)
Se você quer usar seu ambiente local Ruby/Rails:

# Instale as dependências
```bash
bundle install
yarn install
```

# Crie e popule o banco de dados
```bash
bin/rails db:setup
```

# Inicie a aplicação
```bash
bin/dev
```

## Contrtibuir

Sinta se livre para contribuir em qualquer feature!

## License

Este app tem código aberto sob os termos da [MIT License](https://opensource.org/licenses/MIT).
