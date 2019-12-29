import {map} from './map';
import { max } from './max';
import { of } from 'rxjs';

export const multiply = number => map((x: number) => x * number, this);

export const divide = number => map((x: number) => x / number);
