export const DISPLAYED_ACTIONS = [
  {
    type: 'text',
    message:
      "Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John !"
  },
  {
    type: 'text',
    message: "<img src=x onerror=alert('XSS') />"
  },
  {
    type: 'text',
    message:
      'phone number: **basic_obfuscation_of_phone_number** email: **basic_obfuscation_of_email_address**'
  },
  {
    type: 'send_text_action',
    alternatives: ['Hello, welcome to webchat components demo'],
    text: 'Hello, \nwelcome to webchat components demo'
  },
  {
    type: 'title_message',
    message: 'An agent joined the conversation'
  },
  {
    type: 'support_text_action',
    message: "<a href='https://google.com'>google</a>"
  },
  {
    type: 'support_text_action',
    message: "<img src=x onerror=alert('XSS') />"
  },
  {
    type: 'support_text_action',
    message:
      "Hello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help You"
  },
  {
    type: 'spellz_text_action',
    replyMessage:
    "Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani  diaconus, cuius prolatae litterae scriptae Graeco sermone ad Tyrii textrini praepositum celerari speciem perurgebant quam autem non indicabant denique etiam idem ad usque",
    confidence: "low",
    resources: [{
      title: '2ÈME WEBINAIRE POST-COVID - ADAPTATION SOCIALE, DU TRAVAIL ET DU QUOTIDIEN',
      text: "Un dépôt de demande AI est indiqué. Au bureau de l'AI on m'a dit que je devrais faire du home-office, mais je ne supporte pas de regarder mon ordinateur plus que 30 minutes.. je me sens bloquée. pas de travail physique ni mental de possible. Un dépôt de demande AI est indiqué (si ce n'est pas déjà le cas). Je travaille péniblement à 50% depuis 1an. Je ne veux pas ne rien faire. Mais comment se reconvertir si j’ai déjà beaucoup de peine à faire mon travail dans un bureau et en Home Office! Cela m’angoisse beaucoup, car je ne veux pas perdre mon travail. Un dépôt de demande AI sans tarder est indiqué si l'atteinte à la santé empêche ou limite l'exercice de l'activité habituelle. Covid long depuis 14 mois et les APG ne veulent plus payer les allocations, car il manque des preuves médicales prouvant mon Long Covid. L'assurance estime que je suis en mesure de travailler à 100 % alors que ce n'est pas le cas. Que faire ?",
      url: 'http://google.fr' 
    }]
  },
  {
    type: 'spellz_text_action',
    replyMessage:
    "Post haec indumentum regale quaerebatur et ministris fucandae purpurae tortis confessisque pectoralem tuniculam sine manicis textam, Maras nomine quidam inductus est ut appellant Christiani  diaconus, cuius prolatae litterae scriptae Graeco sermone ad Tyrii textrini praepositum celerari speciem perurgebant quam autem non indicabant denique etiam idem ad usque",
    confidence: "low",
    resources: [{
      title: '1. Source: How to change your battery...',
      text: "Un dépôt de demande AI est indiqué. Au bureau de l'AI on m'a dit que je devrais faire du home-office, mais je ne supporte pas de regarder mon ordinateur plus que 30 minutes.. je me sens bloquée. pas de travail physique ni mental de possible. Un dépôt de demande AI est indiqué (si ce n'est pas déjà le cas). Je travaille péniblement à 50% depuis 1an. Je ne veux pas ne rien faire. Mais comment se reconvertir si j’ai déjà beaucoup de peine à faire mon travail dans un bureau et en Home Office! Cela m’angoisse beaucoup, car je ne veux pas perdre mon travail. Un dépôt de demande AI sans tarder est indiqué si l'atteinte à la santé empêche ou limite l'exercice de l'activité habituelle. Covid long depuis 14 mois et les APG ne veulent plus payer les allocations, car il manque des preuves médicales prouvant mon Long Covid. L'assurance estime que je suis en mesure de travailler à 100 % alors que ce n'est pas le cas. Que faire ?",
      url: 'http://google.fr' 
    },
    {
      title: '2. Source: How to change your battery...',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...',
      url: '' 
    },
    {
      title: '3. Source: How to change your battery...',
      text: "Un dépôt de demande AI est indiqué. Au bureau de l'AI on m'a dit que je devrais faire du home-office, mais je ne supporte pas de regarder mon ordinateur plus que 30 minutes.. je me sens bloquée. pas de travail physique ni mental de possible. Un dépôt de demande AI est indiqué (si ce n'est pas déjà le cas). Je travaille péniblement à 50% depuis 1an. Je ne veux pas ne rien faire. Mais comment se reconvertir si j’ai déjà beaucoup de peine à faire mon travail dans un bureau et en Home Office! Cela m’angoisse beaucoup, car je ne veux pas perdre mon travail. Un dépôt de demande AI sans tarder est indiqué si l'atteinte à la santé empêche ou limite l'exercice de l'activité habituelle. Covid long depuis 14 mois et les APG ne veulent plus payer les allocations, car il manque des preuves médicales prouvant mon Long Covid. L'assurance estime que je suis en mesure de travailler à 100 % alors que ce n'est pas le cas. Que faire ?",
      url: null
    }]
  },
  {
    type: 'send_image_action',
    imageURL:
      'https://pbs.twimg.com/profile_images/1010528933417246720/GF4WM4AH_400x400.jpg'
  },
  {
    type: 'wait_action',
    duration: 60
  },
  {
    type: 'ask_location_action',
    message: 'What is your location ?'
  },
  {
    type: 'send_text_action',
    alternatives: [
      `Here a list with some links
      <ul>\n
      <li><a target=\"_blank\" href=\"http://www.google.com\">Link with specified target blank</a></li>\n
      <li><a target=\"_self\" href=\"http://www.google.com\">Link with target self</a></li>\n
      <li><a href=\"http://www.google.com\">Link without target specified</a></li>\n
      </ul>`
    ],
    text: `Here a list with some links
      <ul>\n
      <li><a target=\"_blank\" href=\"http://www.google.com\">Link with specified target blank</a></li>\n
      <li><a target=\"_self\" href=\"http://www.google.com\">Link with target self</a></li>\n
      <li><a href=\"http://www.google.com\">Link without target specified</a></li>\n
      </ul>`
  },
  {
    type: 'wait_action',
    duration: 5
  },
  {
    type: 'send_quick_replies_action',
    message:
      "What do you want to test ? \n( juicy quick replies version ) with <a href='google.fr'>link</a>",
    buttons: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur cras amet.',
        action: {
          type: 'go_to_action',
          target: {
            id: '5ae71abcdc877d000d1a317d',
            type: 'story',
            name: 'bonjour'
          },
          sessionValues: {}
        },
        type: 'quick_reply'
      },
      {
        title: 'Bouton 2',
        action: {
          type: 'go_to_action',
          target: {
            id: '5ad5f1dbe29c6000780f6780',
            type: 'step',
            name: 'First step'
          },
          sessionValues: {}
        },
        type: 'quick_reply'
      }
    ]
  },
  {
    type: 'send_cards_action',
    cards: [
      {
        type: 'card',
        title: 'Test 1',
        subtitle: '',
        imageURL:
          'http://www.leparisien.fr/resizer/bE3-0XCUR4haMSITRiFXoX3khdw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/367CH6VUXGZMPLXK4S3ZOGNPBA.jpg',
        url: '',
        buttons: [
          {
            type: 'button',
            title: 'Lorem ipsum dolor sit amet, consectetur cras amet.',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          },
          {
            type: 'button',
            title: 'Bouton B',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          }
        ]
      },
      {
        type: 'card',
        title: 'Test 2',
        subtitle: '',
        imageURL:
          'http://www.ecologique-solidaire.gouv.fr/sites/default/files/paysage_lozere.jpg',
        url: '',
        buttons: [
          {
            type: 'button',
            title: 'Bouton C',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          },
          {
            type: 'button',
            title: 'Bouton D',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          }
        ]
      },
      {
        type: 'card',
        title: 'Test 3',
        subtitle: '',
        imageURL:
          'http://www.ecologique-solidaire.gouv.fr/sites/default/files/paysage_lozere.jpg',
        url: '',
        buttons: [
          {
            type: 'button',
            title: 'Bouton C',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          },
          {
            type: 'button',
            title: 'Bouton D',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          }
        ]
      },
      {
        type: 'card',
        title: 'Test 4',
        subtitle: '',
        imageURL:
          'http://www.ecologique-solidaire.gouv.fr/sites/default/files/paysage_lozere.jpg',
        url: '',
        buttons: [
          {
            type: 'button',
            title: 'Bouton C',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          },
          {
            type: 'button',
            title: 'Bouton D',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          }
        ]
      }
    ]
  },
  {
    type: 'send_simple_cards_action',
    cards: [
      {
        type: 'card',
        title: 'Test 1',
        subtitle: '',
        imageURL:
          'http://www.leparisien.fr/resizer/bE3-0XCUR4haMSITRiFXoX3khdw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/367CH6VUXGZMPLXK4S3ZOGNPBA.jpg',
        url: '',
        buttons: []
      },
      {
        type: 'card',
        title: 'Test 2',
        subtitle: '',
        imageURL:
          'http://www.ecologique-solidaire.gouv.fr/sites/default/files/paysage_lozere.jpg',
        url: '',
        buttons: []
      }
    ]
  },
  {
    type: 'send_cards_action',
    cards: [
      {
        type: 'card',
        title: 'Test 1',
        subtitle: '',
        imageURL:
          'http://www.leparisien.fr/resizer/bE3-0XCUR4haMSITRiFXoX3khdw=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/367CH6VUXGZMPLXK4S3ZOGNPBA.jpg',
        url: '',
        buttons: [
          {
            type: 'button',
            title: 'Lorem ipsum dolor sit amet, consectetur cras amet.',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          },
          {
            type: 'button',
            title: 'Bouton B',
            action: {
              type: 'go_to_action',
              target: {
                id: '5ad5f1dbe29c6000780f677f',
                type: 'story',
                name: 'Reserver'
              },
              sessionValues: {}
            }
          }
        ]
      }
    ]
  },
  {
    type: 'send_cards_action',
    cards: [
      {
        type: 'card',
        title:
          'Agence web Smez.fr : Site internet et application mobile sur mesure',
        subtitle:
          'Smez.fr est une agence web spécialisée dans la création de site internet ou...',
        imageURL: null,
        url: 'http://smez.fr/',
        buttons: []
      },
      {
        type: 'card',
        title:
          'Cordova / Ionic : Publier son application sur Google Play - Smez.fr ...',
        subtitle:
          "7 déc. 2015 ... Pour pouvoir mettre l'application sur Google Play il va...",
        imageURL:
          'http://smez.fr/wp-content/uploads/2015/12/ionic-html5-native-framework.jpg',
        url: 'http://smez.fr/ionic/ionic-publier-sur-android/',
        buttons: []
      },
      {
        type: 'card',
        title:
          'Mon CV - Smez.fr : Agence web spécialisée dans la création de site ...',
        subtitle:
          'Sélectionner une page. Accueil · Contact. [rb_resume id="155"]. Design de...',
        imageURL: null,
        url: 'http://smez.fr/cv/',
        buttons: []
      }
    ]
  },
  {
    type: 'send_quick_replies_action',
    message: 'Test de bouton déja cliqué',
    selected: {
      title: 'bouton 1',
      action: {
        type: 'go_to_action',
        target: {
          id: '5ae71abcdc877d000d1a317d',
          type: 'story',
          name: 'bonjour'
        },
        sessionValues: {}
      },
      type: 'quick_reply'
    },
    buttons: [
      {
        title: 'bouton 1',
        action: {
          type: 'go_to_action',
          target: {
            id: '5ae71abcdc877d000d1a317d',
            type: 'story',
            name: 'bonjour'
          },
          sessionValues: {}
        },
        type: 'quick_reply'
      },
      {
        title: 'bouton 2',
        action: {
          type: 'go_to_action',
          target: {
            id: '5ad5f1dbe29c6000780f677f',
            type: 'story',
            name: 'Reserver'
          },
          sessionValues: {}
        },
        type: 'quick_reply'
      }
    ]
  },
  {
    type: 'send_choices_list_action',
    message: 'List with images',
    placeholder: 'Placeholder vraiment beaucoup trop long',
    action: {
      type: 'go_to_action',
      target: {
        id: '5ad5f1dbe29c6000780f677f',
        type: 'story',
        name: 'Reserver'
      },
      sessionValues: {}
    },
    sections: [
      {
        type: 'section',
        title: '',
        choices: [
          {
            type: 'choice',
            title: 'Argentina',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Bolivia',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Cambodia',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Denmark',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Estonia',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'France',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Germany',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Hungary',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Iceland',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Japan',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Korea',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Laos',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Mongolia',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Nepal',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Oman',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Poland',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Qatar',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Russia',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Senegal',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Thailand',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'United Kingdom',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Vietnam',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Yemen',
            imageUrl: 'https://via.placeholder.com/25'
          },
          {
            type: 'choice',
            title: 'Zambia',
            imageUrl: 'https://via.placeholder.com/25'
          }
        ]
      }
    ]
  },
  {
    type: 'send_choices_list_action',
    message: 'List with sections',
    placeholder: 'Placeholder',
    action: {
      type: 'go_to_action',
      target: {
        id: '5ad5f1dbe29c6000780f677f',
        type: 'story',
        name: 'Reserver'
      },
      sessionValues: {}
    },
    sections: [
      {
        type: 'section',
        title: 'France',
        choices: [
          { type: 'choice', title: 'Paris' },
          { type: 'choice', title: 'Marseille' },
          { type: 'choice', title: 'Lyon' },
          { type: 'choice', title: 'Toulouse' },
          { type: 'choice', title: 'Nice' },
          { type: 'choice', title: 'Nantes' },
          { type: 'choice', title: 'Montpellier' },
          { type: 'choice', title: 'Strasbourg' },
          { type: 'choice', title: 'Bordeaux' },
          { type: 'choice', title: 'Lille' },
          { type: 'choice', title: 'Rennes' },
          { type: 'choice', title: 'Reims' },
          { type: 'choice', title: 'Toulon' },
          { type: 'choice', title: 'Saint-Etienne' },
          { type: 'choice', title: 'Le Havre' }
        ]
      },
      {
        type: 'section',
        title: 'United Kingdom',
        choices: [
          { type: 'choice', title: 'Londres' },
          { type: 'choice', title: 'Birmingham' },
          { type: 'choice', title: 'Glasgow' },
          { type: 'choice', title: 'Manchester' },
          { type: 'choice', title: 'Edimbourg' },
          { type: 'choice', title: 'Liverpool' },
          { type: 'choice', title: 'Leeds' },
          { type: 'choice', title: 'Bristol' },
          { type: 'choice', title: 'Sheffield' },
          { type: 'choice', title: 'Newcastle' },
          { type: 'choice', title: 'Coventry' },
          { type: 'choice', title: 'Cardiff' },
          { type: 'choice', title: 'Hull' },
          { type: 'choice', title: 'Bradford' },
          { type: 'choice', title: 'Stroke-on-Trent' }
        ]
      }
    ]
  }
];
