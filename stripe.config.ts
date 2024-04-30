import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripeApiKey = process.env.STRIPE_API_KEY;

if (!stripeApiKey) {
  throw new Error('Stripe API key is missing in the .env file');
}

const stripe = new Stripe(stripeApiKey, { apiVersion: '2020-08-27' });

export default stripe;