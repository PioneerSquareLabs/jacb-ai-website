import { loadStripe } from '@stripe/stripe-js';

const stripeApiKey = process.env.STRIPE_API_KEY || 'default_key';

export const stripePromise = loadStripe(stripeApiKey);

export async function handleSubscriptionPayment() {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe initialization failed');
    }
    // Example subscription logic
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2023,
        cvc: '123',
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
      throw new Error(`Payment failed: ${error.message}`);
    }

    return paymentMethod;
  } catch (error) {
    console.error('Error handling subscription payment:', error);
    throw error;
  }
}