import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacementComponent } from './placement/placement.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path:'placement',component:PlacementComponent},
  {path:'score',component:ScoreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
