import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: '2024-04-10',
});

export default stripe;