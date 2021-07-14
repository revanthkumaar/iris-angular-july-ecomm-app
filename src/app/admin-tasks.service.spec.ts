import { TestBed } from '@angular/core/testing';

import { AdminTasksService } from './admin-tasks/admin-tasks.service';

describe('AdminTasksService', () => {
  let service: AdminTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
