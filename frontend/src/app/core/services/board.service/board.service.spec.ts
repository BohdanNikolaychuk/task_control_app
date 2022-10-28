import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BoardService } from './board.service';

describe('BoardService', () => {
  let service: BoardService;

  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BoardService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned empty array', () => {
    const resBoards = service.getBoardsValue();
    expect(resBoards).toEqual([]);
  });
});
