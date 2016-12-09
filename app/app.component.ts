import { Component }          from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
//the below template is main template for the whole app lication
//navigation tabs in all views 
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/gridview" routerLinkActive="active">Grid View</a>
      <a routerLink="/listview" routerLinkActive="active">List View</a>
    </nav>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  //I have changed the app name to CW heros form Tour of heros 
  title = 'CW Heros';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/