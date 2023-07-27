import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagetitleService {

  private pageTitle: string ='';

  getPageTitle(): string{
    return this.pageTitle;
  }
  setPageTitle(title: string): void{
    this.pageTitle = title;
  }
  constructor() { }
}
