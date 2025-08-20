import MediaPartners from "../components/media-partners";
import Hero from "../components/hero/hero-responsive";
import RewardsBanner from "../components/rewards-banner";
import FeatureGrid from "../components/feature-grid";
import TradingPairs from "../components/trading-pairs";
import WalletConnectionFlow from "../components/wallet-connection-flow-responsive";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <RewardsBanner />
      <TradingPairs />
      <FeatureGrid />
      <WalletConnectionFlow />

      <MediaPartners />
    </div>
  );
}
