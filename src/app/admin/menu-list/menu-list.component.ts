import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menu!: Menu[]; 

  constructor( private menuService: MenuService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getMenu();
    
}
private getMenu(){
 this.menuService.getMenuList().subscribe(data =>{
 this.menu = data;
 });
}
menuDetails(id:number){
  this.router.navigate(['menu-details',id]);
}
updateMenu(id:number){
  this.router.navigate(['update-menu',id]);
}
deleteMenu(id:number){
  this.menuService.deleteMenu(id).subscribe(data =>{
    console.log(data);
    this.getMenu();
  })
  
}
}
