import { Component, OnInit } from '@angular/core';
import { PagetitleService } from 'src/app/services/pagetitle.service';
import { Router } from '@angular/router';
import { User } from 'src/app/services/api/User.model';
import { userGet } from 'src/app/services/api/User.service';
import { setWeight } from 'src/app/services/bascula.service';
@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  constructor(private pageTitleService:PagetitleService, private router:Router){}

  users:User[]=[]
  async obtainGet(){
    this.users = await userGet() as User[];
  }

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Encargados');
    this.obtainGet();
  }
  add(){
    this.router.navigate(['/addmanager'])
  }
}
