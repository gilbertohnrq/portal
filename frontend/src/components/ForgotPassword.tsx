import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Loader } from 'lucide-react';
import '../styles/Login.css';

const ForgotPassword: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err) {
      setError('Erro ao enviar email de recuperação');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="bg-pattern"></div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <h1>Recuperar Senha</h1>
          <p>Digite seu CPF/CNPJ e enviaremos um link para recuperação</p>
        </div>

        {success ? (
          <div className="alert alert-success">
            <Mail size={20} />
            Link de recuperação enviado com sucesso!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="cpf" className="form-label">
                CPF/CNPJ
              </label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="form-input"
                placeholder="000.000.000-00"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader size={16} className="spinning" />
                  Enviando...
                </>
              ) : (
                'Enviar Link'
              )}
            </button>
          </form>
        )}

        <div className="login-footer">
          <Link to="/login" className="forgot-password-link">
            <ArrowLeft size={16} />
            Voltar ao login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 