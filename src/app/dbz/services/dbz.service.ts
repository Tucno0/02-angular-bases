import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }; // ...character : toma todas las propiedades de character y las agrega a newCharacter

    this.characterList.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characterList.splice(index, 1);
  // }

  onDeleteCharacterById(id: string): void {
    this.characterList = this.characterList.filter(
      (character) => character.id !== id
    );
  }
}
