import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path='/cadastro' element={ <Cadastro/> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;