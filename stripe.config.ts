import Stripe from 'stripe';
import { config } from 'dotenv';

config();

const stripeApiKey: string = process.env.STRIPE_API_KEY || '';
const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2024-04-10',
});

function handleSubscriptionSuccess(event: Stripe.Event) {
  // Logic to handle successful subscription payment
}

function handleSubscriptionCancellation(event: Stripe.Event) {
  // Logic to handle subscription cancellation
}

function setupWebhookListeners() {
  stripe.webhooks.constructEvent = (payload, sig, secret, tolerance, cryptoProvider) => {
    const event = stripe.webhooks.constructEvent(payload, sig, secret, tolerance, cryptoProvider);

    switch (event.type) {
      case 'invoice.payment_succeeded':
        handleSubscriptionSuccess(event);
        break;
      case 'customer.subscription.deleted':
        handleSubscriptionCancellation(event);
        break;
      default:
        throw new Error('Unhandled event type');
    }
  };
}

export { stripe, setupWebhookListeners };