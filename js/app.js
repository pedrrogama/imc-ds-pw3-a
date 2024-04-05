 let btn = document.getElementById('btn')
 let div = document.getElementById('resultado')

 const arrPessoa = []

function cadastrar() {
    //códigos
    let nomeInput = document.getElementById('nome').value
    let sobrenomeInput  = document.getElementById('sobrenome').value
    let categoriaInput  = document.getElementById('categoria').value
    let pesoInput = document.getElementById('peso').value
    let alturaInput  = document.getElementById('altura').value
//-----------------------------------------------------------------------------------
    //let Imc = IMC(pesoInput, alturaInput)
    //let categoriaImc = CategoriaIMC(Imc)

    const pessoa ={
        nome: nomeInput,
        sobrenome: sobrenomeInput,
        categoria: categoriaInput,
        peso: pesoInput,
        altura: alturaInput,
        imc: IMC(pesoInput, alturaInput),
        categoriaIMC: CategoriaIMC(IMC(pesoInput, alturaInput))
    }

    arrPessoa.push(pessoa)
    imprimir()

    console.log(arrPessoa);

   //div.innerHTML = "NOME:" + nome + "SOBRENOME:" + sobrenome + "CATEGORIA:" + categoria + "."

} 

function IMC(peso, altura){
     //calcular imc
     peso / Math.pow(altura, 2)
}

function CategoriaIMC(IMC){
    //calcular a categoria do imc
    if(IMC <= 18.5) {
        return 'Abaixo do normal'
    } else if(IMC <= 24.9) {
        return 'Normal'
    } else if(IMC <= 29.9) {
        return 'Sobrepeso'
    } else if(IMC <= 34.9) {
        return 'Obesidade Grau 1'
    } else if(IMC <= 39) {
        return 'Obesidade Grau 2'
    } else {
        return 'Obesidade Grau 3'
    }
}

function imprimir(){

    div.innerHTML = ''

    for(let i = 0; arrPessoa.length; i++){
    div.innerHTML += `
    <tr>
        <th scope="row">${i+1}</th>
        <td>${arrPessoa[i].nome} ${arrPessoa[i].sobrenome}</td>
        <td>${arrPessoa[i].peso}</td>
        <td>${arrPessoa[i].altura}</td>
        <td>${arrPessoa[i].imc} - ${arrPessoa[i].categoria}</td>
    </tr>
   `}
}

btn.addEventListener('click', cadastrar)