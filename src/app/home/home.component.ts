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
      imgURL: '/assets/images/Layer_18.png',
      type: 'MAIN DISHES',
      title: 'Jamie\'s Baked Brie',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
  ]

  latestRecipes = [
    {
      imgURL: '/assets/images/Layer_21.png',
      type: 'MAIN DISHES',
      title: 'Quick Chicken Picata',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_22.png',
      type: 'MAIN DISHES',
      title: 'Kung Pao Chicken',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_26.png',
      type: 'MAIN DISHES',
      title: 'Honey-Garlic Slow Cooker Chicken Thighs',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_27.png',
      type: 'MAIN DISHES',
      title: 'Jamie\'s Baked Brie',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_21.png',
      type: 'APPETIZERS AND SNACKS',
      title: 'Baked Brie with Caramelized Pears',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_22.png',
      type: 'APPETIZERS AND SNACKS',
      title: 'Baked Brie in Puff Pastry',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_26.png',
      type: 'DRINK RECIPES',
      title: 'Peanut Butter Banana Smoothie',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
    {
      imgURL: '/assets/images/Layer_27.png',
      type: 'DRINK RECIPES',
      title: 'The Real Mojito',
      desc: 'Habitant accumsan suscipit sodales phasellus nulla elit placerat sapien quisque gravisa tincidunt'
    },
  ];

  latestArticle = [
    {
      imgURL: '/assets/images/Layer_26.png',
      heading: 'How to Peel Hard Boiled Eggs Perfectlt, Every Single Time',
      date: 'Apirl 9, 2022. ',
      isArticle: true,
      comments: ' No Comments'
    },
    {
      imgURL: '/assets/images/Layer_21.png',
      heading: 'Of Course Ina Garten\'s Ice Cream Hack Is Totally Brilliant',
      date: 'Apirl 9, 2022. ',
      isArticle: true,
      comments: ' No Comments'
    },
    {
      imgURL: '/assets/images/Layer_27.png',
      heading: 'Passover Seder for $25? Totally Possible',
      date: 'Apirl 9, 2022. ',
      isArticle: true,
      comments: ' No Comments'
    },
    {
      imgURL: '/assets/images/Layer_22.png',
      heading: 'Salad Freaks Unite-Our Cookbook Is Finally Here',
      date: 'Apirl 9, 2022. ',
      isArticle: true,
      comments: ' No Comments'
    }
  ]

public menubarBoolen: boolean = true

  constructor() {
   }

  ngOnInit(): void {
   
    this.windowEventListner(this.menubarBoolen)
  }

  
  //nav bar control --------------
  public menuBar(){
  
    let menu: any = document.querySelector('.menu');
    let child = menu.children;
   let menuBars : any = document.querySelector('.dropdownmenu');
    if( this.menubarBoolen ){
      this.menubarBoolen = !this.menubarBoolen;
      menuBars.style.height = "calc(100vh - 90px)";
    menuBars.style.opacity = 1;
    menuBars.style.zIndex = 99;
      let windowWith = window.innerWidth
     
      if( windowWith > 600){
        menuBars.style.top = '125px';
      }else if(windowWith <= 600){
        menuBars.style.top = "170px"
      }
    
    }else{
      this.menubarBoolen = !this.menubarBoolen;
      menuBars.style.height = "0";
      menuBars.style.opacity = 0;
         menuBars.style.zIndex = -1;
      menuBars.style.top = '-500px';
     }

    }


    

    public windowEventListner = ( menubarBoolen : boolean ) =>{
      window.onresize = function(s){
        let menuBars : any = document.querySelector('.dropdownmenu');
        let windowWith = window.innerWidth
        if( menubarBoolen ){
        if(windowWith > 600){
          menuBars.style.top = '125px';
        }else if(windowWith <= 600){
          menuBars.style.top = "170px"
        }
      }
       
        
     }
    }

}
