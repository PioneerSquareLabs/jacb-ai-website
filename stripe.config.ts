import Stripe from 'stripe';
import { config } from 'dotenv';

config();

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error('Stripe API key is not defined in the environment variables.');
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2020-08-27',
  typescript: true,
});

export const stripeConfig = {
  createSubscription: async (customerId: string, priceId: string) => {
    try {
      const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        default_payment_method: 'card',
        currency: 'usd',
      });
      return subscription;
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw new Error('Failed to create subscription');
    }
  },
};