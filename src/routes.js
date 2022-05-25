import { Route, Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corprimaria'
import Dobro from './pages/dobro'
import MaiorNumero from './pages/maiornumero'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'

export default function SiteRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/corPrimaria' element={<CorPrimaria />} />
                <Route path='/frequencia' element={<Frequencia />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/maiorNumero' element={<MaiorNumero />} />
                <Route path='/dobro' element={<Dobro />} />
            </Routes>
        </BrowserRouter>
    )
}