'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogDetailPageProps {
  postId: any;
}

const BlogDetailPage = ({ postId }: BlogDetailPageProps) => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cryptocurrency Market Volatility",
      excerpt: "Learn how to navigate the ups and downs of crypto markets and make informed trading decisions.",
      category: "education",
      author: "Sarah Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/assests/blogs/1.png",
      content: `
        <p>Cryptocurrency markets are known for their extreme volatility, with prices often swinging dramatically within short periods. Understanding this volatility is crucial for any trader or investor looking to navigate the crypto space successfully.</p>
        
        <h2>What Causes Crypto Volatility?</h2>
        <p>Several factors contribute to the high volatility in cryptocurrency markets:</p>
        <ul>
          <li><strong>Market Maturity:</strong> Crypto markets are still relatively young compared to traditional financial markets</li>
          <li><strong>Liquidity:</strong> Lower liquidity can lead to larger price swings</li>
          <li><strong>Regulatory News:</strong> Government announcements can cause significant price movements</li>
          <li><strong>Market Sentiment:</strong> Fear and greed drive much of the market behavior</li>
        </ul>
        
        <h2>Strategies for Managing Volatility</h2>
        <p>Here are some proven strategies to help you manage cryptocurrency volatility:</p>
        
        <h3>1. Dollar-Cost Averaging (DCA)</h3>
        <p>Instead of investing a lump sum, spread your investments over time. This strategy helps reduce the impact of volatility on your overall investment.</p>
        
        <h3>2. Set Stop-Loss Orders</h3>
        <p>Protect your investments by setting automatic sell orders at predetermined price levels. This helps limit your losses during market downturns.</p>
        
        <h3>3. Diversification</h3>
        <p>Don't put all your eggs in one basket. Spread your investments across different cryptocurrencies and even asset classes.</p>
        
        <h3>4. Stay Informed</h3>
        <p>Keep up with market news, technical analysis, and fundamental developments in the crypto space.</p>
        
        <h2>Conclusion</h2>
        <p>While cryptocurrency volatility can be intimidating, it also presents opportunities for significant gains. By understanding the causes of volatility and implementing proper risk management strategies, you can navigate these markets more confidently.</p>
        
        <p>Remember, never invest more than you can afford to lose, and always do your own research before making any investment decisions.</p>
      `
    },
    {
      id: 2,
      title: "Top 5 Security Tips for Crypto Traders",
      excerpt: "Essential security practices every cryptocurrency trader should follow to protect their assets.",
      category: "security",
      author: "Michael Rodriguez",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/assests/blogs/2.png",
      content: `
        <p>Security should be your top priority when trading cryptocurrencies. Unlike traditional banking, there's no customer service to call if your funds are stolen. Here are the essential security practices every crypto trader must follow.</p>
        
        <h2>1. Use Hardware Wallets for Long-Term Storage</h2>
        <p>Hardware wallets are physical devices that store your private keys offline, making them immune to online attacks. Popular options include:</p>
        <ul>
          <li>Interledger Nano S/X</li>
          <li>Trezor Model T</li>
          <li>KeepKey</li>
        </ul>
        <p>Never store large amounts of cryptocurrency on exchanges for extended periods.</p>
        
        <h2>2. Enable Two-Factor Authentication (2FA)</h2>
        <p>Always enable 2FA on all your crypto-related accounts. Use authenticator apps like:</p>
        <ul>
          <li>Google Authenticator</li>
          <li>Authy</li>
          <li>Microsoft Authenticator</li>
        </ul>
        <p>Avoid SMS-based 2FA as it's vulnerable to SIM swapping attacks.</p>
        
        <h2>3. Use Strong, Unique Passwords</h2>
        <p>Create strong, unique passwords for each crypto service you use. Consider using a password manager like:</p>
        <ul>
          <li>1Password</li>
          <li>Bitwarden</li>
          <li>LastPass</li>
        </ul>
        
        <h2>4. Verify URLs and Use Bookmarks</h2>
        <p>Phishing attacks are common in crypto. Always:</p>
        <ul>
          <li>Double-check URLs before entering credentials</li>
          <li>Bookmark legitimate exchange websites</li>
          <li>Never click links in emails claiming to be from exchanges</li>
        </ul>
        
        <h2>5. Keep Software Updated</h2>
        <p>Regularly update:</p>
        <ul>
          <li>Your operating system</li>
          <li>Web browsers</li>
          <li>Wallet software</li>
          <li>Antivirus programs</li>
        </ul>
        
        <h2>Additional Security Measures</h2>
        <ul>
          <li>Use a dedicated computer or browser for crypto activities</li>
          <li>Enable withdrawal whitelisting on exchanges</li>
          <li>Regularly monitor your accounts for suspicious activity</li>
          <li>Keep your recovery phrases secure and offline</li>
        </ul>
        
        <p>Remember: In the crypto world, you are your own bank. Taking these security measures seriously can save you from devastating losses.</p>
      `
    },
    {
      id: 3,
      title: "Bitcoin vs Ethereum: A Comprehensive Comparison",
      excerpt: "Explore the key differences between the two largest cryptocurrencies and their use cases.",
      category: "education",
      author: "Alex Johnson",
      date: "2024-01-10",
      readTime: "8 min read",
      image: "/assests/blogs/3.png",
      content: `
        <p>Bitcoin and Ethereum are the two largest cryptocurrencies by market capitalization, but they serve very different purposes. Understanding their differences is crucial for any crypto investor.</p>
        
        <h2>Bitcoin: Digital Gold</h2>
        <p>Bitcoin was created in 2009 as the first cryptocurrency, designed to be a peer-to-peer electronic cash system.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Limited Supply:</strong> Only 21 million Bitcoin will ever exist</li>
          <li><strong>Store of Value:</strong> Often called "digital gold"</li>
          <li><strong>Proof of Work:</strong> Uses energy-intensive mining</li>
          <li><strong>Simple Transactions:</strong> Primarily for sending and receiving value</li>
        </ul>
        
        <h2>Ethereum: The World Computer</h2>
        <p>Ethereum, launched in 2015, is a programmable blockchain that enables smart contracts and decentralized applications (DApps).</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Smart Contracts:</strong> Self-executing contracts with terms directly written into code</li>
          <li><strong>DApps Platform:</strong> Hosts thousands of decentralized applications</li>
          <li><strong>Proof of Stake:</strong> More energy-efficient consensus mechanism</li>
          <li><strong>Programmability:</strong> Supports complex financial instruments and protocols</li>
        </ul>
        
        <h2>Technical Comparison</h2>
        <table>
          <tr>
            <th>Feature</th>
            <th>Bitcoin</th>
            <th>Ethereum</th>
          </tr>
          <tr>
            <td>Launch Year</td>
            <td>2009</td>
            <td>2015</td>
          </tr>
          <tr>
            <td>Consensus</td>
            <td>Proof of Work</td>
            <td>Proof of Stake</td>
          </tr>
          <tr>
            <td>Block Time</td>
            <td>~10 minutes</td>
            <td>~12 seconds</td>
          </tr>
          <tr>
            <td>Supply Cap</td>
            <td>21 million</td>
            <td>No fixed cap</td>
          </tr>
        </table>
        
        <h2>Use Cases</h2>
        
        <h3>Bitcoin Use Cases:</h3>
        <ul>
          <li>Store of value and hedge against inflation</li>
          <li>Cross-border payments</li>
          <li>Institutional treasury asset</li>
          <li>Remittances</li>
        </ul>
        
        <h3>Ethereum Use Cases:</h3>
        <ul>
          <li>Decentralized Finance (DeFi) protocols</li>
          <li>Non-Fungible Tokens (NFTs)</li>
          <li>Decentralized Autonomous Organizations (DAOs)</li>
          <li>Supply chain management</li>
          <li>Gaming and metaverse applications</li>
        </ul>
        
        <h2>Investment Considerations</h2>
        <p>Both Bitcoin and Ethereum have their place in a diversified crypto portfolio:</p>
        
        <ul>
          <li><strong>Bitcoin:</strong> Better for conservative investors seeking digital gold exposure</li>
          <li><strong>Ethereum:</strong> Suitable for those betting on the growth of decentralized applications</li>
        </ul>
        
        <p>Consider your risk tolerance, investment timeline, and belief in each technology's future when making investment decisions.</p>
      `
    },
    {
      id: 4,
      title: "Market Analysis: Q1 2024 Crypto Trends",
      excerpt: "Our analysts break down the major trends shaping the cryptocurrency market this quarter.",
      category: "market",
      author: "Emily Watson",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/assests/blogs/4.png",
      content: `
        <p>The first quarter of 2024 has been eventful for the cryptocurrency market. Let's analyze the key trends and developments that have shaped the landscape.</p>
        
        <h2>Bitcoin ETF Approval Impact</h2>
        <p>The approval of spot Bitcoin ETFs in the United States has been a game-changer for institutional adoption:</p>
        <ul>
          <li>Over $10 billion in net inflows in the first month</li>
          <li>Increased mainstream media coverage</li>
          <li>Growing institutional interest from pension funds and endowments</li>
        </ul>
        
        <h2>Ethereum's Continued Evolution</h2>
        <p>Ethereum has maintained its position as the leading smart contract platform:</p>
        <ul>
          <li>Successful implementation of EIP-4844 (Proto-Danksharding)</li>
          <li>Reduced transaction costs on Layer 2 solutions</li>
          <li>Growing DeFi total value locked (TVL)</li>
        </ul>
        
        <h2>Altcoin Season Indicators</h2>
        <p>Several indicators suggest we may be entering an altcoin season:</p>
        <ul>
          <li>Bitcoin dominance declining from 52% to 48%</li>
          <li>Increased trading volume in mid-cap altcoins</li>
          <li>Rising interest in AI and gaming tokens</li>
        </ul>
        
        <h2>Regulatory Developments</h2>
        <p>The regulatory landscape continues to evolve globally:</p>
        
        <h3>United States:</h3>
        <ul>
          <li>Clearer guidance on crypto taxation</li>
          <li>Ongoing discussions about stablecoin regulation</li>
          <li>SEC's continued focus on enforcement</li>
        </ul>
        
        <h3>European Union:</h3>
        <ul>
          <li>MiCA regulation coming into effect</li>
          <li>Increased compliance requirements for exchanges</li>
          <li>Focus on environmental sustainability</li>
        </ul>
        
        <h2>Emerging Trends</h2>
        
        <h3>1. Real World Assets (RWAs)</h3>
        <p>Tokenization of real-world assets is gaining momentum:</p>
        <ul>
          <li>Real estate tokenization platforms</li>
          <li>Commodity-backed tokens</li>
          <li>Government bond tokenization</li>
        </ul>
        
        <h3>2. AI Integration</h3>
        <p>Artificial Intelligence is being integrated into crypto projects:</p>
        <ul>
          <li>AI-powered trading algorithms</li>
          <li>Automated portfolio management</li>
          <li>Smart contract auditing tools</li>
        </ul>
        
        <h3>3. Layer 2 Adoption</h3>
        <p>Ethereum Layer 2 solutions are seeing massive growth:</p>
        <ul>
          <li>Arbitrum and Optimism leading in TVL</li>
          <li>Polygon's continued ecosystem expansion</li>
          <li>New Layer 2 solutions launching regularly</li>
        </ul>
        
        <h2>Market Outlook</h2>
        <p>Looking ahead for the rest of 2024:</p>
        
        <h3>Bullish Factors:</h3>
        <ul>
          <li>Bitcoin halving event expected in April</li>
          <li>Continued institutional adoption</li>
          <li>Improving regulatory clarity</li>
          <li>Growing DeFi and NFT ecosystems</li>
        </ul>
        
        <h3>Risk Factors:</h3>
        <ul>
          <li>Macroeconomic uncertainties</li>
          <li>Potential regulatory crackdowns</li>
          <li>Market manipulation concerns</li>
          <li>Technical challenges and security breaches</li>
        </ul>
        
        <p>As always, investors should conduct their own research and consider their risk tolerance before making investment decisions in this volatile market.</p>
      `
    },
    {
      id: 5,
      title: "How to Use Dollar-Cost Averaging in Crypto",
      excerpt: "A beginner's guide to implementing DCA strategy for long-term cryptocurrency investing.",
      category: "trading",
      author: "David Kim",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/assests/blogs/5.png",
      content: `
        <p>Dollar-Cost Averaging (DCA) is one of the most effective strategies for long-term cryptocurrency investing, especially for beginners. This method helps reduce the impact of volatility and removes the stress of trying to time the market.</p>
        
        <h2>What is Dollar-Cost Averaging?</h2>
        <p>DCA is an investment strategy where you invest a fixed amount of money into a particular cryptocurrency at regular intervals, regardless of the price. This approach spreads your investment over time, potentially reducing the average cost per coin.</p>
        
        <h2>How DCA Works</h2>
        <p>Instead of investing $1,200 all at once, you might invest $100 every month for 12 months. Here's what happens:</p>
        
        <ul>
          <li><strong>Month 1:</strong> Bitcoin at $40,000 - You buy 0.0025 BTC</li>
          <li><strong>Month 2:</strong> Bitcoin at $35,000 - You buy 0.00286 BTC</li>
          <li><strong>Month 3:</strong> Bitcoin at $45,000 - You buy 0.00222 BTC</li>
        </ul>
        
        <p>Over time, you accumulate more coins when prices are low and fewer when prices are high, potentially lowering your average purchase price.</p>
        
        <h2>Benefits of DCA in Crypto</h2>
        
        <h3>1. Reduces Emotional Decision Making</h3>
        <p>DCA removes the guesswork and emotional stress of trying to time the market. You invest consistently regardless of market conditions.</p>
        
        <h3>2. Smooths Out Volatility</h3>
        <p>Crypto markets are extremely volatile. DCA helps smooth out price fluctuations over time.</p>
        
        <h3>3. Accessible for Beginners</h3>
        <p>You don't need to be a market expert or have a large sum of money to start. You can begin with small amounts.</p>
        
        <h3>4. Disciplined Approach</h3>
        <p>DCA enforces a disciplined investment approach, preventing you from making impulsive decisions during market euphoria or panic.</p>
        
        <h2>Setting Up Your DCA Strategy</h2>
        
        <h3>Step 1: Choose Your Cryptocurrency</h3>
        <p>Start with established cryptocurrencies like Bitcoin or Ethereum. Avoid highly speculative altcoins for DCA strategies.</p>
        
        <h3>Step 2: Determine Your Investment Amount</h3>
        <p>Decide how much you can afford to invest regularly. This should be money you won't need for at least 1-2 years.</p>
        
        <h3>Step 3: Set Your Schedule</h3>
        <p>Choose your investment frequency:</p>
        <ul>
          <li>Weekly (most common)</li>
          <li>Bi-weekly</li>
          <li>Monthly</li>
        </ul>
        
        <h3>Step 4: Automate Your Purchases</h3>
        <p>Most exchanges offer automated recurring purchases. Set it up and forget about it.</p>
        
        <h2>DCA Best Practices</h2>
        
        <ul>
          <li><strong>Stay Consistent:</strong> Don't skip purchases during market downturns</li>
          <li><strong>Don't Time the Market:</strong> Stick to your schedule regardless of price movements</li>
          <li><strong>Review Periodically:</strong> Assess your strategy every 6-12 months</li>
          <li><strong>Secure Your Holdings:</strong> Transfer coins to a secure wallet regularly</li>
        </ul>
        
        <h2>When DCA Might Not Be Ideal</h2>
        <p>While DCA is great for most investors, it might not be suitable if:</p>
        <ul>
          <li>You have a lump sum and the market is clearly in a strong uptrend</li>
          <li>You're an experienced trader who can effectively time markets</li>
          <li>You need liquidity in the short term</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Dollar-Cost Averaging is an excellent strategy for building long-term cryptocurrency wealth while minimizing risk and emotional stress. Remember, DCA is a marathon, not a sprint. Stay consistent, be patient, and let time work in your favor.</p>
        
        <p>Start small, stay disciplined, and watch your crypto portfolio grow over time!</p>
      `
    },
    {
      id: 6,
      title: "InterledgerSwap Announces New Trading Pairs",
      excerpt: "We're excited to announce support for 10 new cryptocurrency trading pairs on our platform.",
      category: "news",
      author: "InterledgerSwap Team",
      date: "2024-01-03",
      readTime: "3 min read",
      image: "/assests/blogs/6.png",
      content: `
        <p>We're thrilled to announce the addition of 10 new cryptocurrency trading pairs to the InterledgerSwap platform, expanding our offerings and providing our users with more trading opportunities.</p>
        
        <h2>New Trading Pairs</h2>
        <p>The following trading pairs are now available on InterledgerSwap:</p>
        
        <ul>
          <li><strong>AVAX/USDT</strong> - Avalanche</li>
          <li><strong>MATIC/USDT</strong> - Polygon</li>
          <li><strong>DOT/USDT</strong> - Polkadot</li>
          <li><strong>LINK/USDT</strong> - Chainlink</li>
          <li><strong>UNI/USDT</strong> - Uniswap</li>
          <li><strong>AAVE/USDT</strong> - Aave</li>
          <li><strong>ATOM/USDT</strong> - Cosmos</li>
          <li><strong>FTM/USDT</strong> - Fantom</li>
          <li><strong>NEAR/USDT</strong> - NEAR Protocol</li>
          <li><strong>ICP/USDT</strong> - Internet Computer</li>
        </ul>
        
        <h2>Why These Pairs?</h2>
        <p>These cryptocurrencies were selected based on several criteria:</p>
        
        <ul>
          <li><strong>Market Demand:</strong> High user request volume</li>
          <li><strong>Liquidity:</strong> Sufficient trading volume and market depth</li>
          <li><strong>Technology:</strong> Strong underlying blockchain technology</li>
          <li><strong>Community:</strong> Active development and community support</li>
        </ul>
        
        <h2>Enhanced Trading Features</h2>
        <p>Along with these new pairs, we've also introduced several enhancements:</p>
        
        <h3>Advanced Order Types</h3>
        <ul>
          <li>Stop-loss orders</li>
          <li>Take-profit orders</li>
          <li>Trailing stop orders</li>
        </ul>
        
        <h3>Improved Charts</h3>
        <ul>
          <li>TradingView integration</li>
          <li>Advanced technical indicators</li>
          <li>Multiple timeframes</li>
        </ul>
        
        <h3>Mobile App Updates</h3>
        <ul>
          <li>Faster order execution</li>
          <li>Enhanced portfolio tracking</li>
          <li>Push notifications for price alerts</li>
        </ul>
        
        <h2>Trading Incentives</h2>
        <p>To celebrate the launch of these new pairs, we're offering special incentives:</p>
        
        <ul>
          <li><strong>Zero Fees:</strong> 0% trading fees for the first week</li>
          <li><strong>Bonus Rewards:</strong> Extra loyalty points for trading new pairs</li>
          <li><strong>Referral Bonus:</strong> Double referral rewards this month</li>
        </ul>
        
        <h2>Security and Compliance</h2>
        <p>All new trading pairs have undergone rigorous security and compliance checks:</p>
        
        <ul>
          <li>Smart contract audits</li>
          <li>Regulatory compliance verification</li>
          <li>Liquidity provider partnerships</li>
          <li>Risk assessment protocols</li>
        </ul>
        
        <h2>What's Next?</h2>
        <p>This is just the beginning. We're continuously working to expand our offerings based on user feedback and market demand. Coming soon:</p>
        
        <ul>
          <li>Futures trading for select pairs</li>
          <li>Staking rewards program</li>
          <li>Cross-chain bridge integration</li>
          <li>DeFi yield farming opportunities</li>
        </ul>
        
        <h2>Get Started Today</h2>
        <p>Ready to explore these new trading opportunities? Here's how to get started:</p>
        
        <ol>
          <li>Log into your InterledgerSwap account</li>
          <li>Navigate to the trading interface</li>
          <li>Select your preferred new trading pair</li>
          <li>Start trading with zero fees this week!</li>
        </ol>
        
        <p>Don't have an account yet? <a href="/signup">Sign up now</a> and join thousands of traders who trust InterledgerSwap for their cryptocurrency trading needs.</p>
        
        <p>Thank you for your continued support, and happy trading!</p>
        
        <p><em>- The InterledgerSwap Team</em></p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative  py-12 md:py-16">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-8xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
         
            
          
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <span className="text-gray-600 text-sm">{post.readTime}</span>
            </div>
            
            {/* <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="py-0">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-8xl mx-auto"
          >
            <div className="aspect-[16/9] bg-gray-200 rounded-3xl overflow-hidden ">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={787}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-8xl mx-auto"
          >
            <div className="bg-white text-black ">
              <div 
                className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 text-justify prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6"
                // dangerouslySetInnerHTML={{ __html: post.content }}
              />
<p className='text-justify'>
The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
</p>
            </div>
          </motion.article>
        </div>
      </div>

      {/* Share & Actions */}
      <div className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Share this article:</span>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Image src="/assests/social-icons/youtube-fill.png" alt="" width={20} height={20} />
                  </button>
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-black transition-colors">
                  <Image src="/assests/social-icons/x.png" alt="" width={20} height={20} />
                  </button>
                  <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <Image src="/assests/social-icons/linkedin-fill.png" alt="" width={20} height={20} />
                  </button>
                </div>
              </div>
              <Link 
                href="/blog"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600 text-lg">
                Continue reading about {post.category}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="aspect-video bg-gray-200 relative overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            {relatedPost.category.charAt(0).toUpperCase() + relatedPost.category.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                              {relatedPost.author.charAt(0)}
                            </div>
                            <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                          </div>
                          <span className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>
          </motion.div>
        </div>
      </div>

   
    </div>
  );
};

export default BlogDetailPage;
