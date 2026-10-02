const whatsappNumber = (import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
const whatsappMessage =
  import.meta.env.PUBLIC_WHATSAPP_MESSAGE ||
  "Olá! Vim pelo site da ITS e quero saber mais sobre os cursos.";

export const site = {
  name: "ITS – Instituto de Treinamentos em Saúde",
  shortName: "ITS",
  description:
    "Cursos ACLS e BLS com certificação internacional (AHA/HSI), ministrados por médicos que vivem a emergência. Prática realista para agir com segurança.",
  whatsappUrl: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "#",
  inscricaoUrl: import.meta.env.PUBLIC_INSCRICAO_URL || "#",
};

export const nav = [
  { label: "Cursos", href: "#cursos" },
  { label: "Instrutores", href: "#instrutores" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];
