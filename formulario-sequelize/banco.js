const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
host: "localhost",
dialect: "mysql"
})

Sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).cath(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome: {type: SequelizeSTRING},
    endereco: {type: SequelizeSTRING},
    cep: {type: SequelizeINTEGER},
    rg: {type: SequelizeINTEGER}
})

//Agendamentos.sync({focer: true})

Agendamentos.create ({
    nome: "Eloah",
    endereco: "Avenida 9 de Julho",
    cep: "03817160",
    rg: "547863421"
})