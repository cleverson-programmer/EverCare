import {
  Sparkles,
  Home,
  Wind,
  Layers,
  Sofa,
  Building2,
  Heart,
  Activity,
  Users,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceTheme = "cleaning" | "homecare";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string[];
  theme: ServiceTheme;
}

export interface ServiceData {
  slug: string;
  theme: ServiceTheme;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  badge: string;
  items: ServiceItem[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "limpeza-residencial",
    theme: "cleaning",
    badge: "Cleaning Services",
    heroTitle: "Limpeza Residencial",
    heroSubtitle: "Seu lar impecável, do jeito que você merece.",
    heroDescription:
      "Oferecemos limpeza residencial completa com produtos de alta qualidade, equipe treinada e pontualidade garantida. Do básico ao profundo, cuidamos de cada detalhe para que você aproveite um ambiente limpo, saudável e aconchegante.",
    items: [
      {
        icon: Sparkles,
        title: "Limpeza Completa",
        description: ["Higienização de todos os cômodos, superfícies, janelas e detalhes da residência."],
        theme: "cleaning",
      },
      {
        icon: Wind,
        title: "Limpeza Pós-Obra",
        description: ["Remoção de resíduos de construção, poeira fina e limpeza especializada pós-reforma."],
        theme: "cleaning",
      },
      {
        icon: Layers,
        title: "Limpeza de Piso",
        description: ["Cristalização, polimento e tratamento especializado para pisos cerâmicos, laminados e vinílicos."],
        theme: "cleaning",
      },
      {
        icon: Sofa,
        title: "Higienização de Estofados",
        description: ["Limpeza a seco e higienização profunda de sofás, cadeiras, tapetes e colchões."],
        theme: "cleaning",
      },
    ],
  },
  {
    slug: "limpeza-comercial",
    theme: "cleaning",
    badge: "Cleaning Services",
    heroTitle: "Limpeza Comercial",
    heroSubtitle: "Ambientes de trabalho limpos, equipes mais produtivas.",
    heroDescription:
      "Serviço de limpeza profissional para escritórios, lojas, clínicas e condomínios. Mantemos seu espaço comercial impecável para receber colaboradores e clientes com excelência.",
    items: [
      {
        icon: Building2,
        title: "Limpeza de Escritório",
        description: ["Manutenção diária ou periódica de ambientes corporativos, banheiros e copa."],
        theme: "cleaning",
      },
      {
        icon: Sparkles,
        title: "Limpeza de Condomínio",
        description: ["Áreas comuns, garagens, escadas e jardins com planos mensais personalizados."],
        theme: "cleaning",
      },
      {
        icon: Home,
        title: "Limpeza de Clínicas",
        description: ["Higienização especializada com foco em biossegurança e conformidade sanitária."],
        theme: "cleaning",
      },
      {
        icon: Wind,
        title: "Limpeza de Vidros",
        description: ["Lavagem externa e interna de fachadas envidraçadas com equipamentos especializados."],
        theme: "cleaning",
      },
    ],
  },
    {
    slug: "limpeza-pos-construcao",
    theme: "cleaning",
    badge: "Cleaning Services",
    heroTitle: "Limpeza Pós-Construção",
    heroSubtitle: "Ambientes prontos para uso, sem resíduos de construção.",
    heroDescription:
      "Serviço especializado para remoção de poeira, detritos e resíduos de construção após reformas ou obras. Deixe seu espaço limpo, seguro e pronto para ser utilizado.",
    items: [
      {
        icon: Building2,
        title: "Limpeza de Predios",
        description: ["Remoção completa de resíduos de construção, poeira e detritos em ambientes recém-construídos."],
        theme: "cleaning",
      },
      {
        icon: Sparkles,
        title: "Limpeza de Condomínio",
        description: ["Áreas comuns, garagens, escadas e jardins com planos mensais personalizados."],
        theme: "cleaning",
      },
      {
        icon: Home,
        title: "Limpeza de Clínicas",
        description: ["Higienização especializada com foco em biossegurança e conformidade sanitária."],
        theme: "cleaning",
      },
      {
        icon: Wind,
        title: "Limpeza de Vidros",
        description: ["Lavagem externa e interna de fachadas envidraçadas com equipamentos especializados."],
        theme: "cleaning",
      },
    ],
  },
  {
    slug: "assistencia-domiciliar",
    theme: "homecare",
    badge: "Home Care",
    heroTitle: "Cuidado ao Idoso",
    heroSubtitle: "Atenção, carinho e saúde no conforto do lar.",
    heroDescription:
      "Cuidadores qualificados para acompanhar e zelar pelo bem-estar de idosos em casa. Oferecemos serviços humanizados, respeitando a dignidade e a individualidade de cada pessoa.",
    items: [
      {
        icon: Heart,
        title: "Cuidados Básicos",
        description: ["Higiene pessoal, alimentação assistida, locomoção segura e administração de medicamentos."],
        theme: "homecare",
      },
      {
        icon: Activity,
        title: "Procedimentos de Enfermagem",
        description: ["Curativos, controle de sinais vitais, medicação endovenosa e suporte clínico domiciliar."],
        theme: "homecare",
      },
      {
        icon: Users,
        title: "Acompanhamento Presencial",
        description: ["Cuidador disponível em turnos diurnos, noturnos ou 24h para máxima segurança."],
        theme: "homecare",
      },
      {
        icon: Brain,
        title: "Suporte Cognitivo",
        description: ["Atividades estimulantes, convívio social e apoio emocional para saúde mental e cognitiva."],
        theme: "homecare",
      },
    ],
  },
  {
    slug: "enfermagem-domiciliar",
    theme: "homecare",
    badge: "Home Care",
    heroTitle: "Enfermagem Domiciliar",
    heroSubtitle: "Saúde profissional onde você está.",
    heroDescription:
      "Equipe de enfermagem especializada para cuidados clínicos no domicílio. Realizamos procedimentos com segurança, higiene e toda a atenção que seu familiar merece.",
    items: [
      {
        icon: Activity,
        title: "Curativo e Cicatrização",
        description: ["Troca de curativos complexos, ostomias e feridas crônicas com técnica estéril."],
        theme: "homecare",
      },
      {
        icon: Heart,
        title: "Monitoramento Clínico",
        description: ["Aferição de pressão, glicemia, saturação e relatórios periódicos ao médico."],
        theme: "homecare",
      },
      {
        icon: Users,
        title: "Acompanhamento Pós-Cirúrgico",
        description: ["Suporte especializado na recuperação após cirurgias, com cuidados personalizados."],
        theme: "homecare",
      },
      {
        icon: Brain,
        title: "Suporte Multidisciplinar",
        description: ["Nutrição, fisioterapia e fonoaudiologia integrados ao plano de cuidados domiciliar."],
        theme: "homecare",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
