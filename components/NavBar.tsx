import React, { useState } from 'react';
import Link from 'next/link';
import { CardanoWallet } from "@meshsdk/react";
import { useRouter } from 'next/router'; // Thêm import useRouter từ next/router

const NavBar = () => {
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const { pathname } = useRouter(); 
  return (
    <div>
      <div className="header__navbar">
      <h2 className="header__navbar-icon">HeritageChain</h2>
      <div className="header__navbar-navigate">
        <Link 
          href="/" 
          className={`header__navbar-navigate--page ${pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/Dedicated" 
          className={`header__navbar-navigate--page ${pathname === '/Dedicated' ? 'active' : ''}`}
        >
          Dedicated
        </Link>
        <Link 
          href="/About" 
          className={`header__navbar-navigate--page ${pathname === '/About' ? 'active' : ''}`}
        >
          About Us
        </Link>
      </div>
      <button className="header__navbar-login" onClick={() => setShowWallet(true)}>
        Connect Wallet
      </button>
    </div>
      {/* Modal hiển thị khi kết nối wallet */}
      {showWallet && (
        <div className="connect-wallet-container">
          <div className="overlay" onClick={() => setShowWallet(false)}></div>
          <div className="connect-wallet-modal">
            <label className="check">
              <input type="checkbox" className="terms-checkbox" />
              By checking this box and connecting my wallet, I confirm <br />
              that I have read, understood, and agreed to the Terms and Conditions
            </label>
            <button className="close-button" onClick={() => setShowWallet(false)}>X</button>
            <CardanoWallet />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
