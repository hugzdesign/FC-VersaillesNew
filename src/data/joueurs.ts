export interface Joueur {
  id: string
  nom: string
  prenom: string
  numero: number
  poste: string
  photo: string
  age?: number
  nationalite?: string
  arrivee?: string
  parcours?: string[]
  statistiques?: {
    matchs?: number
    buts?: number
    passes?: number
  }
}

export const joueurs: Joueur[] = [
  {
    id: 'hugo-barbet',
    nom: 'BARBET',
    prenom: 'Hugo',
    numero: 1,
    poste: 'Gardien',
    photo: '/assets/Effectif/HUGO_BARBET_1.png',
    age: 32,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['Girondins de Bordeaux', 'Queens Park Rangers', 'FC Versailles'],
    statistiques: {
      matchs: 45,
      buts: 0,
      passes: 12
    }
  },
  {
    id: 'jeremi-santini',
    nom: 'SANTINI',
    prenom: 'Jérémie',
    numero: 2,
    poste: 'Défenseur',
    photo: '/assets/Effectif/JEREMI_SANTINI_2.png',
    age: 28,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['AS Nancy', 'FC Versailles'],
    statistiques: {
      matchs: 38,
      buts: 2,
      passes: 8
    }
  },
  {
    id: 'yannick-mbone',
    nom: 'MBONE',
    prenom: 'Yannick',
    numero: 3,
    poste: 'Défenseur',
    photo: '/assets/Effectif/YANNICK_MBONE_3.png',
    age: 26,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Lorient', 'FC Versailles'],
    statistiques: {
      matchs: 32,
      buts: 1,
      passes: 5
    }
  },
  {
    id: 'kurtis-chadet',
    nom: 'CHADET',
    prenom: 'Kurtis',
    numero: 4,
    poste: 'Milieu',
    photo: '/assets/Effectif/KURTIS_CHADET_4-2.png',
    age: 24,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 42,
      buts: 5,
      passes: 15
    }
  },
  {
    id: 'raphael-calvet',
    nom: 'CALVET',
    prenom: 'Raphaël',
    numero: 5,
    poste: 'Défenseur',
    photo: '/assets/Effectif/RAPHAEL_CALVET_5-2.png',
    age: 29,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['Toulouse FC', 'FC Versailles'],
    statistiques: {
      matchs: 35,
      buts: 3,
      passes: 10
    }
  },
  {
    id: 'tom-renaud',
    nom: 'RENAUD',
    prenom: 'Tom',
    numero: 6,
    poste: 'Milieu',
    photo: '/assets/Effectif/TOM_RENAUD_6-2.png',
    age: 27,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 40,
      buts: 4,
      passes: 18
    }
  },
  {
    id: 'shelton-guillaume',
    nom: 'GUILLAUME',
    prenom: 'Shelton',
    numero: 7,
    poste: 'Attaquant',
    photo: '/assets/Effectif/SHELTON_GUILLAUME_7-2.png',
    age: 25,
    nationalite: 'Haïti',
    arrivee: '2023',
    parcours: ['AS Monaco', 'FC Versailles'],
    statistiques: {
      matchs: 38,
      buts: 12,
      passes: 7
    }
  },
  {
    id: 'odilon-kouassi',
    nom: 'KOUASSI',
    prenom: 'Odilon',
    numero: 8,
    poste: 'Milieu',
    photo: '/assets/Effectif/ODILON_KOUASSI_8.png',
    age: 23,
    nationalite: 'Côte d\'Ivoire',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 36,
      buts: 6,
      passes: 12
    }
  },
  {
    id: 'samir-ben-brahim',
    nom: 'BEN BRAHIM',
    prenom: 'Samir',
    numero: 11,
    poste: 'Attaquant',
    photo: '/assets/Effectif/SAMIR_BEN_BRAHIM_11.png',
    age: 28,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 44,
      buts: 15,
      passes: 9
    }
  },
  {
    id: 'mathias-fischer',
    nom: 'FISCHER',
    prenom: 'Mathias',
    numero: 12,
    poste: 'Milieu',
    photo: '/assets/Effectif/MATHIAS_FISCHER_12-2.png',
    age: 26,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 33,
      buts: 3,
      passes: 11
    }
  },
  {
    id: 'romain-basque',
    nom: 'BASQUE',
    prenom: 'Romain',
    numero: 14,
    poste: 'Milieu',
    photo: '/assets/Effectif/ROMAIN_BASQUE_14.png',
    age: 30,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 39,
      buts: 7,
      passes: 14
    }
  },
  {
    id: 'bilal-cisse',
    nom: 'CISSE',
    prenom: 'Bilal',
    numero: 19,
    poste: 'Attaquant',
    photo: '/assets/Effectif/BILAL_CISSE_19.png',
    age: 22,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 28,
      buts: 8,
      passes: 4
    }
  },
  {
    id: 'yohan-zemoura',
    nom: 'ZEMOURA',
    prenom: 'Yohan',
    numero: 20,
    poste: 'Milieu',
    photo: '/assets/Effectif/YOHAN_ZEMOURA_20.png',
    age: 24,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 31,
      buts: 2,
      passes: 9
    }
  },
  {
    id: 'ibrahima-doucoure',
    nom: 'DOUCOURE',
    prenom: 'Ibrahima',
    numero: 21,
    poste: 'Défenseur',
    photo: '/assets/Effectif/IBRAHIMA_DOUCOURE_21.png',
    age: 25,
    nationalite: 'Mali',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 34,
      buts: 1,
      passes: 6
    }
  },
  {
    id: 'djamal-moussadek',
    nom: 'MOUSSADEK',
    prenom: 'Djamal',
    numero: 22,
    poste: 'Défenseur',
    photo: '/assets/Effectif/DJAMAL_MOUSSADEK_22-2.png',
    age: 27,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 37,
      buts: 2,
      passes: 7
    }
  },
  {
    id: 'ryan-tchato',
    nom: 'TCHATO',
    prenom: 'Ryan',
    numero: 23,
    poste: 'Attaquant',
    photo: '/assets/Effectif/RYAN_TCHATO_23-2.png',
    age: 21,
    nationalite: 'Cameroun',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 25,
      buts: 9,
      passes: 5
    }
  },
  {
    id: 'ali-ouchen',
    nom: 'OUCHEN',
    prenom: 'Ali',
    numero: 24,
    poste: 'Milieu',
    photo: '/assets/Effectif/ALI_OUCHEN_24-2.png',
    age: 23,
    nationalite: 'Maroc',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 29,
      buts: 4,
      passes: 8
    }
  },
  {
    id: 'deen-adehoumi',
    nom: 'ADEHOUMI',
    prenom: 'Deen',
    numero: 25,
    poste: 'Attaquant',
    photo: '/assets/Effectif/DEEN_ADEHOUMI_25.png',
    age: 20,
    nationalite: 'France',
    arrivee: '2024',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 18,
      buts: 6,
      passes: 3
    }
  },
  {
    id: 'jawed-kalai',
    nom: 'KALAI',
    prenom: 'Jawed',
    numero: 26,
    poste: 'Milieu',
    photo: '/assets/Effectif/JAWED_KALAI_26-2.png',
    age: 22,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 27,
      buts: 3,
      passes: 7
    }
  },
  {
    id: 'soumaila-traore',
    nom: 'TRAORE',
    prenom: 'Soumaila',
    numero: 28,
    poste: 'Défenseur',
    photo: '/assets/Effectif/SOUMAILA_TRAORE_28-2.png',
    age: 26,
    nationalite: 'Mali',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 30,
      buts: 0,
      passes: 4
    }
  },
  {
    id: 'nathan-yavorsky',
    nom: 'YAVORSKY',
    prenom: 'Nathan',
    numero: 30,
    poste: 'Gardien',
    photo: '/assets/Effectif/NATHAN_YAVORSKY_30-2.png',
    age: 24,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 12,
      buts: 0,
      passes: 2
    }
  },
  {
    id: 'patrick-koffi',
    nom: 'KOFFI',
    prenom: 'Patrick',
    numero: 18,
    poste: 'Attaquant',
    photo: '/assets/Effectif/PATRICK_KOFFI_18.png',
    age: 27,
    nationalite: 'Côte d\'Ivoire',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 41,
      buts: 11,
      passes: 6
    }
  },
  {
    id: 'sebastien-renot',
    nom: 'RENOT',
    prenom: 'Sébastien',
    numero: 40,
    poste: 'Gardien',
    photo: '/assets/Effectif/SEBASTIEN_RENOT_40.png',
    age: 29,
    nationalite: 'France',
    arrivee: '2022',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 8,
      buts: 0,
      passes: 1
    }
  },
  {
    id: 'odzoumo',
    nom: 'ODZOUMO',
    prenom: '',
    numero: 0,
    poste: 'Milieu',
    photo: '/assets/Effectif/ODZOUMO-2.png',
    age: 25,
    nationalite: 'France',
    arrivee: '2023',
    parcours: ['FC Versailles'],
    statistiques: {
      matchs: 22,
      buts: 2,
      passes: 5
    }
  }
]






