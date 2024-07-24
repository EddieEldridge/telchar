import { Statistics } from './Statistics';
import { Calling } from "./Calling";
import { Culture } from "./Culture";

export type Character = {
    name: string;
    imageUrl?: string;
    Culture?: Culture;
    Calling?: Calling;
    Statistics: Statistics;
};


