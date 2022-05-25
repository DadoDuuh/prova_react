import { Link } from "react-router-dom";
import './index.scss'



export default function Index() {
    return(
        <main className="page-home">
            <div className="ct1-home">
                <h1>Home</h1>
            </div>
            <div className="ct2-conteudo">
                <div className="ct2-list">
                <h2>Conteúdos</h2>
                <ul>
                    <li> <Link to='/corPrimaria'>Cor Primária</Link> </li>
                    <li> <Link to='/Frequencia'>Frequencia</Link> </li>
                    <li> <Link to='/Ingresso'>Ingresso</Link> </li>
                    <li> <Link to='/MaiorNumero'>Maior Numero</Link> </li>
                    <li> <Link to='/Dobro'>Dobro</Link> </li>
                    <li> <Link to='/Soma'>Soma</Link> </li>
                </ul>
                </div>
            </div>
        </main>
    )
}