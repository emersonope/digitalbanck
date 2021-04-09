const { find } = require('lodash');

const dados = [
    { id: 1, conta:'1234', saldo: 50 },
];

module.exports = {
    Query: {
        dados: ()   => dados.find(),
        dado: (_, { id }) => dados.findById(id),
    }, 
    Mutation: {
        deposito: (_, { bancoId, conta, saldo, dep }) => { 
            const banco = find(dados, { id: bancoId }); 
            if (!banco) {
              throw new Error(`Não encontramos o banco com id: ${bancoId}`);
            }
            banco.conta = conta; 
            banco.saldo = saldo + dep; 
            return banco;
           },
        saque: (_, { bancoId, conta, saldo, saq }) => { 
            const banco = find(dados, { id: bancoId }); 
            if (!banco) {
              throw new Error(`Não encontramos o banco com id: ${bancoId}`);
            }
            if (saldo < saq){
                throw new Error(`Saldo insulficiente`);
            }else{
                banco.conta = conta; 
                banco.saldo = saldo - saq; 
                return banco;
            }
           },
        saldo: (_, { bancoId, conta, saldo }) => { 
            const banco = find(dados, { id: bancoId }); 
            if (!banco) {
              throw new Error(`Não encontramos o banco com id: ${bancoId}`);
            }
            banco.conta = conta; 
            banco.saldo = saldo; 
            return banco;
           },        
    },
};