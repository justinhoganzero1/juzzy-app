// Trading Platform Simulators - AI-Generated Dummy Apps for Training
// Realistic replicas of popular trading platforms for safe learning

window.JUZZY_SIMULATORS = {
  // Binance-style Exchange Simulator
  binanceSimulator: {
    name: 'Binance Pro Simulator',
    type: 'centralized-exchange',
    features: ['spot-trading', 'futures', 'staking', 'savings'],
    
    interface: `
      <div class="simulator-container binance-sim">
        <div class="sim-header">
          <div class="sim-logo">⚡ Binance Simulator</div>
          <div class="sim-balance">Balance: <span id="binance-balance">$10,000.00</span> USDT</div>
        </div>
        
        <div class="sim-layout">
          <!-- Left: Order Book -->
          <div class="sim-orderbook">
            <h3>Order Book</h3>
            <div class="orderbook-sells">
              <div class="order-row sell">43,521.50 <span>0.234</span></div>
              <div class="order-row sell">43,520.00 <span>1.456</span></div>
              <div class="order-row sell">43,519.25 <span>0.892</span></div>
            </div>
            <div class="current-price">43,518.75</div>
            <div class="orderbook-buys">
              <div class="order-row buy">43,517.00 <span>0.567</span></div>
              <div class="order-row buy">43,516.50 <span>2.134</span></div>
              <div class="order-row buy">43,515.00 <span>0.789</span></div>
            </div>
          </div>
          
          <!-- Center: Chart -->
          <div class="sim-chart">
            <div class="chart-header">
              <div class="trading-pair">BTC/USDT</div>
              <div class="timeframe-selector">
                <button class="tf-btn active">1m</button>
                <button class="tf-btn">5m</button>
                <button class="tf-btn">15m</button>
                <button class="tf-btn">1h</button>
                <button class="tf-btn">4h</button>
                <button class="tf-btn">1D</button>
              </div>
            </div>
            <div id="binance-chart" class="chart-area">
              <canvas id="binance-canvas"></canvas>
            </div>
            <div class="chart-controls">
              <button class="chart-tool">📏 Line</button>
              <button class="chart-tool">📊 Fibonacci</button>
              <button class="chart-tool">📈 Trend</button>
              <button class="chart-tool">🔍 Zoom</button>
            </div>
          </div>
          
          <!-- Right: Trading Panel -->
          <div class="sim-trading">
            <div class="trade-tabs">
              <button class="trade-tab active">Spot</button>
              <button class="trade-tab">Margin</button>
              <button class="trade-tab">Futures</button>
            </div>
            
            <div class="trade-form">
              <div class="trade-type-selector">
                <button class="type-btn active">Limit</button>
                <button class="type-btn">Market</button>
                <button class="type-btn">Stop-Limit</button>
              </div>
              
              <div class="form-group">
                <label>Price (USDT)</label>
                <input type="number" id="binance-price" value="43518.75" class="sim-input">
              </div>
              
              <div class="form-group">
                <label>Amount (BTC)</label>
                <input type="number" id="binance-amount" value="0.1" class="sim-input">
              </div>
              
              <div class="form-group">
                <label>Total (USDT)</label>
                <input type="number" id="binance-total" value="4351.88" class="sim-input" readonly>
              </div>
              
              <div class="slider-group">
                <label>Amount %</label>
                <input type="range" min="0" max="100" value="25" class="amount-slider">
                <div class="slider-labels">
                  <span>25%</span><span>50%</span><span>75%</span><span>100%</span>
                </div>
              </div>
              
              <div class="trade-buttons">
                <button class="btn-buy">Buy BTC</button>
                <button class="btn-sell">Sell BTC</button>
              </div>
            </div>
            
            <div class="open-orders">
              <h4>Open Orders</h4>
              <div class="orders-list">
                <div class="order-item">
                  <div>Buy 0.05 BTC @ 43,000</div>
                  <button class="cancel-btn">×</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom: Trade History -->
        <div class="sim-footer">
          <div class="trade-history">
            <h4>Recent Trades</h4>
            <div class="history-list">
              <div class="history-item buy">43,518.75 | 0.234 BTC | 10:23:45</div>
              <div class="history-item sell">43,520.00 | 0.156 BTC | 10:23:42</div>
              <div class="history-item buy">43,519.25 | 0.892 BTC | 10:23:38</div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    styles: `
      .binance-sim {
        background: #0b0e11;
        color: #eaecef;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      
      .sim-header {
        background: #1e2329;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2b3139;
      }
      
      .sim-logo {
        font-size: 1.5rem;
        font-weight: 700;
        color: #f0b90b;
      }
      
      .sim-balance {
        font-size: 1.1rem;
        color: #eaecef;
      }
      
      .sim-layout {
        display: grid;
        grid-template-columns: 250px 1fr 300px;
        flex: 1;
        overflow: hidden;
      }
      
      .sim-orderbook {
        background: #1e2329;
        padding: 1rem;
        border-right: 1px solid #2b3139;
        overflow-y: auto;
      }
      
      .orderbook-sells, .orderbook-buys {
        margin: 0.5rem 0;
      }
      
      .order-row {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;
        font-size: 0.85rem;
        font-family: 'Courier New', monospace;
      }
      
      .order-row.sell {
        background: rgba(246, 70, 93, 0.1);
        color: #f6465d;
      }
      
      .order-row.buy {
        background: rgba(14, 203, 129, 0.1);
        color: #0ecb81;
      }
      
      .current-price {
        text-align: center;
        font-size: 1.2rem;
        font-weight: 700;
        color: #0ecb81;
        padding: 0.5rem;
        background: #2b3139;
        margin: 0.5rem 0;
      }
      
      .sim-chart {
        background: #0b0e11;
        display: flex;
        flex-direction: column;
      }
      
      .chart-header {
        background: #1e2329;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #2b3139;
      }
      
      .trading-pair {
        font-size: 1.3rem;
        font-weight: 700;
      }
      
      .timeframe-selector {
        display: flex;
        gap: 0.5rem;
      }
      
      .tf-btn {
        background: transparent;
        border: 1px solid #2b3139;
        color: #848e9c;
        padding: 0.4rem 0.8rem;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.2s;
      }
      
      .tf-btn.active, .tf-btn:hover {
        background: #f0b90b;
        color: #0b0e11;
        border-color: #f0b90b;
      }
      
      .chart-area {
        flex: 1;
        background: #0b0e11;
        position: relative;
      }
      
      #binance-canvas {
        width: 100%;
        height: 100%;
      }
      
      .chart-controls {
        background: #1e2329;
        padding: 0.8rem;
        display: flex;
        gap: 1rem;
        border-top: 1px solid #2b3139;
      }
      
      .chart-tool {
        background: transparent;
        border: 1px solid #2b3139;
        color: #848e9c;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.2s;
      }
      
      .chart-tool:hover {
        background: #2b3139;
        color: #eaecef;
      }
      
      .sim-trading {
        background: #1e2329;
        padding: 1rem;
        border-left: 1px solid #2b3139;
        overflow-y: auto;
      }
      
      .trade-tabs {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      
      .trade-tab {
        flex: 1;
        background: transparent;
        border: none;
        color: #848e9c;
        padding: 0.6rem;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
      }
      
      .trade-tab.active {
        color: #f0b90b;
        border-bottom-color: #f0b90b;
      }
      
      .trade-type-selector {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }
      
      .type-btn {
        flex: 1;
        background: #2b3139;
        border: none;
        color: #848e9c;
        padding: 0.5rem;
        cursor: pointer;
        border-radius: 4px;
        transition: all 0.2s;
      }
      
      .type-btn.active {
        background: #f0b90b;
        color: #0b0e11;
      }
      
      .form-group {
        margin-bottom: 1rem;
      }
      
      .form-group label {
        display: block;
        color: #848e9c;
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
      }
      
      .sim-input {
        width: 100%;
        background: #2b3139;
        border: 1px solid #2b3139;
        color: #eaecef;
        padding: 0.6rem;
        border-radius: 4px;
        font-size: 0.95rem;
      }
      
      .sim-input:focus {
        outline: none;
        border-color: #f0b90b;
      }
      
      .slider-group {
        margin-bottom: 1rem;
      }
      
      .amount-slider {
        width: 100%;
        margin: 0.5rem 0;
      }
      
      .slider-labels {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: #848e9c;
      }
      
      .trade-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }
      
      .btn-buy, .btn-sell {
        padding: 0.8rem;
        border: none;
        border-radius: 4px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .btn-buy {
        background: #0ecb81;
        color: white;
      }
      
      .btn-buy:hover {
        background: #0bb871;
      }
      
      .btn-sell {
        background: #f6465d;
        color: white;
      }
      
      .btn-sell:hover {
        background: #e0364d;
      }
      
      .open-orders {
        margin-top: 2rem;
      }
      
      .open-orders h4 {
        color: #848e9c;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .orders-list {
        background: #0b0e11;
        border-radius: 4px;
        padding: 0.5rem;
      }
      
      .order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        font-size: 0.85rem;
      }
      
      .cancel-btn {
        background: #f6465d;
        border: none;
        color: white;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1rem;
      }
      
      .sim-footer {
        background: #1e2329;
        padding: 1rem 2rem;
        border-top: 1px solid #2b3139;
      }
      
      .trade-history h4 {
        color: #848e9c;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .history-list {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
      }
      
      .history-item {
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        font-size: 0.85rem;
        white-space: nowrap;
      }
      
      .history-item.buy {
        background: rgba(14, 203, 129, 0.1);
        color: #0ecb81;
      }
      
      .history-item.sell {
        background: rgba(246, 70, 93, 0.1);
        color: #f6465d;
      }
    `
  },

  // Uniswap-style DEX Simulator
  uniswapSimulator: {
    name: 'Uniswap V3 Simulator',
    type: 'decentralized-exchange',
    features: ['token-swap', 'liquidity-pools', 'farming'],
    
    interface: `
      <div class="simulator-container uniswap-sim">
        <div class="uni-header">
          <div class="uni-logo">🦄 Uniswap Simulator</div>
          <div class="uni-wallet">
            <button class="connect-wallet">Connect Wallet</button>
          </div>
        </div>
        
        <div class="uni-main">
          <div class="swap-card">
            <div class="card-header">
              <h2>Swap</h2>
              <button class="settings-btn">⚙️</button>
            </div>
            
            <div class="swap-form">
              <div class="token-input">
                <div class="input-header">
                  <span>You pay</span>
                  <span class="balance">Balance: 5.0 ETH</span>
                </div>
                <div class="input-row">
                  <input type="number" placeholder="0.0" class="amount-input" id="uni-from-amount">
                  <button class="token-select">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23627eea'/%3E%3C/svg%3E" alt="ETH">
                    <span>ETH</span>
                    <span>▼</span>
                  </button>
                </div>
                <div class="usd-value">~$0.00</div>
              </div>
              
              <div class="swap-arrow">
                <button class="arrow-btn">⬇️</button>
              </div>
              
              <div class="token-input">
                <div class="input-header">
                  <span>You receive</span>
                  <span class="balance">Balance: 0.0 USDC</span>
                </div>
                <div class="input-row">
                  <input type="number" placeholder="0.0" class="amount-input" id="uni-to-amount">
                  <button class="token-select">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%232775ca'/%3E%3C/svg%3E" alt="USDC">
                    <span>USDC</span>
                    <span>▼</span>
                  </button>
                </div>
                <div class="usd-value">~$0.00</div>
              </div>
              
              <div class="swap-details">
                <div class="detail-row">
                  <span>Rate</span>
                  <span>1 ETH = 2,450.32 USDC</span>
                </div>
                <div class="detail-row">
                  <span>Price Impact</span>
                  <span class="green">{'<'}0.01%</span>
                </div>
                <div class="detail-row">
                  <span>Network Fee</span>
                  <span>~$12.50</span>
                </div>
              </div>
              
              <button class="swap-btn">Swap</button>
            </div>
          </div>
          
          <div class="info-cards">
            <div class="info-card">
              <h3>💧 Liquidity Pools</h3>
              <p>Provide liquidity to earn trading fees</p>
              <button class="secondary-btn">Add Liquidity</button>
            </div>
            
            <div class="info-card">
              <h3>🌾 Yield Farming</h3>
              <p>Stake LP tokens to earn rewards</p>
              <button class="secondary-btn">View Farms</button>
            </div>
          </div>
        </div>
      </div>
    `,
    
    styles: `
      .uniswap-sim {
        background: linear-gradient(135deg, #ff007a 0%, #ff6b9d 100%);
        min-height: 100vh;
        padding: 2rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .uni-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
      }
      
      .uni-logo {
        font-size: 2rem;
        font-weight: 900;
        color: white;
      }
      
      .connect-wallet {
        background: white;
        color: #ff007a;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 20px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .connect-wallet:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }
      
      .uni-main {
        max-width: 480px;
        margin: 0 auto;
      }
      
      .swap-card {
        background: white;
        border-radius: 24px;
        padding: 1.5rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
      }
      
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      
      .card-header h2 {
        font-size: 1.5rem;
        color: #0d111c;
      }
      
      .settings-btn {
        background: transparent;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.2s;
      }
      
      .settings-btn:hover {
        opacity: 1;
      }
      
      .token-input {
        background: #f7f8fa;
        border-radius: 16px;
        padding: 1rem;
        margin-bottom: 0.5rem;
      }
      
      .input-header {
        display: flex;
        justify-content: space-between;
        font-size: 0.85rem;
        color: #7780a0;
        margin-bottom: 0.5rem;
      }
      
      .input-row {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      
      .amount-input {
        flex: 1;
        background: transparent;
        border: none;
        font-size: 2rem;
        font-weight: 500;
        color: #0d111c;
        outline: none;
      }
      
      .amount-input::placeholder {
        color: #c3c5cb;
      }
      
      .token-select {
        background: white;
        border: none;
        padding: 0.6rem 1rem;
        border-radius: 16px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s;
      }
      
      .token-select:hover {
        background: #f7f8fa;
      }
      
      .token-select img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      
      .usd-value {
        font-size: 0.85rem;
        color: #7780a0;
        margin-top: 0.5rem;
      }
      
      .swap-arrow {
        text-align: center;
        margin: 0.5rem 0;
      }
      
      .arrow-btn {
        background: white;
        border: 4px solid #f7f8fa;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        cursor: pointer;
        font-size: 1.2rem;
        transition: all 0.2s;
      }
      
      .arrow-btn:hover {
        transform: rotate(180deg);
      }
      
      .swap-details {
        background: #f7f8fa;
        border-radius: 12px;
        padding: 1rem;
        margin: 1rem 0;
      }
      
      .detail-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.9rem;
        color: #7780a0;
        margin-bottom: 0.5rem;
      }
      
      .detail-row:last-child {
        margin-bottom: 0;
      }
      
      .detail-row .green {
        color: #27ae60;
      }
      
      .swap-btn {
        width: 100%;
        background: linear-gradient(135deg, #ff007a, #ff6b9d);
        color: white;
        border: none;
        padding: 1.2rem;
        border-radius: 16px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .swap-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 0, 122, 0.3);
      }
      
      .info-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
      
      .info-card {
        background: white;
        border-radius: 16px;
        padding: 1.5rem;
        text-align: center;
      }
      
      .info-card h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: #0d111c;
      }
      
      .info-card p {
        font-size: 0.85rem;
        color: #7780a0;
        margin-bottom: 1rem;
      }
      
      .secondary-btn {
        background: #f7f8fa;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 12px;
        font-weight: 600;
        color: #0d111c;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .secondary-btn:hover {
        background: #e8eaed;
      }
    `
  },

  // Coinbase-style Exchange Simulator
  coinbaseSimulator: {
    name: 'Coinbase Pro Simulator',
    type: 'centralized-exchange',
    features: ['simple-buy', 'portfolio', 'recurring-buys'],
    
    interface: `
      <div class="simulator-container coinbase-sim">
        <div class="cb-header">
          <div class="cb-logo">
            <div class="cb-icon"></div>
            <span>Coinbase Simulator</span>
          </div>
          <div class="cb-nav">
            <a href="#" class="nav-link active">Buy/Sell</a>
            <a href="#" class="nav-link">Portfolio</a>
            <a href="#" class="nav-link">Prices</a>
            <a href="#" class="nav-link">Earn</a>
          </div>
          <div class="cb-user">
            <span>$10,000.00</span>
            <div class="user-avatar">JD</div>
          </div>
        </div>
        
        <div class="cb-main">
          <div class="cb-sidebar">
            <h3>Your Portfolio</h3>
            <div class="portfolio-value">
              <div class="value-label">Total Balance</div>
              <div class="value-amount">$10,000.00</div>
              <div class="value-change positive">+$125.50 (1.26%)</div>
            </div>
            
            <div class="asset-list">
              <div class="asset-item">
                <div class="asset-icon btc">₿</div>
                <div class="asset-info">
                  <div class="asset-name">Bitcoin</div>
                  <div class="asset-amount">0.05 BTC</div>
                </div>
                <div class="asset-value">
                  <div>$2,175.94</div>
                  <div class="positive">+2.3%</div>
                </div>
              </div>
              
              <div class="asset-item">
                <div class="asset-icon eth">Ξ</div>
                <div class="asset-info">
                  <div class="asset-name">Ethereum</div>
                  <div class="asset-amount">1.5 ETH</div>
                </div>
                <div class="asset-value">
                  <div>$3,675.48</div>
                  <div class="positive">+1.8%</div>
                </div>
              </div>
              
              <div class="asset-item">
                <div class="asset-icon usd">$</div>
                <div class="asset-info">
                  <div class="asset-name">US Dollar</div>
                  <div class="asset-amount">USD</div>
                </div>
                <div class="asset-value">
                  <div>$4,148.58</div>
                  <div>—</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cb-content">
            <div class="buy-sell-card">
              <div class="trade-tabs">
                <button class="trade-tab active">Buy</button>
                <button class="trade-tab">Sell</button>
                <button class="trade-tab">Convert</button>
              </div>
              
              <div class="trade-form">
                <div class="form-field">
                  <label>Select crypto</label>
                  <select class="cb-select">
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>Solana (SOL)</option>
                    <option>Cardano (ADA)</option>
                  </select>
                </div>
                
                <div class="form-field">
                  <label>Amount</label>
                  <div class="amount-input-group">
                    <input type="number" placeholder="0.00" class="cb-input">
                    <select class="currency-select">
                      <option>USD</option>
                      <option>BTC</option>
                    </select>
                  </div>
                </div>
                
                <div class="quick-amounts">
                  <button class="quick-btn">$100</button>
                  <button class="quick-btn">$500</button>
                  <button class="quick-btn">$1,000</button>
                  <button class="quick-btn">All</button>
                </div>
                
                <div class="payment-method">
                  <label>Payment method</label>
                  <select class="cb-select">
                    <option>💳 Visa ending in 4242</option>
                    <option>🏦 Bank Account</option>
                    <option>💵 USD Balance ($4,148.58)</option>
                  </select>
                </div>
                
                <div class="order-summary">
                  <div class="summary-row">
                    <span>Bitcoin price</span>
                    <span>$43,518.75</span>
                  </div>
                  <div class="summary-row">
                    <span>Coinbase fee</span>
                    <span>$2.99</span>
                  </div>
                  <div class="summary-row total">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
                
                <button class="cb-buy-btn">Preview Buy</button>
                
                <div class="recurring-option">
                  <input type="checkbox" id="recurring">
                  <label for="recurring">Make this a recurring purchase</label>
                </div>
              </div>
            </div>
            
            <div class="price-chart-card">
              <h3>Bitcoin Price</h3>
              <div class="price-display">
                <div class="current-price">$43,518.75</div>
                <div class="price-change positive">+$1,234.50 (2.92%)</div>
              </div>
              <div class="mini-chart">
                <canvas id="cb-chart"></canvas>
              </div>
              <div class="timeframe-selector">
                <button class="tf-btn">1H</button>
                <button class="tf-btn">1D</button>
                <button class="tf-btn active">1W</button>
                <button class="tf-btn">1M</button>
                <button class="tf-btn">1Y</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    styles: `
      .coinbase-sim {
        background: #f5f7f8;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .cb-header {
        background: white;
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e7ebee;
      }
      
      .cb-logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        font-size: 1.3rem;
        font-weight: 700;
        color: #0052ff;
      }
      
      .cb-icon {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #0052ff, #0040cc);
        border-radius: 8px;
      }
      
      .cb-nav {
        display: flex;
        gap: 2rem;
      }
      
      .nav-link {
        color: #5b636e;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
      }
      
      .nav-link.active, .nav-link:hover {
        color: #0052ff;
        border-bottom-color: #0052ff;
      }
      
      .cb-user {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      
      .user-avatar {
        width: 36px;
        height: 36px;
        background: #0052ff;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.9rem;
      }
      
      .cb-main {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 2rem;
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
      }
      
      .cb-sidebar {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        height: fit-content;
      }
      
      .cb-sidebar h3 {
        color: #1652f0;
        font-size: 1.1rem;
        margin-bottom: 1rem;
      }
      
      .portfolio-value {
        background: linear-gradient(135deg, #0052ff, #0040cc);
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 1.5rem;
      }
      
      .value-label {
        font-size: 0.85rem;
        opacity: 0.9;
        margin-bottom: 0.3rem;
      }
      
      .value-amount {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
      }
      
      .value-change {
        font-size: 0.9rem;
      }
      
      .value-change.positive {
        color: #05b169;
      }
      
      .asset-list {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
      }
      
      .asset-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.8rem;
        border-radius: 8px;
        transition: background 0.2s;
        cursor: pointer;
      }
      
      .asset-item:hover {
        background: #f5f7f8;
      }
      
      .asset-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        font-weight: 700;
        color: white;
      }
      
      .asset-icon.btc {
        background: linear-gradient(135deg, #f7931a, #f2a900);
      }
      
      .asset-icon.eth {
        background: linear-gradient(135deg, #627eea, #5a6fd8);
      }
      
      .asset-icon.usd {
        background: linear-gradient(135deg, #05b169, #04a05f);
      }
      
      .asset-info {
        flex: 1;
      }
      
      .asset-name {
        font-weight: 600;
        color: #1e2329;
        margin-bottom: 0.2rem;
      }
      
      .asset-amount {
        font-size: 0.85rem;
        color: #5b636e;
      }
      
      .asset-value {
        text-align: right;
      }
      
      .asset-value > div:first-child {
        font-weight: 600;
        color: #1e2329;
        margin-bottom: 0.2rem;
      }
      
      .asset-value .positive {
        color: #05b169;
        font-size: 0.85rem;
      }
      
      .cb-content {
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 2rem;
      }
      
      .buy-sell-card, .price-chart-card {
        background: white;
        border-radius: 12px;
        padding: 2rem;
      }
      
      .trade-tabs {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #e7ebee;
      }
      
      .trade-tab {
        background: transparent;
        border: none;
        padding: 0.8rem 1.5rem;
        font-weight: 600;
        color: #5b636e;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
      }
      
      .trade-tab.active {
        color: #0052ff;
        border-bottom-color: #0052ff;
      }
      
      .form-field {
        margin-bottom: 1.5rem;
      }
      
      .form-field label {
        display: block;
        color: #5b636e;
        font-size: 0.9rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      
      .cb-select, .cb-input {
        width: 100%;
        padding: 0.9rem;
        border: 1px solid #d8dde4;
        border-radius: 8px;
        font-size: 1rem;
        background: white;
        transition: border-color 0.2s;
      }
      
      .cb-select:focus, .cb-input:focus {
        outline: none;
        border-color: #0052ff;
      }
      
      .amount-input-group {
        display: flex;
        gap: 0.5rem;
      }
      
      .amount-input-group .cb-input {
        flex: 1;
      }
      
      .currency-select {
        width: 100px;
        padding: 0.9rem;
        border: 1px solid #d8dde4;
        border-radius: 8px;
        background: white;
      }
      
      .quick-amounts {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
      
      .quick-btn {
        background: #f5f7f8;
        border: 1px solid #d8dde4;
        padding: 0.6rem;
        border-radius: 8px;
        font-weight: 600;
        color: #1e2329;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .quick-btn:hover {
        background: #e7ebee;
        border-color: #0052ff;
      }
      
      .order-summary {
        background: #f5f7f8;
        padding: 1rem;
        border-radius: 8px;
        margin: 1.5rem 0;
      }
      
      .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #5b636e;
      }
      
      .summary-row.total {
        font-weight: 700;
        font-size: 1rem;
        color: #1e2329;
        padding-top: 0.5rem;
        border-top: 1px solid #d8dde4;
        margin-top: 0.5rem;
      }
      
      .cb-buy-btn {
        width: 100%;
        background: #0052ff;
        color: white;
        border: none;
        padding: 1rem;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .cb-buy-btn:hover {
        background: #0040cc;
      }
      
      .recurring-option {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .recurring-option input {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
      
      .recurring-option label {
        font-size: 0.9rem;
        color: #5b636e;
        cursor: pointer;
      }
      
      .price-chart-card h3 {
        color: #1e2329;
        margin-bottom: 1rem;
      }
      
      .price-display {
        margin-bottom: 1.5rem;
      }
      
      .current-price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1e2329;
        margin-bottom: 0.3rem;
      }
      
      .price-change {
        font-size: 1.1rem;
      }
      
      .price-change.positive {
        color: #05b169;
      }
      
      .mini-chart {
        height: 200px;
        background: #f5f7f8;
        border-radius: 8px;
        margin-bottom: 1rem;
      }
      
      #cb-chart {
        width: 100%;
        height: 100%;
      }
      
      .timeframe-selector {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
      }
      
      .tf-btn {
        background: transparent;
        border: 1px solid #d8dde4;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        color: #5b636e;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .tf-btn.active, .tf-btn:hover {
        background: #0052ff;
        color: white;
        border-color: #0052ff;
      }
    `
  }
};

// Initialize simulators
window.initSimulator = function(type) {
  const simulator = window.JUZZY_SIMULATORS[type];
  if (!simulator) return;
  
  // Create modal for simulator
  const modal = document.createElement('div');
  modal.className = 'simulator-modal';
  modal.innerHTML = `
    <div class="simulator-overlay"></div>
    <div class="simulator-wrapper">
      <button class="simulator-close">✕ Close Simulator</button>
      <style>${simulator.styles}</style>
      ${simulator.interface}
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Close button
  modal.querySelector('.simulator-close').addEventListener('click', () => {
    modal.remove();
  });
  
  // Overlay click to close
  modal.querySelector('.simulator-overlay').addEventListener('click', () => {
    modal.remove();
  });
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.JUZZY_SIMULATORS;
}
