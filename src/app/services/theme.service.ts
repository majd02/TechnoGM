import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subtheme } from '../models/subtheme';
import { theme } from '../models/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(private http:HttpClient) { 
  }
  public getArtme():Observable<String>{
    return this.http.get<String>("http://localhost:40361/api/Theme/");
  } 
    public getsub(id:number):Observable<String>{
    return this.http.get<String>("http://localhost:40361/api/Subtheme/GetsubthemesById/"+id);
  }
}
