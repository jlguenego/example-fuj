export interface TicketRecord {
    title: string;
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    project: string;
    isUrgent: boolean;
    type: string;
    dueDate: Date;
}
