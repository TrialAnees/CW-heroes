import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ActivatedRoute, Params } from '@angular/router';
import { heroDescription } from './heroDescription';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'heroDescription',
  templateUrl: 'heroDescription.html',
 // styleUrls: [ 'hero-search.component.css' ],
 // providers: [HeroSearchService]
})
export class heroDescription implements OnInit {
  hero: Hero;

  constructor(
    private heroService: heroDescription,
    private route: ActivatedRoute,
    private location: Location
  ) {}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/