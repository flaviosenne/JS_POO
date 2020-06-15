// pessoa -> endereço de memoria
const pessoa = { nome: "joao"}

pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa <- recebe um endereço -> que aponta para um endereço
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
    
pessoa.nome = 'Maria'
pessoa.rua = 'abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)