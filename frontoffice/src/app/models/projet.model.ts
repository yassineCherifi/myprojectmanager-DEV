import { User } from './user.model';
import { Issues } from './issues.model';

export class Projet {
    title: string;
    description: string;
    status: string;
    creator: User;
    contributors: User[];
    issues: Issues[];
}
