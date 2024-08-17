import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
   saveForm(myform:any):void{
    console.log(myform)
   }
}
