// Juzzy Learn Library — 55 tutorials split across categories
window.JUZZY_TUTORIALS = [

// ── CRYPTO BASICS (10) ──
{ id:'cb-1', cat:'Crypto Basics', title:'What Is Cryptocurrency?',
  desc:'Digital money — what it is, how it works, why it matters.',
  steps:[
    {title:'Digital Money',html:'<p>Cryptocurrency is digital money on a global computer network. No bank controls it. Bitcoin, created in 2009, was the first. Thousands exist now.</p>'},
    {title:'How It Works',html:'<p>Transactions are recorded on a <strong>blockchain</strong> — a public ledger anyone can read but nobody can cheat.</p><div class="tip">Think of blockchain as a giant spreadsheet everyone can see but only math can edit.</div>'},
    {title:'Why It Matters',html:'<ul><li><strong>Borderless payments</strong> — send money anywhere in minutes</li><li><strong>Self-custody</strong> — you control your own money</li><li><strong>Programmable money</strong> — smart contracts automate transactions</li></ul><div class="warn">Crypto is volatile. Prices can drop 50%+ in days. Never invest more than you can afford to lose.</div>'}
  ]},
{ id:'cb-2', cat:'Crypto Basics', title:'What Is a Blockchain?',
  desc:'Blocks, chains and consensus — the tech behind every crypto.',
  steps:[
    {title:'Blocks & Chains',html:'<p>A blockchain is a chain of blocks. Each block holds transactions, sealed with a cryptographic hash linked to the previous block — forming an unbreakable chain.</p>'},
    {title:'Consensus',html:'<ul><li><strong>Proof of Work (PoW)</strong> — Miners solve math puzzles. Bitcoin uses this.</li><li><strong>Proof of Stake (PoS)</strong> — Validators lock crypto as collateral. Ethereum uses this.</li></ul>'},
    {title:'Decentralisation',html:'<p>Thousands of independent computers keep a copy. To attack the network you\'d need to control &gt;50% of all nodes — practically impossible.</p><div class="tip">This is why crypto is "trustless" — the math guarantees correctness.</div>'}
  ]},
{ id:'cb-3', cat:'Crypto Basics', title:'Wallets Explained',
  desc:'Hot wallets, cold wallets, seed phrases — store crypto safely.',
  steps:[
    {title:'What Is a Wallet?',html:'<p>A wallet holds your <strong>private key</strong> — the password proving you own coins. Lose the key = lose the crypto. No reset button.</p>'},
    {title:'Types',html:'<ul><li><strong>Hot wallets</strong> — MetaMask, Phantom. Convenient but online.</li><li><strong>Cold wallets</strong> — Ledger, Trezor. Offline and most secure.</li><li><strong>Exchange wallets</strong> — Binance, Coinbase. Easy but "not your keys, not your coins."</li></ul>'},
    {title:'Seed Phrases',html:'<p>12 or 24 random words = master backup of your wallet.</p><div class="warn"><strong>NEVER</strong> share your seed phrase. NEVER type it into a website. Write it on paper and keep it safe.</div><div class="tip">Juzzy connects to your wallet but never asks for your seed phrase.</div>'}
  ]},
{ id:'cb-4', cat:'Crypto Basics', title:'Bitcoin vs Altcoins',
  desc:'The original vs the thousands of others.',
  steps:[
    {title:'Bitcoin',html:'<p>Bitcoin (BTC) has a fixed supply of 21 million. Many treat it as digital gold and an inflation hedge. Largest crypto by market cap.</p>'},
    {title:'Altcoins',html:'<ul><li><strong>Smart contract platforms</strong> — ETH, SOL, ADA</li><li><strong>Stablecoins</strong> — USDT, USDC, DAI</li><li><strong>Meme coins</strong> — DOGE, SHIB</li><li><strong>DeFi tokens</strong> — UNI, AAVE</li><li><strong>Layer 2s</strong> — POL, ARB, Base</li></ul>'},
    {title:'Risk Spectrum',html:'<ul><li><strong>Bitcoin</strong> — Lower risk, slower gains</li><li><strong>Large-cap alts</strong> — Medium risk</li><li><strong>Small-cap / new tokens</strong> — Highest risk, highest potential</li></ul><div class="tip">Juzzy\'s Births and Sandbox filters help discover small-cap tokens.</div>'}
  ]},
{ id:'cb-5', cat:'Crypto Basics', title:'Understanding Gas Fees',
  desc:'Why you pay fees and how to minimise them.',
  steps:[
    {title:'What Is Gas?',html:'<p>Gas is the fee paid to validators for processing your transaction. Costs vary: Ethereum $5–$50+, Base $0.01–$0.50, Solana &lt;$0.01.</p>'},
    {title:'Saving on Gas',html:'<ul><li>Use Layer 2 networks (Base, Arbitrum)</li><li>Trade during off-peak hours</li><li>Batch transactions when possible</li></ul><div class="tip">Juzzy defaults to Base chain — gas typically under $0.10.</div>'}
  ]},
{ id:'cb-6', cat:'Crypto Basics', title:'Exchanges: CEX vs DEX',
  desc:'Centralised vs decentralised — pros, cons, when to use each.',
  steps:[
    {title:'CEX',html:'<p>Binance, Coinbase, Kraken. Deposit money, they hold it, you trade. Easy to use, high liquidity, fiat on-ramp. But they hold your keys and require KYC.</p>'},
    {title:'DEX',html:'<p>Uniswap, Jupiter. Trade directly from your wallet. No sign-up, no KYC. You keep your keys. But can be confusing and has slippage risk.</p>'},
    {title:'Which?',html:'<ul><li>Use a CEX to buy first crypto with bank card</li><li>Transfer to self-custody wallet</li><li>Use DEXs for trading new tokens</li></ul><div class="tip">Juzzy routes EVM trades through the 0x aggregator — best price across multiple DEXs.</div>'}
  ]},
{ id:'cb-7', cat:'Crypto Basics', title:'Stablecoins',
  desc:'USDT, USDC, DAI — crypto that doesn\'t move.',
  steps:[
    {title:'What?',html:'<p>Pegged to US dollar. 1 USDT ≈ $1. Benefits of crypto without volatility.</p>'},
    {title:'Types',html:'<ul><li><strong>Fiat-backed</strong> — USDT, USDC (real dollars in banks)</li><li><strong>Crypto-backed</strong> — DAI (over-collateralised)</li><li><strong>Algorithmic</strong> — Higher risk (UST collapsed in 2022)</li></ul>'},
    {title:'Uses',html:'<ul><li>Park profits — sell into USDC to lock gains</li><li>DeFi yields — earn interest by lending</li><li>Trading pairs — most DEX trades use stablecoins</li></ul>'}
  ]},
{ id:'cb-8', cat:'Crypto Basics', title:'Token Standards',
  desc:'ERC-20, SPL — what makes a token work across apps.',
  steps:[
    {title:'Why Standards?',html:'<p>A token standard is rules every token must follow so wallets, exchanges and apps can work with it.</p>'},
    {title:'Major Standards',html:'<ul><li><strong>ERC-20</strong> (Ethereum/L2s) — Most common. USDT, UNI, LINK.</li><li><strong>SPL</strong> (Solana) — Faster, cheaper.</li><li><strong>ERC-721/1155</strong> — NFT standards.</li></ul>'},
    {title:'Cross-Chain',html:'<p>Same token can exist on multiple chains. Use bridges to move between them.</p><div class="warn">Always check you\'re on the right network before sending.</div>'}
  ]},
{ id:'cb-9', cat:'Crypto Basics', title:'Market Cap, Volume & Supply',
  desc:'Three numbers you must understand before investing.',
  steps:[
    {title:'Market Cap',html:'<p><strong>Price × Circulating supply.</strong> Large cap (&gt;$10B) = stable. Mid ($1–10B) = growth. Small (&lt;$1B) = speculative.</p>'},
    {title:'Volume',html:'<p>24h trading volume. High volume = good liquidity, tight spreads.</p><div class="warn">Low volume tokens may be impossible to sell when you need to.</div>'},
    {title:'Supply',html:'<ul><li><strong>Circulating</strong> — Available now</li><li><strong>Total</strong> — All existing (incl. locked)</li><li><strong>Max</strong> — Hard cap (BTC = 21M)</li></ul>'}
  ]},
{ id:'cb-10', cat:'Crypto Basics', title:'Reading a Price Chart',
  desc:'Candlesticks, timeframes and common patterns.',
  steps:[
    {title:'Candlestick Basics',html:'<p>Each candle = Open, High, Low, Close. Green = price up. Red = price down. Body = open-to-close range. Wicks = extremes.</p>'},
    {title:'Timeframes',html:'<ul><li>1 min — scalpers</li><li>1 hour — short-term</li><li>1 day — swing trading</li><li>1 week — long-term</li></ul><div class="tip">Juzzy Charts supports multiple timeframes including 1-minute for Binance assets.</div>'},
    {title:'Patterns',html:'<ul><li><strong>Doji</strong> — Tiny body, long wicks. Indecision.</li><li><strong>Hammer</strong> — Long lower wick. Potential reversal up.</li><li><strong>Engulfing</strong> — Large candle covers previous. Strong momentum.</li></ul><p>Patterns are probabilities, not guarantees.</p>'}
  ]},

// ── TRADING STRATEGIES (10) ──
{ id:'ts-1', cat:'Trading Strategies', title:'Dollar Cost Averaging (DCA)',
  desc:'The simplest, most proven strategy — invest regularly.',
  steps:[
    {title:'What Is DCA?',html:'<p>Invest a fixed dollar amount at regular intervals. When prices are low you buy more coins; when high, fewer. This averages your entry price.</p>'},
    {title:'Why It Works',html:'<ul><li>Removes emotion</li><li>No timing required</li><li>Historically proven over 4+ year horizons</li></ul><div class="tip">Juzzy\'s One Invest autopilot is a 24-hour DCA — splits your amount into 24 hourly slices.</div>'},
    {title:'Setup',html:'<p>Set Fuel slider → system divides into 24 slices → each executes hourly at market price.</p><div class="warn">DCA doesn\'t guarantee profit in a sustained downtrend.</div>'}
  ]},
{ id:'ts-2', cat:'Trading Strategies', title:'Swing Trading',
  desc:'Capture multi-day price swings by riding short-term trends.',
  steps:[
    {title:'Concept',html:'<p>Hold for days to weeks, aiming to capture a price swing. Buy when uptrend starts, sell when it fades.</p>'},
    {title:'Entry & Exit',html:'<ul><li>Entry: price bouncing off support, MA crossover, volume spike</li><li>Exit: hitting resistance, momentum slowing, target reached</li><li>Always set a stop loss (5–10% below entry)</li></ul><div class="tip">Use Juzzy resistance lines for entry/exit alerts.</div>'},
    {title:'Risk Rules',html:'<ul><li>Risk max 2–5% of portfolio per trade</li><li>Set stop before entering</li><li>Take partial profits at targets</li><li>Don\'t chase pumps</li></ul>'}
  ]},
{ id:'ts-3', cat:'Trading Strategies', title:'HODLing',
  desc:'Buy, hold, resist the urge to sell.',
  steps:[
    {title:'What?',html:'<p>HODL = hold long-term regardless of short-term drops. Thesis: if you believe in crypto\'s future, dips don\'t matter.</p>'},
    {title:'When',html:'<ul><li>High-conviction assets (BTC, ETH, SOL)</li><li>After major dips (50%+ drops historically rewarded)</li><li>When you don\'t have time to trade actively</li></ul>'},
    {title:'Pitfalls',html:'<div class="warn">Not every coin recovers. Many 2017 altcoins never came back. Only HODL after real research.</div><p>Having a take-profit plan is healthy.</p>'}
  ]},
{ id:'ts-4', cat:'Trading Strategies', title:'Scalping & Day Trading',
  desc:'Fast-paced trading for quick profits — high risk, high skill.',
  steps:[
    {title:'What?',html:'<p>Many small trades targeting 0.1–1% moves. Positions held seconds to hours.</p>'},
    {title:'Requirements',html:'<ul><li>Fast execution</li><li>Low fees</li><li>Strong TA skills</li><li>Iron discipline</li></ul><div class="warn">80–95% of day traders lose money.</div>'},
    {title:'Juzzy Tools',html:'<ul><li>1-minute charts for real-time action</li><li>Resistance lines for level alerts</li><li>Brain stream for anomaly signals</li><li>Keep sizes very small while learning</li></ul>'}
  ]},
{ id:'ts-5', cat:'Trading Strategies', title:'Trend Following',
  desc:'The trend is your friend — identify and ride momentum.',
  steps:[
    {title:'Identifying',html:'<ul><li><strong>Uptrend</strong> — Higher highs, higher lows</li><li><strong>Downtrend</strong> — Lower highs, lower lows</li><li><strong>Sideways</strong> — Range-bound</li></ul><p>Simplest test: price above 50-day MA and MA pointing up = uptrend.</p>'},
    {title:'Trading It',html:'<ul><li>Buy in uptrends, sell in downtrends</li><li>Never fight the trend</li><li>Wait for pullbacks to enter</li></ul><div class="tip">Juzzy Gains/Falls filters find trending assets quickly.</div>'},
    {title:'Trend Ends',html:'<p>Signs: declining volume, price breaks MA, lower high in uptrend. No trend lasts forever.</p>'}
  ]},
{ id:'ts-6', cat:'Trading Strategies', title:'Support & Resistance',
  desc:'Price levels that matter — the foundation of TA.',
  steps:[
    {title:'Basics',html:'<p><strong>Support</strong> = floor (buyers step in). <strong>Resistance</strong> = ceiling (sellers step in). When support breaks it becomes resistance and vice versa.</p>'},
    {title:'Using Them',html:'<ul><li>Buy near support with stop just below</li><li>Sell/take profit near resistance</li><li>More tests = stronger level</li></ul><div class="tip">Use Juzzy\'s Add line button to mark levels. AI alerts when price crosses.</div>'},
    {title:'Drawing Levels',html:'<p>Look for repeated bounces, round numbers ($50K, $100K), previous ATH. S/R are zones, not exact prices.</p>'}
  ]},
{ id:'ts-7', cat:'Trading Strategies', title:'Breakout Trading',
  desc:'Catch explosive moves when price escapes a range.',
  steps:[
    {title:'What?',html:'<p>Price moves decisively above resistance or below support on high volume. Signals a new trend.</p>'},
    {title:'How',html:'<ul><li>Identify consolidation range</li><li>Wait for candle close above/below level</li><li>Confirm with volume spike</li><li>Stop loss below breakout level</li></ul><div class="warn">Beware fake breakouts — wait for full candle close before entering.</div>'},
    {title:'Juzzy Alerts',html:'<p>Set resistance lines at range boundaries. The AI alerts on cross — you can execute or dismiss.</p>'}
  ]},
{ id:'ts-8', cat:'Trading Strategies', title:'Portfolio Rebalancing',
  desc:'Keep allocations aligned as prices change.',
  steps:[
    {title:'Concept',html:'<p>If your target is 50% BTC / 30% ETH / 20% SOL, price movements drift those percentages. Rebalancing restores them by selling winners and buying laggards.</p>'},
    {title:'When',html:'<ul><li>Time-based (monthly/quarterly)</li><li>Threshold-based (5%+ drift)</li><li>After major market moves</li></ul><p>Forces systematic "sell high, buy low."</p>'},
    {title:'Tips',html:'<ul><li>3–5 assets max</li><li>Factor in fees</li><li>Consider tax implications</li></ul>'}
  ]},
{ id:'ts-9', cat:'Trading Strategies', title:'Momentum Trading',
  desc:'Buy what\'s rising, sell what\'s falling — manage the risk.',
  steps:[
    {title:'Basics',html:'<p>Assets rising tend to keep rising short-term. Assets falling tend to keep falling.</p>'},
    {title:'Finding It',html:'<ul><li>24h change 10%+</li><li>Volume surge</li><li>Social buzz</li></ul><div class="tip">Juzzy Leaders sorted by Gainers = top momentum tokens. Brain flags volume spikes.</div>'},
    {title:'Danger',html:'<div class="warn">Momentum reverses instantly. Today\'s #1 gainer can be tomorrow\'s #1 loser. Always use stop losses.</div>'}
  ]},
{ id:'ts-10', cat:'Trading Strategies', title:'Contrarian Investing',
  desc:'Go against the crowd — buy fear, sell greed.',
  steps:[
    {title:'Philosophy',html:'<p>"Be fearful when others are greedy, greedy when others are fearful." — Warren Buffett</p>'},
    {title:'Application',html:'<ul><li>Buy during crashes (BTC -40%)</li><li>Sell during euphoria</li><li>Watch Fear & Greed Index</li></ul>'},
    {title:'Caution',html:'<div class="warn">Not every dip is a buy. Only apply to fundamentally strong assets. Use DCA to accumulate during fear.</div>'}
  ]},
];
