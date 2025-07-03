import React from 'react';
import MaxWidth from "@/components/max-width/MaxWidth";

const AffiliateQuestions: React.FC = () => {
    return (
        < MaxWidth >
            <section className="  bg-white lg:my-14 mt-6 " >
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className=" lg:text-4xl text-2xl headerColor  font-bold">Questions and Answers</h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-12 text-left text-gray-900">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How do I get paid out?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>You will get paid out via bank transfer or PayPal. Note that PayPal usually has higher
                                fees.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How fast will I get paid out?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>Usually after 30 days when the refund period is over.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How do I sign up to become an affiliate?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>
                                Use the button “APPLY NOW” and fill in your details. We then review your application and
                                get back to you
                                within 24 – 48 hours.
                            </p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How long is my referral code active?</h3>
                            <p  className={ ` lg:text-xl text-lg textColor  ` }>There is no limit.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">How does my affiliate link work?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>
                                You’ll get a coupon code which is usually 10%, redeemable for your customers up to 3
                                times. We use highly
                                effective tracking technology to make sure you’ll get the commission you deserve.
                            </p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">Is there a minimum payout?</h3>
                            <p>Yes, you need at least $50 to apply for a payout.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">When will my application be accepted?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>Usually within 24 hours but it can take up to 5 working days to get accepted.</p>
                        </div>

                        <div>
                            <h3 className=" lg:text-2xl text-xl font-semibold headerColor   ">Can you provide vocals for my YouTube videos?</h3>
                            <p className={ ` lg:text-xl text-lg textColor  ` }>
                                Yes, you can use our vocals in your video tutorials and promote Vocalfy. We will send
                                you the vocals you
                                need – free of charge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MaxWidth>
    );
};

export default AffiliateQuestions;