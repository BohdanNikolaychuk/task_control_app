import { SortPipe } from './sort.pipe';
import { IDashBoard } from './../../interface/IDashBoard';
import { DashBoard } from './../../../mock/mock.data';

describe('SortPipe', () => {
  let pipe: SortPipe;

  beforeEach(() => {
    pipe = new SortPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('sort array by name desc', () => {
    let sortedArray: IDashBoard[] = pipe.transform(DashBoard, ['name', 'desc']);

    expect(sortedArray.length).toBe(DashBoard.length);
    expect(sortedArray[0].name).toBe('name5');
  });

  it('sort array by name asc', () => {
    let sortedArray: IDashBoard[] = pipe.transform(DashBoard, ['name', 'asc']);

    expect(sortedArray.length).toBe(DashBoard.length);

    expect(sortedArray[0].name).toBe('name1');
  });

  it('sort array by desc asc', () => {
    let sortedArray: IDashBoard[] = pipe.transform(DashBoard, ['desc', 'asc']);

    expect(sortedArray.length).toBe(DashBoard.length);

    expect(sortedArray[0].desc).toBe('desc1');
  });
  it('sort array by desc desc', () => {
    let sortedArray: IDashBoard[] = pipe.transform(DashBoard, ['desc', 'desc']);

    expect(sortedArray.length).toBe(DashBoard.length);

    expect(sortedArray[0].desc).toBe('desc5');
  });
});
