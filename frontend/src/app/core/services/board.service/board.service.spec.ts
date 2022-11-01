import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BoardService } from './board.service';
import { Boards } from 'src/app/mock/mock.data';
import { environment } from 'src/environments/environment';
import { IBoard } from '../../interface/IBoard';

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

  it('set Boards', () => {
    service.setBoards(Boards);
    const resBoard = service.getBoardsValue();
    expect(resBoard).toEqual(Boards);
    expect(resBoard).not.toEqual([]);
  });

  it('fetch boards', () => {
    const dashId = '1';

    service.getBoard(dashId);
    const request = controller.expectOne({
      method: 'GET',
      url: `${environment.MIAN_URL}dashboards/${dashId}/boards`,
    });

    request.flush(Boards);
    const savedBoards: IBoard[] = service.getBoardsValue();

    expect(savedBoards.length).toBe(Boards.length);
  });

  it('delete board', () => {
    service.setBoards(Boards);

    let dashId: string = '1';
    let boardId: string = '1';

    service.deleteBoard(dashId, boardId);
    const savedBoards: IBoard[] = service.getBoardsValue();
    console.log(
      '🚀 ~ file: board.service.spec.ts ~ line 63 ~ it ~ savedBoards',
      savedBoards
    );

    expect(savedBoards.length).not.toBe(Boards.length);
    expect(savedBoards.length).toBe(2);
    expect(savedBoards[0].name).toBe('name2');
  });

  it('edit board', () => {
    service.setBoards(Boards);

    let dashId: string = '1';
    let boardId: string = '1';

    service.editBoard(dashId, boardId, 'Test');
    const savedBoards: IBoard[] = service.getBoardsValue();

    expect(savedBoards.length).toBe(Boards.length);
    expect(savedBoards[0].name).not.toBe('name1');
    expect(savedBoards[0].name).toBe('Test');
  });
});
