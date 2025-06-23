import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Loader } from 'lucide-react';
import { useAsync } from '../hooks/useAsync';
import '../styles/Login.css';

interface User {
  cpf: string;
  nome: string;
}

interface LoginProps {
  onLogin: (token: string, user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    cpf: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, execute } = useAsync<{ token: string; user: User }>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format CPF input
    if (name === 'cpf') {
      const formattedValue = formatCPF(value);
      setFormData(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing - error is now handled by useAsync
  };

  const formatCPF = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Apply CPF mask
    if (digits.length <= 11) {
      return digits
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    
    return value;
  };

  const validateCPF = (cpf: string) => {
    const digits = cpf.replace(/\D/g, '');
    return digits.length === 11;
  };

  const authenticateUser = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock authentication (replace with real API call)
    const cleanCPF = formData.cpf.replace(/\D/g, '');
    
    if (cleanCPF === '12345678900' && formData.password === '123456') {
      const mockToken = 'mock-jwt-token-' + Date.now();
      const mockUser: User = {
        cpf: cleanCPF,
        nome: 'José Carlos Vicentino',
      };
      
      return { token: mockToken, user: mockUser };
    } else {
      throw new Error('CPF/CNPJ ou senha incorretos');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.cpf || !formData.password) {
      throw new Error('Todos os campos são obrigatórios');
    }

    if (!validateCPF(formData.cpf)) {
      throw new Error('CPF deve ter 11 dígitos');
    }

    try {
      const result = await execute(authenticateUser);
      if (result) {
        onLogin(result.token, result.user);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="bg-pattern"></div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <img src="/logo-nagro.png" alt="Nagro" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
          </div>
          <h1>Portal do Produtor Rural</h1>
          <p>Acesse sua conta para visualizar informações detalhadas</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="alert alert-error">
              {error.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="cpf" className="form-label">
              <User size={16} />
              CPF/CNPJ
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="form-input"
              placeholder="000.000.000-00"
              maxLength={14}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <Lock size={16} />
              Senha
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Digite sua senha"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary login-button"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader size={16} className="spinning" />
                Entrando...
              </>
            ) : (
              'Entrar'
            )}
          </button>

          <div className="login-footer">
            <Link to="/forgot-password" className="forgot-password-link">
              Esqueceu sua senha?
            </Link>
          </div>
        </form>

        <div className="demo-credentials">
          <h4>Credenciais de Demonstração:</h4>
          <div className="demo-info">
            <p><strong>CPF:</strong> 123.456.789-00</p>
            <p><strong>Senha:</strong> 123456</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 