import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  menu: Menu = new Menu();
  constructor(private menuService: MenuService,
  private router: Router) { }

  ngOnInit(): void {
    
  }
  saveMenu(){
    this.menuService.createmenu(this.menu).subscribe( data =>{
      console.log(data);
      this.goToMenuList();
    },
    error => console.log(error));  
  }
  goToMenuList(){
    this.router.navigate(['/menu']);
  }
  onSubmit(){
    console.log(this.menu);
    this.saveMenu();
    
  }

}
