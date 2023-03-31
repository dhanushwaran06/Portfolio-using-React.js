import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'project 1',
    desc:
      'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'project 2',
    desc:
      'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'project 3',
    desc:
      'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "project 4",
    desc:
      'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'project 5',
    desc:
      'abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz',
    img: ProjectImg,
  },
];

export default projects;
