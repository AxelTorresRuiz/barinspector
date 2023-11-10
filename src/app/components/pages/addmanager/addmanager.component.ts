import { Component, OnInit } from '@angular/core';
import { limpiraYGuardarBarraActiva, obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { User } from 'src/app/services/api/User.model';
import { userGet, userPost } from 'src/app/services/api/User.service';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  user:User={Id:0, Name:"", LastName:"", Role:"", Slug:"", CreatedAt:new Date(), UpdatedAt:new Date()}
  LastNameFather = "";
  LastNameMother = "";

  LastName(){
    this.user.LastName=this.LastNameFather + " " + this.LastNameMother;
  }

  async saveUser(){
    const barra = await obtenerBarraActiva();
    delete barra.id;
    userPost(this.user);
  }

  constructor(private pagetitle:PagetitleService){}

  ngOnInit(): void {
      this.pagetitle.setPageTitle('Añadir Encargado')
      userGet().then(r=>{
        console.log(r)
      })
  }
}
