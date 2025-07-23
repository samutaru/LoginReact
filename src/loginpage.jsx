import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Correo electrónico</label>
        <input type="email" required />
        <label>Contraseña</label>
        <input type="password" required />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
