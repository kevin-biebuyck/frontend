export interface Paginated<TItem> {
    page: number;
    pageSize: number;
    totalItems: number;
    items: TItem[];
}
