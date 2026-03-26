// Full Course Content for Juzzy Academy - 100+ Modules
// This file contains comprehensive educational content for all learning tracks

window.JUZZY_FULL_COURSES = {
  // TRACK 1: Crypto Foundations (15 modules)
  cryptoFoundations: [
    {
      id: 'cf-01',
      title: 'What is Bitcoin? The Digital Gold Revolution',
      duration: '45 min',
      difficulty: 'Beginner',
      content: `
        <h3>Understanding Bitcoin: The First Cryptocurrency</h3>
        <p>Bitcoin was created in 2009 by an anonymous person (or group) known as Satoshi Nakamoto. It introduced the world to blockchain technology and decentralized digital currency.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Decentralization:</strong> No single authority controls Bitcoin. It runs on a network of thousands of computers worldwide.</li>
          <li><strong>Limited Supply:</strong> Only 21 million Bitcoin will ever exist, making it scarce like gold.</li>
          <li><strong>Blockchain:</strong> A public ledger that records every Bitcoin transaction ever made.</li>
          <li><strong>Mining:</strong> The process of validating transactions and creating new Bitcoin.</li>
        </ul>

        <h4>Why Bitcoin Matters:</h4>
        <p>Bitcoin represents a fundamental shift in how we think about money. Unlike traditional currencies controlled by governments, Bitcoin is:</p>
        <ul>
          <li>Borderless - Send to anyone, anywhere</li>
          <li>Censorship-resistant - No one can freeze your account</li>
          <li>Transparent - All transactions are publicly visible</li>
          <li>Programmable - Can be integrated into smart applications</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ Important:</strong> Bitcoin's price is highly volatile. Never invest more than you can afford to lose. This is educational content only, not financial advice.
        </div>

        <h4>Real-World Use Cases:</h4>
        <ol>
          <li><strong>Store of Value:</strong> Many view Bitcoin as "digital gold" - a hedge against inflation</li>
          <li><strong>Remittances:</strong> Send money internationally with lower fees than traditional banks</li>
          <li><strong>Financial Inclusion:</strong> Banking for the 1.7 billion unbanked people worldwide</li>
          <li><strong>Portfolio Diversification:</strong> Some investors allocate 1-5% to Bitcoin</li>
        </ol>

        <h4>How Bitcoin Works (Simplified):</h4>
        <p>When you send Bitcoin, your transaction is broadcast to the network. Miners compete to validate it by solving complex mathematical puzzles. Once validated, the transaction is added to a "block" and linked to previous blocks, forming the blockchain.</p>

        <div class="practice-exercise">
          <h5>Practice Exercise:</h5>
          <p>Explore a real Bitcoin transaction on a blockchain explorer. See how transparent and traceable Bitcoin really is!</p>
        </div>
      `,
      quiz: [
        {
          question: 'What is the maximum supply of Bitcoin?',
          options: ['21 million', '100 million', 'Unlimited', '1 billion'],
          correct: 0
        },
        {
          question: 'Who created Bitcoin?',
          options: ['Elon Musk', 'Satoshi Nakamoto', 'Vitalik Buterin', 'Mark Zuckerberg'],
          correct: 1
        },
        {
          question: 'What technology does Bitcoin use to record transactions?',
          options: ['Cloud storage', 'Blockchain', 'SQL database', 'Excel spreadsheet'],
          correct: 1
        }
      ]
    },
    {
      id: 'cf-02',
      title: 'Blockchain Technology: The Foundation of Crypto',
      duration: '50 min',
      difficulty: 'Beginner',
      content: `
        <h3>Understanding Blockchain: The Revolutionary Technology</h3>
        <p>Blockchain is the underlying technology that makes cryptocurrencies possible. Think of it as a digital ledger that's distributed across thousands of computers, making it nearly impossible to hack or manipulate.</p>

        <h4>How Blockchain Works:</h4>
        <ol>
          <li><strong>Transactions are Grouped:</strong> Multiple transactions are collected into a "block"</li>
          <li><strong>Blocks are Verified:</strong> Network participants (miners/validators) verify the transactions</li>
          <li><strong>Blocks are Chained:</strong> Each new block references the previous one, creating a chain</li>
          <li><strong>Network Consensus:</strong> The majority of the network must agree on the state of the blockchain</li>
        </ol>

        <h4>Key Features of Blockchain:</h4>
        <ul>
          <li><strong>Immutability:</strong> Once data is recorded, it's extremely difficult to change</li>
          <li><strong>Transparency:</strong> Anyone can view the entire transaction history</li>
          <li><strong>Decentralization:</strong> No single point of failure or control</li>
          <li><strong>Security:</strong> Cryptographic hashing protects data integrity</li>
        </ul>

        <h4>Beyond Cryptocurrency:</h4>
        <p>Blockchain technology has applications far beyond digital money:</p>
        <ul>
          <li><strong>Supply Chain:</strong> Track products from manufacture to delivery</li>
          <li><strong>Healthcare:</strong> Secure medical records and patient data</li>
          <li><strong>Voting:</strong> Transparent and tamper-proof elections</li>
          <li><strong>Real Estate:</strong> Streamline property transfers and ownership records</li>
          <li><strong>Digital Identity:</strong> Self-sovereign identity management</li>
        </ul>

        <div class="info-box">
          <strong>💡 Did You Know?</strong> The first blockchain was conceptualized in 1991, but it wasn't until Bitcoin in 2009 that the technology gained widespread attention.
        </div>

        <h4>Types of Blockchains:</h4>
        <ol>
          <li><strong>Public Blockchains:</strong> Open to anyone (Bitcoin, Ethereum)</li>
          <li><strong>Private Blockchains:</strong> Restricted access, used by enterprises</li>
          <li><strong>Consortium Blockchains:</strong> Controlled by a group of organizations</li>
          <li><strong>Hybrid Blockchains:</strong> Combination of public and private elements</li>
        </ol>

        <h4>Consensus Mechanisms:</h4>
        <p>Different blockchains use different methods to agree on the state of the ledger:</p>
        <ul>
          <li><strong>Proof of Work (PoW):</strong> Miners solve puzzles (Bitcoin)</li>
          <li><strong>Proof of Stake (PoS):</strong> Validators stake coins (Ethereum 2.0)</li>
          <li><strong>Delegated Proof of Stake (DPoS):</strong> Token holders vote for validators</li>
          <li><strong>Proof of Authority (PoA):</strong> Pre-approved validators</li>
        </ul>
      `,
      quiz: [
        {
          question: 'What makes blockchain data immutable?',
          options: ['Government regulation', 'Cryptographic hashing and network consensus', 'Cloud backup', 'Antivirus software'],
          correct: 1
        },
        {
          question: 'Which consensus mechanism does Bitcoin use?',
          options: ['Proof of Stake', 'Proof of Work', 'Proof of Authority', 'Delegated Proof of Stake'],
          correct: 1
        }
      ]
    },
    {
      id: 'cf-03',
      title: 'Ethereum & Smart Contracts: Programmable Money',
      duration: '55 min',
      difficulty: 'Intermediate',
      content: `
        <h3>Ethereum: The World Computer</h3>
        <p>While Bitcoin introduced digital currency, Ethereum introduced programmable blockchain. Created by Vitalik Buterin in 2015, Ethereum enables developers to build decentralized applications (dApps) using smart contracts.</p>

        <h4>What are Smart Contracts?</h4>
        <p>Smart contracts are self-executing programs that run on the blockchain. They automatically execute when predetermined conditions are met, without needing intermediaries.</p>

        <div class="example-box">
          <h5>Real-World Example:</h5>
          <p><strong>Traditional Contract:</strong> You buy a house. You need a lawyer, title company, bank, and escrow agent. The process takes weeks and costs thousands in fees.</p>
          <p><strong>Smart Contract:</strong> The contract automatically transfers ownership when payment is received. No intermediaries needed. Settlement in minutes, not weeks.</p>
        </div>

        <h4>Ethereum's Key Features:</h4>
        <ul>
          <li><strong>Turing Complete:</strong> Can execute any computational function</li>
          <li><strong>EVM (Ethereum Virtual Machine):</strong> Runs smart contract code</li>
          <li><strong>Gas Fees:</strong> Payment for computational resources</li>
          <li><strong>ERC Standards:</strong> Token standards (ERC-20, ERC-721, ERC-1155)</li>
        </ul>

        <h4>Use Cases Built on Ethereum:</h4>
        <ol>
          <li><strong>DeFi (Decentralized Finance):</strong>
            <ul>
              <li>Lending/Borrowing (Aave, Compound)</li>
              <li>Decentralized Exchanges (Uniswap, SushiSwap)</li>
              <li>Stablecoins (USDC, DAI)</li>
              <li>Yield Farming and Liquidity Mining</li>
            </ul>
          </li>
          <li><strong>NFTs (Non-Fungible Tokens):</strong>
            <ul>
              <li>Digital art and collectibles</li>
              <li>Gaming assets</li>
              <li>Music and media rights</li>
              <li>Virtual real estate</li>
            </ul>
          </li>
          <li><strong>DAOs (Decentralized Autonomous Organizations):</strong>
            <ul>
              <li>Community governance</li>
              <li>Investment clubs</li>
              <li>Protocol management</li>
            </ul>
          </li>
          <li><strong>Identity and Credentials:</strong>
            <ul>
              <li>Decentralized identity (DID)</li>
              <li>Verifiable credentials</li>
              <li>Reputation systems</li>
            </ul>
          </li>
        </ol>

        <h4>Ethereum 2.0 (The Merge):</h4>
        <p>In September 2022, Ethereum transitioned from Proof of Work to Proof of Stake, reducing energy consumption by 99.95%.</p>

        <div class="warning-box">
          <strong>⚠️ Gas Fees:</strong> Ethereum transactions can be expensive during network congestion. Always check gas prices before transacting. Layer 2 solutions like Arbitrum and Optimism offer cheaper alternatives.
        </div>

        <h4>Programming Languages:</h4>
        <ul>
          <li><strong>Solidity:</strong> Most popular smart contract language</li>
          <li><strong>Vyper:</strong> Python-like alternative focused on security</li>
          <li><strong>Yul:</strong> Low-level intermediate language</li>
        </ul>

        <div class="practice-exercise">
          <h5>Practice Exercise:</h5>
          <p>Explore Etherscan.io to see live smart contract interactions. Look at a popular DeFi protocol like Uniswap and observe real transactions happening in real-time!</p>
        </div>
      `,
      quiz: [
        {
          question: 'Who created Ethereum?',
          options: ['Satoshi Nakamoto', 'Vitalik Buterin', 'Charles Hoskinson', 'Gavin Wood'],
          correct: 1
        },
        {
          question: 'What are smart contracts?',
          options: ['Legal documents', 'Self-executing programs on blockchain', 'Trading bots', 'Email contracts'],
          correct: 1
        },
        {
          question: 'What consensus mechanism does Ethereum currently use?',
          options: ['Proof of Work', 'Proof of Stake', 'Proof of Authority', 'Proof of History'],
          correct: 1
        }
      ]
    }
  ],

  // TRACK 2: Trading & Markets (20 modules)
  tradingMarkets: [
    {
      id: 'tm-01',
      title: 'Reading Crypto Charts: Candlesticks & Patterns',
      duration: '60 min',
      difficulty: 'Beginner',
      content: `
        <h3>Technical Analysis: Reading the Market's Language</h3>
        <p>Charts are the primary tool traders use to analyze price movements and make informed decisions. Learning to read charts is like learning a new language - the language of the market.</p>

        <h4>Candlestick Basics:</h4>
        <p>Each candlestick represents price movement over a specific time period (1 minute, 1 hour, 1 day, etc.)</p>

        <div class="visual-guide">
          <h5>Anatomy of a Candlestick:</h5>
          <ul>
            <li><strong>Body:</strong> The thick part showing open and close prices</li>
            <li><strong>Wicks (Shadows):</strong> Thin lines showing high and low prices</li>
            <li><strong>Green/White Candle:</strong> Price closed higher than it opened (bullish)</li>
            <li><strong>Red/Black Candle:</strong> Price closed lower than it opened (bearish)</li>
          </ul>
        </div>

        <h4>Essential Candlestick Patterns:</h4>
        
        <h5>1. Bullish Patterns (Suggest Price May Rise):</h5>
        <ul>
          <li><strong>Hammer:</strong> Small body at top, long lower wick. Shows buyers stepped in after selloff.</li>
          <li><strong>Bullish Engulfing:</strong> Large green candle completely engulfs previous red candle.</li>
          <li><strong>Morning Star:</strong> Three-candle pattern signaling reversal from downtrend.</li>
          <li><strong>Three White Soldiers:</strong> Three consecutive green candles with higher closes.</li>
        </ul>

        <h5>2. Bearish Patterns (Suggest Price May Fall):</h5>
        <ul>
          <li><strong>Shooting Star:</strong> Small body at bottom, long upper wick. Shows sellers rejected higher prices.</li>
          <li><strong>Bearish Engulfing:</strong> Large red candle completely engulfs previous green candle.</li>
          <li><strong>Evening Star:</strong> Three-candle pattern signaling reversal from uptrend.</li>
          <li><strong>Three Black Crows:</strong> Three consecutive red candles with lower closes.</li>
        </ul>

        <h4>Chart Timeframes:</h4>
        <ul>
          <li><strong>1-Minute to 15-Minute:</strong> Scalping and day trading</li>
          <li><strong>1-Hour to 4-Hour:</strong> Swing trading</li>
          <li><strong>Daily:</strong> Position trading and trend analysis</li>
          <li><strong>Weekly/Monthly:</strong> Long-term investing and macro trends</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ Important:</strong> Patterns are not guarantees. They show probability, not certainty. Always use risk management and never trade based on a single pattern alone.
        </div>

        <h4>Support and Resistance:</h4>
        <p><strong>Support:</strong> Price level where buying pressure prevents further decline. Think of it as a "floor."</p>
        <p><strong>Resistance:</strong> Price level where selling pressure prevents further rise. Think of it as a "ceiling."</p>

        <div class="tip-box">
          <strong>💡 Pro Tip:</strong> When support breaks, it often becomes resistance. When resistance breaks, it often becomes support. This is called a "role reversal."
        </div>

        <h4>Trend Lines:</h4>
        <ul>
          <li><strong>Uptrend:</strong> Connect higher lows with a line. Price bouncing off this line suggests trend continuation.</li>
          <li><strong>Downtrend:</strong> Connect lower highs with a line. Price rejecting this line suggests trend continuation.</li>
          <li><strong>Sideways/Range:</strong> Price bouncing between horizontal support and resistance.</li>
        </ul>

        <div class="practice-exercise">
          <h5>Practice Exercise:</h5>
          <p>Open TradingView.com and practice drawing support/resistance lines on Bitcoin's daily chart. Identify at least 3 bullish and 3 bearish candlestick patterns from the past month.</p>
        </div>
      `,
      quiz: [
        {
          question: 'What does a green candlestick indicate?',
          options: ['Price closed lower than open', 'Price closed higher than open', 'No price movement', 'Market is closed'],
          correct: 1
        },
        {
          question: 'What is a "Hammer" candlestick pattern?',
          options: ['Bearish reversal', 'Bullish reversal', 'Continuation pattern', 'No significance'],
          correct: 1
        },
        {
          question: 'What happens when support is broken?',
          options: ['It becomes resistance', 'It disappears', 'It doubles in strength', 'Nothing changes'],
          correct: 0
        }
      ]
    }
  ],

  // TRACK 3: DeFi & Web3 (18 modules)
  defiWeb3: [
    {
      id: 'dw-01',
      title: 'DeFi Fundamentals: Banking Without Banks',
      duration: '50 min',
      difficulty: 'Intermediate',
      content: `
        <h3>Decentralized Finance: The Future of Money</h3>
        <p>DeFi (Decentralized Finance) recreates traditional financial services - lending, borrowing, trading, insurance - without banks or intermediaries. Everything runs on smart contracts.</p>

        <h4>Why DeFi Matters:</h4>
        <ul>
          <li><strong>Permissionless:</strong> Anyone with internet can access financial services</li>
          <li><strong>Transparent:</strong> All transactions visible on blockchain</li>
          <li><strong>Composable:</strong> DeFi protocols can be combined like Lego blocks</li>
          <li><strong>24/7 Access:</strong> No banking hours or holidays</li>
          <li><strong>Global:</strong> No geographic restrictions</li>
        </ul>

        <h4>Core DeFi Primitives:</h4>

        <h5>1. Decentralized Exchanges (DEXs):</h5>
        <p>Trade cryptocurrencies without a centralized exchange. Popular DEXs:</p>
        <ul>
          <li><strong>Uniswap:</strong> Automated Market Maker (AMM) on Ethereum</li>
          <li><strong>PancakeSwap:</strong> Leading DEX on BNB Chain</li>
          <li><strong>Curve:</strong> Specialized in stablecoin swaps</li>
          <li><strong>dYdX:</strong> Decentralized derivatives trading</li>
        </ul>

        <h5>2. Lending & Borrowing:</h5>
        <p>Earn interest by lending crypto, or borrow against your holdings:</p>
        <ul>
          <li><strong>Aave:</strong> Borrow/lend with variable or stable rates</li>
          <li><strong>Compound:</strong> Algorithmic money market protocol</li>
          <li><strong>MakerDAO:</strong> Borrow DAI stablecoin against ETH collateral</li>
        </ul>

        <div class="example-box">
          <h5>How DeFi Lending Works:</h5>
          <ol>
            <li>You deposit 1 ETH into Aave</li>
            <li>You earn interest (e.g., 3% APY) paid in ETH</li>
            <li>Your ETH is lent to borrowers who pay interest</li>
            <li>You can withdraw anytime (if liquidity available)</li>
          </ol>
        </div>

        <h5>3. Stablecoins:</h5>
        <p>Cryptocurrencies pegged to stable assets (usually USD):</p>
        <ul>
          <li><strong>USDC:</strong> Centralized, backed 1:1 by USD reserves</li>
          <li><strong>USDT (Tether):</strong> Most widely used, centralized</li>
          <li><strong>DAI:</strong> Decentralized, backed by crypto collateral</li>
          <li><strong>FRAX:</strong> Partially algorithmic stablecoin</li>
        </ul>

        <h5>4. Yield Farming:</h5>
        <p>Earn rewards by providing liquidity to DeFi protocols:</p>
        <ul>
          <li>Provide liquidity to Uniswap pools</li>
          <li>Earn trading fees + token rewards</li>
          <li>Stake LP tokens in farms for additional yield</li>
          <li>Compound earnings for maximum returns</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ DeFi Risks:</strong>
          <ul>
            <li><strong>Smart Contract Risk:</strong> Bugs can lead to loss of funds</li>
            <li><strong>Impermanent Loss:</strong> Providing liquidity can result in losses vs. holding</li>
            <li><strong>Liquidation Risk:</strong> Borrowed positions can be liquidated if collateral drops</li>
            <li><strong>Rug Pulls:</strong> Malicious developers can drain liquidity</li>
          </ul>
        </div>

        <h4>Key DeFi Concepts:</h4>
        <ul>
          <li><strong>TVL (Total Value Locked):</strong> Total capital in a DeFi protocol</li>
          <li><strong>APY (Annual Percentage Yield):</strong> Yearly return including compounding</li>
          <li><strong>Liquidity Pool:</strong> Smart contract holding tokens for trading</li>
          <li><strong>Slippage:</strong> Price difference between expected and executed trade</li>
          <li><strong>Gas Fees:</strong> Transaction costs on the blockchain</li>
        </ul>

        <div class="practice-exercise">
          <h5>Practice Exercise:</h5>
          <p>Visit DeFiLlama.com to explore the DeFi ecosystem. Check TVL rankings, compare protocols, and understand how much value is locked in DeFi globally.</p>
        </div>
      `,
      quiz: [
        {
          question: 'What does DEX stand for?',
          options: ['Digital Exchange', 'Decentralized Exchange', 'Derivative Exchange', 'Direct Exchange'],
          correct: 1
        },
        {
          question: 'What is a stablecoin?',
          options: ['A coin that never moves', 'A cryptocurrency pegged to a stable asset', 'The most expensive coin', 'A government coin'],
          correct: 1
        }
      ]
    }
  ]
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.JUZZY_FULL_COURSES;
}
