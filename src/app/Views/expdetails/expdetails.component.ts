import { Component, OnInit } from '@angular/core';
import {DialogModule} from 'primeng/dialog'; 

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';
import { HttpErrorResponse } from '@angular/common/http';
import { subtheme } from 'src/app/models/subtheme';

@Component({
  selector: 'app-expdetails',
  templateUrl: './expdetails.component.html',
  styleUrls: ['./expdetails.component.css']
})
export class ExpdetailsComponent implements OnInit {

  constructor(public themeser:ThemeService , public fb:FormBuilder) { }
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
    this.dropdownformgroup = this.fb.group({
      theme:[''],
      subthemMe:['']
    })
   this.themeser.getArtme().subscribe(themelist=>{
    this.themelist = themelist
   })
  } 
  themelist;
  countrylist;
  dropdownformgroup : FormGroup ; 
 
    
      

 
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
cities: SelectItem[];
selectedState: string;
 
stateNames = ['Alabama', 'Alaska', 'California'];
states = this.stateNames.map((val, i, stateNames) => {
    return { label: val, value: val }
});  
cityNames = [
  {state: 'Alabama', city: 'Birmingham'}, 
  {state: 'Alabama', city: 'Huntsville'}, 
  {state: 'Alabama', city: 'Montgomery'},
  {state: 'Alaska', city: 'Anchorage'}, 
  {state: 'Alaska', city: 'Juneau'},
  {state: 'California', city: 'Fresno'},
  {state: 'California', city: 'Perris'}
];
getCities(state):any[] {
  this.cities = this.cityNames
                    .filter((el) => { return el.state === state })
                    .map((el) => { return { label: el.city, value: el.city } });return this.cities;
}  
}

 
 

