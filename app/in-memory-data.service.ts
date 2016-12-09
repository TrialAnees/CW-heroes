import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  //this is the string of heros. i have modified these into characters of CW channel series and added images, with a sample description.
  createDb() {
    let heroes = [
      {id: 1, name: 'Over Watch',    image: 'images/overwatch.png',  Details: 'Overwatch or Felicity Smoak was born in las Vegas'},
      {id: 2, name: 'Captain Cold',  image: 'images/captaincold.png',  Details: 'Captain Cold or Felicity Smoak was born in las Vegas.'},
      {id: 3, name: 'Heat Wave',      image: 'images/Heatwave.png',      Details: 'HeatWave or Felicity Smoak was born in las Vegas.'},
      {id: 4, name: 'Speedy',        image: 'images/speedy.png',   Details: 'speedy or Thea queen was born in las Vegas.'},
      {id: 6, name: 'Vibe',          image: 'images/overwatch.png',  Details: 'Vibe or cisco was born in star city.'},
      {id: 7, name: 'Black Canary',  image: 'images/overwatch.png',  Details: 'Black Canary or Sarah was born in newyork city.'},
      {id: 8, name: 'Fire storm',     image: 'images/overwatch.png', Details: 'Fire storm is a combination of two people.'},
      {id: 9, name: 'Super Girl',    image: 'images/supergirl.png', Details: 'supergirl is an alien.'},
      {id: 10, name: 'The Flash',     image: 'images/flash.png', Details: 'Flash or barry was born in star city.'},
      {id: 11, name: 'Arrow',         image: 'images/arrow.png', Details: 'Arrow or Oliver was born in star city.'},
    ];
    return {heroes};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/