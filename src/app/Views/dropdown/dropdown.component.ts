import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(public tser:ThemeService) { }
themes:any;
subthemes:any;
SelectedTheme :any={
  themeID: 0, name: ''
}
themeID:number
  ngOnInit(): void {
    this.showall();
    this.onSelect(this.SelectedTheme.themeID) 
    this.showallsub(this.SelectedTheme.themeID) 

  }
  showall(){
    this.tser.getArtme().subscribe(
      (data:any)=>{
        this.themes = data,
        console.log(this.themes)
    })
  }
  showallsub(themeID:any){
    this.tser.getsub(themeID).subscribe(
      (data:any)=>{
        this.subthemes = data,
        console.log(this.subthemes)
    })
  }
onSelect(themeID:any){

  console.log(themeID);
  this.showallsub(this.SelectedTheme.themeID);

} 


}
