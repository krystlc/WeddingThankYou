import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatRippleModule} from '@angular/material/core'
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule, MatRippleModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatGridListModule, MatRippleModule]
})

export class MaterialModule { }