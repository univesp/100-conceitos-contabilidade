let questoes1 = [
  {
    "questaoId": 1,
    "titulo": "A4S",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "É um acrônimo de Accounting for Sustainability, uma rede criada para inspirar líderes empresariais e financeiros para a construção de modelos de negócios sustentáveis."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "É um acrônimo de Answer for Success, um grupo norte-americano que busca repensar a dinâmica contábil das empresas."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "É um acrônimo de Answer for Something, uma organização asiática que critica o modelo convencional de negócios."
      }
    ]
  },

  {
    "questaoId": 2,
    "titulo": "ABC",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Activity Based Costing, ou custeio baseado em atividade, é um sistema contábil de acumulação de custos que difere dos sistemas tradicionais por focar na mensuração dos processos e atividades."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Arab Based Costing, ou custeio baseado no modelo árabe, é um sistema contábil de desacumulação de custos baseado nos processos e negócios tradicionais, com foco nos resultados."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Academic Based Costing, ou custeio baseado na pesquisa acadêmica, é um sistema contábil de desacumulação de custos baseado em evidências científicas, com foco em análises e registros contábeis."
      }
    ]
  },

  {
    "questaoId": 3,
    "titulo": "Accountability",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "É um conceito da esfera ética relacionado ao ato de responsabilidade e de prestação de contas de acordo com princípios éticos e de boa governança."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "É um termo da língua inglesa que pode ser entendido como irresponsabilidade e remete à obrigação de mascarar a prestação de contas."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "É um conceito da esfera ética relacionado com o ato de irresponsabilidade na prestação de contas, de acordo com princípios imorais e de péssima governança."
      }
    ]
  },

  {
    "questaoId": 4,
    "titulo": "Ágio e deságio",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "É a diferença para mais (ágio) ou para menos (deságio) entre o valor de mercado de um determinado ativo em relação ao seu valor contábil."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "É a designação dos atos de agir ou não agir em relação ao mercado financeiro."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Representa a diferença entre o valor de um ativo em dólar em relação ao seu valor em reais."
      }
    ]
  },

  {
    "questaoId": 5,
    "titulo": "Ativo Circulante e Não Circulante",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Ativo Circulante (AC) é um Ativo que registra as disponibilidades, os títulos negociáveis, os estoques e os créditos realizáveis a curto prazo. O Ativo Não circulante (ANC) é um Ativo que registra os bens e direitos de permanência duradoura, como ativos realizáveis a longo prazo (RLP), investimentos, imobilizado e intangível."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Ativo Circulante (AC) é um Ativo que registra os bens e direitos de permanência duradoura, como ativos realizáveis a longo prazo (RLP), investimentos, imobilizado e intangível. Ativo Não Circulante (ANC) é um Ativo que registra as disponibilidades, títulos negociáveis, estoques e os créditos a receber no longo prazo."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Ativo Não Circulante (ANC) é um subgrupo do Ativo Circulante (AC) que registra as disponibilidades, títulos negociáveis, estoques e os créditos a receber no longo prazo."
      }
    ]
  },

  {
    "questaoId": 6,
    "titulo": "BCN",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Balanço Contábil das Nações (BCN) é um método para a elaboração de balanços contábeis de países ou regiões e relaciona aspectos financeiros (PIB) e não financeiros (energia, emissões, florestas)."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Balanço Contábil das Nações (BCN) é um método para a elaboração de balanços contábeis de países ou regiões e relaciona somente aspectos financeiros (PIB)."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Balanço Contábil das Nações (BCN) é um método para a elaboração de balanços contábeis de países ou regiões e relaciona somente aspectos não financeiros."
      }
    ]
  },

  {
    "questaoId": 7,
    "titulo": "BP e DRE",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Balanço Patrimonial (BP) e Demonstração do Resultado do Exercício (DRE), são as duas principais demonstrações contábeis."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "British Petroleum (BP) e Distribuidora Regional Executiva (DRE), são, respectivamente, as duas maiores empresas de produção e distribuição de petróleo da atualidade."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Balanço Público (BP) e Demonstração do Resultado da Empresa (DRE), são, respectivamente, as duas principais demonstrações financeiras da área pública e privada."
      }
    ]
  },

  {
    "questaoId": 8,
    "titulo": "Break-Even Point",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Break-Even Point (em português ponto de equilíbrio) é o ponto em que uma empresa atinge o equilíbrio entre as receitas e despesas ou com resultado nulo."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Break-Even Point (em português ponto de equilíbrio) é o ponto que não pode ser expresso em quantidades de produtos ou em montante de faturamento, ou em níveis de eficiência."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Break-Even Point (em português ponto de equilíbrio) é o ponto que não considera os custos de oportunidade pela remuneração do capital próprio."
      }
    ]
  },

  {
    "questaoId": 9,
    "titulo": "Cálculo de correlação",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "Cálculo ou coeficiente de correlação é uma medida matemática da relação que existe entre duas ou mais variáveis dentro de uma mesma escala."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "Cálculo ou coeficiente de correlação é uma escala que varia de 0 a 1 e calcula a relação entre variáveis determinadas."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "Cálculo ou coeficiente de correlação é um algoritmo computacional para cálculos contábeis em larga escala."
      }
    ]
  },

  {
    "questaoId": 10,
    "titulo": "Cálculo de Desvio-Padrão",
    "questaoFeitaCorreta": "false",

    "numeros": [
      {"alternativaId": 1},
      {"alternativaId": 2},
      {"alternativaId": 3},
    ],

    "alternativas": [
      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 1,
        "questaoCorreta": true,
        "questaoText": "O cálculo de desvio-padrão é uma medida matemática de dispersão em torno da média."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 2,
        "questaoCorreta": false,
        "questaoText": "No cálculo de desvio-padrão quanto maior o desvio-padrão, menor é a dispersão dos dados."
      },

      {
        "ordem": Math.floor(Math.random() * 1000000),
        "alternativaId": 3,
        "questaoCorreta": false,
        "questaoText": "O cálculo de desvio-padrão é obtido pela derivação da variância."
      }
    ]
  }
]