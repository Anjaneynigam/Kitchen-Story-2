import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  id!:number;
  menu: Menu = new Menu();
  constructor(private menuService: MenuService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.menuService.getMenuById(this.id)
    .subscribe(data =>{
      this.menu = data;
    }, error => console.log(error));
      
  }
  onSubmit(){
    this.menuService.updateMenu(this.id, this.menu).subscribe(data =>{
      this.goToMenuList();
    }
    , error => console.log(error));
    
  }
    goToMenuList(){
      this.router.navigate(['/menu']);
    }
     
  
}
