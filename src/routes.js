import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/pages/Login';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login/> } />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;