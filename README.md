# SISTEMA DE VOTAÇÃO DO BIG BROTHER BRASIL


## :zap: Usage

### Para rodar o projeto execute os seguintes comandos:

- Levantar container docker com o banco de dados:
```bash
make run
```

### Em um outro terminal, execute:

- Instalar bibliotecas do projeto:
```bash
yarn install
```

- Instanciar client do prisma:
```bash
yarn prisma generate
```

- Executar a migrate de schemas do prisma:
```bash
yarn prisma migrate dev --name init_database
```

- Executar inserção de informações do banco:
```bash
ts-node src/service/script.ts
```

- Executar aplicação:
```bash
yarn dev
```

## :book: Endpoints

Para acessar a rota com o total de votos do paredão utilize esse endpoint:
*obs.: Considere votationId como sendo 1.
```bash
http://localhost:3000/api/votation/total/${votationId}
```

Para acessar a rota com o total de votos de cada participante do paredão utilize esse endpoint:
*obs.: Considere votationId como sendo 1.
```bash
http://localhost:3000/api/vote/total/${votationId}
```
