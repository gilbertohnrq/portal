// Mock data baseado na documentação original do Portal do Produtor Rural

export const producerData = {
  legalName: 'NICODEMOS FERREIRA GUIMARAES',
  taxId: '25570056300',
  age: 59,
  location: 'SAO DOMINGOS DO AZEITAO/MA',
  taxIdStatus: 'REGULAR',

  score: {
    value: 720,
    maxScore: 1000,
    lastUpdate: '20/06/2024',
    status: 'Bom',
  },

  farmerRegistries: [
    {
      register: '121309908',
      state: 'MA',
      status: 'Habilitado',
      mainActivity: '0111301 - Cultivo de arroz',
    },
    {
      register: '123278244',
      state: 'MA',
      status: 'Não Habilitado',
      mainActivity: '0115600 - Cultivo de soja',
    },
  ],

  economicGroup: [
    {
      name: 'A F GUIMARAES E CIA LTDA',
      taxId: '50021972000130',
      participation: null,
    },
    {
      name: 'M C N MATERIAIS DE CONSTRUCOES LTDA',
      taxId: '08710459000190',
      participation: 100,
    },
  ],

  nationalRestrictives: [
    {
      type: 'appointment',
      inclusionDate: '2025-03-31',
      amount: 55313.68,
      companyName: 'BANCO DO BRASIL S/A',
    },
  ],

  protests: [
    {
      city: 'São Domingos Do Azeitão',
      state: 'MT',
      protestDate: '06/01/2025',
      value: 676377.0,
    },
  ],

  compliance: {
    labour: [
      {
        name: 'TST',
        status: 'negativa',
      },
    ],
    fiscal: [
      {
        name: 'MG',
        status: 'negativa',
      },
    ],
    environmental: [
      {
        name: 'Ibama Embargos',
        status: 'negativa',
      },
    ],
  },

  lawsuits: [
    {
      number: '10306710520254013700',
      state: 'MA',
      status: 'ATIVO',
      value: 567962.76,
      subject: 'EXECUÇÃO FISCAL - Multas e demais Sanções',
      aiAnalysis: [
        'Processo de execução relacionado a débitos de financiamento rural no estado do Maranhão.',
        'Valor elevado indica débito significativo com possível impacto no score de crédito.',
        'Recomenda-se negociação para quitação ou parcelamento da dívida.',
      ],
    },
  ],

  activeCprs: [
    {
      value: 16747616,
      harvest: '2024/25',
      dueDate: '2025-02-27',
      status: 'Ativa',
      guarantee: 'Penhor 1° grau',
    },
  ],

  cars: [
    {
      name: 'FAZENDA OLHO DÁGUA DO NAJA',
      totalArea: 912.3173,
      productiveArea: null,
      city: 'Benedito Leite',
      state: 'MA',
    },
  ],

  scr: {
    total: 27025000,
    loan: 3196000,
    rural: {
      total: 23020000,
      cost: 9178000,
      investment: 12527000,
      marketing: 1315000,
    },
  },

  financialSummary: {
    totalDebt: 5076742.44,
    negativeRecords: 48500.0,
    cartorioProtests: 802530.65,
    distribution: {
      ruralFinancing: 40,
      financing: 25,
      loans: 15,
      coobligation: 10,
      otherCredits: 5,
      loss: 5,
    },
  },
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('pt-BR');
};

export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'ativo':
    case 'habilitado':
    case 'regular':
      return 'var(--success-color)';
    case 'inativo':
    case 'não habilitado':
    case 'irregular':
      return 'var(--warning-color)';
    case 'negativa':
    case 'suspenso':
      return 'var(--danger-color)';
    default:
      return 'var(--text-secondary)';
  }
};
