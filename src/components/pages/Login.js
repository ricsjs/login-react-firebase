import { Link } from 'react-router-dom'

import './Login.css';

function Login(){
    return(
        <div className="container">
            
            <div className='child'>
                <form action='#'>
                    <h2>Fazer Login</h2>
                    <input className='inputLogin' type='text' placeholder='E-mail'/><br/><br/>
                    <input className='inputLogin' type='password' placeholder='Senha'/><br/><br/>
                    <button className='btnSubmit' type='submit'>Entrar</button>
                    <div className='linkCadastro'>
                        <Link to='/cadastro'>Faça seu cadastro!</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;