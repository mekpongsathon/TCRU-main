import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

//   megaItems: MegaMenuItem[];
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
        {
            label:'หน้าหลัก',
            icon:'pi pi-fw pi-home', 
            // /login
            routerLink: ['/']
            
        },
        {
            label: 'ผลิตภัณฑ์',
            items: [
                {
                    label: 'เชื้อราบิวเวอร์เรีย', 
                    icon: 'pi pi-fw pi-tag',
                    // items: [
                    //     {label: 'Project'},
                    //     {label: 'Other'},
                    // ]
                },
                {
                    label: 'เชื้อราเมธาไรเซียม',
                    icon: 'pi pi-fw pi-tag',
                },
                {
                    label: 'เชื้อราไตรโคเดอร์มา',
                    icon: 'pi pi-fw pi-tag',
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        },
        {
            label: 'profile',
            icon: 'pi pi-fw pi-user',
            items: [
                {label: 'จัดการบัญชี', icon: 'pi pi-fw pi-id-card', routerLink: ['/profile'],},
                {label: 'การชื้อสินค้า', icon: 'pi pi-fw pi-shopping-cart'},
                {label: 'ออกจากระบบ', icon: 'pi pi-fw pi-sign-out'},
            ]
        },
        {
            label:'เข้าสู่ระบบ',
            icon:'pi pi-fw pi-sign-in', 
            // /login
            routerLink: ['/login']
            
        },
        {
            label:'สมัครสมาชิก',
            icon:'pi pi-fw pi-sign-in', 
            // /login
            routerLink: ['/register']
            
        },
    ];
  }

}
