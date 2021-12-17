import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTripItemComponent } from './add-trip-item.component';

describe('AddTripItemComponent', () => {
  let component: AddTripItemComponent;
  let fixture: ComponentFixture<AddTripItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTripItemComponent ],
      imports: [ HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
