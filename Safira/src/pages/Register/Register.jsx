import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Register.module.css';

import { useState, useEffect } from 'react';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("")

        const user = {
            name,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user);

        console.log(res);
    };

    useEffect(() => {

        if (authError) {
            setError(authError);
        }

    }, [authError]);

    return (
        <div className={styles.register}>
            <h1>Crie sua conta</h1>
            <p>Crie conexões, conte suas histórias e compartilhe seu lifestyle.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='name'
                        placeholder='Insira o nome completo'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='exemple@gmail.com'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading &&
                    <div className='btn-div'>
                        <button className='btn'>Cadastrar</button>
                    </div>
                }
                {loading &&
                    <div className='btn-div'>
                        <button className='btn' disabled>Aguarde...</button>
                    </div>
                }
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register