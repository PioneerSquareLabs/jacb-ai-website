import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error('Stripe API key is missing in the environment variables.');
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2024-04-10',
});

export default stripe;