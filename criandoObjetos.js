// usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebbok', 3500, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase /30 ) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7800, 4)
const f2 = criarFuncionario('Ana', 2400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJSON.info)