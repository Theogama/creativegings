export interface YocoCheckoutRequest {
  amount: number;
  currency: string;
  successUrl: string;
  cancelUrl: string;
  failureUrl?: string;
  metadata?: {
    service: string;
    description: string;
    [key: string]: any;
  };
}

export interface YocoCheckoutResponse {
  id: string;
  redirectUrl: string;
  status: string;
}

import { YOCO_PUBLIC_KEY } from "@/config/yoco";

const YOCO_API_BASE = 'https://online.yoco.com/v1';

export class YocoService {
  private static async makeRequest(endpoint: string, data: any): Promise<any> {
    const response = await fetch(`${YOCO_API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${YOCO_PUBLIC_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Payment processing failed');
    }

    return response.json();
  }

  static async createCheckout(request: YocoCheckoutRequest): Promise<YocoCheckoutResponse> {
    try {
      const checkoutData = {
        amount: request.amount,
        currency: request.currency,
        successUrl: request.successUrl,
        cancelUrl: request.cancelUrl,
        failureUrl: request.failureUrl,
        metadata: request.metadata,
      };

      const response = await this.makeRequest('/checkouts', checkoutData);
      return response;
    } catch (error) {
      console.error('Yoco checkout creation failed:', error);
      throw error;
    }
  }

  static async getCheckoutStatus(checkoutId: string): Promise<any> {
    try {
      const response = await fetch(`${YOCO_API_BASE}/checkouts/${checkoutId}`, {
        headers: {
          'Authorization': `Bearer ${YOCO_PUBLIC_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to get checkout status');
      }

      return response.json();
    } catch (error) {
      console.error('Failed to get checkout status:', error);
      throw error;
    }
  }
}
