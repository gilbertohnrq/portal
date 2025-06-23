# 🌾 Portal do Produtor Rural

![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?style=for-the-badge&logo=vite)
![CSS3](https://img.shields.io/badge/CSS3-Custom-1572b6?style=for-the-badge&logo=css3)

> **Dashboard financeiro completo para análise de crédito e gestão de dados do produtor rural**

Uma aplicação moderna e responsiva que oferece visão 360° das informações financeiras e cadastrais de produtores rurais, desenvolvida com as melhores práticas do React e TypeScript.

## 🎯 **Sobre o Projeto**

O Portal do Produtor Rural é uma solução completa para análise de crédito rural que integra múltiplas fontes de dados em uma interface intuitiva e moderna. A aplicação permite visualização detalhada de:

- **Score de Crédito** com análise visual
- **Endividamento Financeiro** (SCR)
- **Registros Restritivos** e Protestos
- **Compliance ESG** (Trabalhista, Fiscal, Ambiental)
- **Processos Judiciais** com análise por IA
- **Cadastro Ambiental Rural (CAR)**
- **CPRs Ativas** e Grupo Econômico

## ✨ **Funcionalidades Principais**

### 📊 **Dashboard Interativo**
- Navegação suave entre seções com scroll automático
- Layout responsivo para desktop, tablet e mobile
- Sidebar colapsível com navegação intuitiva
- Score de crédito visual com status colorido

### 🔐 **Sistema de Autenticação**
- Login seguro com validação de CPF/CNPJ
- Gerenciamento de sessão com localStorage
- Recuperação de senha (interface pronta)
- Estados de loading e tratamento de erros

### 📱 **Experiência Mobile-First**
- Interface totalmente responsiva
- Menu hambúrguer para navegação mobile
- Touch-friendly com gestos nativos
- Performance otimizada para todos os dispositivos

### 🎨 **UI/UX Moderno**
- Design system consistente com CSS custom properties
- Animações suaves e micro-interações
- Tipografia otimizada para legibilidade
- Paleta de cores acessível e profissional

## 🛠️ **Stack Tecnológica**

### **Frontend**
- **React 19** - Última versão com hooks modernos
- **TypeScript** - Type safety e melhor DX
- **Vite** - Build tool ultra-rápido
- **CSS3** - Styled components com custom properties
- **Lucide React** - Ícones SVG otimizados

### **Roteamento & Estado**
- **React Router DOM 7** - SPA navigation
- **Custom Hooks** - Lógica reutilizável e testável
- **Context API** - Gerenciamento de estado global
- **Local Storage** - Persistência de sessão

### **Ferramentas de Desenvolvimento**
- **ESLint** - Linting com regras React/TypeScript
- **Prettier** - Formatação automática de código
- **TypeScript ESLint** - Rules específicas TS
- **Vite Config** - Build otimizado para produção

## 🏗️ **Arquitetura & Padrões**

### **Custom Hooks Implementados**
```typescript
useAuth()          // Gerenciamento de autenticação
useLocalStorage()  // Persistência de dados local
useAsync()         // Operações assíncronas com loading
useForm()          // Gerenciamento de formulários
useSidebar()       // Estado da navegação lateral
```

### **Estrutura de Componentes**
```
src/
├── components/           # Componentes reutilizáveis
│   ├── common/          # LoadingSpinner, etc.
│   ├── dashboard/       # Overview, sections
│   ├── Login.tsx        # Autenticação
│   └── Dashboard.tsx    # Layout principal
├── hooks/               # Custom hooks
├── styles/              # CSS organizados por componente
├── data/                # Mock data & utilities
└── types/               # TypeScript definitions
```

### **Melhores Práticas Aplicadas**
- ✅ **Separation of Concerns** - Hooks extraem lógica de componentes
- ✅ **Type Safety** - TypeScript em 100% do código
- ✅ **Performance** - useCallback, useMemo onde necessário
- ✅ **Accessibility** - Semantic HTML e navegação por teclado
- ✅ **Mobile First** - Design responsivo por padrão
- ✅ **Clean Code** - Nomes descritivos e funções puras

## 🚀 **Quick Start**

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portal-produtor-rural.git

# Entre no diretório
cd portal-produtor-rural/frontend

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### **Build para Produção**
```bash
# Build otimizado
npm run build

# Preview da build
npm run preview
```

### **Credenciais de Demonstração**
```
CPF: 123.456.789-00
Senha: 123456
```

## 📊 **Performance**

- ⚡ **Build Size**: ~255KB (comprimido: 80KB)
- 🚀 **First Paint**: < 1s
- 📱 **Mobile Score**: 95+ (Lighthouse)
- ♿ **Accessibility**: AA compliant

## 🎨 **Screenshots**

### Login Screen
Interface de autenticação limpa com validação em tempo real e estados de loading.

### Dashboard Principal
Vista geral com score de crédito, informações cadastrais e navegação intuitiva.

### Análise Financeira
Visualização detalhada de endividamento, protestos e restritivos com charts interativos.

## 🔧 **Funcionalidades Técnicas Destacadas**

### **Gerenciamento de Estado Avançado**
- Custom hooks para lógica complexa
- Estado compartilhado sem prop drilling
- Persistência automática de sessão

### **Tratamento de Erros Robusto**
- Error boundaries para componentes
- Estados de loading consistentes
- Fallbacks graceful para falhas de rede

### **Otimizações de Performance**
- Code splitting automático
- Lazy loading de componentes
- Debounce em inputs de busca

### **Experiência do Usuário**
- Feedback visual imediato
- Navegação por teclado completa
- Animações suaves e naturais

## 👨‍💻 **Sobre o Desenvolvimento**

Este projeto foi desenvolvido aplicando conceitos avançados de React e TypeScript, com foco em:

- **Arquitetura Escalável** - Estrutura preparada para crescimento
- **Code Quality** - ESLint + TypeScript + Prettier
- **Performance** - Bundle otimizado e carregamento rápido
- **Maintainability** - Código limpo e bem documentado
- **User Experience** - Interface intuitiva e responsiva

---

## 🤝 **Contribuição**

Contribuições são bem-vindas! Sinta-se à vontade para:

1. 🍴 Fork o projeto
2. 🌟 Criar uma feature branch
3. 💻 Commit suas mudanças
4. 📤 Push para a branch
5. 🔍 Abrir um Pull Request

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
