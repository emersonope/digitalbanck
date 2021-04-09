## Informações inportantes

Para veficar este projeto será necessário fazer o download deste projeto para um repositório local.

* Após ter o projeto em seu repositório local, utilize o seguinte comando abaixo:
   - npm init => para instalar os módulos do nodejs

* Por gentileza verificar se todas as dependêcias foram instaladas corretamente:
    - "graphql-yoga",
    - "knex",
    - "lodash",
    - "nodemon"
    
 * Agora para rodar o projeto devera utilizar um dos comandos abaixo:
    - npm run dev
    - node server.js
  * Após inicializado será apresentado uma mensagem: "servidor ativo" em seu prompt
  
  * O proximo passo será abrir o localhost na porta 4000
  
  # Simulação de DEPOSITO:
  Para realizar a simulação de deposito, deverá inserir os dados conforme exemplo abaixo:


Requisição:

```
  mutation {
    deposito(bancoId: 1, conta: 1234,saldo: 100, dep: 100){
      id
      conta
      saldo
  }
}
```

Resposta:

```
  {
  "data": {
    "deposito": {
      "id": 1,
      "conta": 1234,
      "saldo": 200
    }
  }
}
}
```

# Simulação de SAQUE:
  Para realizar a simulação de deposito, deverá inserir os dados conforme exemplo abaixo:


Requisição:

```
  mutation {
    saque(bancoId: 1, conta: 1234 ,saldo: 100, saq: 100){
      id
      conta
      saldo
  }
}
```

Resposta:

```
    {
    "data": {
      "saque": {
        "id": 1,
        "conta": 1234,
        "saldo": 0
    }
  }
}
```

# Simulação de veificação de SALDO:
  Para realizar a simulação de deposito, deverá inserir os dados conforme exemplo abaixo:


Requisição:

```
  mutation {
    saldo(bancoId: 1, conta: 1234 ,saldo: 100){
      id
      conta
      saldo
  }
}
```

Resposta:

```
  {
  "data": {
    "saldo": {
      "id": 1,
      "conta": 1234,
      "saldo": 100
    }
  }
}
```
  
