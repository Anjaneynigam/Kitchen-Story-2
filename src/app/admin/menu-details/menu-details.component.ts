import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  id!: number
  menu!: Menu
  constructor(private route: ActivatedRoute, private menuService: MenuService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.menu = new Menu();
    this.menuService.getMenuById(this.id).subscribe(data =>{
      this.menu = data;
    })
   
  }

}
