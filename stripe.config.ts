import Stripe from 'stripe';
import { config } from 'dotenv';

config();

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  console.error('Stripe API Key is missing in the environment variables.');
  process.exit(1);
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
    throw new Error('Subscription creation failed');
  }
};

export const cancelSubscription = async (subscriptionId: string) => {
  try {
    const canceledSubscription = await stripe.subscriptions.del(subscriptionId);
    return canceledSubscription;
  } catch (error) {
    console.error('Failed to cancel subscription:', error);
    throw new Error('Subscription cancellation failed');
  }
};

export default stripe;