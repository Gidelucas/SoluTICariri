import {
  BrainCircuit,
  Monitor,
  DatabaseBackup,
  Network,
  Lightbulb,
  EthernetPort,
} from 'lucide-react'

export const services = [
  {
    title: 'Suporte a PDV/ERP',
    description:
      'Diagnóstico e correção de falhas em sistemas de venda, prevenindo interrupções na operação.',
    icon: Monitor,
  },
  {
    title: 'Redes',
    description:
      'Planejamento, configuração e organização de redes para ambientes empresariais estáveis e seguros.',
    icon: Network,
  },
  {
    title: 'Infraestrutura',
    description:
      'Estruturação e manutenção do ambiente tecnológico necessário para sustentar as operações da empresa.',
    icon: EthernetPort,
  },
  {
    title: 'Manutenção e backup',
    description:
      'Manutenção preventiva de equipamentos e rotinas de backup para proteção de dados corporativos.',
    icon: DatabaseBackup,
  },
  {
    title: 'Automação de processos',
    description:
      'Automatização de tarefas e relatórios manuais, reduzindo tempo operacional da equipe.',
    icon: BrainCircuit,
  },
  {
    title: 'Consultoria em tecnologia',
    description:
      'Análise do cenário atual e orientação para decisões tecnológicas alinhadas aos objetivos do negócio.',
    icon: Lightbulb,
  },
]