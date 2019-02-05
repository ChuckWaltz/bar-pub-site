import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHomePageComponent } from './store-home-page.component';

describe('StoreHomePageComponent', () => {
  let component: StoreHomePageComponent;
  let fixture: ComponentFixture<StoreHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
