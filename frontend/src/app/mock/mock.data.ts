import { IDashBoard } from './../core/interface/IDashBoard';
import { IBoard } from 'src/app/core/interface/IBoard';

export const DashBoard: IDashBoard[] = [
  {
    desc: 'desc1',
    name: 'name1',
    userId: '1',
    _id: '1',
    __v: 1,
  },
  {
    desc: 'desc2',
    name: 'name2',
    userId: '2',
    _id: '2',
    __v: 2,
  },
  {
    desc: 'desc3',
    name: 'name3',
    userId: '3',
    _id: '3',
    __v: 3,
  },
  {
    desc: 'desc3',
    name: 'name3',
    userId: '3',
    _id: '3',
    __v: 3,
  },
  {
    desc: 'desc4',
    name: 'name4',
    userId: '4',
    _id: '4',
    __v: 4,
  },
  {
    desc: 'desc5',
    name: 'name5',
    userId: '5',
    _id: '5',
    __v: 5,
  },
];

export const Boards: IBoard[] = [
  {
    dashId: '1',
    name: 'name1',
    status: 'DONE',
    __v: 1,
    _id: '1',
    archive: true,
  },
  {
    dashId: '2',
    name: 'name2',
    status: 'DONE',
    __v: 2,
    _id: '2',
    archive: true,
  },
  {
    dashId: '3',
    name: 'name3',
    status: 'TODO',
    __v: 3,
    _id: '3',
    archive: true,
  },
];
