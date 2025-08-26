# 💸 Gastança CE

Aplicação web que exibe os **gastos com cota parlamentar dos deputados do estado do Ceará**.

Este projeto visa promover a **transparência pública** de forma simples e acessível. Desenvolvido com **Rails 8**, **React**, **SQLite** e **Styled Components**.

![image](https://github.com/user-attachments/assets/82017e34-1ed7-4a4e-8fe8-fc5a011d028f)
![image](https://github.com/user-attachments/assets/80f08a40-ad13-40ee-a499-06ad4fd023c4)

---

## 🚀 Tecnologias Utilizadas

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

#### Instale as dependências
```bash
bundle install
yarn install
```

#### Crie e popule o banco de dados
```bash
bin/rails db:setup
```

#### Inicie a aplicação
```bash
bin/dev
```

## 🧪 Testes e CI/CD
O projeto possui uma estrutura de testes automatizados com RSpec e outros utilitários.

Os testes podem ser executados com:

```bash
bundle exec rspec
```

Está integrado ao GitHub Actions para rodar automaticamente os testes e validações a cada push ou pull request.

O pipeline de CI/CD garante que o código esteja funcionando corretamente antes de ser implantado.

## 🤝 Contribuições

Contribuições são muito bem-vindas! 💜

Para contribuir:

1. Faça um fork deste repositório
2. Crie sua branch: `git checkout -b minha-feature`
3. Faça suas alterações e adicione testes
4. Execute os testes para garantir que está tudo certo
5. Submeta um Pull Request

> Sempre que possível, descreva bem sua mudança e adicione prints ou exemplos se necessário.

## 📄 Licença
Este projeto está licenciado sob os termos da MIT License.


