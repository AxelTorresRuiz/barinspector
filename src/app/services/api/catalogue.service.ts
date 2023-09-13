import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private cataloguebottle:any[] = [
    {
      "Id": 1,
      "Name": "BLACK & WHITE",
      "Liquor ": "Whisky",
      "SKU": null,
      "Presentacion": "700 ml",
      "FullBottleWeight": 1087.0,
      "EmptyBottleWeight": 422.0,
      "WeightPerOunce": 27.71,
      "Slug": null,
      "CreatedAt": "2023-09-04T20:33:20.991048Z",
      "UpdatedAt": "2023-09-04T20:33:20.991088Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/1/getimagen"
  },
  {
      "Id": 2,
      "Name": "AZUL",
      "Liquor ": "Tequila",
      "SKU": null,
      "Presentacion": "950 ml",
      "FullBottleWeight": 1553.0,
      "EmptyBottleWeight": 656.0,
      "WeightPerOunce": 28.03,
      "Slug": null,
      "CreatedAt": "2023-09-04T21:23:46.564616Z",
      "UpdatedAt": "2023-09-04T21:23:46.564616Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/2/getimagen"
  },
  {
      "Id": 3,
      "Name": "CENTE AÑEJO",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "695 ml",
      "FullBottleWeight": 1331.0,
      "EmptyBottleWeight": 675.0,
      "WeightPerOunce": 28.52,
      "Slug": null,
      "CreatedAt": "2023-09-04T21:45:32.717311Z",
      "UpdatedAt": "2023-09-04T21:45:32.717312Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/3/getimagen"
  },
  {
      "Id": 4,
      "Name": "CUERVO ESPECIAL",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "990 ml",
      "FullBottleWeight": 1576.0,
      "EmptyBottleWeight": 620.0,
      "WeightPerOunce": 28.12,
      "Slug": null,
      "CreatedAt": "2023-09-04T21:51:17.307972Z",
      "UpdatedAt": "2023-09-04T21:51:17.307972Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/4/getimagen"
  },
  {
      "Id": 5,
      "Name": "D. JULIO BLANCO",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1406.0,
      "EmptyBottleWeight": 695.0,
      "WeightPerOunce": 28.44,
      "Slug": null,
      "CreatedAt": "2023-09-04T21:54:52.106637Z",
      "UpdatedAt": "2023-09-04T21:54:52.106637Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/5/getimagen"
  },
  {
      "Id": 6,
      "Name": "D. JULIO REPOSADO",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1393.0,
      "EmptyBottleWeight": 780.0,
      "WeightPerOunce": 25.54,
      "Slug": null,
      "CreatedAt": "2023-09-04T21:59:20.308731Z",
      "UpdatedAt": "2023-09-04T21:59:20.308731Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/6/getimagen"
  },
  {
      "Id": 7,
      "Name": "D. JULIO AÑEJO",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1465.0,
      "EmptyBottleWeight": 750.0,
      "WeightPerOunce": 28.6,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:01:36.37795Z",
      "UpdatedAt": "2023-09-04T22:01:36.377951Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/7/getimagen"
  },
  {
      "Id": 8,
      "Name": "HERRADURA REP",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "950 ml",
      "FullBottleWeight": 1870.0,
      "EmptyBottleWeight": 976.0,
      "WeightPerOunce": 27.94,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:03:55.964282Z",
      "UpdatedAt": "2023-09-04T22:03:55.964282Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/8/getimagen"
  },
  {
      "Id": 9,
      "Name": "HORNITOS",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "1000 ml",
      "FullBottleWeight": 1666.0,
      "EmptyBottleWeight": 684.0,
      "WeightPerOunce": 28.8,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:05:51.582954Z",
      "UpdatedAt": "2023-09-04T22:05:51.582954Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/9/getimagen"
  },
  {
      "Id": 10,
      "Name": "1800 CRISTALINO",
      "Liquor": "Tequila",
      "SKU": null,
      "Presentacion": "700 ml",
      "FullBottleWeight": 1380.0,
      "EmptyBottleWeight": 731.0,
      "WeightPerOunce": 27.04,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:07:41.20546Z",
      "UpdatedAt": "2023-09-04T22:07:41.205461Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/10/getimagen"
  },
  {
      "Id": 11,
      "Name": "BACARDI BLANCO",
      "Liquor": "Ron",
      "SKU": null,
      "Presentacion": "1750 ml",
      "FullBottleWeight": 2657.0,
      "EmptyBottleWeight": 1001.0,
      "WeightPerOunce": 27.6,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:09:41.095184Z",
      "UpdatedAt": "2023-09-04T22:09:41.095184Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/11/getimagen"
  },
  {
      "Id": 12,
      "Name": "BACARDI SOLERA",
      "Liquor": "Ron",
      "SKU": null,
      "Presentacion": "1000 ml",
      "FullBottleWeight": 1623.0,
      "EmptyBottleWeight": 686.0,
      "WeightPerOunce": 27.55,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:11:24.693341Z",
      "UpdatedAt": "2023-09-04T22:11:24.693341Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/12/getimagen"
  },
  {
      "Id": 13,
      "Name": "LICOR 43",
      "Liquor": "Otros",
      "SKU": null,
      "Presentacion": "1000 ml",
      "FullBottleWeight": 1702.0,
      "EmptyBottleWeight": 597.0,
      "WeightPerOunce": 32.5,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:16:17.192238Z",
      "UpdatedAt": "2023-09-04T22:16:17.192238Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/13/getimagen"
  },
  {
      "Id": 14,
      "Name": "GLENLIVET 12",
      "Liquor": "Whisky",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1257.0,
      "EmptyBottleWeight": 540.0,
      "WeightPerOunce": 28.68,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:17:56.563486Z",
      "UpdatedAt": "2023-09-04T22:17:56.563487Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/14/getimagen"
  },
  {
      "Id": 15,
      "Name": "JACK DANIELS",
      "Liquor": "Whisky",
      "SKU": null,
      "Presentacion": "1000 ml",
      "FullBottleWeight": 1600.0,
      "EmptyBottleWeight": 550.0,
      "WeightPerOunce": 30.88,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:20:04.909568Z",
      "UpdatedAt": "2023-09-04T22:20:04.909568Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/15/getimagen"
  },
  {
      "Id": 16,
      "Name": "JB",
      "Liquor": "Whisky",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1140.0,
      "EmptyBottleWeight": 433.0,
      "WeightPerOunce": 28.28,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:21:29.696703Z",
      "UpdatedAt": "2023-09-04T22:21:29.696703Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/16/getimagen"
  },
  {
      "Id": 17,
      "Name": "MACALLAN 12",
      "Liquor": "Whisky",
      "SKU": null,
      "Presentacion": "700 ml",
      "FullBottleWeight": 1445.0,
      "EmptyBottleWeight": 633.0,
      "WeightPerOunce": 33.83,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:22:52.265397Z",
      "UpdatedAt": "2023-09-04T22:22:52.265398Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/17/getimagen"
  },
  {
      "Id": 18,
      "Name": "WILLIAM L",
      "Liquor": "Whisky",
      "SKU": null,
      "Presentacion": "750 ml",
      "FullBottleWeight": 1101.0,
      "EmptyBottleWeight": 398.0,
      "WeightPerOunce": 28.12,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:26:08.686578Z",
      "UpdatedAt": "2023-09-04T22:26:08.686578Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/18/getimagen"
  },
  {
      "Id": 19,
      "Name": "MARTELL VSOP",
      "Liquor": "Coñac",
      "SKU": null,
      "Presentacion": "700 ml",
      "FullBottleWeight": 1176.0,
      "EmptyBottleWeight": 513.0,
      "WeightPerOunce": 26.52,
      "Slug": null,
      "CreatedAt": "2023-09-04T22:27:44.26683Z",
      "UpdatedAt": "2023-09-04T22:27:44.266831Z",
      "DeleteAt": null,
      "Image": "http://137.184.10.232:5000/bottle/19/getimagen"
  }

  ];

  constructor() { 
    console.log("Servicio de catalogo listo para usarse");
  }


  getBottle(){
    return this.cataloguebottle
  }


}


