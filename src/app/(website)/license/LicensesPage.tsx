"use client"

import React, { useState } from 'react';
import NonExclusiveLicense from './NonExclusiveLicense';
import PrimeLicense from './PrimeLicense';

const tabs = ['Non-Exclusive', 'Prime', 'Exclusive', 'Free', 'Subscription'];

const LicensesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Non-Exclusive');

  const renderContent = () => {
    switch (activeTab) {
      case 'Non-Exclusive':
        return (
          <div>
              <NonExclusiveLicense></NonExclusiveLicense>
          </div>
        );
      case 'Prime':
        return (
          <>
          <PrimeLicense/>
          </>
        );
      case 'Exclusive':
        return (
          <div>

          </div>
        );
      case 'Free':
        return (
          <div>

          </div>
        );
      case 'Subscription':
        return (
          <div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: "Favorit" }}  className="px-6 lg:px-20 py-10 ">
      <h1 className="lg:text-4xl text-2xl font-bold mb-2">Licenses</h1>
      <p className="lg:text-lg text-sm text-black mb-6">
        Read our licenses for our <strong>vocals</strong> which are made to help you succeed.
        After you purchase a vocal, you can download the license with your name and the
        purchased vocal on it to prove ownership.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full cursor-pointer font-medium transition lg:text-xl text-sm ${activeTab === tab
              ? 'bg-green-100 text-green-800'
              : 'text-black  hover:text-black'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderContent()}
    </div>
  );
};

export default LicensesPage;
