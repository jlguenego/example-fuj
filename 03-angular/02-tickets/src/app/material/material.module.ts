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
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    EssaiComponent,
    EssaiAddressComponent,
  ]
})
export class MaterialModule { }
