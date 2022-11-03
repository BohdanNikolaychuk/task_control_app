import { DashBoard } from 'src/app/mock/mock.data';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  let pipe: FilterPipe;
  beforeEach(() => {
    pipe = new FilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('filter by name', () => {
    let filterArray = pipe.transform(DashBoard, '1', 'name');

    expect(filterArray[0].name).toBe('name1');
    expect(filterArray[0].name).not.toBeNull();
  });
  it('filter by desc', () => {
    let filterArray = pipe.transform(DashBoard, '5', 'desc');

    expect(filterArray[0].desc).toBe('desc5');
    expect(filterArray[0].desc).not.toBeNull();
  });
});
