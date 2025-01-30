export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
}

export interface PaginatedResponse {
    results: Character[];
    info: {
        next: string | null;
        prev: string | null;
        pages: number;
        count: number;
    };
}