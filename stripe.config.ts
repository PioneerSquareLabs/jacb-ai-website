import Stripe from 'stripe';
import { config } from 'dotenv';

config(); // Load environment variables

const stripeApiKey = process.env.STRIPE_API_KEY || '';

if (!stripeApiKey) {
  console.error('Stripe API key is missing. Please check your environment variables.');
  process.exit(1);
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2020-08-27',
});

export default stripe;