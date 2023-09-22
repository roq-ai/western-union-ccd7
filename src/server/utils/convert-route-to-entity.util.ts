const mapping: Record<string, string> = {
  businesses: 'business',
  'new-tables': 'new_table',
  'new-table-nzgos': 'new_table_nzgo',
  'new-table-yxzms': 'new_table_yxzm',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
