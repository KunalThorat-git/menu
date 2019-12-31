import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
 public name=" ";
 public a="";
 public time="";
 public KBC="";
 constructor() { }
 ngOnInit(){
 }
 onClick(){
   this.name='Title:Vighnaharta Ganesh';
   this.a='Description:Vighnaharta Ganesh is a Hindi TV Show based on Hindu scriptures revolving around Lord Ganesha.';
   this.time='Show Time:8 pm';
  
 }
 onGo(){
this.KBC='Title:Kaun Banega Crorepati';
 }
}
