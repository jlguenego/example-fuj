import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { EssaiTableComponent } from './essai-table.component';

describe('EssaiTableComponent', () => {
  let component: EssaiTableComponent;
  let fixture: ComponentFixture<EssaiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaiTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
