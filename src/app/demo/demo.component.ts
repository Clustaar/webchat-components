import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  displayedActions = [
  	
  {
    "type": "send_text_action",
    "alternatives": [
      "test avec "
    ]
  },
  {
    "type": "wait_action",
    "duration": 2
  },
  {
    "type": "send_text_action",
    "alternatives": [
      "Reservation terminée sur <ul>\n<li><a target=\"_blank\" href=\"http://www.google.com\">lien 1</a></li>\n<li><a target=\"_blank\" href=\"http://www.google.com\">lien 2</a></li>\n</ul>"
    ]
  },
  {
    "type": "wait_action",
    "duration": 2
  },
  {
    "type": "send_quick_replies_action",
    "message": "test",
    "buttons": [
      {
        "title": "test",
        "action": {
          "type": "go_to_action",
          "target": {
            "id": "5ae71abcdc877d000d1a317d",
            "type": "story",
            "name": "bonjour"
          },
          "sessionValues": {}
        },
        "type": "quick_reply"
      }
    ]
  },
  {
    "type": "send_cards_action",
    "cards": [
      {
        "type": "card",
        "title": "Agence web Smez.fr : Site internet et application mobile sur mesure",
        "subtitle": "Smez.fr est une agence web spécialisée dans la création de site internet ou...",
        "imageURL": null,
        "url": "http://smez.fr/",
        "buttons": []
      },
      {
        "type": "card",
        "title": "Cordova / Ionic : Publier son application sur Google Play - Smez.fr ...",
        "subtitle": "7 déc. 2015 ... Pour pouvoir mettre l'application sur Google Play il va...",
        "imageURL": "http://smez.fr/wp-content/uploads/2015/12/ionic-html5-native-framework.jpg",
        "url": "http://smez.fr/ionic/ionic-publier-sur-android/",
        "buttons": []
      },
      {
        "type": "card",
        "title": "Mon CV - Smez.fr : Agence web spécialisée dans la création de site ...",
        "subtitle": "Sélectionner une page. Accueil · Contact. [rb_resume id=\"155\"]. Design de...",
        "imageURL": null,
        "url": "http://smez.fr/cv/",
        "buttons": []
      }
    ]
  },
  {
    "type": "send_quick_replies_action",
    "message": "Test de bouton",
    "buttons": [
      {
        "title": "bouton 1",
        "action": {
          "type": "go_to_action",
          "target": {
            "id": "5ae71abcdc877d000d1a317d",
            "type": "story",
            "name": "bonjour"
          },
          "sessionValues": {}
        },
        "type": "quick_reply"
      }
    ]
  }

  ];
  primaryColor = "#660066";
}
