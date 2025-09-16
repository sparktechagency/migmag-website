'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Appearance, StripeElementsOptions } from '@stripe/stripe-js';
import { useSearchParams } from "next/navigation";
import HireCheckout from './HireCheckout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function HireStripeFrom() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const searchParams = useSearchParams();

    // Extract price, songId, and clientSecret from query params
    const priceParam = searchParams?.get('price');
    const songIdParam = searchParams?.get('songId');
    const secretParam = searchParams?.get('clientSecret'); // 👈 get clientSecret from query

    const price: number | null = priceParam ? parseFloat(priceParam) : null;
    const songId: number | null = songIdParam ? parseInt(songIdParam) : null;

    useEffect(() => {
        if (secretParam) {
            setClientSecret(secretParam);
        }
    }, [secretParam]);

    // Stripe appearance config
    const appearance: Appearance = { theme: "stripe" };
    const options: StripeElementsOptions | undefined = clientSecret
        ? { clientSecret, appearance }
        : undefined;

    // If price or songId is missing, we can't render checkout
    if (!price || !songId) {
        return <p>Invalid payment parameters.</p>;
    }

    return (
        <div>
            {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <HireCheckout songId={songId} price={price} clientSecret={clientSecret} />
                </Elements>
            ) : (
                <p>Loading payment...</p>
            )}
        </div>
    );
}
