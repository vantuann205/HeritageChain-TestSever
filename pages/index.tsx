import { useState } from "react";
import type { NextPage } from "next";
import { useWallet } from "@meshsdk/react";
import { CardanoWallet } from "@meshsdk/react";
import { AssetMetadata, ForgeScript, Mint, Transaction } from "@meshsdk/core";
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const [assets, setAssets] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const { wallet, connected, name, disconnect } = useWallet();
  async function getAssets() {
    if (wallet) {
      setLoading(true); 
      const _assets = await wallet.getAssets();
      setAssets(_assets);
      setLoading(false);
    }
  }

  const Header = () => (
    <header className="header">
      <div className="header__textAndImage">
        <div className="header__textAndImage-text">
          <h1 className="header__textAndImage-text--one">
            Empowering Businesses with Trusted Climate Solutions
          </h1>
          <p className="header__textAndImage-text-two">
            We connect businesses with verified tree planting projects to
            restore our planet. We exist to create local jobs, sequester carbon,
            and restore ecosystems.
          </p>
        </div>
        <div className="header__textAndImage-image"></div>
      </div>
    </header>
  );

  const MissionCard = ({
    imgSrc,
    title,
    description,
  }: {
    imgSrc: string;
    title: string;
    description: string;
  }) => (
    <div className="mission-card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="read-more">
        Read More →
      </a>
    </div>
  );

  const Container = () => (
    <div className="container">
      <div className="container__descript">
        <h2>About HeritageChain</h2>
        <p>
          HeritageChain is a resource network for unlocking the potential of Africa &
          Diaspora with Distributed Ledger Technology, Artificial Intelligence,
          and Automation.
        </p>
      </div>
      <div className="mission-cards">
        <MissionCard
          imgSrc="https://www.wada.org/wp-content/uploads/2021/12/infrast.png"
          title="Project Overview"
          description="HeritageChain is a blockchain platform designed to manage and execute personal legacies."
        />
        <MissionCard
          imgSrc="https://www.wada.org/wp-content/uploads/2021/12/Knowledge.png"
          title="Legacy Directives"
          description=" It securely stores personal directives, wishes, and cultural heritage in an immutable way, ensuring that these elements are preserved accurately."
        />
        <MissionCard
          imgSrc="https://www.wada.org/wp-content/uploads/2021/12/Dapps-300x300.png"
          title="Fulfillment and Asset Distribution"
          description="The platform supports the precise and transparent implementation of personal wishes and asset distribution."
        />
      </div>
    </div>
  );

  return (
      <div className={styles.fullOfHome}> 
        <Header />
        <Container />
        {/* <Footer /> */}
      </div>
  );
};

export default Home;
