import styles from './Register.module.css';

import { useState, useEffect } from 'react';

function Register() {
    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Crie conexões, conte suas histórias e compartilhe seu lifestyle.</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayName'
                        placeholder='Insira o nome completo'
                        required
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='exemple@gmail.com'
                        required
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name='password'
                        required
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                    />
                </label>
                <div className='btn-div'>
                    <button className='btn'>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}

export default Register