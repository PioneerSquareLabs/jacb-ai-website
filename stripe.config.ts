import Stripe from 'stripe';
import { config } from 'dotenv';

config();

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error('Stripe API key is not defined in the environment variables.');
}

const stripe = new Stripe(stripeApiKey, {
  apiVersion: '2020-08-27',
});

export default stripe;