import { NgModule } from '@angular/core';

import {MatButtonModule,MatMenuModule} from  '@angular/material';

const material=[
  MatButtonModule,
  MatMenuModule
]
@NgModule({
  
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
