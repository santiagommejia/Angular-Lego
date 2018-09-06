import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatCheckboxModule, MatCardModule,MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    // CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    // CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MaterialDesignModule { }
