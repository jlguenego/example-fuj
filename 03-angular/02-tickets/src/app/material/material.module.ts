import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssaiComponent } from './essai/essai.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
import { EssaiAddressComponent } from './essai-address/essai-address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EssaiComponent, EssaiAddressComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    EssaiComponent,
    EssaiAddressComponent,
  ]
})
export class MaterialModule { }
