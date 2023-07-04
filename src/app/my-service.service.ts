import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  toDo(str:string)
  {
    console.log(str);
  }
}
