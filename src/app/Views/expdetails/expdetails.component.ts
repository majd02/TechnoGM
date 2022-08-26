import { Component, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog'; 

@Component({
  selector: 'app-expdetails',
  templateUrl: './expdetails.component.html',
  styleUrls: ['./expdetails.component.css']
})
export class ExpdetailsComponent implements OnInit {

  constructor() { }
  showModalDialog() {
    this.displayModal = true;
}

displayModal: boolean;
showModalDialog1() {
  this.displayModal1 = true;
}

displayModal1: boolean;
showModalDialog2() {
  this.displayModal2 = true;
}

displayModal2: boolean;
  ngOnInit(): void {
  }
  included = [{
    name:'Food'
     
  },
  {
    name:'transport'
     
  }
]
display: boolean = false;

    showDialog() {
        this.display = true;
    }
  themes = [{
    id: 1,
    title: 'Culture',
    image: 'assets/img/detail.png',
    theme: 'nature',
    nom :'Rtiba Forest Hiking',
    
    subtheme :'dddd',
    
  },
  {
    id: 1,
    title: 'fff',
    image: 'assets/img/detail.png',
    theme: 'nature',
    nom :'Rtiba Forest Hiking',
    
    subtheme :'Hiking',
    
  }
 
]


}
