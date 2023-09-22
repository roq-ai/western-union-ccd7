interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Finance Manager', 'Transaction Analyst', 'Customer Service Representative'],
  tenantName: 'Business',
  applicationName: 'Western Union',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage new_table_nzgo',
    'Manage new_table_yxzm',
    'Manage new_table',
    'Manage transaction',
    'Manage user',
    'Manage business',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f3d8d9b0-4943-435a-b003-e446a599b1f4',
};
