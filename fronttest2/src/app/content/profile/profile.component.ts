import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // items: MenuItem[];
  // activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {

    // this.items = [
    //   {label: 'Home', icon: 'pi pi-fw pi-home'},
    //   {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    //   {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    //   {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    //   {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    // ];
  
    // this.activeItem = this.items[0];
    
  }


}
