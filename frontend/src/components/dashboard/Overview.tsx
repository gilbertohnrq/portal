import React from 'react';
import { 
  User, 
  FileText, 
  Building2, 
  AlertTriangle, 
  FileWarning, 
  TrendingUp,
  Calendar,
  MapPin,
  DollarSign,
  BarChart3,
  Shield,
  Gavel
} from 'lucide-react';
import { producerData, formatCurrency, formatDate, getStatusColor } from '../../data/mockData';
import '../../styles/Overview.css';

const Overview: React.FC = () => {
  return (
    <div className="overview-container">
      {/* Header com informações do produtor */}
      <section id="overview" className="section-block">
        <div className="section-header">
          <h2>
            <User size={24} />
            Informações Cadastrais
          </h2>
        </div>
        <div className="producer-info-grid">
          <div className="producer-main-card">
            <div className="producer-avatar">
              <span>{producerData.legalName.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
            </div>
            <div className="producer-details">
              <h3>{producerData.legalName}</h3>
              <div className="producer-meta">
                <span><strong>CPF/CNPJ:</strong> {producerData.taxId}</span>
                <span><strong>Idade:</strong> {producerData.age} anos</span>
                <span>
                  <MapPin size={16} />
                  {producerData.location}
                </span>
                <span 
                  className="status-badge"
                  style={{ color: getStatusColor(producerData.taxIdStatus) }}
                >
                  Status: {producerData.taxIdStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Score de Crédito */}
          <div className="score-card">
            <div className="score-header">
              <TrendingUp size={20} />
              <span>Score de Crédito</span>
            </div>
            <div className="score-display">
              <div className="score-circle">
                <div className="score-value">{producerData.score.value}</div>
                <div className="score-max">/{producerData.score.maxScore}</div>
              </div>
              <div className="score-info">
                <span className="score-status">{producerData.score.status}</span>
                <span className="score-update">
                  <Calendar size={14} />
                  Atualizado em {producerData.score.lastUpdate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo Financeiro */}
      <section className="section-block">
        <div className="section-header">
          <h2>
            <DollarSign size={24} />
            Resumo Financeiro
          </h2>
        </div>
        <div className="financial-grid">
          <div className="financial-overview-card">
            <div className="financial-item total">
              <span>Endividamento Total</span>
              <strong>{formatCurrency(producerData.financialSummary.totalDebt)}</strong>
            </div>
            <div className="financial-item negative">
              <span>Registros Negativos</span>
              <strong>{formatCurrency(producerData.financialSummary.negativeRecords)}</strong>
            </div>
            <div className="financial-item protests">
              <span>Protestos em Cartório</span>
              <strong>{formatCurrency(producerData.financialSummary.cartorioProtests)}</strong>
            </div>
          </div>
          
          <div className="distribution-card">
            <h4>Distribuição por Categoria</h4>
            <div className="distribution-chart">
              {Object.entries(producerData.financialSummary.distribution).map(([key, value]) => (
                <div key={key} className="distribution-item">
                  <div className="distribution-bar">
                    <div 
                      className="distribution-fill"
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <span className="distribution-label">{key}: {value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sintegra - Registros de Produtor */}
      <section id="sintegra" className="section-block">
        <div className="section-header">
          <h2>
            <FileText size={24} />
            Sintegra - Registros de Produtor
          </h2>
        </div>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Registro</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Atividade Principal</th>
              </tr>
            </thead>
            <tbody>
              {producerData.farmerRegistries.map((registry, index) => (
                <tr key={index}>
                  <td>{registry.register}</td>
                  <td>{registry.state}</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ color: getStatusColor(registry.status) }}
                    >
                      {registry.status}
                    </span>
                  </td>
                  <td>{registry.mainActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Grupo Econômico */}
      <section id="economic-group" className="section-block">
        <div className="section-header">
          <h2>
            <Building2 size={24} />
            Grupo Econômico
          </h2>
        </div>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>CNPJ</th>
                <th>Participação (%)</th>
              </tr>
            </thead>
            <tbody>
              {producerData.economicGroup.map((company, index) => (
                <tr key={index}>
                  <td>{company.name}</td>
                  <td>{company.taxId}</td>
                  <td>{company.participation || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Restritivos Nacional */}
      <section id="restrictives" className="section-block">
        <div className="section-header">
          <h2>
            <AlertTriangle size={24} />
            Restritivos Nacional
          </h2>
        </div>
        <div className="restrictives-list">
          {producerData.nationalRestrictives.map((restrictive, index) => (
            <div key={index} className="restrictive-card">
              <div className="restrictive-header">
                <AlertTriangle size={20} className="warning-icon" />
                <span className="restrictive-type">{restrictive.type.toUpperCase()}</span>
              </div>
              <div className="restrictive-details">
                <p><strong>Data de Inclusão:</strong> {formatDate(restrictive.inclusionDate)}</p>
                <p><strong>Valor:</strong> {formatCurrency(restrictive.amount)}</p>
                <p><strong>Empresa:</strong> {restrictive.companyName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protestos */}
      <section id="protests" className="section-block">
        <div className="section-header">
          <h2>
            <FileWarning size={24} />
            Protestos
          </h2>
        </div>
        <div className="protests-list">
          {producerData.protests.map((protest, index) => (
            <div key={index} className="protest-card">
              <div className="protest-header">
                <FileWarning size={20} className="danger-icon" />
                <span className="protest-location">{protest.city} - {protest.state}</span>
              </div>
              <div className="protest-details">
                <p><strong>Data do Protesto:</strong> {protest.protestDate}</p>
                <p><strong>Valor:</strong> {formatCurrency(protest.value)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Endividamento Financeiro SCR */}
      <section id="financial" className="section-block">
        <div className="section-header">
          <h2>
            <BarChart3 size={24} />
            Endividamento Financeiro - SCR
          </h2>
        </div>
        <div className="scr-grid">
          <div className="scr-summary">
            <div className="scr-item">
              <span>Total Geral</span>
              <strong>{formatCurrency(producerData.scr.total)}</strong>
            </div>
            <div className="scr-item">
              <span>Empréstimos</span>
              <strong>{formatCurrency(producerData.scr.loan)}</strong>
            </div>
          </div>
          
          <div className="scr-rural">
            <h4>Financiamento Rural</h4>
            <div className="scr-rural-breakdown">
              <div className="scr-rural-item">
                <span>Total Rural</span>
                <strong>{formatCurrency(producerData.scr.rural.total)}</strong>
              </div>
              <div className="scr-rural-item">
                <span>Custeio</span>
                <strong>{formatCurrency(producerData.scr.rural.cost)}</strong>
              </div>
              <div className="scr-rural-item">
                <span>Investimento</span>
                <strong>{formatCurrency(producerData.scr.rural.investment)}</strong>
              </div>
              <div className="scr-rural-item">
                <span>Comercialização</span>
                <strong>{formatCurrency(producerData.scr.rural.marketing)}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CPRs Ativas */}
      <section id="cprs" className="section-block">
        <div className="section-header">
          <h2>
            <FileText size={24} />
            CPRs Ativas
          </h2>
        </div>
        <div className="cprs-list">
          {producerData.activeCprs.map((cpr, index) => (
            <div key={index} className="cpr-card">
              <div className="cpr-header">
                <span className="cpr-value">{formatCurrency(cpr.value)}</span>
                <span className={`cpr-status ${cpr.status.toLowerCase()}`}>
                  {cpr.status}
                </span>
              </div>
              <div className="cpr-details">
                <p><strong>Safra:</strong> {cpr.harvest}</p>
                <p><strong>Vencimento:</strong> {formatDate(cpr.dueDate)}</p>
                <p><strong>Garantia:</strong> {cpr.guarantee}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="section-block">
        <div className="section-header">
          <h2>
            <Shield size={24} />
            Compliance ESG
          </h2>
        </div>
        <div className="compliance-grid">
          <div className="compliance-category">
            <h4>Trabalhista</h4>
            {producerData.compliance.labour.map((item, index) => (
              <div key={index} className="compliance-item">
                <span>{item.name}</span>
                <span 
                  className="compliance-status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          
          <div className="compliance-category">
            <h4>Fiscal</h4>
            {producerData.compliance.fiscal.map((item, index) => (
              <div key={index} className="compliance-item">
                <span>{item.name}</span>
                <span 
                  className="compliance-status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          
          <div className="compliance-category">
            <h4>Ambiental</h4>
            {producerData.compliance.environmental.map((item, index) => (
              <div key={index} className="compliance-item">
                <span>{item.name}</span>
                <span 
                  className="compliance-status"
                  style={{ color: getStatusColor(item.status) }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processos Judiciais */}
      <section className="section-block">
        <div className="section-header">
          <h2>
            <Gavel size={24} />
            Processos Judiciais
          </h2>
        </div>
        <div className="lawsuits-list">
          {producerData.lawsuits.map((lawsuit, index) => (
            <div key={index} className="lawsuit-card">
              <div className="lawsuit-header">
                <span className="lawsuit-number">{lawsuit.number}</span>
                <span className={`lawsuit-status ${lawsuit.status.toLowerCase()}`}>
                  {lawsuit.status}
                </span>
              </div>
              <div className="lawsuit-details">
                <p><strong>Estado:</strong> {lawsuit.state}</p>
                <p><strong>Valor:</strong> {formatCurrency(lawsuit.value)}</p>
                <p><strong>Assunto:</strong> {lawsuit.subject}</p>
              </div>
              <div className="lawsuit-ai-analysis">
                <h5>Análise por IA:</h5>
                <ul>
                  {lawsuit.aiAnalysis.map((analysis, idx) => (
                    <li key={idx}>{analysis}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAR - Cadastro Ambiental Rural */}
      <section className="section-block">
        <div className="section-header">
          <h2>
            <MapPin size={24} />
            CAR - Cadastro Ambiental Rural
          </h2>
        </div>
        <div className="car-list">
          {producerData.cars.map((car, index) => (
            <div key={index} className="car-card">
              <h4>{car.name}</h4>
              <div className="car-details">
                <p><strong>Área Total:</strong> {car.totalArea} hectares</p>
                <p><strong>Área Produtiva:</strong> {car.productiveArea || 'N/A'}</p>
                <p><strong>Localização:</strong> {car.city} - {car.state}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview; 