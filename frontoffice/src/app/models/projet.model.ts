import { User } from './user.model';
import { Issues } from './issues.model';

/**
 * A created project containing user stories, a status and a contributor list.
 */
export class Projet {
    title: string;
    description: string;
    status: string;
    creator: User;
    contributors: User[];
    issues: Issues[];
}
