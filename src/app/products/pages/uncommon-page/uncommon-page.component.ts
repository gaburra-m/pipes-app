import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    //En el observable se desuscribe al cambiar de ruta
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    // En las promesa no hay forma de parar la promesa, aunque cambies de ruta
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
