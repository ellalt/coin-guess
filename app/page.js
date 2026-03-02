'use client'

import React, { useState } from 'react';

const CoinFlipForm = () => {
  
  // State variables - will be used later
  const [account, setAccount] = useState(null)
  const [connect, setConnect] = useState(false)
  /*
  Write Your Codes Here
  */

  // Event handlers - will be used later
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConnect =() =>{
    setConnect(true);

  }

  /*
  Write Your Codes Here
  */

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center font-bold mb-6">Coin Flip DApp</h1>
      <div className="mb-4">
        <label className="block mb-2">Account: Not connected</label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Status: No Bet</label>
      </div>
  //  Write Your Codes Here
    </div>
  );
};

export default CoinFlipForm;