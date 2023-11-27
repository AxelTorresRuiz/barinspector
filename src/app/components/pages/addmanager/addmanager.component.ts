import { Component, OnInit } from '@angular/core';
import { limpiraYGuardarBarraActiva, obtenerBarraActiva } from 'src/app/services/api/Bar.service';
import { User } from 'src/app/services/api/User.model';
import { userGet, userImagePost, userPost } from 'src/app/services/api/User.service';
import { PagetitleService } from 'src/app/services/pagetitle.service';
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
export class AddmanagerComponent implements OnInit {

  user:User={Id:0, Name:"", LastName:"", Role:"", Slug:"", CreatedAt:new Date(), UpdatedAt:new Date(), BranchId:2}
  LastNameFather = "";
  LastNameMother = "";

  LastName(){
    this.user.LastName=this.LastNameFather + " " + this.LastNameMother;
  }

  async saveUser(){
    const barra = await obtenerBarraActiva();
    delete barra.id;
    try{
    await userPost(this.user);
    }catch{
      alert("Error al guardar el usuario");
      return;
    }
    
    var parametro: string = `?$filter=Name eq '${this.user.Name}' and LastName eq '${this.user.LastName}' and Role eq '${this.user.Role}'`;
    var user = (await userGet(parametro) as User[])[0];
    if (user.Id != null && user.Id > 0 && this.file != null){
        await userImagePost(user.Id, this.file);
        alert("Usuario agregado");
    } else {
      alert("La imagen no pudo agregarse");
    }
  }

  file: File | null = null;
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file != null) {
      const extension = this.file.name.split('.').pop();
      const allowedExtensions = ['jpg', 'png', 'svg'];
      if (extension != null && !allowedExtensions.includes(extension)) {
        alert('Solo se permiten archivos JPG, PNG y SVG');
        return;
      }
    }
  }

  constructor(private pagetitle:PagetitleService){}

  ngOnInit(): void {
      this.pagetitle.setPageTitle('Añadir Encargado')
      userGet().then(r=>{
        console.log(r)
      })
  }
}
