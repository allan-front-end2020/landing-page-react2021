
import React from 'react';
import Texto from './componentes/Texto/text.js';
import Botao from './componentes/Botao/botao.js';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


 const classes = makeStyles(() => ({
  input:{
  textAlign:'center',
  }, 
  titulo:{
    fontSize: 100,
    marginTop:100,
    color:"grey",
    textAlign:'center',
    marginBotton:300,

  },
  subtitulo:{
    textAlign:'center',
    fontFamily:"Staatliches",
    marginBottom:120,
    color:"grey",
    
  },
  rodape:{
    height:100,
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  

  },
  nome:{
    color:'white',
    fontFamily:"Staatliches",
    fontSize: 25,
    
  }
 }));



function  App () {

   const style = classes()

   return (
   <div className="App">
        <Paper elevation={3} >
        <h1 className={style.titulo}>Loja Do Allan</h1>
        <h2 className={style.subtitulo}>Preencha o formulario e recebas nossas novidades e ofertas</h2>
        
  
       <div className={style.input}>
          <TextField id="standard-basic" label="Digite Seu Nome" />
          <TextField id="standard-basic" label="Digite Seu E-Mail" />
          <TextField id="standard-basic" label="Digite Seu Whatsaap" />
          <Botao/>

       </div>
       </Paper>
       <Texto tipo='titulo' />
       <div className={style.rodape}>
          <p className={style.nome}>Copyrigth: Allan tavares</p>
       </div>
       
       
  </div>
 
  );
 }
export default  App;