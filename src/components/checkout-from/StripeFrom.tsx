'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCreatePaymentIntentMutation } from "@/redux/api/authApi/authApi";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeForm() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [createPaymentIntent] = useCreatePaymentIntentMutation();
    const searchParams = useSearchParams();

    const priceParam = searchParams?.get('price') || null;
    const songIdParam = searchParams?.get('songId') || null;

    const price = priceParam ? parseFloat(priceParam) : null;
    const songId = songIdParam ? parseInt(songIdParam) : null;

    console.log(`songId ${typeof songId} `);

    useEffect(() => {
        const createIntent = async () => {
            if (!price) return; // wait until price exists

            try {
                const payload = {
                    amount: price * 100, // Stripe expects cents
                    payment_method: "pm_card_visa"
                };

                const res = await createPaymentIntent(payload);
                const secret = res?.data?.data?.client_secret;
                if (secret) setClientSecret(secret);

            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createIntent();
    }, [createPaymentIntent, price]);

    const appearance = { theme: 'stripe' };
    const options = clientSecret ? { clientSecret, appearance } : undefined;

    return (
        <div className="">
            {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm songId={songId} price={price} clientSecret={clientSecret} />
                </Elements>
            ) : (
                <p>Loading payment...</p>
            )}
        </div>
    );
}
