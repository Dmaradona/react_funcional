import React, { useState , useEffect } from 'react';

function App() {

  const [ numero, setNumero ] = useState('');
  const [ numero2, setNumero2 ] = useState('');
  const [ resultado, setResultado] = useState('');
  /* OBJETO STATE
  const [ state, setState ] = useState({
    numero: 1,
    numero2: 2,
    resultado: 3
  });
  */


  const somar = () => {
    const numeroFormatado1 = parseInt(numero);
    const numeroFormatado2 = parseInt(numero2);
    setResultado(numeroFormatado1 + numeroFormatado2);
  }

  /* EXECUTANDO COMO COMPONENTE DIDMOUNT */
  /* EXECUTA QUANDO MODIFICADO A VAR NO SEGUNDO PARAMETRO 
  useEffect( () => {
    console.log('variável numero:', numero);
  }, [numero] );*/

  
  /* EXECUTA AO CARREGAR A PÁGINA 
  useEffect( () => {
    console.log('variável numero:', numero);
  }, [] );*/

  /* EXECUTA AO ALTERAR O VALOR DE QUALQUER VAR */
  useEffect( () => {
    console.log('variável numero:', numero);
  });

  return (
    <div> 
      Número 1: <br></br>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)}></input><br></br>
      Número 2: <br></br>
      <input type="text" value={numero2} onChange={e => setNumero2(e.target.value)}></input><br></br>
      Resultado: <br></br>
      <button onClick={somar}>Somar</button><br></br>
      <input type="text" value={resultado}></input><br></br>
    </div>
  );
}

export default App;
