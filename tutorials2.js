// Juzzy Learn Library — Part 2 (Risk, DeFi, Using Juzzy, Advanced)
window.JUZZY_TUTORIALS_2 = [

// ── RISK MANAGEMENT (8) ──
{ id:'rm-1', cat:'Risk Management', title:'Position Sizing',
  desc:'How much to put into each trade — the most important decision.',
  steps:[
    {title:'The 1–2% Rule',html:'<p>Never risk more than 1–2% of portfolio per trade. $10K portfolio, 2% risk, 10% stop = $2,000 position. If stopped out you lose $200. Survivable.</p>'},
    {title:'Formula',html:'<p><strong>Position = (Portfolio × Risk%) ÷ Stop%</strong></p><p>Start small. Increase only after consistent results.</p>'},
    {title:'In Juzzy',html:'<p>Set <strong>Max USD per trade</strong> in Vault. Start at $50–$250.</p><div class="tip">Small positions let you make mistakes without blowing up.</div>'}
  ]},
{ id:'rm-2', cat:'Risk Management', title:'Stop Losses',
  desc:'Automatic exits to protect from catastrophic losses.',
  steps:[
    {title:'What?',html:'<p>Pre-set price where you sell to limit loss. Buy ETH at $3K, 10% stop = sell at $2.7K.</p>'},
    {title:'Setting Them',html:'<ul><li>Below support level</li><li>Fixed 5–10% from entry</li><li>Trailing — moves up as price rises</li></ul><div class="warn">Never move a stop further from entry to "give it room." That turns small losses into big ones.</div>'},
    {title:'Mental vs Actual',html:'<p>"Mental" stop losses rarely work — emotions take over. Use actual orders or Juzzy\'s resistance line alerts.</p>'}
  ]},
{ id:'rm-3', cat:'Risk Management', title:'Portfolio Allocation',
  desc:'Spread crypto across different risk levels.',
  steps:[
    {title:'Core-Satellite',html:'<ul><li><strong>Core 60–70%</strong> — BTC, ETH. Stable.</li><li><strong>Mid 20–30%</strong> — Top-20 alts. Growth.</li><li><strong>Satellite 5–10%</strong> — Small caps, high risk.</li></ul>'},
    {title:'Diversify',html:'<p>Across market caps, sectors, and chains. 5–10 positions is enough. Don\'t over-diversify.</p>'},
    {title:'Cash Position',html:'<p>Keep 10–20% in stablecoins for dip buying and emergencies.</p>'}
  ]},
{ id:'rm-4', cat:'Risk Management', title:'Avoiding Scams',
  desc:'Rug pulls, phishing, pump-and-dumps — stay safe.',
  steps:[
    {title:'Rug Pulls',html:'<p>Creators drain liquidity, price → zero. Signs: anon team, unlocked liquidity, "guaranteed 100x."</p><div class="tip">Juzzy Sandbox filter spots low-liquidity tokens. Always check if liquidity is locked.</div>'},
    {title:'Phishing',html:'<ul><li>Never click wallet links from DMs or ads</li><li>Type exchange URLs manually</li><li>Never approve unlimited spending on unknown contracts</li></ul><div class="warn">No legitimate project asks for your seed phrase. Ever.</div>'},
    {title:'Pump & Dump',html:'<p>Groups buy, hype, then dump on latecomers. Red flags: coordinated social buzz, thin order book, no real product.</p>'}
  ]},
{ id:'rm-5', cat:'Risk Management', title:'Managing Emotions',
  desc:'Fear, greed, FOMO — the psychological side.',
  steps:[
    {title:'FOMO',html:'<p>By the time you feel FOMO, you\'re usually too late. Antidote: have a watchlist and plan <em>before</em> the move.</p>'},
    {title:'Panic Selling',html:'<p>Crypto drops 20%, you sell, it recovers next day. Antidote: use pre-set stop losses. If stop isn\'t hit, plan is working.</p>'},
    {title:'Trading Rules',html:'<ol><li>Max position size: ___% of portfolio</li><li>Stop loss: ___%</li><li>Take profit levels: $X, $Y, $Z</li><li>Max daily loss: $___</li><li>Hit max loss → stop for the day</li></ol><div class="tip">Use Juzzy Reports to review decisions objectively.</div>'}
  ]},
{ id:'rm-6', cat:'Risk Management', title:'Understanding Slippage',
  desc:'Why you don\'t always get the price you see.',
  steps:[
    {title:'What?',html:'<p>Difference between expected and actual price. On thin-liquidity DEX pools, large orders push price.</p>'},
    {title:'Controlling It',html:'<ul><li>Set slippage tolerance (0.5–1% for large caps)</li><li>Trade liquid assets</li><li>Split large orders</li></ul><div class="tip">Juzzy Vault has a Slippage (bps) setting. 75 bps = 0.75%. Small tokens may need 200+.</div>'}
  ]},
{ id:'rm-7', cat:'Risk Management', title:'Crypto Tax Basics',
  desc:'General guidance on taxable events and record keeping.',
  steps:[
    {title:'Taxable Events',html:'<ul><li>Selling for fiat</li><li>Trading crypto-to-crypto</li><li>Spending crypto</li><li>Earning crypto (mining, staking, airdrops)</li></ul><p>NOT taxable (usually): buying with fiat, transferring between own wallets, holding.</p>'},
    {title:'Records',html:'<p>Keep: date, amount, price, fees for every trade.</p><div class="tip">Juzzy Export CSV creates a complete log for your accountant.</div>'},
    {title:'Disclaimer',html:'<div class="warn">This is education, NOT tax advice. Laws vary by country. Consult a professional.</div>'}
  ]},
{ id:'rm-8', cat:'Risk Management', title:'When NOT to Trade',
  desc:'Sometimes no trade is the best trade.',
  steps:[
    {title:'Overtrading',html:'<p>#1 account killer. Every trade has fees and emotional cost. Trading from boredom = gambling.</p>'},
    {title:'Bad Conditions',html:'<ul><li>You\'re emotional (take a break after losses)</li><li>Market is choppy/sideways</li><li>Major news pending</li><li>You\'re tired or distracted</li></ul>'},
    {title:'Cash Is a Position',html:'<p>Waiting in stablecoins for a clear setup is a valid strategy. Pros spend most time NOT trading.</p><div class="tip">Use Juzzy Brain signals to wait for real opportunities instead of forcing trades.</div>'}
  ]},

// ── DeFi & ON-CHAIN (9) ──
{ id:'df-1', cat:'DeFi & On-Chain', title:'What Is DeFi?',
  desc:'Banks without bankers — decentralised finance.',
  steps:[
    {title:'Explained',html:'<p>DeFi recreates banking (lending, borrowing, trading) using smart contracts. No banks, no paperwork, no permission.</p>'},
    {title:'Services',html:'<ul><li><strong>DEXs</strong> — Swap tokens (Uniswap, Jupiter)</li><li><strong>Lending</strong> — Earn interest (Aave, Compound)</li><li><strong>Borrowing</strong> — Collateralised loans</li><li><strong>Yield farming</strong> — Earn rewards providing liquidity</li><li><strong>Liquid staking</strong> — Stake and get tradable receipt</li></ul>'},
    {title:'Risks',html:'<div class="warn">Smart contract bugs, impermanent loss, hacks, oracle manipulation. Start small with established protocols only.</div>'}
  ]},
{ id:'df-2', cat:'DeFi & On-Chain', title:'Liquidity Pools',
  desc:'How DEXs work — and how you earn from them.',
  steps:[
    {title:'AMMs',html:'<p>DEXs use Automated Market Makers. Traders swap against a pool of tokens. Price = ratio of tokens in pool.</p>'},
    {title:'Providing Liquidity',html:'<p>Deposit tokens into a pool, earn share of trading fees. Typical returns: 5–50% APY.</p>'},
    {title:'Impermanent Loss',html:'<div class="warn">If deposited tokens change price relative to each other, LP may underperform just holding. For stablecoin pairs this is minimal.</div>'}
  ]},
{ id:'df-3', cat:'DeFi & On-Chain', title:'Yield Farming',
  desc:'Strategies for passive crypto income.',
  steps:[
    {title:'What?',html:'<p>Move crypto between protocols to maximise returns. Provide liquidity, stake LP tokens, earn governance token rewards.</p>'},
    {title:'Strategies',html:'<ul><li><strong>Stable farming</strong> — Low-risk 5–15% APY</li><li><strong>Blue-chip LP</strong> — ETH/USDC on established DEXs</li><li><strong>Incentivised farms</strong> — New protocols with 100%+ APY (unsustainable)</li></ul>'},
    {title:'Risks',html:'<div class="warn">High APY = high risk. 1,000% APY likely means the reward token is inflating to zero.</div><p>Stick to audited protocols. Harvest rewards regularly.</p>'}
  ]},
{ id:'df-4', cat:'DeFi & On-Chain', title:'Bridges & Cross-Chain',
  desc:'Move crypto between Ethereum, Solana, Base and more.',
  steps:[
    {title:'Why Bridge?',html:'<p>Blockchains don\'t talk natively. Bridges move tokens between chains. Example: USDC from Ethereum → Base for cheaper trading.</p>'},
    {title:'How',html:'<ol><li>Lock tokens on source chain</li><li>Mint wrapped tokens on destination</li><li>Burn wrapped to unlock originals when bridging back</li></ol>'},
    {title:'Safety',html:'<div class="warn">Bridges are heavily targeted by hackers. Billions stolen. Use only official bridges, start with small test amounts.</div>'}
  ]},
{ id:'df-5', cat:'DeFi & On-Chain', title:'NFTs & Digital Collectibles',
  desc:'Unique digital assets on the blockchain.',
  steps:[
    {title:'What?',html:'<p>NFTs are unique tokens representing art, music, game items, memberships. Each NFT is one-of-a-kind.</p>'},
    {title:'Investing',html:'<ul><li><strong>Blue-chips</strong> — CryptoPunks, Bored Apes. Established.</li><li><strong>Utility NFTs</strong> — Access to communities or tools.</li><li><strong>Speculative mints</strong> — Could 10x or go to zero.</li></ul><div class="warn">NFT market is illiquid. You might not be able to sell.</div>'}
  ]},
{ id:'df-6', cat:'DeFi & On-Chain', title:'Staking & Validators',
  desc:'Earn rewards by securing PoS blockchains.',
  steps:[
    {title:'What?',html:'<p>Lock tokens to help validate transactions. Earn 4–8% APY on ETH, SOL, ADA.</p>'},
    {title:'How',html:'<ul><li><strong>Native</strong> — Run a validator (32 ETH minimum for Ethereum)</li><li><strong>Delegated</strong> — Delegate to a validator (easy on Solana)</li><li><strong>Liquid</strong> — Lido (stETH), Marinade (mSOL). Tradable receipt tokens.</li></ul>'},
    {title:'Considerations',html:'<ul><li>Lock-up periods</li><li>Slashing risk if validator misbehaves</li><li>Opportunity cost during lock-up</li></ul><div class="tip">Liquid staking solves lock-up. stETH earns rewards AND can be sold anytime.</div>'}
  ]},
{ id:'df-7', cat:'DeFi & On-Chain', title:'On-Chain Analysis',
  desc:'Use blockchain data for smarter decisions.',
  steps:[
    {title:'What?',html:'<p>Every transaction is visible. On-chain analysis reads this data to understand whale behaviour, exchange flows, and money movement.</p>'},
    {title:'Key Metrics',html:'<ul><li><strong>Exchange inflows</strong> — Coins moving to exchanges = sell pressure</li><li><strong>Whale wallets</strong> — Track largest holders</li><li><strong>Active addresses</strong> — Growing = growing adoption</li><li><strong>Token distribution</strong> — Concentrated = risky</li></ul>'},
    {title:'Tools',html:'<p>Glassnode, Dune Analytics, Nansen, Arkham.</p><div class="tip">Juzzy Brain monitors DexScreener for new pairs and anomalous volume in real time.</div>'}
  ]},
{ id:'df-8', cat:'DeFi & On-Chain', title:'Tokenomics',
  desc:'Evaluate a token\'s economic design before investing.',
  steps:[
    {title:'What?',html:'<p>Token + economics. Supply, demand, distribution, utility. Good tokenomics → project thrives. Bad → doom.</p>'},
    {title:'Check List',html:'<ul><li>Fixed or infinite supply?</li><li>Vesting schedule — when do team tokens unlock?</li><li>Token utility — governance, fees, staking?</li><li>Burn mechanism?</li><li>Emission rate?</li></ul>'},
    {title:'Red Flags',html:'<div class="warn">Avoid: team holds &gt;30% supply, all tokens unlock at once, no utility, massive daily emissions.</div>'}
  ]},
{ id:'df-9', cat:'DeFi & On-Chain', title:'MEV & Front-Running',
  desc:'The invisible tax on DEX trades.',
  steps:[
    {title:'What?',html:'<p>MEV = profit validators extract by reordering transactions. Most common: sandwich attacks on DEX swaps.</p>'},
    {title:'Sandwich Attack',html:'<ol><li>You submit a buy</li><li>Bot buys first (front-run), pushing price up</li><li>Your trade executes at higher price</li><li>Bot sells (back-run) for profit</li></ol>'},
    {title:'Protection',html:'<ul><li>Use MEV protection tools (Flashbots, Jito)</li><li>Set tight slippage</li><li>Use limit orders</li><li>Trade on L2s (less MEV)</li></ul><div class="tip">Juzzy routes through 0x on Base — less MEV than Ethereum mainnet.</div>'}
  ]},

// ── USING JUZZY (10) ──
{ id:'uj-1', cat:'Using Juzzy', title:'Getting Started',
  desc:'Your first 5 minutes — connect, explore, understand.',
  steps:[
    {title:'Overview',html:'<p>Juzzy streams real-time data from CoinGecko, Binance, DexScreener. Shows what\'s moving, flags unusual activity, executes trades. 8 tabs: Oracle, Leaders, Charts, Brain, Reports, Ops, Vault, Learn.</p>'},
    {title:'First Steps',html:'<ol><li>Check status bar — should say LIVE:SSE</li><li>Click Leaders — see top movers</li><li>Click Charts — pick an asset</li><li>Click Brain — watch AI stream</li></ol><div class="tip">You don\'t need a wallet or subscription to explore. Read-only is free.</div>'}
  ]},
{ id:'uj-2', cat:'Using Juzzy', title:'The Oracle Tab',
  desc:'Command centre — Autopilot, gates, risk control.',
  steps:[
    {title:'Fuel Slider',html:'<p>Sets how much to deploy in a 24h autopilot cycle. Divided into 24 hourly slices. $240 = $10/hr for 24hrs (DCA).</p>'},
    {title:'Gates',html:'<ul><li>I understand I can lose money</li><li>I agree to 1% service fee</li><li>I allow 24 hours</li></ul><p>Prevents accidental trades. Ensures informed consent.</p>'},
    {title:'One Invest',html:'<p>Blue orb starts the 24h cycle. Paper-trades by default unless real execution is armed in Vault.</p><div class="tip">Start with paper trading to see how the system performs.</div>'}
  ]},
{ id:'uj-3', cat:'Using Juzzy', title:'Leaders Tab',
  desc:'Read and use the market leaders board.',
  steps:[
    {title:'Sources',html:'<p>CoinGecko (top 500), Binance (popular pairs), DexScreener (new/trending DEX tokens). Universe count shows total tracked.</p>'},
    {title:'Sorting',html:'<p>Toggle Gainers/Losers. Click any row for details.</p>'},
    {title:'What to Watch',html:'<ul><li>Volume spikes + high change = real momentum</li><li>Multi-source appearance = broader interest</li><li>50%+ in 24h = investigate (opportunity or trap?)</li></ul>'}
  ]},
{ id:'uj-4', cat:'Using Juzzy', title:'Charts Tab Mastery',
  desc:'Candlesticks, filters, resistance lines, AI alerts.',
  steps:[
    {title:'Filters',html:'<ul><li><strong>All</strong> — Every tracked asset</li><li><strong>Gains/Falls</strong> — Up/down in 24h</li><li><strong>Births</strong> — New tokens (created within 2h)</li><li><strong>Sandbox</strong> — Low-liquidity early-stage tokens</li></ul><div class="tip">Births/Sandbox = 100x potential but also most scams. Extra caution.</div>'},
    {title:'Timeframes',html:'<p>1 day, 7d, 30d, 90d, 365d, and 1-minute (Binance). Each changes candle width.</p>'},
    {title:'Resistance Lines',html:'<p>Click Add line to place a price level. AI monitors it. On cross → alert popup with execute/dismiss. Clear lines removes all for current asset.</p>'}
  ]},
{ id:'uj-5', cat:'Using Juzzy', title:'Brain — AI Activity',
  desc:'What the AI scans and what signals mean.',
  steps:[
    {title:'What It Does',html:'<p>Continuously scans for anomaly signals, birth tokens, sandbox alerts.</p>'},
    {title:'Signal Types',html:'<ul><li>INFO — General observation</li><li>WARN — Something unusual</li><li>ALERT — High priority (resistance cross, major anomaly)</li></ul>'},
    {title:'Using It',html:'<p>Brain is an attention director, not a "buy now" signal. When flagged:</p><ol><li>Check Charts for price action</li><li>Check liquidity in Leaders</li><li>Research the project</li><li>Then decide</li></ol>'}
  ]},
{ id:'uj-6', cat:'Using Juzzy', title:'Reports & Audit Trail',
  desc:'Every action logged — review, search, export.',
  steps:[
    {title:'What\'s Logged',html:'<p>Trade intents, executions, fees, system events, brain signals. Everything.</p>'},
    {title:'Searching',html:'<p>Filter by ID, asset, or status. New reports at top with "New updates" button.</p>'},
    {title:'Export',html:'<p>Export CSV downloads all reports. Essential for tax, performance analysis, and sharing with accountants.</p>'}
  ]},
{ id:'uj-7', cat:'Using Juzzy', title:'Ops — System Health',
  desc:'Monitor connections, data freshness, diagnose issues.',
  steps:[
    {title:'Dashboard',html:'<ul><li>Universe assets count</li><li>Market/Audit freshness</li><li>CoinGecko, Binance, DexScreener individual status</li></ul>'},
    {title:'Recovery',html:'<ul><li><strong>Force snapshot</strong> — Re-downloads all data</li><li><strong>Reconnect streams</strong> — Re-establishes SSE connections</li></ul><div class="tip">Check Ops first if data looks stale.</div>'}
  ]},
{ id:'uj-8', cat:'Using Juzzy', title:'Vault — Wallet & Execution',
  desc:'Connect wallet, configure on-chain trading.',
  steps:[
    {title:'Network',html:'<p>Choose Solana (Phantom + Jupiter) or EVM (MetaMask + 0x). Currently EVM/Base is fully wired.</p>'},
    {title:'Connect',html:'<p>Click Connect wallet. MetaMask popup asks to connect. Your address appears. Juzzy never sees your private key.</p>'},
    {title:'Settings',html:'<ul><li><strong>Arm trading</strong> — Enables real execution</li><li><strong>Max USD per trade</strong> — Caps each trade</li><li><strong>Slippage (bps)</strong> — 75 = 0.75%</li></ul><div class="warn">Start with Arm OFF and small Max USD. Paper trade first.</div>'}
  ]},
{ id:'uj-9', cat:'Using Juzzy', title:'Paper Trading',
  desc:'Practice without risking real money.',
  steps:[
    {title:'What?',html:'<p>Paper trading simulates real trades with virtual money. Juzzy tracks PnL, fees, and positions as if they were real.</p>'},
    {title:'How',html:'<p>Keep Vault Arm toggle OFF. All trade intents from resistance-line alerts and autopilot will execute as paper trades. Check Reports for results.</p>'},
    {title:'When to Go Live',html:'<p>Go live only after:</p><ul><li>You\'ve paper traded for 2+ weeks</li><li>Results are consistently positive</li><li>You understand every feature</li><li>You\'re comfortable with the risk</li></ul>'}
  ]},
{ id:'uj-10', cat:'Using Juzzy', title:'Maximising Returns',
  desc:'Pro tips for getting the most out of Juzzy.',
  steps:[
    {title:'Signal Quality',html:'<ul><li>Set resistance lines at <strong>real S/R levels</strong>, not random prices</li><li>Use Births filter to catch new tokens early</li><li>Cross-reference Brain signals with your own research</li></ul>'},
    {title:'Timing',html:'<ul><li>Crypto is 24/7 but volume peaks during US/Asia market hours</li><li>DCA (One Invest) removes timing pressure</li><li>Don\'t trade in the first 5 minutes after major news</li></ul>'},
    {title:'Compounding',html:'<p>Bank profits regularly. Use Juzzy\'s paper KPIs to track realised vs unrealised PnL. Re-invest only from profits, not principal.</p><div class="tip">The best traders are patient. Let the system work and don\'t over-manage positions.</div>'}
  ]},

// ── ADVANCED TOPICS (8) ──
{ id:'at-1', cat:'Advanced', title:'Moving Averages',
  desc:'SMA, EMA — smooth out noise and identify trends.',
  steps:[
    {title:'SMA',html:'<p><strong>Simple Moving Average</strong> = average of last N closing prices. 50-day SMA smooths out noise. Price above SMA = bullish. Below = bearish.</p>'},
    {title:'EMA',html:'<p><strong>Exponential MA</strong> gives more weight to recent prices. More responsive. 12/26 EMA crossover is the basis of MACD.</p>'},
    {title:'Golden/Death Cross',html:'<p><strong>Golden cross</strong>: 50-day MA crosses above 200-day. Historically bullish. <strong>Death cross</strong>: opposite. These are lagging indicators — useful for confirmation, not prediction.</p>'}
  ]},
{ id:'at-2', cat:'Advanced', title:'RSI & Oscillators',
  desc:'Measure momentum and identify overbought/oversold conditions.',
  steps:[
    {title:'RSI',html:'<p><strong>Relative Strength Index</strong> (0–100). Above 70 = overbought (may pull back). Below 30 = oversold (may bounce). 14-period is standard.</p>'},
    {title:'MACD',html:'<p><strong>Moving Average Convergence Divergence</strong>. MACD line crosses above signal line = bullish. Below = bearish. Histogram shows momentum strength.</p>'},
    {title:'Caution',html:'<div class="warn">In strong trends, RSI can stay overbought/oversold for weeks. Don\'t trade purely on oscillator signals — combine with price action and support/resistance.</div>'}
  ]},
{ id:'at-3', cat:'Advanced', title:'Fibonacci Retracements',
  desc:'Use math to predict pullback levels.',
  steps:[
    {title:'Concept',html:'<p>After a big move, price often retraces to key Fibonacci levels (23.6%, 38.2%, 50%, 61.8%) before continuing. Traders use these as potential support/resistance.</p>'},
    {title:'Drawing Fibs',html:'<p>Draw from swing low to swing high (uptrend) or high to low (downtrend). The 61.8% level (the "golden ratio") is the most watched.</p>'},
    {title:'Using Them',html:'<p>Fibs are best combined with other confluence: if a Fib level aligns with horizontal support AND a moving average, it\'s a strong zone.</p><div class="tip">Mark Fib-aligned levels as resistance lines in Juzzy Charts for automated alerts.</div>'}
  ]},
{ id:'at-4', cat:'Advanced', title:'Volume Profile Analysis',
  desc:'Where the most trading happened — and why it matters.',
  steps:[
    {title:'What?',html:'<p>Volume profile shows how much volume traded at each price level, not just each time period. High-volume nodes (HVN) act as magnets; low-volume nodes (LVN) act as gaps price moves through quickly.</p>'},
    {title:'Key Concepts',html:'<ul><li><strong>Point of Control (POC)</strong> — Price with most volume. Strong support/resistance.</li><li><strong>Value Area</strong> — Range containing 70% of volume. Price tends to revert here.</li></ul>'},
    {title:'Application',html:'<p>Use volume-heavy zones as potential support/resistance levels. If price breaks out of the value area on high volume, expect a strong move.</p>'}
  ]},
{ id:'at-5', cat:'Advanced', title:'Risk-Reward Ratio',
  desc:'Only take trades where the math is in your favour.',
  steps:[
    {title:'The Ratio',html:'<p><strong>R:R = Potential profit ÷ Potential loss</strong></p><p>If your target is $300 profit and your stop is $100 loss, R:R = 3:1. Even if you\'re wrong 50% of the time, you profit.</p>'},
    {title:'Minimum Standards',html:'<p>Professional traders aim for at least <strong>2:1 R:R</strong>. This means you only need to be right 33% of the time to break even.</p><ul><li>1:1 — Need 50%+ win rate. Hard.</li><li>2:1 — Need 33%+. Achievable.</li><li>3:1 — Need 25%+. Very favourable.</li></ul>'},
    {title:'Planning',html:'<p>Before every trade: define entry, stop loss, and target. Calculate R:R. If below 2:1, skip the trade.</p>'}
  ]},
{ id:'at-6', cat:'Advanced', title:'Correlation & Macro',
  desc:'How Bitcoin, stocks, and the economy move together.',
  steps:[
    {title:'BTC Dominance',html:'<p>BTC dominance = BTC market cap ÷ total crypto market cap. When BTC dominance rises, alts usually underperform. When it drops, "alt season" begins.</p>'},
    {title:'Macro Factors',html:'<ul><li><strong>Interest rates</strong> — Higher rates → less risk appetite → crypto down</li><li><strong>Dollar strength (DXY)</strong> — Strong dollar → crypto weak</li><li><strong>Stock market</strong> — Crypto increasingly correlated with Nasdaq</li><li><strong>Inflation</strong> — Some view BTC as an inflation hedge</li></ul>'},
    {title:'Using This',html:'<p>Check macro before making big allocation changes. If the Fed is hiking rates aggressively, reduce risk. If rates are dropping, consider increasing crypto exposure.</p>'}
  ]},
{ id:'at-7', cat:'Advanced', title:'Leverage Trading',
  desc:'Amplified gains AND losses — understand before using.',
  steps:[
    {title:'What?',html:'<p>Leverage lets you trade with borrowed money. 10x leverage: $100 controls $1,000. A 10% move = 100% gain or 100% loss (liquidation).</p>'},
    {title:'Liquidation',html:'<p>If price moves against you enough to wipe out your margin, you get <strong>liquidated</strong> — position forcibly closed, money gone.</p><div class="warn">Leverage is the #1 way people blow up accounts in crypto. 80%+ of leveraged traders lose everything.</div>'},
    {title:'If You Must',html:'<ul><li>Max 2–3x leverage</li><li>Only on BTC/ETH (most liquid)</li><li>Tight stops</li><li>Never more than 5% of portfolio in leveraged positions</li></ul><p>Juzzy does not offer leverage. This is by design — it\'s too dangerous for most users.</p>'}
  ]},
{ id:'at-8', cat:'Advanced', title:'Building a Trading Plan',
  desc:'The document that separates professionals from gamblers.',
  steps:[
    {title:'What Goes In',html:'<ol><li><strong>Goals</strong> — What return am I targeting? Over what timeframe?</li><li><strong>Strategy</strong> — DCA, swing, momentum? Be specific.</li><li><strong>Risk rules</strong> — Max position size, stop loss %, max daily loss</li><li><strong>Entry criteria</strong> — What signals trigger a buy?</li><li><strong>Exit criteria</strong> — What triggers a sell?</li><li><strong>Review schedule</strong> — Weekly? Monthly?</li></ol>'},
    {title:'Following It',html:'<p>Write it down. Print it. Put it next to your screen. When you\'re tempted to deviate, re-read it.</p><p>Every deviation should be recorded in your journal and analysed later.</p>'},
    {title:'Review & Iterate',html:'<p>Review your plan monthly. What worked? What didn\'t? Adjust the plan — but only based on data, never on emotion.</p><div class="tip">Use Juzzy Reports + Export CSV to generate your performance data for reviews. The numbers don\'t lie.</div>'}
  ]},
];
