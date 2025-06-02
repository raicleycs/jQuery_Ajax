# CRUD com jQuery e AJAX
<table>
<td>

  Este projeto demonstra como criar uma aplicação web simples que realiza operações CRUD (Criar, Ler, Atualizar, Excluir) utilizando jQuery para manipulação do DOM e chamadas AJAX para consumir uma API RESTful.    

</td>
</table>


## Funcionalidades
<table>
  <td>
    
- Listar usuários cadastrados

- Criar novo usuário

- Editar usuário existente

- Excluir usuário

- Atualização da interface sem recarregar a página (AJAX)

- Feedback visual para operações (mensagens de sucesso/erro)
  </td>
</table>


## Tecnologias Utilizadas
<table>
  <td>
    
- HTML5

- CSS3 (para layout)

- JavaScript (jQuery 3.6.0)

- JSON Server (API REST para testes)
  </td>
</table>


## Como executar o projeto
<table>
  <td>
    

### Pré-requisitos
<table>
  <td>
    
- Node.js instalado (para rodar o JSON Server)

- Editor de código (VSCode, Sublime, etc.)

- Navegador (Chrome, Firefox, Edge)
    
  </td>
</table>


### Passos
Clone este repositório ou copie os arquivos para sua máquina.
```https://github.com/raicleycs/jQuery_Ajax.git```

Instale o JSON Server globalmente na sua máquina:

```
npm install -g json-server
```
Crie um arquivo db.json com a seguinte estrutura:

```
{
  "users": [
    { "id": 1, "name": "João", "email": "joao@example.com" },
    { "id": 2, "name": "Maria", "email": "maria@example.com" }
  ]
}
```
Vá para a pasta que contem o arquivo ```db.json```
```
cd db
```
Execute o JSON Server na porta 3000:

```
json-server --watch db.json --port 3000
```

- Abra o arquivo index.html no navegador.

- Use o formulário para criar ou editar usuários.

- Use os botões "Editar" e "Excluir" para modificar os usuários listados.
  
  </td>
</table>

## Estrutura dos arquivos
<table>
  <td>
    
- index.html — Página principal com formulário e tabela para listar usuários.

- app.js — Script JavaScript que contém toda a lógica do CRUD usando jQuery e AJAX.

- db.json — Arquivo para o JSON Server com dados iniciais (tem um exemplo no repositório no repositório ``` db/db.json ```).

- style.css - Estilização da página principal.

  </td>
</table>

## Explicação rápida do código
<table>
  <td>
    
- Listagem: Ao carregar a página, os usuários são carregados via AJAX (GET /users) e exibidos na tabela.

- Criar: Envio de dados via AJAX (POST /users) a partir do formulário.

- Editar: Buscar usuário pelo ID (GET /users/:id) e preencher o formulário para edição.

- Atualizar: Envio dos dados atualizados via AJAX (PUT /users/:id).

- Excluir: Exclusão do usuário via AJAX (DELETE /users/:id).

- Mensagens aparecem após cada operação para informar sucesso ou erro.

  </td>
</table>

> [!TIP] 
> ## Proposta de melhorias para praticar 
> - Adicionar paginação para grandes volumes de dados.
> - Melhorar interface com frameworks CSS como Bootstrap.
> - Consumir APIs reais públicas para aprendizado prático.
> - Incluir autenticação e proteção das rotas.


# Referências
[Link Text](#sample-section).
- jQuery AJAX Documentation

- JSON Server GitHub

- JSONPlaceholder API (Exemplo)

