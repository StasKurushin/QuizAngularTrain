import { TestBed, inject } from '@angular/core/testing';

import { QuizInputService } from './quest-content.service';

describe('QuizInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizInputService]
    });
  });

  it('should be created', inject([QuizInputService], (service: QuizInputService) => {
    expect(service).toBeTruthy();
  }));
});
