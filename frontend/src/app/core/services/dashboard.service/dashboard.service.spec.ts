import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DashboardService } from './dashboard.service';
import { DashBoard } from './../../../mock/mock.data';
import { environment } from 'src/environments/environment';
import { IDashBoard } from '../../interface/IDashBoard';

describe('DashboardService', () => {
  let service: DashboardService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DashboardService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned empty array', () => {
    const resBoards = service.getDashBoardsValue();
    expect(resBoards).toEqual([]);
  });

  it('setDashBoards', () => {
    service.setDashBoards(DashBoard);
    const resDashBoard = service.getDashBoardsValue();
    expect(resDashBoard).toEqual(DashBoard);
    expect(resDashBoard).not.toEqual([]);
  });

  it('fetch Dashboards', () => {
    service.getDashBoards();
    const request = controller.expectOne({
      method: 'GET',
      url: `${environment.MIAN_URL}dashboards`,
    });

    request.flush(DashBoard);
    const savedBoards: IDashBoard[] = service.getDashBoardsValue();
    expect(savedBoards[0].name).toBe('name1');
    expect(savedBoards).toEqual(DashBoard);
    expect(savedBoards).not.toBeUndefined();
  });

  it('create dashboard', () => {
    const createDash = { name: 'name1', desc: 'desc1' };

    service.createDashBoard(createDash);
    const request = controller.expectOne({
      method: 'POST',
      url: `${environment.MIAN_URL}dashboards`,
    });

    request.flush(DashBoard[0]);
    const savedBoards: IDashBoard[] = service.getDashBoardsValue();

    expect(savedBoards.length).toBe(1);
    expect(savedBoards[0].name).toBe('name1');
    expect(savedBoards[0].name).not.toBe('desc1');
  });

  it('delete dashboard', () => {
    service.setDashBoards(DashBoard);

    let dashBoardID: string = '1';
    service.deleteDashBoard(dashBoardID);
    const savedBoards: IDashBoard[] = service.getDashBoardsValue();

    expect(savedBoards.length).not.toBe(3);
    expect(savedBoards.length).toBe(5);
    expect(savedBoards[0].name).toBe('name2');
  });

  it('edit dashboard', () => {
    service.setDashBoards(DashBoard);

    let dashBoardID: string = '1';
    service.editDashBoard(dashBoardID, 'Test');
    const savedBoards: IDashBoard[] = service.getDashBoardsValue();

    expect(savedBoards.length).toBe(DashBoard.length);
    expect(savedBoards[0].name).not.toBe('name1');
    expect(savedBoards[0].name).toBe('Test');
  });
});
