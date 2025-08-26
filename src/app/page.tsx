import MediaPartners from "../components/media-partners";
import Hero from "../components/hero/hero-responsive";
import RewardsBanner from "../components/rewards-banner";
import FeatureGrid from "../components/feature-grid";
import TradingPairs from "../components/trading-pairs";
import WalletConnectionFlow from "../components/wallet-connection-flow-responsive";
import ExchangeSection from "../components/exchange-section";
import CustomerBenefits from "../components/customer-benefits";
import Analytics from "../components/analytics";
import Currencies from "../components/currencies";
import Business from "../components/business";

export default function Home() {
  return (
    <div className="bg-[#001233]">
      <Hero />
     
      <RewardsBanner />
      <TradingPairs />
      <FeatureGrid />
      <WalletConnectionFlow />
      <MediaPartners />
      <ExchangeSection />
    </div>
  );
}
