import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TripService } from './trip.service';

describe('TripServerService', () => {
  let service: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
