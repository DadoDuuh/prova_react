import axios from "axios"
import{ useState} from "react"

export default function Index() {
    const [number,setNumberone] = useState('');
    const [numberone,setNumbertwo] = useState('');
    const [resposta,setResposta]= useState('');

    async function verificarSoma(){
        const resp = await axios.get('http://localhost:5000/soma/?' + number);
        setResposta(resp);
    }
    return(
        <main>
            <h1>Cor Primária</h1>

            <div>
                Numero:<input type="text" value={numberone} onChange={e => setNumberone(e.target.value)}></input>
            </div>
            <div>
                Numero:<input type="text" value={numbertwo} onChange={e => setNumbertwo(e.target.value)}></input>
            </div>
            <div>
                <button onClick ={verificarSoma}>verificar</button>
            </div>
            <div>Soma = {resposta}</div>
        </main>
    )
}