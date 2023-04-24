import { Link } from 'react-router-dom'
import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useState } from 'react'

function Cadastro(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function novoUsuario(){
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            console.log("Usuário cadastrado com sucesso!")
            setEmail('')
            setSenha('')
        })
        .catch((error) => {
            if(error.code === 'auth/wark-password'){
                alert("Senha muito fraca.")
            }else if(error.code === 'auth/email-already-in-use'){
                alert("Esse e-mail já está cadastrado!")
            }
        })
    }

    return(
        <div>
            <div className="container">
            
                <div className='child'>
                    
                        <h2>Fazer Cadastro</h2>
                        <input className='inputLogin' type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
                        <input id='inputSenha' className='inputLogin' type='password' placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)}/><br/><br/>
                        <button className='btnSubmit' onClick={novoUsuario}>Cadastrar</button>
                        <div className='linkCadastro'>
                            <Link to='/'>Faça Login!</Link>
                        </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Cadastro;