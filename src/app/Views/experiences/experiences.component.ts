import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ConfirmationService, SelectItem} from 'primeng/api';
import { theme } from 'src/app/models/theme';
import { ThemeService } from 'src/app/services/theme.service';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  
  display: boolean = false;

  showDialog() {
    this.display = true;
}
rangeValues:number[];
close() {
  this.display = false;
}
  options: City[];
  people : any[];
  theme :any[];
  subtheme :any[];
  season :any[];
  
  City :any[];
  show = false;

    selectedCity="ddddd";
    constructor(public themeser:ThemeService) {
      this.options = [{name:'dddd' ,code:"d"}
      ];
      this.people=[{name :'1 person '},{name :'2 persons '},{name :'3-10 persons '},{name :'10+ persons '}] ;
      this.theme=[{name :'Culture '},{name :'Seaside '},{name :'Nature '},{name :'Event '}];
      this.subtheme=[{name :'Camping '},{name :'Hiking '},{name :'Concert '},{name :'Workshop '}];
      
      this.season=[{name :'Summer '},{name :'Fall '},{name :'Winter '},{name :'Spring '}];
      this.City=[{name :'Tunis '},{name :'Sousse '},{name :'Mahdia '},{name :'Djerba '}];
     }

  ngOnInit(): void {
  }

  them:any = new theme();
  cities: SelectItem[]; 
  selectedState :string;
  stateNames = ['Alabama', 'Alaska', 'California'];
  states = this.them.map((val, i, stateNames) => {
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
