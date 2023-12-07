import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | '', asc?: boolean): Hero[] {
    switch (sortBy) {
      case 'name':
        return asc === true
          ? heroes.sort((a, b) => (a.name > b.name ? 1 : -1))
          : heroes.sort((a, b) => (a.name < b.name ? 1 : -1));

      case 'canFly':
        return asc === true
          ? heroes.sort((a, b) => (a.name > b.name ? 1 : -1))
          : heroes.sort((a, b) => (a.name < b.name ? 1 : -1));

      case 'color':
        return asc === true
          ? heroes.sort((a, b) => (a.name > b.name ? 1 : -1))
          : heroes.sort((a, b) => (a.name < b.name ? 1 : -1));

      default:
        return heroes;
    }
  }
}
