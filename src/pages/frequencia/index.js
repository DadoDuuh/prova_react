import axios from "axios"
import{ useState } from "react"

export default function Index() {
    const [texto,setTexto] = useState('');
    const [caracter,setCaracter] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificarFrequência(){
        const resp = await axios.get(`http://localhost:5000/dia2/freqcaracter/${texto}/${caracter}`);
        setResposta(resp);
    }
    return(
        <main>
            <h1>Frequência</h1>

            <div>
                Texto:<input type="text" value={texto} onChange={e => setTexto(e.target.value)}></input>
            </div>
            <div>
                Caracter:<input type="text" value={caracter} onChange={e => setCaracter(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificarFrequência}>verificar</button>
            </div>
            <div>Frequência = {resposta}</div>
        </main>
    )
}