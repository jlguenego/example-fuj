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
  MatCardModule,
  MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule
} from '@angular/material';
import { EssaiAddressComponent } from './essai-address/essai-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EssaiTableComponent } from './essai-table/essai-table.component';

@NgModule({
  declarations: [EssaiComponent, EssaiAddressComponent, EssaiTableComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
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
    EssaiTableComponent,
  ]
})
export class MaterialModule { }
