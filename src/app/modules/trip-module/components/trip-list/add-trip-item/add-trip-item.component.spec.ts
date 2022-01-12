import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { AddTripItemComponent } from './add-trip-item.component';

describe('AddTripItemComponent', () => {
  let component: AddTripItemComponent;
  let fixture: ComponentFixture<AddTripItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTripItemComponent ],
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule, StoreModule ],
      providers: [ provideMockStore({}) ],
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (formBuilder: FormBuilder) => {
    fixture = TestBed.createComponent(AddTripItemComponent);
    component = fixture.componentInstance;
    component.tripForm = formBuilder.group({
      type: 'bus',
      destination: null,
      date_from: null,
      date_to: null,
      base_price: '500',
      offers: [],
      is_favorite: false
    });
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
