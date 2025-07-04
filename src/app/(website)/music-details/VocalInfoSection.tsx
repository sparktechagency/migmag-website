'use client';

import React from 'react';
import {
  Percent,
  Globe,
  Download,
  Waves,
  Share,
  Copy,
  DollarSign,
  Music,
  UserCheck,
} from 'lucide-react';

const VocalInfoSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 space-y-12">
      {/* Top Icons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
        <div className="flex flex-col items-center space-y-2">
          <Percent size={32} className="text-gray-800" />
          <h3 className="font-semibold lg:text-3xl text-xl  ">Royalty Free</h3>
          <p className="lg:text-xl text-sm textColor  ">100% earnings for you.</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Globe size={32} className="text-gray-800" />
          <h3 className="font-semibold lg:text-3xl text-xl  ">Release Worldwide</h3>
          <p className="lg:text-xl text-sm textColor  ">Spotify, Apple Music, YouTube and more.</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Download size={32} className="text-gray-800" />
          <h3 className="font-semibold lg:text-3xl text-xl  ">Download Instantly</h3>
          <p className="lg:text-xl text-sm textColor  ">Download right after the purchase.</p>
        </div>
      </div>

      {/* Subscription Box */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="lg:text-3xl text-xl headerColor font-semibold mb-1">Subscription-Only Vocal</h4>
        <p className=" lg:text-xl text-sm textColor ">
          This vocal is only available for subscribed users. Subscribe now and enjoy a wide
          selection of subscription-only vocals at no additional cost. If you have any further
          questions, please email us at{' '}
          <a href="mailto:support@vocalfy.com" className="text-blue-600 underline">
            support@vocalfy.com
          </a>
          .
        </p>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
        {/* What's Included */}
        <div>
          <h5 className="font-semibold lg:text-3xl text-sm headerColor mb-2">What’s included?</h5>
          <p className = "lg:text-xl text-sm textColor " >
            Lyrics PDF, WET vocals (with effects), 3x raw vocal takes. Pro and Studio subscribers
            also receive the separated instrument tracks and melody files. All in the best 24 bit
            .wav file format.
          </p>
        </div>

        {/* License */}
        <div>
          <h5 className="font-semibold lg:text-3xl text-xl mb-2">License</h5>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4" />
              <span>Unlimited online audio steams</span>
            </div>
            <div className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              <span>Distribute unlimited copies</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span>For profit live performances</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>Keep all earnings</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              <span>No need to credit artist</span>
            </div>
            <div className="flex items-center gap-2">
              <Copy className="w-4 h-4" />
              <span>Full commercial use<sup>1</sup></span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <sup>1</sup> Vocal itself cannot be sub-licensed or resold
          </p>
        </div>
      </div>
    </div>
  );
};

export default VocalInfoSection;
