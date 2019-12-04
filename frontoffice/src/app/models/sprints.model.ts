import { Issues } from './issues.model';

/**
 * A sprint for the project.
 */
export class Sprints {
    title: string;
    startDate: string;
    endDate: string;
    status: string;
    issues: Issues[];
}
