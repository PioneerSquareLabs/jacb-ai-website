import Stripe from 'stripe';
import { config } from 'dotenv';

config();

const stripeApiKey = process.env.STRIPE_API_KEY;
if (!stripeApiKey) {
  throw new Error('Stripe API key is missing in the environment variables');
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2020-08-27',
});

export const createSubscription = async (customerId: string, priceId: string) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
    });
    return subscription;
  } catch (error) {
    console.error('Failed to create subscription:', error);
    throw error;
  }
};

export const cancelSubscription = async (subscriptionId: string) => {
  try {
    const canceledSubscription = await stripe.subscriptions.del(subscriptionId);
    return canceledSubscription;
  } catch (error) {
    console.error('Failed to cancel subscription:', error);
    throw error;
  }
};

export default stripe;