import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-expdetails',
  templateUrl: './expdetails.component.html',
  styleUrls: ['./expdetails.component.css']
})
export class ExpdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  included = [{
    name:'Food'
     
  },
  {
    name:'transport'
     
  }
]
  themes = [{
    id: 1,
    title: 'Culture',
    image: 'assets/img/detail.png',
    theme: 'nature',
    nom :'Rtiba Forest Hiking',
    
    subtheme :'Hiking',
    
  }
 
]


}
