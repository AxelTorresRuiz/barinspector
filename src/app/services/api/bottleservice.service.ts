import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottleserviceService {
  
  private barbottles:any[] = [
    {
        "Id": 1,
        "CurrentWeight": 652.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.444514Z",
        "UpdatedAt": "2023-08-27T20:35:08.444597Z",
        "DeleteAt": null
    },
    {
        "Id": 2,
        "CurrentWeight": 535.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.598588Z",
        "UpdatedAt": "2023-08-27T20:35:08.598591Z",
        "DeleteAt": null
    },
    {
        "Id": 3,
        "CurrentWeight": 798.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601427Z",
        "UpdatedAt": "2023-08-27T20:35:08.601431Z",
        "DeleteAt": null
    },
    {
        "Id": 4,
        "CurrentWeight": 46.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601582Z",
        "UpdatedAt": "2023-08-27T20:35:08.601583Z",
        "DeleteAt": null
    },
    {
        "Id": 5,
        "CurrentWeight": 388.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601681Z",
        "UpdatedAt": "2023-08-27T20:35:08.601681Z",
        "DeleteAt": null
    },
    {
        "Id": 6,
        "CurrentWeight": 672.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601721Z",
        "UpdatedAt": "2023-08-27T20:35:08.601721Z",
        "DeleteAt": null
    },
    {
        "Id": 7,
        "CurrentWeight": 41.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601746Z",
        "UpdatedAt": "2023-08-27T20:35:08.601746Z",
        "DeleteAt": null
    },
    {
        "Id": 8,
        "CurrentWeight": 678.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.60177Z",
        "UpdatedAt": "2023-08-27T20:35:08.60177Z",
        "DeleteAt": null
    },
    {
        "Id": 9,
        "CurrentWeight": 897.0,
        "Slug": null,
        "CreatedAt": "2023-08-27T20:35:08.601796Z",
        "UpdatedAt": "2023-08-27T20:35:08.601797Z",
        "DeleteAt": null
    }
  ];
  


  constructor() { 
    console.log("Servicio listo para usarses");
    
  }


}
