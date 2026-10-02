// TODO: revisar todo o conteúdo dos cursos (títulos, carga horária, tópicos)
export interface Curso {
  sigla: string;
  nome: string;
  publico: string;
  certificacao: string;
  cargaHoraria: string;
  topicos: string[];
}

export const cursos: Curso[] = [
  {
    sigla: "ACLS",
    nome: "Suporte Avançado de Vida em Cardiologia",
    publico: "Médicos, enfermeiros e estudantes da área da saúde",
    certificacao: "AHA / HSI",
    cargaHoraria: "16h · 2 dias", // TODO
    topicos: [
      "Reconhecimento e manejo da parada cardiorrespiratória",
      "Algoritmos de FV/TV sem pulso, AESP e assistolia",
      "Manejo de vias aéreas e ventilação",
      "Bradiarritmias e taquiarritmias",
      "Síndromes coronarianas agudas e AVC",
      "Dinâmica de equipe em megacode simulado",
    ],
  },
  {
    sigla: "BLS",
    nome: "Suporte Básico de Vida",
    publico: "Profissionais e estudantes da saúde",
    certificacao: "AHA / HSI",
    cargaHoraria: "8h · 1 dia", // TODO
    topicos: [
      "RCP de alta qualidade em adultos, crianças e bebês",
      "Uso do DEA (desfibrilador externo automático)",
      "Ventilação com bolsa-válvula-máscara",
      "Desobstrução de vias aéreas (engasgo)",
      "Atendimento em equipe e comunicação eficaz",
    ],
  },
  {
    sigla: "1ºS",
    nome: "Primeiros Socorros",
    publico: "Empresas, escolas, academias e público em geral",
    certificacao: "HSI",
    cargaHoraria: "4h", // TODO
    topicos: [
      "Avaliação da cena e acionamento do socorro",
      "RCP e uso do DEA para leigos",
      "Engasgo, desmaios e convulsões",
      "Sangramentos, queimaduras e fraturas",
    ],
  },
];
