 //teste do insert
 const db = require('../../knexfile.js')


 /**
  * Inserir um aviso no banco de dados
  * @param {object} aviso O aviso deve estar no seguinte formato:
  * {titulo:<string>, data:<string>, mensagem:<string>}
  * @returns {object} Mensagem de sucesso ou de erro
  */
  function salvar(aviso){

    // insert
    //db.insert(obj com os dados).into('nome da tabela')

    return db.insert(aviso).into('avisos')
      .then(id => {
        return { tipo: "sucesso", corpo: "Dados inseridos com sucesso!"}
      })
      .catch(erro =>{
        return { tipo:"erro", corpo: "Erro: "+ erro }
      })
 } // fim do salvar

/**
 * Alterar um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato:
 * {titulo:<string>, data:<string>, mensagem:<string>}
 * @param {int} id ID do aviso
 * @returns {object} Mensagem de sucesso ou de erro
 */
 function editar(aviso, id){
   return db('avisos').where('ID_avisos',id).update(aviso)
   .then(id => {
    return { tipo: "sucesso", corpo: "Dados Alterados com sucesso!"}
  })
  .catch(erro =>{
    return { tipo:"erro", corpo: "Erro: "+ erro }
  })
 }

/**
 * Seleciona todos os aviso cadastrados
 * @returns {object} objeto com todos os avisos cadastrados
 * ou uma mensagem de erro
 */
function selecionarTodos(){
  return db.select('*').from('avisos').orderBy('data','desc')
  .then(avisos => { return avisos })
  .catch(erro =>{ return { tipo: "erro", corpo: "Erro: "+ erro} })
}// fim do selecionarTodos

/**
 * Seleciona um aviso
 * @param {*} id ID do aviso que será selecionado
 * @returns {object} Objeto com o aviso selecionado
 */
function selecionarAviso(id){
  return db.select('*').from('avisos').where('ID_avisos',id).first()
  .then(aviso => {return aviso})
  .catch (erro => {
    return{tipo: "erro", corpo: "Erro: "+ erro }
  })
}

/**
 * Função que exclui um aviso do banco de dados
 * @param {int} id id do aviso
 */
function excluir(id){
  return db.del().from('avisos').where('ID_avisos',id)
}

 module.exports =
  {
    salvar, 
    selecionarTodos, 
    excluir, 
    selecionarAviso,
    editar
  }
