import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularDishes = [
    {
      imgURL: '/assets/images/Layer_15.png',
      type: 'MAIN DISHES',
      title: 'Quick Chicken Picata',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_16.png',
      type: 'MAIN DISHES',
      title: 'Kung Pao Chicken',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_17.png',
      type: 'MAIN DISHES',
      title: 'Honey-Garlic Slow Cooker Chicken Thighs',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_15.png',
      type: 'MAIN DISHES',
      title: 'Jamie\'s Baked Brie',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
  ]

  constructor() {
   }

  ngOnInit(): void {
  }

}
