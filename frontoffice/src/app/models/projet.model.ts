import { User } from './user.model';

export class Projet {
    title: string;
    description: string;
    status: string;
    creator: User;
    contributors: User[];
    issues: string[];
}
