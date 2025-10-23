import styles from './Register.module.css';

import { useState, useEffect } from 'react';

function Register() {
    return (
        <div>
            <h1>Cadastre-se</h1>
            <p>Crie seu usuário e compartilhe suas histórias.</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayName'
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
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register