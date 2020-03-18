import React, { useState } from 'react';

import useStore from './somaReducer';

function ReducerHook() {

  const [ numero, setNumero ] = useState('');
  const [ numero2, setNumero2 ] = useState('');

  const [ store, dispatch ] = useStore();
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

        console.log('dispachando a action soma');
        dispatch({
            type: 'SOMA',
            playload: numeroFormatado1 + numeroFormatado2
        });
    }

    const subtrair = () => {
        const numeroFormatado1 = parseInt(numero);
        const numeroFormatado2 = parseInt(numero2);

        console.log('dispachando a action subtração');
        dispatch({
            type: 'SUBTRACAO',
            playload: numeroFormatado1 - numeroFormatado2
        });
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

  

  return (
    <div> 
      Número 1: <br></br>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)}></input><br></br>
      Número 2: <br></br>
      <input type="text" value={numero2} onChange={e => setNumero2(e.target.value)}></input><br></br>
      Resultado: <br></br>
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button><br></br>
      <input type="text" value={store.resultado} readOnly></input><br></br>
    </div>
  );
}

export default ReducerHook;
