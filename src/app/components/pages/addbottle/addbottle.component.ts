import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Bottle } from 'src/app/services/api/Bottle.model';
import { bottleGet, bottleImagePost, bottlePost } from 'src/app/services/api/Bottle.service';
import * as JsBarcode from 'jsbarcode';
@Component({
  selector: 'app-addbottle',
  templateUrl: './addbottle.component.html',
  styleUrls: ['./addbottle.component.css']
})
export class AddbottleComponent implements OnInit {
  bottle: Bottle = {
    Id: 0,
    Name: '',
    Liquor: '',
    SKU: '',
    Presentacion: 0,
    FullBottleWeight: 0,
    EmptyBottleWeight: 0,
    WeightPerOunce: 0,
    Image: ""
  }
  licorTipo: string = "";

  constructor(private pagetitleservice: PagetitleService) { }

  async guardar() {
    if (this.bottle.Presentacion != null && this.bottle.Presentacion > 0) {
      this.bottle.Liquor = this.licorTipo;
      this.bottle.WeightPerOunce = (this.bottle.FullBottleWeight - this.bottle.EmptyBottleWeight) / this.bottle.Presentacion;
      console.log(this.bottle);
      try {
        await bottlePost(this.bottle);
      } catch (e) {
        console.info(e)
      }
      var parametro: string = ` and Name eq '${this.bottle.Name}' and Liquor eq '${this.bottle.Liquor}' and Presentacion eq ${this.bottle.Presentacion} and SKU eq '${this.bottle.SKU}'`;
      console.log(parametro);
      var botellaCreada = (await bottleGet(parametro) as Bottle[])[0];
      console.log(botellaCreada)
      if (botellaCreada.Id != null && botellaCreada.Id > 0 && this.file != null)
        await bottleImagePost(botellaCreada.Id, this.file);
    } else {
      alert("Ingrese la presentación del producto");
    }
  }

  codeBar() {
    console.log("ejecutado")
    const barcodeElement = document.getElementById('barcode');
    if (barcodeElement != null)
      barcodeElement.innerHTML = '';
    if (this.bottle.SKU != null && this.bottle.SKU != '')
      JsBarcode(barcodeElement, this.bottle.SKU);


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

  ngOnInit(): void {
    this.pagetitleservice.setPageTitle('Añadir Botella')
  }

}
