import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybar',
  templateUrl: './mybar.component.html',
  styleUrls: ['./mybar.component.css']
})
export class MybarComponent {

  constructor(private router:Router){}

  agregar(){
    this.router.navigate(['/catalogue'])
  }

}
