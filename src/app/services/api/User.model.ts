export interface User {
    Id: number;
    Name: string;
    LastName: string;
    Addres?: string;
    Role: string;
    Slug: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    DeleteAt?: Date;
    Image?: string;
    Email?: string;
    Phone?: string;
    BranchId: number;
}