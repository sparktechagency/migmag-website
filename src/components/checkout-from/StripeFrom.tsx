'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useCreatePaymentIntentMutation } from "@/redux/api/authApi/authApi";
import { useSearchParams} from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeForm() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [createPaymentIntent] = useCreatePaymentIntentMutation();
    const searchParams = useSearchParams();

    // get values from query
    const priceParam = searchParams.get('price');
    const songIdParam = searchParams.get('songId'); // match with router.push query key

    // convert to correct types
    const price: number | null = priceParam ? parseFloat(priceParam) : null;
    const songId: number | null = songIdParam ? parseInt(songIdParam) : null;

    console.log(songId);



    const payload = {
        amount : price,
        payment_method : "pm_card_visa"
    }

    useEffect(() => {
        const createIntent = async () => {
            try {
                if (!price) return;

                // const amount = parseFloat(price) * 100; // Convert to cents



                const res= await createPaymentIntent(payload);

                console.log(res?.data?.data?.client_secret);


                if (res?.data?.data?.client_secret) {
                    setClientSecret(res?.data?.data?.client_secret);
                }


            } catch (err) {
                console.error('Error creating payment intent:', err);
            }
        };

        createIntent();
    }, [createPaymentIntent,price]);

    const appearance = { theme: 'stripe' };
    const options = { clientSecret, appearance };

    return (
        <div className="">
            {clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm songId = {songId} price = {price} clientSecret={clientSecret} />
                </Elements>
            ) : (
                <p>Loading payment...</p>
            )}
        </div>
    );
}
