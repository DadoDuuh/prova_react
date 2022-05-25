import axios from 'axios'
import { useState } from 'react';

export default function Index() {
    const [qtdinteira,setQtdinteiras]= useState(0);
    const [qtdmeias,setQtdmeias]= useState(0);
    const [diaSemana,setDiaSemana]= useState('');
    const [nacionalidade,setNacionalidade]= useState('');
    const [total,setTotal]= useState(0);

    async function Calcular(){
    const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
        qtd1:qtdinteira,
        qtd2:qtdmeias,
        dia:diaSemana,
        tipo:nacionalidade
    }); 
        setTotal(resp.data.total);
    }

    return(
        <main>
            <h1>Ingresso</h1>
            <div>Quantidade Inteiras: <input type='text' value={qtdinteira}onChange={e => setQtdinteiras(Number(e.target.value))} />
            </div>
            <div>Quantidade Meias: <input type='text'value={qtdmeias}onChange={e => setQtdmeias(Number(e.target.value))} /></div>
            <div>Dia da semana: <input type='text' value={diaSemana} onChange={e =>setDiaSemana(e.target.value)} /></div>
            <div>Nacionalidade: <input type='text' value={nacionalidade} onChange={e =>setNacionalidade(e.target.value)}/></div>
            <div>
                <button onClick={Calcular}>Calcular</button>
            </div>
            <div>
                O total é R$: {total}
            </div>
        </main>
            
    )
}