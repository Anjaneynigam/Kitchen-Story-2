import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food =>food.id == id)!;
  }
  getAllFoodbyTag(tag:string) :Foods[]{
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
   // if(tag == 'All')
   // return this.getAll()
   // else
   // return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      { name: 'All', count: 15 },
      { name: 'Dosa', count: 1 },
      { name: 'Burger', count: 1 },
      { name: 'Paneer Tikka', count: 1 },
    ];

  }

  getAll() :Foods[]{
    return [
      {
        id: 1,
        name: 'Dosa',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic1.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 2,
        name: 'Lunch',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic2.jpg',
        tags: ['Meat', 'Rice','Lunch'],
      },
      {
        id: 3,
        name: 'Fish',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic3.jpg',
        tags: ['slowfood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Frid Rice',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic4.jpg',
        tags: ['FastFood', 'Rice','Lunch'],
      },
      {
        id: 5,
        name: 'Noodles',
        cookTime: '10-15',
        price: 5,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic5.jpg',
        tags: ['FastFood', 'chowmeen',],
      },
      {
        id: 6,
        name: 'Lunch',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic6.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 7,
        name: 'Burger',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic7.jpg',
        tags: ['FastFood', 'Burger','Lunch'],
      },
      {
        id: 8,
        name: 'Rolles',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic8.jpg',
        tags: ['FastFood', 'Roll',],
      },
      {
        id: 9,
        name: 'RostedFish',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic9.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 10,
        name: 'Burger',
        cookTime: '10-15',
        price: 10,
        favorite: false,
        origins: ['india'],
        star: 3.5,
        imageUrl: '/assets/pic10.jpg',
        tags: ['FastFood', 'Burger','Lunch'],
      }

        
    ];
  }
}
