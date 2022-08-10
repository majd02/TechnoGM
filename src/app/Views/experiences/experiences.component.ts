import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';

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

  options: City[];
  people : any[];
  theme :any[];
  subtheme :any[];
  season :any[];
  
  City :any[];
  show = false;

    selectedCity="ddddd";
    constructor() {
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

}
