import { Link } from 'react-router-dom'
import { useState } from 'react'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css';

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function logarUsuario(){
        await signInWithEmailAndPassword(auth, email, senha)
        .then((value) => {
            console.log("Usuário logado")
            console.log(value.user)
        })
        .catch(() => {
            console.log("Erro ao logar")
        })
    }

    return(
        <div className="container">
            
            <div className='child'>
                <form action='#'>
                    <h2>Fazer Login</h2>
                    <input className='inputLogin' type='email' placeholder='E-mail' value={email} onChange={((e) => setEmail(e.target.value))}/><br/><br/>
                    <input className='inputLogin' type='password' placeholder='Senha' value={senha} onChange={((e) => setSenha(e.target.value))}/><br/><br/>
                    <button className='btnSubmit' type='submit' onClick={logarUsuario}>Entrar</button>
                    <div className='linkCadastro'>
                        <Link to='/cadastro'>Faça seu cadastro!</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;