# WebchatComponents
webchat-components is a framework to build webchats fast, originally built for the clustaar platform.

More documentation is available for building webchat on https://developers.clustaar.com 
![Clustaar Logo](https://clustaar.com/wp-content/uploads/2016/07/logo-black-1.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.

### Installation

Install clustaar-webchat-components from npm:
```bash
npm install clustaar-webchat-components --save
```

### Setup

In your app's main module, import the clustaar webchat components :

```ts
import { NgModule } from '@angular/core'
import { WebchatComponentsModule } from 'clustaar-webchat-components';


@NgModule({
  imports: [
    BrowserModule,
    WebchatComponentsModule
  ]
})
export class AppModule {}
```

### How to use

Models of each action can be found here : https://developers.clustaar.com/v1.0/reference#actions

You can use a switch on a foreach loop for each action: 
```
<switch-console-actions (onSendReply)="sendReply($event)" (onLoadNextAction)="loadNextAction()" [actions]="(displayedActions$ | async)" [action]="displayedAction" [index]="i"></switch-console-actions>
```

### Individual actions

#### User messages (action type is : 'text')
```
<user-message-console-action (onLoadNextAction)="loadNextAction()" [action]="action"></user-message-console-action>
```

#### Send Text Action
```
<text-console-action (onLoadNextAction)="loadNextAction()" [action]="action"></text-console-action>
```

#### Send Image Action
```
<image-console-action (onLoadNextAction)="loadNextAction()" [action]="action"></image-console-action>
```

####  Wait Action
```
<wait-console-action (onLoadNextAction)="loadNextAction()" [action]="action"></wait-console-action>
```

#### Send Quick Replies Action  
```
<quickreply-console-action (onSendReply)="sendReply($event)" (onLoadNextAction)="loadNextAction()" [action]="action"></quickreply-console-action>
```

#### Send Cards Action
```
<card-console-action (onSendReply)="sendReply($event)" (onLoadNextAction)="loadNextAction()" [action]="action"></card-console-action>
```

#### Ask location action  
```
<location-console-action (onLoadNextAction)="loadNextAction()" [action]="action"></location-console-action>
```

#### List action
```
<list-action [action]="action" (onChoiceSelected)="choiceSelected($event)" (onLoadNextAction)="loadNextAction()"></list-action>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Build to npm

Run `ng build clustaar-webchat-components` to build the project. The build artifacts will be stored in the `dist/` directory.
After building your library with `ng build clustaar-webchat-components`, go to the dist folder `cd dist/clustaar-webchat-components` and run `npm publish`.
