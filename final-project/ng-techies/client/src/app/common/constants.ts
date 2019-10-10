const BASE_API_URL = 'http://localhost:5000/api';

export const CUSTOMER_API_URL = `${BASE_API_URL}/customers`;
export const ORDER_API_URL = `${BASE_API_URL}/orders`;
export const ORDER_ID_API_URL = `${BASE_API_URL}/orders/orderId`;
export const ORDER_PAID_STATUS_API_URL = `${BASE_API_URL}/orders/payStatus/paid`;
export const ORDER_UNPAID_STATUS_API_URL = `${BASE_API_URL}/orders/payStatus/unpaid`;
export const ORDER_PENDING_STATUS_API_URL = `${BASE_API_URL}/orders/payStatus/pending`;
export const ORDER_FULFILL_STATUS_API_URL = `${BASE_API_URL}/orders/fulfillStatus/true`;
export const ORDER_UNFULFILL_STATUS_API_URL = `${BASE_API_URL}/orders/fulfillStatus/false`;

export const CREATED_BY = 'Team ng-Techies';