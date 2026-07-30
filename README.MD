<picture data-importer="pacman">
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/eullerfernandoo/eullerfernandoo/pacman-output/pacman-contribution-graph-dark.svg?game=pacman">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/eullerfernandoo/eullerfernandoo/pacman-output/pacman-contribution-graph.svg?game=pacman">
  <img alt="pacman contribution graph" src="https://raw.githubusercontent.com/eullerfernandoo/eullerfernandoo/pacman-output/pacman-contribution-graph.svg?game=pacman">
</picture>

###

# SauceDemo - Testes Automatizados com Cypress

![Cypress](https://img.shields.io/badge/Cypress-13-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

Projeto de testes end-to-end (E2E) para o site [SauceDemo](https://www.saucedemo.com/), desenvolvido durante mentoria de QA.

## 🧰 Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript

## 📁 Estrutura do projeto

```
cypress/
└── e2e/
    ├── login.cy.js       # Testes de login (sucesso e falha)
    └── carrinho.cy.js    # Teste de adicionar produto ao carrinho
```

## ✅ Casos de teste cobertos

### login.cy.js
- Realizar login com sucesso
- Realizar login com senha inválida (validação de mensagem de erro)

### carrinho.cy.js
- Adicionar produto ao carrinho (login + adicionar item + validar badge do carrinho + validar item na página do carrinho)

## ▶️ Como rodar os testes

1. Clone o repositório:
   ```bash
   git clone <url-do-seu-repositorio>
   cd <nome-da-pasta>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Abra o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```

   Ou rode todos os testes em modo headless:
   ```bash
   npx cypress run
   ```

## 📌 Observações

- Usuário de teste utilizado: `standard_user` / `secret_sauce` (credenciais públicas do próprio SauceDemo, usadas apenas para fins de teste).
- Projeto em constante evolução conforme progresso na mentoria de QA.
