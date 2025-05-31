import React from 'react'
import { FaEnvelopeOpenText } from 'react-icons/fa'

const Refund: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Favorit' }} >
      <div className=' bg-[#7F94DA] lg:my-20 my-10 ' >
        <div className=' max-w-[1539px] mx-auto ' >
          <h1 className=' lg:text-4xl text-2xl  text-white font-semibold lg:pt-20 lg:pb-28 py-10   ' >Refund Policy</h1>
        </div>
      </div>
      <div className=' max-w-[1539px] mx-auto   ' >
        {/* 1st box  */}
        <div className=' flex md:flex-row flex-col justify-between lg:gap-x-3 lg:gap-y-0 gap-y-3 px-4 lg:px-0 ' >
          <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 ' >
            <div className=' flex justify-center ' >
              <span>
                <FaEnvelopeOpenText size={30} />
              </span>
            </div>
            <h1 className=' lg:text-4xl text-center  my-2 ' >Apply For A Refund</h1>
            <p className=' text-center text-lg ' >Contact us within 30 days</p>
          </div>
          <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 ' >
            <div className=' flex justify-center ' >
              <span>
                <FaEnvelopeOpenText size={30} />
              </span>
            </div>
            <h1 className=' lg:text-4xl text-center  my-2 ' >Provide Us All Information</h1>
            <p className=' text-center text-lg ' >Tell us your order number</p>
          </div>
          <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6  ' >
            <div className=' flex justify-center ' >
              <span>
                <FaEnvelopeOpenText size={30} />
              </span>
            </div>
            <h1 className=' lg:text-4xl text-center  my-2 ' >We Check If You Are Eligible</h1>
            <p className=' text-center text-lg ' >You will need to meet our critica</p>
          </div>
          <div className=' max-w-[350px] px-4  rounded-2xl shadow py-6 ' >
            <div className=' flex justify-center ' >
              <span>
                <FaEnvelopeOpenText size={30} />
              </span>
            </div>
            <h1 className=' lg:text-4xl text-center  my-2 ' >Get A Refund Or A Coupon</h1>
            <p className=' text-center text-lg ' >We will take care of it</p>
          </div>
        </div>

        <div className=' mt-12 lg:px-0 px-4 ' >
          <h1 className=' font-bold lg:text-4xl ' >Vocal Purchases</h1>
          <p className='  text-xl my-5 ' >At Vocalfy.com, we want to ensure that you are 100% happy with your purchase.</p>
          <ul className=' list-disc text-xl ml-4  ' >
            <li className=' ml-7 ' >If you have technical queries, do not hesitate to contact us (contact button at the home page).</li>
            <li className=' ml-7 ' >
              If after you attempted to resolve issues with Support staff and feel the product(s) you purchased does/do not the best fit your requirements, we want to make things right.
            </li>
            <li className=' ml-7 ' >
              A refund can not be guaranteed by law as these are digital products.
            </li>
          </ul>
          <div>
            <p className=' text-xl ' >
              Our policy offers a full refund  <span className=' font-bold ' >within 30 days of your date of purchase</span> . We’d love to know what went wrong and how we can improve, so please include details about the reason for your refund request if you reach out to us directly.
            </p>
          </div>
          <div className='  my-3 text-xl ' >
            <p>
              Vocalfy.com and our payment process submit the refund immediately and make every attempt to process the refund as quickly as possible. Your financial institution can take up to 20 days for the refund to reflect in your bank account/card. More details can be found via Stripe.com at <span className=' text-[#7F94DA] ' >Customer refund processing time.</span>
            </p>
          </div>
        </div>

        <div className="py-8 text-gray-800 text-lg ">
          <h2 className="text-2xl font-bold mb-4">Subscription Refunds</h2>
          <ul className="list-disc ml-7 space-y-1">
            <li>
              New users are eligible for a full refund within the first 7 days of their initial subscription purchase, provided a valid reason is given.
            </li>
            <li>Refund requests must be submitted within this 7-day period.</li>
            <li>Renewals and subsequent charges are non-refundable.</li>
            <li>
              Users can cancel their subscription at any time to prevent future billing, but no refunds will be issued for unused time.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">Credit & Conversion Refunds</h2>
          <ul className="list-disc ml-7 space-y-1">
            <li>
              Credits used to download vocals and AI tool conversions are eligible for a refund within 30 days of usage if the user is unsatisfied with the result.
            </li>
            <li>
              Refund requests must specify the issue with the vocal download or AI conversion.
            </li>
            <li>Approved refunds will restore the used credits or conversions to the user’s account.</li>
            <li>Refunds are not available for expired or unused credits/conversions.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">General Terms</h2>
          <ul className="list-disc ml-7 space-y-1">
            <li>
              Refund requests must be submitted via <a href="mailto:support@vocalfy.com" className="text-blue-600 hover:underline">support@vocalfy.com</a> or directly messaging us on the homepage “Contact Support” button.
            </li>
            <li>Vocalfy reserves the right to decline refund requests in cases of abuse or excessive refund claims.</li>
            <li>Refunds can be processed back to the original payment method, or sent as store credit.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">When not to request a refund</h2>
          <ul className="list-disc ml-7 space-y-1">
            <li>
              If you only apply for a  refund to get the money back while still keep using the vocals
            </li>
            <li>If you already applied for a refund</li>
            <li>If you are happy but still want a refund</li>
          </ul>
        </div>




      </div>
    </div>
  )
}

export default Refund
