'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSearchParams } from "next/navigation";
import { useCreatePaymentIntentMutation } from '@/app/api/paymentApi/paymentApi';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeForm() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [createPaymentIntent] = useCreatePaymentIntentMutation();
    const searchParams = useSearchParams();

    // Extract price and songId from query params
    const priceParam = searchParams?.get('price');
    const songIdParam = searchParams?.get('songId');

    const price: number | null = priceParam ? parseFloat(priceParam) : null;
    const songId: number | null = songIdParam ? parseInt(songIdParam) : null;

    useEffect(() => {
        const createIntent = async () => {
            if (price === null) return; // wait until price exists

            try {
                const payload = {
                    amount: price * 100, // Stripe expects cents
                    payment_method: "pm_card_visa"
                };

                const res = await createPaymentIntent(payload).unwrap();
                const secret = res?.data?.client_secret;
                if (secret) setClientSecret(secret);

            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createIntent();
    }, [createPaymentIntent, price]);

    // Properly typed appearance for Stripe
    const appearance: Appearance = { theme: "stripe" };
    const options: StripeElementsOptions | undefined = clientSecret
        ? { clientSecret, appearance }
        : undefined;

    // If price or songId is missing, we can't render checkout
    if (!price || !songId) {
        return <p>Invalid payment parameters.</p>;
    }

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


