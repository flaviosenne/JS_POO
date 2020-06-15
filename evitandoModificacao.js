// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto) )

produto.nome = 'Chave'
produto.descricao = 'Chave preta'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = { nome: 'Ju', idade: '20'}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 27
console.log(pessoa)

// Object.freeze = selado + valores constatntes

