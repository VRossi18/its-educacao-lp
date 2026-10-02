import type { ImageMetadata } from "astro";
import diego from "../assets/instrutores/diego.jpg";
import igor from "../assets/instrutores/igor.jpg";
import laura from "../assets/instrutores/laura.jpg";

export interface Instrutor {
  id: string;
  nome: string;
  primeiroNome: string;
  foto: ImageMetadata;
  cargo: string;
  badge: string;
  metricas: { valor: string; rotulo: string }[];
  bio: string[];
  selos: string[];
}

// Conteúdo baseado em instrutores/<Nome>/formacao.md
export const instrutores: Instrutor[] = [
  {
    id: "diego",
    nome: "Dr. Diego Rabelo Pereira",
    primeiroNome: "Diego",
    foto: diego,
    cargo: "Médico · Clínica Médica · Residente em Cardiologia",
    badge: "Clínica Médica & Cardiologia",
    // TODO: confirmar ano — formacao.md cita "Instrutor desde 2020" e "desde 2021"
    metricas: [
      { valor: "2021", rotulo: "Instrutor desde" },
      { valor: "AHA + HSI", rotulo: "Programas internacionais" },
      { valor: "ACLS · BLS", rotulo: "Formador de instrutores" },
    ],
    bio: [
      "Médico formado pela Universidade Federal de Goiás, com especialização em Clínica Médica e residência em Cardiologia. Atua em pronto atendimento, time de resposta rápida e terapia intensiva.",
      "É formador de instrutores dos programas de certificação internacional ACLS e BLS, pela AHA (American Heart Association) e pelo HSI (Health and Safety Institute).",
    ],
    selos: ["AHA", "HSI", "UFG"],
  },
  {
    id: "igor",
    nome: "Dr. Igor Rabelo Pereira",
    primeiroNome: "Igor",
    foto: igor,
    cargo: "Médico · Pronto Atendimento e Sala Vermelha",
    badge: "Emergência & Sala Vermelha",
    metricas: [
      { valor: "2023", rotulo: "Instrutor desde" },
      { valor: "AHA + HSI", rotulo: "Programas internacionais" },
      { valor: "ACLS · BLS", rotulo: "Formador de instrutores" },
    ],
    bio: [
      "Médico formado pela Uniube, com experiência em pronto atendimento, time de resposta rápida e sala vermelha, onde cada decisão precisa ser rápida e precisa.",
      "É formador de instrutores dos programas de certificação internacional ACLS e BLS e atua nos programas da AHA (American Heart Association) e do HSI (Health and Safety Institute).",
    ],
    selos: ["AHA", "HSI", "Uniube"],
  },
  {
    id: "laura",
    nome: "Dra. Laura Fernandes Ferreira",
    primeiroNome: "Laura",
    foto: laura,
    cargo: "Médica · Clínica Médica",
    badge: "Clínica Médica & Terapia Intensiva",
    metricas: [
      { valor: "AHA + HSI", rotulo: "Instrutora certificada" },
      { valor: "UTI", rotulo: "Experiência em terapia intensiva" },
      { valor: "Speaker", rotulo: "Na área de diabetes" },
    ],
    bio: [
      "Médica formada pela UNIPAM, com especialização em Clínica Médica e experiência em pronto atendimento, time de resposta rápida e terapia intensiva.",
      "Integra o corpo técnico do ITS como instrutora dos programas da AHA (American Heart Association) e do HSI (Health and Safety Institute). Também é speaker na área de diabetes.",
    ],
    selos: ["AHA", "HSI", "UNIPAM"],
  },
];
