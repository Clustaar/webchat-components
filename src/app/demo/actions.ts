export const DISPLAYED_ACTIONS = [
  {
    type: 'text',
    message:
      "Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John ! Hi, I'm John !"
  },
  {
    "type": "text",
    "message": "phone number: **basic_obfuscation_of_phone_number** email: **basic_obfuscation_of_email_address**"
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
    message:
      "Hello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help YouHello, I'm John. How can I Help You"
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
    message: 'Test de bouton',
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
    list: {
      type: 'send_choices_list_action',
      message: 'List with images',
      sections: [
        {
          type: 'section',
          title: '',
          choices: [
            { type: 'choice', title: 'zajeihgu', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'pskdfonsdf', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'pzienf', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'xcovubze', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'xvcxp', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'uytvze', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'xcva', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'mpvcxu', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'zeutac', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'mpxcvloze', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'uhygvz', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'wcvuyt', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'aepij', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'aoubvdsc', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'cxmvpokjiz', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'zevnuscv', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'xcovzefxcv', imageUrl: 'https://via.placeholder.com/25' },
            { type: 'choice', title: 'svdijbh', imageUrl: 'https://via.placeholder.com/25' },
          ]
        }
      ]
    }
  },
  {
    type: 'send_choices_list_action',
    list: {
      type: 'send_choices_list_action',
      message: 'List with sections',
      sections: [
        {
          type: 'section',
          title: 'Section 1',
          choices: [
            { type: 'choice', title: 'zajeihgu' },
            { type: 'choice', title: 'pskdfonsdf' },
            { type: 'choice', title: 'pzienf' },
            { type: 'choice', title: 'xcovubze' },
            { type: 'choice', title: 'xvcxp' },
            { type: 'choice', title: 'uytvze' },
            { type: 'choice', title: 'xcva' },
            { type: 'choice', title: 'mpvcxu' },
          ]
        },
        {
          type: 'section',
          title: 'Section 2',
          choices: [
            { type: 'choice', title: 'zeutac' },
            { type: 'choice', title: 'mpxcvloze' },
            { type: 'choice', title: 'uhygvz' },
            { type: 'choice', title: 'wcvuyt' },
            { type: 'choice', title: 'aepij' },
            { type: 'choice', title: 'aoubvdsc' },
            { type: 'choice', title: 'cxmvpokjiz' },
            { type: 'choice', title: 'zevnuscv' },
            { type: 'choice', title: 'xcovzefxcv' },
            { type: 'choice', title: 'svdijbh' },
          ]
        }
      ]
    }
  }
];
