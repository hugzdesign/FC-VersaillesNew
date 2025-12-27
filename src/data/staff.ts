export interface StaffMember {
  id: string
  nom: string
  prenom: string
  poste: string
  photo: string
  bio?: string
}

export const staff: StaffMember[] = [
  {
    id: 'aymeric-houdart',
    nom: 'HOUDART',
    prenom: 'Aymeric',
    poste: 'Entraîneur Principal',
    photo: '/assets/Staff/AYMERIC HOUDART.png',
    bio: 'Entraîneur principal du FC Versailles, avec une vision moderne du football et un engagement total pour l\'excellence.'
  },
  {
    id: 'charles-itandje',
    nom: 'ITANDJE',
    prenom: 'Charles',
    poste: 'Entraîneur des Gardiens',
    photo: '/assets/Staff/CHARLES ITANDJE.png',
    bio: 'Ancien gardien international, il transmet son expérience aux gardiens du club.'
  },
  {
    id: 'jordan-gonzalez',
    nom: 'GONZALEZ',
    prenom: 'Jordan',
    poste: 'Entraîneur Adjoint',
    photo: '/assets/Staff/JORDAN GONZALEZ.png',
    bio: 'Entraîneur adjoint, spécialisé dans la préparation tactique et l\'analyse de jeu.'
  },
  {
    id: 'marc-mohamed',
    nom: 'MOHAMED',
    prenom: 'Marc',
    poste: 'Préparateur Physique',
    photo: '/assets/Staff/MARC MOHAMED.png',
    bio: 'Préparateur physique dédié à l\'optimisation des performances des joueurs.'
  },
  {
    id: 'marcelo-collazos',
    nom: 'COLLAZOS',
    prenom: 'Marcelo',
    poste: 'Entraîneur',
    photo: '/assets/Staff/MARCELO COLLAZOS.png',
    bio: 'Entraîneur spécialisé dans le développement technique des joueurs.'
  },
  {
    id: 'mathieu-feigean',
    nom: 'FEIGEAN',
    prenom: 'Mathieu',
    poste: 'Analyste Vidéo',
    photo: '/assets/Staff/MATHIEU FEIGEAN.png',
    bio: 'Analyste vidéo en charge de l\'analyse tactique et de la préparation des matchs.'
  },
  {
    id: 'mederic-jumeau',
    nom: 'JUMEAU',
    prenom: 'Médéric',
    poste: 'Kinésithérapeute',
    photo: '/assets/Staff/MEDERIC JUMEAU.png',
    bio: 'Kinésithérapeute du club, en charge de la rééducation et de la prévention des blessures.'
  },
  {
    id: 'nicolas-ficheux',
    nom: 'FICHEUX',
    prenom: 'Nicolas',
    poste: 'Entraîneur',
    photo: '/assets/Staff/NICOLAS FICHEUX.png',
    bio: 'Entraîneur dédié au développement des jeunes talents.'
  },
  {
    id: 'nordine-aiteur',
    nom: 'AÏTEUR',
    prenom: 'Nordine',
    poste: 'Préparateur Physique',
    photo: '/assets/Staff/NORDINE AÏTEUR.png',
    bio: 'Préparateur physique spécialisé dans la performance athlétique.'
  },
  {
    id: 'paul-margotteau',
    nom: 'MARGOTTEAU',
    prenom: 'Paul',
    poste: 'Entraîneur',
    photo: '/assets/Staff/PAUL MARGOTTEAU.png',
    bio: 'Entraîneur en charge de la préparation tactique et technique.'
  },
  {
    id: 'randy-fondelot',
    nom: 'FONDELOT',
    prenom: 'Randy',
    poste: 'Kinésithérapeute',
    photo: '/assets/Staff/RANDY FONDELOT.png',
    bio: 'Kinésithérapeute du club, spécialisé dans la rééducation sportive.'
  }
]






