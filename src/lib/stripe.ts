import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY as string;

export const stripe = new Stripe(secretKey, {
  apiVersion: "2024-06-20",
  appInfo: {
    name: "Next Shop",
  },
});
