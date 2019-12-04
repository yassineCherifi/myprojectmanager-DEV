import { Issues } from './issues.model';

/**
 * A task for the project.
 */
export class Tasks {
    description: string;
    cout: string;
    developer: string;
    issues: Issues[];
}
