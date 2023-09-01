import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private cataloguebottle:any[] = [
    {
      "Id": 1,
      "Liquor": "Liquor187",
      "SKU": "SKU772",
      "Presentacion": "Presentacion102",
      "FullBottleWeight": 0.4228501149741062,
      "EmptyBottleWeight": 0.9109677112342708,
      "WeightPerOunce": 0.27875343291983856,
      "Slug": "Slug328",
      "CreatedAt": "2023-08-27T20:35:14.64626Z",
      "UpdatedAt": "2023-08-27T20:35:14.646289Z",
      "DeleteAt": null,
      "BarBottleId": 6
  },
  {
      "Id": 2,
      "Liquor": "Liquor806",
      "SKU": "SKU530",
      "Presentacion": "Presentacion969",
      "FullBottleWeight": 0.7210029665120626,
      "EmptyBottleWeight": 0.2631512180914368,
      "WeightPerOunce": 0.4041280717456447,
      "Slug": "Slug366",
      "CreatedAt": "2023-08-27T20:35:14.734486Z",
      "UpdatedAt": "2023-08-27T20:35:14.734486Z",
      "DeleteAt": null,
      "BarBottleId": 2
  },
  {
      "Id": 3,
      "Liquor": "Liquor765",
      "SKU": "SKU619",
      "Presentacion": "Presentacion804",
      "FullBottleWeight": 0.5716645528963342,
      "EmptyBottleWeight": 0.7636096987562702,
      "WeightPerOunce": 0.2541872565628177,
      "Slug": "Slug99",
      "CreatedAt": "2023-08-27T20:35:14.734786Z",
      "UpdatedAt": "2023-08-27T20:35:14.734786Z",
      "DeleteAt": null,
      "BarBottleId": 3
  },
  {
      "Id": 4,
      "Liquor": "Liquor17",
      "SKU": "SKU709",
      "Presentacion": "Presentacion970",
      "FullBottleWeight": 0.7818215117951439,
      "EmptyBottleWeight": 0.10205624194286789,
      "WeightPerOunce": 0.032317158532125134,
      "Slug": "Slug339",
      "CreatedAt": "2023-08-27T20:35:14.734816Z",
      "UpdatedAt": "2023-08-27T20:35:14.734817Z",
      "DeleteAt": null,
      "BarBottleId": 6
  },
  {
      "Id": 5,
      "Liquor": "Liquor707",
      "SKU": "SKU636",
      "Presentacion": "Presentacion727",
      "FullBottleWeight": 0.8862290047768764,
      "EmptyBottleWeight": 0.963992439437843,
      "WeightPerOunce": 0.5651962818026323,
      "Slug": "Slug382",
      "CreatedAt": "2023-08-27T20:35:14.734843Z",
      "UpdatedAt": "2023-08-27T20:35:14.734843Z",
      "DeleteAt": null,
      "BarBottleId": 6
  },
  {
      "Id": 6,
      "Liquor": "Liquor805",
      "SKU": "SKU886",
      "Presentacion": "Presentacion47",
      "FullBottleWeight": 0.3450976312559545,
      "EmptyBottleWeight": 0.9317465726719023,
      "WeightPerOunce": 0.6066651863511352,
      "Slug": "Slug251",
      "CreatedAt": "2023-08-27T20:35:14.734863Z",
      "UpdatedAt": "2023-08-27T20:35:14.734863Z",
      "DeleteAt": null,
      "BarBottleId": 3
  },
  {
      "Id": 7,
      "Liquor": "Liquor163",
      "SKU": "SKU33",
      "Presentacion": "Presentacion552",
      "FullBottleWeight": 0.8054430143340163,
      "EmptyBottleWeight": 0.32118044031063164,
      "WeightPerOunce": 0.5503858307023725,
      "Slug": "Slug734",
      "CreatedAt": "2023-08-27T20:35:14.734885Z",
      "UpdatedAt": "2023-08-27T20:35:14.734886Z",
      "DeleteAt": null,
      "BarBottleId": 8
  },
  {
      "Id": 8,
      "Liquor": "Liquor653",
      "SKU": "SKU685",
      "Presentacion": "Presentacion10",
      "FullBottleWeight": 0.20497350718984886,
      "EmptyBottleWeight": 0.21131336689643576,
      "WeightPerOunce": 0.9482336814535148,
      "Slug": "Slug22",
      "CreatedAt": "2023-08-27T20:35:14.734905Z",
      "UpdatedAt": "2023-08-27T20:35:14.734905Z",
      "DeleteAt": null,
      "BarBottleId": 2
  },
  {
      "Id": 9,
      "Liquor": "Liquor142",
      "SKU": "SKU862",
      "Presentacion": "Presentacion779",
      "FullBottleWeight": 0.9295874824434996,
      "EmptyBottleWeight": 0.0617728842251799,
      "WeightPerOunce": 0.3011139227141121,
      "Slug": "Slug74",
      "CreatedAt": "2023-08-27T20:35:14.734941Z",
      "UpdatedAt": "2023-08-27T20:35:14.734941Z",
      "DeleteAt": null,
      "BarBottleId": 1
  }

  ];

  constructor() { 
    console.log("Servicio de catalogo listo para usarse");
  }


  getBottle(){
    return this.cataloguebottle
  }


}


