export type PaginationParams = {
  page?: number;
  take?: number;
  q?: string;
  branchId?: string;
  locationId?: string;
}

export type PageMeta = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  pageCount: number;
}
