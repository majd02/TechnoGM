import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  themesToShow = 5
  constructor() {
    const isPhone = window.innerWidth < 500;
   }
   image1 ="assets/img/Culture.png"
   
   image2 ="assets/img/Culture.png"
   image3 ="assets/img/Event.png"
   image4 ="assets/img/Host.png"
   image5 ="assets/img/Marchant.png"
   
   image6 ="assets/img/Discover.png"
   
   icon1 ="assets/img/1.png"
   
   icon2 ="assets/img/2.png"
   
   icon3 ="assets/img/3.png"
   
   icon4 ="assets/img/4.png"
  themes = [{
    id: 1,
    title: 'Culture',
    image: 'assets/img/Culture.png'
  },
  {
    id: 2,

    title: 'Event',
    image: 'assets/img/Event.png'
  },
  {
    id: 3,

    title: 'Health',
    image: 'assets/img/Health.png'
  },
  {
    id: 4,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 5,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 6,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
  {
    id: 7,

    title: 'Seaside',
    image: 'assets/img/Seaside.png'
  },
]
  ngOnInit(): void {
  }

}
