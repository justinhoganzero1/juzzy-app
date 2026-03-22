(() => {
  document.title = 'Juzzy: IIFE entered';
  console.log('[BOOT] IIFE entered');
  const HEARTBEAT_MS = 444;
  const COINGECKO_IDS = ['bitcoin', 'ethereum', 'solana', 'ripple', 'cardano', 'dogecoin', 'polygon', 'chainlink', 'uniswap', 'litecoin'];

  const FEATURES = {
    charts: true,
    simpleMode: true,
  };

  const els = {
    hbMs: document.getElementById('hbMs'),
    statusText: document.getElementById('statusText'),
    email: document.getElementById('email'),
    simpleModeBtn: document.getElementById('simpleModeBtn'),
    connectBtn: document.getElementById('connectBtn'),
    subscribeBtn: document.getElementById('subscribeBtn'),
    fuel: document.getElementById('fuel'),
    fuelValue: document.getElementById('fuelValue'),
    gateSub: document.getElementById('gateSub'),
    gateUpfront: document.getElementById('gateUpfront'),
    gateRisk: document.getElementById('gateRisk'),
    gateFee: document.getElementById('gateFee'),
    gateTime: document.getElementById('gateTime'),
    oneInvest: document.getElementById('oneInvest'),
    autoStatus: document.getElementById('autoStatus'),
    autoNext: document.getElementById('autoNext'),
    stopAuto: document.getElementById('stopAuto'),
    payTradeFee: document.getElementById('payTradeFee'),
    simpleBar: document.getElementById('simpleBar'),
    simpleSubscribe: document.getElementById('simpleSubscribe'),
    simplePay: document.getElementById('simplePay'),
    simpleStart: document.getElementById('simpleStart'),
    simpleStop: document.getElementById('simpleStop'),
    cycleFill: document.getElementById('cycleFill'),
    cycleTime: document.getElementById('cycleTime'),
    kpiPnl: document.getElementById('kpiPnl'),
    kpiFees: document.getElementById('kpiFees'),
    kpiBanked: document.getElementById('kpiBanked'),
    kpiPaperPnl: document.getElementById('kpiPaperPnl'),
    leadersList: document.getElementById('leadersList'),
    leadersSource: document.getElementById('leadersSource'),
    leadersUniverse: document.getElementById('leadersUniverse'),
    leadersModeGainers: document.getElementById('leadersModeGainers'),
    leadersModeLosers: document.getElementById('leadersModeLosers'),
    terminal: document.getElementById('terminal'),
    brainToggle: document.getElementById('brainToggle'),
    reportSearch: document.getElementById('reportSearch'),
    reportsNewBtn: document.getElementById('reportsNewBtn'),
    reportsNewCount: document.getElementById('reportsNewCount'),
    exportBtn: document.getElementById('exportBtn'),
    reportsList: document.getElementById('reportsList'),
    opsMarket: document.getElementById('opsMarket'),
    opsAudit: document.getElementById('opsAudit'),
    opsUniverse: document.getElementById('opsUniverse'),
    opsLastMarket: document.getElementById('opsLastMarket'),
    opsLag: document.getElementById('opsLag'),
    opsCg: document.getElementById('opsCg'),
    opsBn: document.getElementById('opsBn'),
    opsDex: document.getElementById('opsDex'),
    opsPaperPos: document.getElementById('opsPaperPos'),
    opsPaperBanked: document.getElementById('opsPaperBanked'),
    opsAuditList: document.getElementById('opsAuditList'),
    opsFresh: document.getElementById('opsFresh'),
    opsAuditFresh: document.getElementById('opsAuditFresh'),
    opsForceSnapshot: document.getElementById('opsForceSnapshot'),
    opsReconnect: document.getElementById('opsReconnect'),
    vaultBalance: document.getElementById('vaultBalance'),
    vaultNetwork: document.getElementById('vaultNetwork'),
    vaultWallet: document.getElementById('vaultWallet'),
    vaultConnect: document.getElementById('vaultConnect'),
    vaultArm: document.getElementById('vaultArm'),
    vaultMaxUsd: document.getElementById('vaultMaxUsd'),
    vaultSlippage: document.getElementById('vaultSlippage'),
    addFunds: document.getElementById('addFunds'),
    withdrawFunds: document.getElementById('withdrawFunds'),
    tutCat: document.getElementById('tutCat'),
    tutSearch: document.getElementById('tutSearch'),
    tutProgress: document.getElementById('tutProgress'),
    tutCatalog: document.getElementById('tutCatalog'),
    tutModeChooser: document.getElementById('tutModeChooser'),
    tutModeTitle: document.getElementById('tutModeTitle'),
    tutModeDesc: document.getElementById('tutModeDesc'),
    tutModeRead: document.getElementById('tutModeRead'),
    tutModeAI: document.getElementById('tutModeAI'),
    tutReader: document.getElementById('tutReader'),
    tutBack: document.getElementById('tutBack'),
    tutLessonTitle: document.getElementById('tutLessonTitle'),
    tutStepLabel: document.getElementById('tutStepLabel'),
    tutTtsToggle: document.getElementById('tutTtsToggle'),
    tutBody: document.getElementById('tutBody'),
    tutPrev: document.getElementById('tutPrev'),
    tutNext: document.getElementById('tutNext'),
    tutChatMessages: document.getElementById('tutChatMessages'),
    tutChatInput: document.getElementById('tutChatInput'),
    tutChatSend: document.getElementById('tutChatSend'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    modalClose: document.getElementById('modalClose'),
    modalPrimary: document.getElementById('modalPrimary'),
    modalSecondary: document.getElementById('modalSecondary'),

    chart: document.getElementById('chart'),
    chartFilterAll: document.getElementById('chartFilterAll'),
    chartFilterGains: document.getElementById('chartFilterGains'),
    chartFilterFalls: document.getElementById('chartFilterFalls'),
    chartFilterBirths: document.getElementById('chartFilterBirths'),
    chartFilterSandbox: document.getElementById('chartFilterSandbox'),
    chartSearch: document.getElementById('chartSearch'),
    chartAsset: document.getElementById('chartAsset'),
    chartTf: document.getElementById('chartTf'),
    chartAddLine: document.getElementById('chartAddLine'),
    chartClearLines: document.getElementById('chartClearLines'),
    chartRefresh: document.getElementById('chartRefresh'),
    chartStatAsset: document.getElementById('chartStatAsset'),
    chartStatLast: document.getElementById('chartStatLast'),
    chartStatChg: document.getElementById('chartStatChg'),
    chartLineReport: document.getElementById('chartLineReport'),
  };

  const state = {
    walletConnected: false,
    walletAddress: null,
    heartbeat: 0,
    autopilot: {
      active: false,
      startedAt: 0,
      endsAt: 0,
      durationMs: 24 * 60 * 60 * 1000,
      slices: 24,
      intervalMs: 60 * 60 * 1000,
      totalAmount: 0,
      sliceAmount: 0,
      nextIndex: 0,
      awaitingPaymentForIndex: null,
    },
    vault: {
      venue: 'onchain',
      network: 'solana',
      chainId: 8453,
      armed: false,
      maxUsdPerTrade: 250,
      slippageBps: 75,
    },
    leaders: new Map(),
    leadersLastFetchAt: 0,
    market: {
      connected: false,
      lastServerTs: 0,
      lastUpdateAt: 0,
      source: null,
      universe: new Map(),
      mode: 'gainers',
      lastEventTs: 0,
      birthKeys: new Set(),
      prevByKey: new Map(),
      lastSignalsAtByKey: new Map(),
    },
    audit: {
      connected: false,
      items: [],
    },
    brainPaused: false,
    pnl: 0,
    fees: 0,
    paper: {
      enabled: true,
      bankedUsd: 0,
      realizedUsd: 0,
      positions: new Map(),
    },
    billing: {
      subscribed: false,
      upfrontPaid: false,
      upfrontForTotal: 0,
    },
    user: {
      email: '',
      lastBillingFetchAt: 0,
    },
    ui: {
      simpleMode: false,
      actionStatus: 'Idle',
    },
    charts: {
      chart: null,
      series: null,
      liveSeries: null,
      liveHistory: new Map(),
      lastAsset: 'bitcoin',
      lastDays: 30,
      filter: 'all',
      priceLinesByAsset: new Map(),
      lastPriceByAsset: new Map(),
      lastCrossAtByLine: new Map(),
    },
    reports: [],
    reportsRendered: 0,
    reportsLastRenderedId: null,
    reportsNewPending: 0,
    
  };

  function isReportsActive() {
    return Boolean(document.querySelector('#tab-reports.panel.active'));
  }

  function loadVaultPrefs() {
    try {
      const net = String(localStorage.getItem('juzzy_vault_network') || '').trim();
      if (net === 'solana' || net === 'evm') state.vault.network = net;
    } catch {
      // ignore
    }

    try {
      const armed = localStorage.getItem('juzzy_vault_armed');
      if (armed === '1' || armed === '0') state.vault.armed = armed === '1';
    } catch {
      // ignore
    }

    try {
      const mx = Number(localStorage.getItem('juzzy_vault_max_usd') || '');
      if (Number.isFinite(mx) && mx > 0) state.vault.maxUsdPerTrade = mx;
    } catch {
      // ignore
    }

    try {
      const sl = Number(localStorage.getItem('juzzy_vault_slippage_bps') || '');
      if (Number.isFinite(sl) && sl >= 1 && sl <= 500) state.vault.slippageBps = sl;
    } catch {
      // ignore
    }

    if (els.vaultNetwork) {
      els.vaultNetwork.value = state.vault.network;
    }
    if (els.vaultArm) {
      els.vaultArm.checked = Boolean(state.vault.armed);
    }
    if (els.vaultMaxUsd) {
      els.vaultMaxUsd.value = String(state.vault.maxUsdPerTrade || 250);
    }
    if (els.vaultSlippage) {
      els.vaultSlippage.value = String(state.vault.slippageBps || 75);
    }
    renderVaultWallet();
  }

  function saveVaultNetwork(net) {
    const v = net === 'evm' ? 'evm' : 'solana';
    state.vault.network = v;
    try {
      localStorage.setItem('juzzy_vault_network', v);
    } catch {
      // ignore
    }
    emitAudit('VAULT_NETWORK', { network: v });
  }

  function saveVaultRiskPrefs() {
    const armed = Boolean(els.vaultArm?.checked);
    const maxUsd = Number(els.vaultMaxUsd?.value || state.vault.maxUsdPerTrade);
    const slippageBps = Number(els.vaultSlippage?.value || state.vault.slippageBps);

    state.vault.armed = armed;
    if (Number.isFinite(maxUsd) && maxUsd > 0) state.vault.maxUsdPerTrade = maxUsd;
    if (Number.isFinite(slippageBps) && slippageBps >= 1 && slippageBps <= 500) state.vault.slippageBps = slippageBps;

    try {
      localStorage.setItem('juzzy_vault_armed', armed ? '1' : '0');
      localStorage.setItem('juzzy_vault_max_usd', String(state.vault.maxUsdPerTrade));
      localStorage.setItem('juzzy_vault_slippage_bps', String(state.vault.slippageBps));
    } catch {
      // ignore
    }
    emitAudit('VAULT_RISK', { armed: state.vault.armed, maxUsdPerTrade: state.vault.maxUsdPerTrade, slippageBps: state.vault.slippageBps });
  }

  function shortAddr(a) {
    const s = String(a || '');
    if (s.length < 10) return s;
    return `${s.slice(0, 6)}…${s.slice(-4)}`;
  }

  function renderVaultWallet() {
    if (!els.vaultWallet) return;
    if (state.walletConnected && state.walletAddress) {
      els.vaultWallet.textContent = shortAddr(state.walletAddress);
    } else {
      els.vaultWallet.textContent = 'Not connected';
    }
  }

  function toHexQty(n) {
    const bi = typeof n === 'bigint' ? n : BigInt(String(n));
    return `0x${bi.toString(16)}`;
  }

  async function connectEvmWallet() {
    const eth = window.ethereum;
    if (!eth) throw new Error('MetaMask not found');
    const accts = await eth.request({ method: 'eth_requestAccounts' });
    const addr = Array.isArray(accts) ? String(accts[0] || '') : '';
    if (!addr) throw new Error('No account');
    state.walletConnected = true;
    state.walletAddress = addr;
    renderVaultWallet();
    emitAudit('WALLET_CONNECT', { network: 'evm', address: addr }, 'INFO');
    return addr;
  }

  async function ensureBaseChain() {
    const eth = window.ethereum;
    if (!eth) throw new Error('MetaMask not found');
    const want = state.vault.chainId || 8453;
    const curHex = await eth.request({ method: 'eth_chainId' });
    const cur = Number(curHex);
    if (cur === want) return;
    try {
      await eth.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x2105' }],
      });
    } catch (e) {
      throw new Error('Please switch MetaMask to Base');
    }
  }

  const BASE_USDC = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';

  async function fetch0xAllowance({ sellToken, owner }) {
    const url = `/api/0x/approve/allowance?chainId=${encodeURIComponent(state.vault.chainId)}&sellToken=${encodeURIComponent(sellToken)}&owner=${encodeURIComponent(owner)}`;
    const r = await fetch(url);
    if (!r.ok) throw new Error(`0x allowance failed (${r.status})`);
    return await r.json();
  }

  async function fetch0xApproveTx({ sellToken, amount }) {
    const qs = `chainId=${encodeURIComponent(state.vault.chainId)}&sellToken=${encodeURIComponent(sellToken)}&amount=${encodeURIComponent(amount || '')}`;
    const r = await fetch(`/api/0x/approve/transaction?${qs}`);
    if (!r.ok) throw new Error(`0x approve tx failed (${r.status})`);
    return await r.json();
  }

  async function fetch0xQuote({ buyToken, sellToken, sellAmount, takerAddress, slippageBps }) {
    const qs = `chainId=${encodeURIComponent(state.vault.chainId)}&buyToken=${encodeURIComponent(buyToken)}&sellToken=${encodeURIComponent(sellToken)}&sellAmount=${encodeURIComponent(sellAmount)}&takerAddress=${encodeURIComponent(takerAddress)}&slippageBps=${encodeURIComponent(slippageBps)}`;
    const r = await fetch(`/api/0x/quote?${qs}`);
    if (!r.ok) throw new Error(`0x quote failed (${r.status})`);
    return await r.json();
  }

  async function sendEvmTx(tx) {
    const eth = window.ethereum;
    if (!eth) throw new Error('MetaMask not found');
    return await eth.request({ method: 'eth_sendTransaction', params: [tx] });
  }

  async function executeEvmBuyFlow({ assetKey, buyTokenAddress, amountUsd }) {
    if (state.vault.network !== 'evm') throw new Error('Vault network not EVM');
    if (!state.vault.armed) throw new Error('Trading not armed');
    if (!state.walletConnected || !state.walletAddress) throw new Error('Wallet not connected');

    const maxUsd = Number(state.vault.maxUsdPerTrade || 0);
    if (Number.isFinite(maxUsd) && maxUsd > 0 && amountUsd > maxUsd) {
      throw new Error(`Amount exceeds max ($${formatMoney(maxUsd)})`);
    }

    await ensureBaseChain();

    const sellToken = BASE_USDC;
    const buyToken = String(buyTokenAddress);
    const sellAmount = String(BigInt(Math.floor(amountUsd * 1_000_000))); // USDC 6 decimals
    const quote = await fetch0xQuote({
      buyToken,
      sellToken,
      sellAmount,
      takerAddress: state.walletAddress,
      slippageBps: Number(state.vault.slippageBps || 75),
    });

    emitAudit('TRADE_QUOTE', { chainId: state.vault.chainId, assetKey, sellToken, buyToken, sellAmount, quote: { buyAmount: quote?.buyAmount, price: quote?.price, guaranteedPrice: quote?.guaranteedPrice } }, 'INFO');

    const allowance = await fetch0xAllowance({ sellToken, owner: state.walletAddress });
    const allowanceAmt = BigInt(String(allowance?.allowance || '0'));
    const need = BigInt(sellAmount);
    if (allowanceAmt < need) {
      const approveTx = await fetch0xApproveTx({ sellToken, amount: sellAmount });
      const txHash = await sendEvmTx({
        from: state.walletAddress,
        to: String(approveTx?.to || ''),
        data: String(approveTx?.data || ''),
        value: toHexQty(0n),
      });
      emitAudit('TRADE_APPROVE_SUBMIT', { chainId: state.vault.chainId, assetKey, sellToken, amount: sellAmount, txHash }, 'INFO');
    }

    const swapTx = {
      from: state.walletAddress,
      to: String(quote?.to || ''),
      data: String(quote?.data || ''),
      value: toHexQty(BigInt(String(quote?.value || '0'))),
    };
    const swapHash = await sendEvmTx(swapTx);
    emitAudit('TRADE_SWAP_SUBMIT', { chainId: state.vault.chainId, assetKey, swapHash, sellAmount, buyAmount: quote?.buyAmount }, 'INFO');

    state.reports.unshift({
      id: `X-${String(Date.now())}`,
      asset: String(state.market.universe.get(assetKey)?.symbol || assetKey).toUpperCase(),
      status: 'TRADE_SWAP_SUBMIT',
      notional: amountUsd,
      fee: 0,
      ts: Date.now(),
      detail: { safeguards: 930, reason: 'EVM swap submitted (Base).', data: { chainId: state.vault.chainId, assetKey, swapHash, sellToken, buyToken, sellAmount, buyAmount: quote?.buyAmount } },
    });
    applyReportsLiveUpdate();

    return { swapHash };
  }

  function clearChartPriceLines(assetKey) {
    const k = String(assetKey || state.charts.lastAsset || '');
    const lines = state.charts.priceLinesByAsset.get(k) || [];
    for (const l of lines) {
      try {
        state.charts.series?.removePriceLine(l);
      } catch {
        // ignore
      }
    }
    state.charts.priceLinesByAsset.set(k, []);
    try {
      localStorage.setItem(`juzzy_chart_lines_${k}`, JSON.stringify([]));
    } catch {
      // ignore
    }
  }

  function restoreChartPriceLines(assetKey) {
    const k = String(assetKey || state.charts.lastAsset || '');
    if (!state.charts.series) return;

    clearChartPriceLines(k);
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem(`juzzy_chart_lines_${k}`) || '[]');
    } catch {
      saved = [];
    }
    if (!Array.isArray(saved)) saved = [];

    const lines = [];
    for (const p of saved) {
      const price = Number(p);
      if (!Number.isFinite(price) || price <= 0) continue;
      try {
        const line = state.charts.series.createPriceLine({
          price,
          color: 'rgba(255,79,184,0.92)',
          lineWidth: 2,
          lineStyle: 2,
          axisLabelVisible: true,
          title: 'R',
        });
        lines.push(line);
      } catch {
        // ignore
      }
    }
    state.charts.priceLinesByAsset.set(k, lines);
    renderChartLineReport(k);
  }

  function getSavedLines(assetKey) {
    const k = String(assetKey || state.charts.lastAsset || '');
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem(`juzzy_chart_lines_${k}`) || '[]');
    } catch {
      saved = [];
    }
    if (!Array.isArray(saved)) saved = [];
    return saved.map((n) => Number(n)).filter((n) => Number.isFinite(n) && n > 0).sort((a, b) => a - b);
  }

  function renderChartLineReport(assetKey) {
    if (!els.chartLineReport) return;
    const k = String(assetKey || state.charts.lastAsset || '');
    const it = state.market.universe.get(k);
    const sym = String(it?.symbol || it?.name || k || '').toUpperCase();
    const lines = getSavedLines(k);
    const px = Number(it?.priceUsd);

    if (!lines.length) {
      els.chartLineReport.textContent = '';
      return;
    }

    const parts = [];
    parts.push(`AI lines report (${sym || 'ASSET'}):`);
    if (Number.isFinite(px) && px > 0) {
      const nearest = lines.reduce((best, v) => {
        const d = Math.abs(v - px);
        if (!best || d < best.d) return { v, d };
        return best;
      }, null);
      if (nearest) {
        const pct = ((nearest.v - px) / px) * 100;
        parts.push(`Nearest line $${formatMoney(nearest.v)} (${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%)`);
      }
    }
    parts.push(`Lines: ${lines.map((v) => `$${formatMoney(v)}`).join(' · ')}`);
    els.chartLineReport.textContent = parts.join(' ');
  }

  function recordTradeIntent({ side, assetKey, priceUsd, lineUsd, reason }) {
    const it = state.market.universe.get(assetKey);
    const sym = String(it?.symbol || it?.name || assetKey).toUpperCase();
    const msg = `Trade intent (${side}) ${sym} @ ~$${formatMoney(priceUsd)} (line $${formatMoney(lineUsd)}).`;

    emitAudit('TRADE_INTENT', { side, assetKey, symbol: sym, priceUsd, lineUsd, reason }, 'INFO');
    state.reports.unshift({
      id: `T-${String(Date.now())}`,
      asset: sym,
      status: 'TRADE_INTENT',
      notional: 0,
      fee: 0,
      ts: Date.now(),
      detail: { safeguards: 940, reason: msg, data: { side, assetKey, priceUsd, lineUsd, reason } },
    });
    applyReportsLiveUpdate();
  }

  function maybePromptTradeOnCross({ assetKey, priceUsd, lineUsd, dir }) {
    const cooldownKey = `${String(assetKey)}|${String(lineUsd)}|${String(dir)}`;
    const last = Number(state.charts.lastCrossAtByLine.get(cooldownKey) || 0);
    if (Date.now() - last < 45_000) return;
    state.charts.lastCrossAtByLine.set(cooldownKey, Date.now());

    const it = state.market.universe.get(assetKey);
    const sym = String(it?.symbol || it?.name || assetKey).toUpperCase();
    const side = dir === 'up' ? 'BUY' : 'SELL';
    const network = String(state.vault?.network || 'solana');
    const venueLabel = network === 'evm' ? 'EVM (MetaMask)' : 'Solana (Phantom + Jupiter)';

    const canExecuteEvmBuy = Boolean(
      network === 'evm' &&
        state.vault.armed &&
        side === 'BUY' &&
        String(it?.source || '') === 'dexscreener' &&
        String(it?.dex?.baseTokenAddress || ''),
    );

    openModal({
      title: `Line crossed: ${sym}`,
      bodyHtml: `
        <div class="muted">Price crossed <strong>$${formatMoney(lineUsd)}</strong> (${dir.toUpperCase()}).</div>
        <div class="muted">Current price: <strong>$${formatMoney(priceUsd)}</strong></div>
        <div class="muted small" style="margin-top:10px">AI note: a resistance break can signal continuation; a breakdown can signal weakness. Always confirm risk.</div>
        <div class="muted small" style="margin-top:10px">Venue: <strong>${venueLabel}</strong> (Base)</div>
        <div class="muted small" style="margin-top:10px">${canExecuteEvmBuy ? 'Mode: <strong>Live execute</strong> (will ask MetaMask to confirm).' : 'Mode: <strong>Intent only</strong> (execution unavailable for this asset/side or not armed). Your choice will be logged.'}</div>
      `,
      primaryText: canExecuteEvmBuy ? 'Quote + Confirm BUY' : `Confirm ${side}`,
      secondaryText: 'Cancel',
      onPrimary: async () => {
        if (!canExecuteEvmBuy) {
          recordTradeIntent({ side, assetKey, priceUsd, lineUsd, reason: `Line crossed ${dir}` });
          return;
        }

        try {
          if (!state.walletConnected) {
            await connectEvmWallet();
          }

          const raw = window.prompt(`Buy amount in USDC on Base (max $${formatMoney(state.vault.maxUsdPerTrade)}):`, '25');
          if (raw == null) return;
          const amountUsd = Number(String(raw).trim());
          if (!Number.isFinite(amountUsd) || amountUsd <= 0) return;

          const buyTokenAddress = String(it?.dex?.baseTokenAddress || '').trim();
          if (!buyTokenAddress) throw new Error('Missing token address');

          openModal({
            title: `Confirm BUY ${sym}`,
            bodyHtml: `<div class="muted">You are about to swap <strong>$${formatMoney(amountUsd)} USDC</strong> for <strong>${sym}</strong> on <strong>Base</strong>.</div><div class="muted small" style="margin-top:10px">Slippage: ${Number(state.vault.slippageBps || 75)} bps. MetaMask will ask you to confirm approval (if needed) and the swap.</div>`,
            primaryText: 'Execute in MetaMask',
            secondaryText: 'Cancel',
            onPrimary: async () => {
              try {
                await executeEvmBuyFlow({ assetKey, buyTokenAddress, amountUsd });
              } catch (e) {
                appendTerminal('WARN', `Trade failed: ${String(e?.message || e)}`);
                emitAudit('TRADE_SWAP_ERR', { chainId: state.vault.chainId, assetKey, error: String(e?.message || e) }, 'WARN');
                recordTradeIntent({ side: 'BUY', assetKey, priceUsd, lineUsd, reason: `Execution failed: ${String(e?.message || e)}` });
              }
            },
          });
        } catch (e) {
          appendTerminal('WARN', `Trade unavailable: ${String(e?.message || e)}`);
          emitAudit('TRADE_UNAVAILABLE', { assetKey, error: String(e?.message || e) }, 'WARN');
          recordTradeIntent({ side, assetKey, priceUsd, lineUsd, reason: `Trade unavailable: ${String(e?.message || e)}` });
        }
      },
    });
  }

  function checkResistanceCrosses(assetKey) {
    const k = String(assetKey || state.charts.lastAsset || '');
    const it = state.market.universe.get(k);
    const px = Number(it?.priceUsd);
    if (!Number.isFinite(px) || px <= 0) return;

    const prev = Number(state.charts.lastPriceByAsset.get(k) || 0);
    state.charts.lastPriceByAsset.set(k, px);
    if (!Number.isFinite(prev) || prev <= 0) return;

    const lines = getSavedLines(k);
    if (!lines.length) return;

    for (const lineUsd of lines) {
      if (prev < lineUsd && px >= lineUsd) {
        maybePromptTradeOnCross({ assetKey: k, priceUsd: px, lineUsd, dir: 'up' });
      }
      if (prev > lineUsd && px <= lineUsd) {
        maybePromptTradeOnCross({ assetKey: k, priceUsd: px, lineUsd, dir: 'down' });
      }
    }
  }

  async function fetchBinanceKlines(symbolUsdt, limit = 500) {
    const url = `/api/binance/klines?symbol=${encodeURIComponent(symbolUsdt)}&interval=1m&limit=${encodeURIComponent(limit)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Binance klines failed (${res.status})`);
    const payload = await res.json();
    const items = Array.isArray(payload?.items) ? payload.items : [];
    return items
      .map((k) => {
        const t = Math.floor(Number(k?.[0] || 0) / 1000);
        const open = Number(k?.[1]);
        const high = Number(k?.[2]);
        const low = Number(k?.[3]);
        const close = Number(k?.[4]);
        if (!t || !Number.isFinite(open) || !Number.isFinite(high) || !Number.isFinite(low) || !Number.isFinite(close)) return null;
        return { time: t, open, high, low, close };
      })
      .filter(Boolean);
  }

  function isNearTop(el) {
    if (!el) return true;
    return (el.scrollTop || 0) <= 20;
  }

  function isNearBottom(el) {
    if (!el) return false;
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 120;
  }

  function updateReportsNewIndicator() {
    if (!els.reportsNewBtn || !els.reportsNewCount) return;
    const n = Number(state.reportsNewPending || 0);
    els.reportsNewCount.textContent = String(n);
    els.reportsNewBtn.hidden = n <= 0;
  }

  function buildReportRow(r) {
    const el = document.createElement('div');
    el.className = 'report';

    const dt = new Date(r.ts);
    const date = dt.toLocaleString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    el.innerHTML = `
      <div>
        <div class="id">${escapeHtml(r.id)}</div>
        <div class="muted small">${escapeHtml(date)}</div>
      </div>
      <div>
        <div style="font-weight:950">${escapeHtml(r.asset)}</div>
        <div class="muted small">Notional $${formatMoney(r.notional)}</div>
      </div>
      <div>
        <div style="font-weight:950">${escapeHtml(r.status)}</div>
        <div class="muted small">Fee $${formatMoney(r.fee)}</div>
      </div>
      <div class="right">
        <button class="btn" style="height:38px">Open</button>
      </div>
    `;

    el.addEventListener('click', () => {
      openModal({
        title: `${r.id} — ${r.asset}`,
        bodyHtml: `
          <div class="muted">Status: <strong>${escapeHtml(r.status)}</strong></div>
          <div class="muted">Notional: <strong>$${formatMoney(r.notional)}</strong></div>
          <div class="muted">Service fee (1%): <strong>$${formatMoney(r.fee)}</strong></div>
          <div class="muted">Safeguards: <strong>${r.detail.safeguards}</strong></div>
          <div class="muted" style="margin-top:10px">${escapeHtml(r.detail.reason)}</div>
          <div class="muted small" style="margin-top:10px">In V2 this drill-down can link out to raw logs, routes, and risk checks.</div>
        `,
        primaryText: 'Close',
        secondaryText: 'OK',
      });
    });

    return el;
  }

  function applyReportsLiveUpdate() {
    if (!els.reportsList) return;
    if (!isReportsActive()) return;
    if (state.reportsRendered <= 0) return;

    const currentTopId = state.reportsLastRenderedId;
    if (!currentTopId) return;
    const q = (els.reportSearch?.value || '').trim();
    if (q) return;

    const idx = state.reports.findIndex((r) => r && r.id === currentTopId);
    if (idx <= 0) return;

    const newOnes = state.reports.slice(0, idx);
    if (newOnes.length === 0) return;

    if (!isNearTop(els.reportsList)) {
      state.reportsNewPending += newOnes.length;
      updateReportsNewIndicator();
      return;
    }

    const prevScrollHeight = els.reportsList.scrollHeight;
    for (let i = newOnes.length - 1; i >= 0; i--) {
      const node = buildReportRow(newOnes[i]);
      els.reportsList.prepend(node);
      state.reportsRendered += 1;
    }
    state.reportsLastRenderedId = state.reports[0]?.id || state.reportsLastRenderedId;

    const delta = els.reportsList.scrollHeight - prevScrollHeight;
    els.reportsList.scrollTop += delta;
  }


  let marketStreamClient = null;
  let auditStreamClient = null;

  const brain = {
    lastGlobalSignalAt: 0,
    lastByKindKey: new Map(),
    maxSignalsPerMinute: 18,
    signalWindow: [],
  };

  function isRateLimited() {
    const now = Date.now();
    brain.signalWindow = brain.signalWindow.filter((t) => now - t < 60_000);
    return brain.signalWindow.length >= brain.maxSignalsPerMinute;
  }

  function canSignal(kind, key, cooldownMs) {
    const now = Date.now();
    const k = `${String(kind)}::${String(key || '')}`;
    const last = Number(brain.lastByKindKey.get(k) || 0);
    if (now - last < (Number(cooldownMs) || 0)) return false;
    if (isRateLimited()) return false;
    brain.lastByKindKey.set(k, now);
    brain.signalWindow.push(now);
    brain.lastGlobalSignalAt = now;
    return true;
  }

  function formatMoney(n) {
    const v = Number(n) || 0;
    return v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function connectSseWithRetry(url, handlers, label) {
    let es = null;
    let retry = 0;
    let stopped = false;

    const baseDelayMs = 600;
    const maxDelayMs = 15_000;

    function close() {
      try {
        if (es) es.close();
      } catch {
        // ignore
      }
      es = null;
    }

    function scheduleReconnect() {
      if (stopped) return;
      const delay = Math.min(maxDelayMs, Math.floor(baseDelayMs * 2 ** retry));
      const jitter = Math.floor(Math.random() * 350);
      window.setTimeout(() => {
        if (stopped) return;
        retry = Math.min(6, retry + 1);
        connect();
      }, delay + jitter);
    }

    function connect() {
      close();
      try {
        es = new EventSource(url);
      } catch {
        scheduleReconnect();
        return;
      }

      es.onopen = () => {
        retry = 0;
        if (handlers?.onopen) handlers.onopen();
      };
      es.onerror = () => {
        if (handlers?.onerror) handlers.onerror();
        close();
        scheduleReconnect();
      };
      es.onmessage = (ev) => {
        if (handlers?.onmessage) handlers.onmessage(ev);
      };
    }

    connect();

    return {
      label,
      stop() {
        stopped = true;
        close();
      },
    };
  }

  function isCoinGeckoItem(item) {
    return item && item.source === 'coingecko' && typeof item.id === 'string' && item.id.length > 0;
  }

  function setChartFilter(filter) {
    state.charts.filter = String(filter || 'all');
    if (els.chartFilterAll) els.chartFilterAll.classList.toggle('active', state.charts.filter === 'all');
    if (els.chartFilterGains) els.chartFilterGains.classList.toggle('active', state.charts.filter === 'gains');
    if (els.chartFilterFalls) els.chartFilterFalls.classList.toggle('active', state.charts.filter === 'falls');
    if (els.chartFilterBirths) els.chartFilterBirths.classList.toggle('active', state.charts.filter === 'births');
    if (els.chartFilterSandbox) els.chartFilterSandbox.classList.toggle('active', state.charts.filter === 'sandbox');
    populateChartAssetOptions();
  }

  function populateChartAssetOptions() {
    if (!els.chartAsset) return;

    const SANDBOX_LIQ_USD_MAX = 200_000;
    const SANDBOX_AGE_MS_MAX = 24 * 60 * 60 * 1000;
    const BIRTH_AGE_MS_MAX = 2 * 60 * 60 * 1000;

    const q = String(els.chartSearch?.value || '').trim().toLowerCase();
    const selected = String(els.chartAsset.value || '');

    const items = Array.from(state.market.universe.values());
    const births = state.market.birthKeys;
    const filter = state.charts.filter;

    const filtered = items
      .filter((it) => {
        const sym = String(it?.symbol || '').toLowerCase();
        const name = String(it?.name || '').toLowerCase();
        if (q && !sym.includes(q) && !name.includes(q)) return false;
        const chg = Number(it?.chg24Pct);
        if (filter === 'gains') return Number.isFinite(chg) && chg > 0;
        if (filter === 'falls') return Number.isFinite(chg) && chg < 0;
        if (filter === 'births') {
          const createdAt = Number(it?.dex?.pairCreatedAt);
          const ageOk = Number.isFinite(createdAt) ? Date.now() - createdAt <= BIRTH_AGE_MS_MAX : false;
          return ageOk || Boolean(it?.key && births && births.has(it.key));
        }
        if (filter === 'sandbox') {
          if (String(it?.source || '') !== 'dexscreener') return false;
          const liq = Number(it?.dex?.liquidityUsd);
          const createdAt = Number(it?.dex?.pairCreatedAt);
          const ageOk = Number.isFinite(createdAt) ? Date.now() - createdAt <= SANDBOX_AGE_MS_MAX : false;
          const liqOk = Number.isFinite(liq) ? liq <= SANDBOX_LIQ_USD_MAX : false;
          return ageOk || liqOk;
        }
        return true;
      })
      .sort((a, b) => {
        const av = Number(a?.vol24Usd || 0);
        const bv = Number(b?.vol24Usd || 0);
        if (bv !== av) return bv - av;
        const achg = Math.abs(Number(a?.chg24Pct || 0));
        const bchg = Math.abs(Number(b?.chg24Pct || 0));
        return bchg - achg;
      })
      .slice(0, 400);

    els.chartAsset.innerHTML = '';
    for (const it of filtered) {
      const sym = String(it?.symbol || '').toUpperCase();
      if (!sym) continue;
      const opt = document.createElement('option');
      opt.value = String(it.key);
      opt.textContent = `${it.name || sym} (${sym})`;
      els.chartAsset.appendChild(opt);
    }

    if (selected && Array.from(els.chartAsset.options).some((o) => o.value === selected)) {
      els.chartAsset.value = selected;
      return;
    }

    if (els.chartAsset.options.length > 0) {
      els.chartAsset.value = els.chartAsset.options[0].value;
    }

    // Show empty-state hint when filter yields no results
    const noResults = els.chartAsset.options.length === 0;
    if (noResults && (filter === 'births' || filter === 'sandbox')) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = filter === 'births'
        ? '(No new tokens in the last 2 hours)'
        : '(No sandbox tokens found right now)';
      opt.disabled = true;
      opt.selected = true;
      els.chartAsset.appendChild(opt);
    }

    // If the selected asset changed, refresh the chart
    const newSel = String(els.chartAsset.value || '');
    if (newSel && newSel !== selected) {
      refreshChart();
    }
  }

  function upsertLivePoint(key, priceUsd) {
    if (!key) return;
    const px = Number(priceUsd);
    if (!Number.isFinite(px) || px <= 0) return;
    const arr = state.charts.liveHistory.get(key) || [];
    const t = Math.floor(Date.now() / 1000);
    const last = arr[arr.length - 1];
    if (last && last.time === t) {
      last.value = px;
    } else {
      arr.push({ time: t, value: px });
    }
    if (arr.length > 600) arr.splice(0, arr.length - 600);
    state.charts.liveHistory.set(key, arr);
    checkResistanceCrosses(key);
  }

  function nowTs() {
    const d = new Date();
    return d.toLocaleTimeString(undefined, { hour12: false });
  }

  function wireGlobalErrorHandlers() {
    window.addEventListener('error', (e) => {
      try {
        const msg = String(e?.message || 'Runtime error');
        const src = String(e?.filename || '');
        const line = Number(e?.lineno || 0);
        appendTerminal('ERR', `JS error: ${msg}${src ? ` (${src}${line ? `:${line}` : ''})` : ''}`);
        emitAudit('JS_ERROR', { message: msg, filename: src || null, lineno: Number.isFinite(line) ? line : null }, 'ERR');
      } catch {
        // ignore
      }
    });

    window.addEventListener('unhandledrejection', (e) => {
      try {
        const reason = e?.reason;
        const msg = String(reason?.message || reason || 'Unhandled promise rejection');
        appendTerminal('ERR', `Unhandled rejection: ${msg}`);
        emitAudit('JS_UNHANDLED_REJECTION', { message: msg }, 'ERR');
      } catch {
        // ignore
      }
    });
  }

  function renderTopStatus() {
    if (!els.statusText) return;
    const freshMs = 12_000;
    const last = Number(state.market.lastUpdateAt || 0);
    const age = last ? Date.now() - last : Infinity;
    const isFresh = Number.isFinite(age) && age >= 0 && age <= freshMs;
    const live = state.market.connected || isFresh;
    const mode = state.market.connected ? 'SSE' : isFresh ? 'SNAP' : 'OFF';
    const action = String(state.ui.actionStatus || 'Idle');
    els.statusText.textContent = live ? `LIVE:${mode}` : action;
  }

  function setStatus(text) {
    state.ui.actionStatus = String(text || 'Idle');
    renderTopStatus();
  }

  function updatePaperKpis() {
    if (els.kpiBanked) els.kpiBanked.textContent = `$${formatMoney(state.paper.bankedUsd)}`;
    if (!els.kpiPaperPnl) return;

    let pnl = 0;
    for (const pos of state.paper.positions.values()) {
      const cur = state.market.universe.get(pos.key);
      const px = Number(cur?.priceUsd);
      if (!Number.isFinite(px)) continue;
      const value = px * pos.qty;
      pnl += value - pos.notionalUsd;
    }
    els.kpiPaperPnl.textContent = `$${formatMoney(pnl)}`;
  }

  function ensurePaperPosition(it, notionalUsd = 100) {
    if (!state.paper.enabled) return;
    if (!it?.key) return;
    const key = String(it.key);
    const symbol = String(it.symbol || '').toUpperCase();
    const name = String(it.name || symbol || key);
    const px = Number(it.priceUsd);
    if (!Number.isFinite(px) || px <= 0) return;
    if (state.paper.positions.has(key)) return;

    const qty = notionalUsd / px;
    state.paper.positions.set(key, {
      key,
      symbol,
      name,
      entryPriceUsd: px,
      notionalUsd,
      qty,
      lastBankStep: 0,
      createdAt: Date.now(),
    });

    state.reports.unshift({
      id: `P-${String(Date.now())}`,
      asset: symbol || name,
      status: 'PAPER_TRACK_START',
      notional: notionalUsd,
      fee: 0,
      ts: Date.now(),
      detail: { safeguards: 980, reason: `Paper tracking started: entry $${formatMoney(px)}.` },
    });
    applyReportsLiveUpdate();
    emitAudit('PAPER_TRACK_START', { key, symbol, name, entryPriceUsd: px, notionalUsd }, 'INFO');
    updatePaperKpis();
  }

  function paperBankingTick() {
    if (!state.paper.enabled) return;
    let bankedAny = false;

    for (const pos of state.paper.positions.values()) {
      const cur = state.market.universe.get(pos.key);
      const px = Number(cur?.priceUsd);
      if (!Number.isFinite(px) || px <= 0) continue;

      const pct = ((px - pos.entryPriceUsd) / pos.entryPriceUsd) * 100;
      if (!Number.isFinite(pct)) continue;

      const step = Math.floor(pct / 10) * 10;
      const bankPerStepUsd = Math.max(0, pos.notionalUsd * 0.005);
      while (step >= pos.lastBankStep + 10) {
        pos.lastBankStep += 10;
        const bankUsd = bankPerStepUsd;
        if (bankUsd > 0) {
          state.paper.bankedUsd += bankUsd;
          state.paper.realizedUsd += bankUsd;
          bankedAny = true;

          state.reports.unshift({
            id: `BK-${String(Date.now())}`,
            asset: pos.symbol || pos.name,
            status: 'PAPER_BANK_GAIN',
            notional: bankUsd,
            fee: 0,
            ts: Date.now(),
            detail: {
              safeguards: 990,
              reason: `Banked 5% of gains at +${pos.lastBankStep}% step.`,
              key: pos.key,
              entryPriceUsd: pos.entryPriceUsd,
              priceUsd: px,
              bankUsd,
            },
          });
          emitAudit('PAPER_BANK_GAIN', { key: pos.key, symbol: pos.symbol, step: pos.lastBankStep, bankUsd, entryPriceUsd: pos.entryPriceUsd, priceUsd: px }, 'INFO');
        }
      }
    }

    if (bankedAny) {
      applyReportsLiveUpdate();
      updatePaperKpis();
    }
  }

  function setSimpleMode(on) {
    state.ui.simpleMode = Boolean(on);
    if (FEATURES.simpleMode) {
      document.body.classList.toggle('simple-mode', state.ui.simpleMode);
      if (els.simpleBar) els.simpleBar.hidden = !state.ui.simpleMode;
      if (els.simpleModeBtn) els.simpleModeBtn.textContent = state.ui.simpleMode ? 'Pro Mode' : 'Simple Mode';
    }
    localStorage.setItem('pos_simple_mode', state.ui.simpleMode ? '1' : '0');
  }

  function getEmail() {
    return (state.user.email || '').trim();
  }

  function validateEmail(email) {
    // Basic sanity check (not strict RFC validation)
    return /.+@.+\..+/.test(email);
  }

  function setAutoUi() {
    els.oneInvest.disabled = !canStartAutopilot();
    els.stopAuto.disabled = !state.autopilot.active;
    els.autoStatus.textContent = state.autopilot.active ? 'Running (24h)' : 'Off';

    els.gateSub.checked = state.billing.subscribed;
    els.gateUpfront.checked = state.billing.upfrontPaid && state.billing.upfrontForTotal === Number(els.fuel.value || 0);

    if (els.simpleStart) els.simpleStart.disabled = !canStartAutopilot();
    if (els.simpleStop) els.simpleStop.disabled = !state.autopilot.active;
  }

  function canStartAutopilot() {
    if (state.autopilot.active) return false;

    const total = Number(els.fuel.value || 0);
    const paidForThisTotal = state.billing.upfrontPaid && state.billing.upfrontForTotal === total;

    return Boolean(
      state.billing.subscribed &&
        paidForThisTotal &&
        els.gateRisk.checked &&
        els.gateFee.checked &&
        els.gateTime.checked,
    );
  }

  function qsAll(sel) {
    return Array.from(document.querySelectorAll(sel));
  }

  function setActiveTab(tab) {
    qsAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === tab));
    qsAll('.panel').forEach((p) => p.classList.toggle('active', p.id === `tab-${tab}`));


    if (tab === 'charts') {
      window.setTimeout(() => initOrResizeChart(), 0);
    }

    if (tab === 'leaders') {
      renderLeaders();
    }

    if (tab === 'reports') {
      resetReportsRender();
    }

    if (tab === 'ops') {
      renderOps();
    }

    emitAudit('UI_TAB', { tab });
  }

  async function emitAudit(type, data, level = 'INFO') {
    try {
      const email = getEmail();
      await postJson('/api/audit/emit', {
        type,
        level,
        source: 'client',
        email,
        data: data ?? null,
      });
    } catch {
      // ignore
    }
  }

  function renderOps() {
    if (els.opsUniverse) els.opsUniverse.textContent = String(state.market.universe.size || 0);
    if (els.opsLastMarket) {
      const t = Number(state.market.lastUpdateAt || 0);
      els.opsLastMarket.textContent = t ? new Date(t).toLocaleTimeString(undefined, { hour12: false }) : '—';
    }
    if (els.opsLag) {
      const lag = state.market.lastServerTs ? Math.max(0, Date.now() - state.market.lastServerTs) : 0;
      els.opsLag.textContent = state.market.lastServerTs ? `${Math.floor(lag)}ms` : '—';
    }

    if (els.opsFresh) {
      const age = state.market.lastUpdateAt ? Math.max(0, Date.now() - state.market.lastUpdateAt) : Infinity;
      els.opsFresh.textContent = Number.isFinite(age) ? `${Math.floor(age / 1000)}s` : '—';
    }
    if (els.opsAuditFresh) {
      const lastAuditTs = Number(state.audit.items?.[0]?.ts || 0);
      const age = lastAuditTs ? Math.max(0, Date.now() - lastAuditTs) : Infinity;
      els.opsAuditFresh.textContent = Number.isFinite(age) ? `${Math.floor(age / 1000)}s` : '—';
    }

    if (els.opsMarket) els.opsMarket.textContent = state.market.connected ? 'LIVE' : 'OFF';
    if (els.opsAudit) els.opsAudit.textContent = state.audit.connected ? 'LIVE' : 'OFF';

    renderTopStatus();

    const src = state.market.source || {};
    if (els.opsCg) els.opsCg.textContent = src?.coingecko?.ok ? 'OK' : src?.coingecko ? 'ERR' : '—';
    if (els.opsBn) els.opsBn.textContent = src?.binance?.ok ? 'OK' : src?.binance ? 'ERR' : '—';
    if (els.opsDex) els.opsDex.textContent = src?.dex?.ok ? 'OK' : src?.dex ? 'ERR' : '—';
    if (els.opsPaperPos) els.opsPaperPos.textContent = String(state.paper.positions.size || 0);
    if (els.opsPaperBanked) els.opsPaperBanked.textContent = `$${formatMoney(state.paper.bankedUsd)}`;

    if (els.opsAuditList) {
      els.opsAuditList.innerHTML = '';
      for (const e of state.audit.items.slice(0, 120)) {
        const line = document.createElement('div');
        line.className = 'term-line';
        const ts = new Date(e.ts || Date.now()).toLocaleTimeString(undefined, { hour12: false });
        line.innerHTML = `<div class="term-ts">${escapeHtml(ts)}</div><div>[${escapeHtml(String(e.level || 'INFO'))}] ${escapeHtml(String(e.type || 'EVENT'))}</div>`;
        els.opsAuditList.appendChild(line);
      }
    }
  }

  function brainSignal(level, msg, data) {
    appendTerminal(level, msg);
    emitAudit('BRAIN_SIGNAL', { level, msg, ...(data || {}) }, level === 'WARN' ? 'WARN' : 'INFO');
    state.reports.unshift({
      id: `S-${String(Date.now())}`,
      asset: String(data?.symbol || data?.name || 'MARKET'),
      status: 'LIVE_SIGNAL',
      notional: 0,
      fee: 0,
      ts: Date.now(),
      detail: { safeguards: 985, reason: msg, data: data || null },
    });
    applyReportsLiveUpdate();
  }

  function computeBrainSignalsFromSnapshot() {
    if (state.brainPaused) return;
    const now = Date.now();

    const SANDBOX_LIQ_USD_MAX = 120_000;
    const SANDBOX_VOL_USD_MAX = 450_000;
    const MOVERS_VOL_USD_MIN = 2_000_000;
    const MOVERS_CHG_MIN = 18;
    const REVERSAL_CHG_MIN = 12;
    const VOL_SPIKE_MULT = 3.2;

    const movers = [];
    const revs = [];
    const volSpikes = [];

    for (const it of state.market.universe.values()) {
      const key = String(it?.key || '');
      if (!key) continue;
      const sym = String(it?.symbol || '').toUpperCase();
      const chg = Number(it?.chg24Pct);
      const vol = Number(it?.vol24Usd);
      const px = Number(it?.priceUsd);
      if (!sym || !Number.isFinite(chg) || !Number.isFinite(px)) continue;

      const prev = state.market.prevByKey.get(key);
      const prevChg = Number(prev?.chg24Pct);
      const prevVol = Number(prev?.vol24Usd);

      if (Number.isFinite(vol) && vol >= MOVERS_VOL_USD_MIN && Math.abs(chg) >= MOVERS_CHG_MIN) {
        movers.push({ key, sym, chg, vol, px, src: String(it?.source || '') });
      }

      if (Number.isFinite(prevChg) && Math.abs(prevChg) >= REVERSAL_CHG_MIN && Math.abs(chg) >= REVERSAL_CHG_MIN) {
        const flipped = (prevChg > 0 && chg < 0) || (prevChg < 0 && chg > 0);
        if (flipped) {
          revs.push({ key, sym, chg, prevChg, vol, px, src: String(it?.source || '') });
        }
      }

      if (Number.isFinite(vol) && Number.isFinite(prevVol) && prevVol > 0 && vol / prevVol >= VOL_SPIKE_MULT) {
        volSpikes.push({ key, sym, chg, vol, prevVol, px, src: String(it?.source || '') });
      }
    }

    movers.sort((a, b) => Math.abs(b.chg) - Math.abs(a.chg));
    const top = movers.slice(0, 3);
    for (const m of top) {
      if (!canSignal('mover', m.key, 90_000)) continue;
      const dir = m.chg >= 0 ? 'UP' : 'DOWN';
      brainSignal('SCAN', `Mover ${dir}: ${m.sym} ${m.chg.toFixed(2)}% (24h) · vol $${formatMoney(m.vol)}`, {
        key: m.key,
        symbol: m.sym,
        chg24Pct: m.chg,
        vol24Usd: m.vol,
        priceUsd: m.px,
        source: m.src,
      });
    }

    revs.sort((a, b) => Math.abs(b.chg - b.prevChg) - Math.abs(a.chg - a.prevChg));
    for (const r of revs.slice(0, 2)) {
      if (!canSignal('reversal', r.key, 3 * 60_000)) continue;
      const dir = r.chg >= 0 ? 'UP' : 'DOWN';
      brainSignal('WARN', `Reversal: ${r.sym} flipped ${r.prevChg.toFixed(2)}% → ${r.chg.toFixed(2)}% · now ${dir}`, {
        key: r.key,
        symbol: r.sym,
        chg24Pct: r.chg,
        prevChg24Pct: r.prevChg,
        vol24Usd: r.vol,
        priceUsd: r.px,
        source: r.src,
      });
    }

    volSpikes.sort((a, b) => (b.vol / Math.max(1, b.prevVol)) - (a.vol / Math.max(1, a.prevVol)));
    for (const v of volSpikes.slice(0, 2)) {
      if (!canSignal('volSpike', v.key, 3 * 60_000)) continue;
      const mult = v.prevVol > 0 ? v.vol / v.prevVol : 0;
      if (v.vol < 1_000_000) continue;
      brainSignal('SCAN', `Volume spike: ${v.sym} x${mult.toFixed(1)} · vol $${formatMoney(v.vol)}`, {
        key: v.key,
        symbol: v.sym,
        chg24Pct: v.chg,
        vol24Usd: v.vol,
        prevVol24Usd: v.prevVol,
        priceUsd: v.px,
        source: v.src,
      });
    }

    for (const k of state.market.birthKeys) {
      const it = state.market.universe.get(k);
      if (!it) continue;
      if (!canSignal('sandbox', k, 5 * 60_000)) continue;
      const sym = String(it?.symbol || '').toUpperCase();
      const chain = String(it?.dex?.chainId || 'dex');
      const liq = Number(it?.dex?.liquidityUsd);
      const vol = Number(it?.vol24Usd);
      if (Number.isFinite(liq) && liq > 120_000) continue;
      if (Number.isFinite(vol) && vol > 450_000) continue;
      brainSignal('DEX', `Sandbox watch: ${sym} on ${chain} · liq $${formatMoney(liq)} · vol $${formatMoney(vol)}`, {
        key: String(k),
        symbol: sym,
        chainId: chain,
        liquidityUsd: liq,
        vol24Usd: vol,
        source: 'dexscreener',
      });
    }
  }

  function connectAuditStream() {
    if (!window.EventSource) return;
    if (auditStreamClient) auditStreamClient.stop();
    auditStreamClient = connectSseWithRetry(
      '/api/audit/stream',
      {
        onopen: () => {
          state.audit.connected = true;
          renderOps();
        },
        onerror: () => {
          state.audit.connected = false;
          renderOps();
        },
        onmessage: (ev) => {
          try {
            const payload = JSON.parse(ev.data);
            if (payload?.type === 'audit_seed' && Array.isArray(payload.items)) {
              state.audit.items = payload.items;
              renderOps();
              return;
            }
            if (payload?.type === 'audit_event' && payload.event) {
              state.audit.items.unshift(payload.event);
              if (state.audit.items.length > 500) state.audit.items.length = 500;
              if (document.querySelector('#tab-ops.panel.active')) renderOps();
            }
          } catch {
            // ignore
          }
        },
      },
      'audit'
    );
  }

  function setLeadersMode(mode) {
    state.market.mode = mode === 'losers' ? 'losers' : 'gainers';
    if (els.leadersModeGainers) els.leadersModeGainers.classList.toggle('active', state.market.mode === 'gainers');
    if (els.leadersModeLosers) els.leadersModeLosers.classList.toggle('active', state.market.mode === 'losers');
    renderLeaders();
  }

  function initOrResizeChart() {
    if (!FEATURES.charts) return;
    if (!els.chart) return;
    if (!window.LightweightCharts) return;

    if (!state.charts.chart) {
      const c = window.LightweightCharts.createChart(els.chart, {
        layout: { background: { color: 'rgba(0,0,0,0)' }, textColor: 'rgba(234,240,255,0.9)' },
        grid: { vertLines: { color: 'rgba(255,255,255,0.06)' }, horzLines: { color: 'rgba(255,255,255,0.06)' } },
        rightPriceScale: { borderColor: 'rgba(255,255,255,0.12)' },
        timeScale: { borderColor: 'rgba(255,255,255,0.12)' },
      });
      const series = c.addCandlestickSeries({
        upColor: '#00e5ff',
        downColor: '#ff2bd6',
        borderDownColor: '#ff2bd6',
        borderUpColor: '#00e5ff',
        wickDownColor: 'rgba(255,43,214,0.85)',
        wickUpColor: 'rgba(0,229,255,0.85)',
      });
      const liveSeries = c.addLineSeries({
        color: 'rgba(0,229,255,0.95)',
        lineWidth: 2,
      });
      state.charts.chart = c;
      state.charts.series = series;
      state.charts.liveSeries = liveSeries;
    }

    const w = els.chart.clientWidth;
    const h = els.chart.clientHeight;
    if (w > 0 && h > 0) state.charts.chart.applyOptions({ width: w, height: h });
  }

  function toOhlcFromPrices(prices) {
    const out = [];
    for (let i = 0; i < prices.length; i++) {
      const [ms, v] = prices[i];
      const prev = i > 0 ? prices[i - 1][1] : v;
      const next = i + 1 < prices.length ? prices[i + 1][1] : v;
      const open = prev;
      const close = v;
      const high = Math.max(open, close, next);
      const low = Math.min(open, close, next);
      out.push({ time: Math.floor(ms / 1000), open, high, low, close });
    }
    return out;
  }

  async function fetchChartData(asset, days) {
    const url = `/api/coingecko/market_chart?coinId=${encodeURIComponent(asset)}&days=${encodeURIComponent(days)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Chart fetch failed (${res.status})`);
    const data = await res.json();
    const prices = Array.isArray(data?.prices) ? data.prices : [];
    return toOhlcFromPrices(prices);
  }

  async function loadMarketSnapshotOnce() {
    try {
      const res = await fetch('/api/market/snapshot');
      if (!res.ok) return;
      const payload = await res.json();
      if (payload?.type !== 'market_snapshot') return;
      const items = Array.isArray(payload.items) ? payload.items : [];
      if (items.length === 0) return;
      state.market.universe.clear();
      for (const it of items) {
        if (!it?.key) continue;
        state.market.universe.set(it.key, it);
      }
      state.market.source = payload.source || state.market.source;
      state.market.lastServerTs = Number(payload.serverTs) || state.market.lastServerTs;
      state.market.lastUpdateAt = Number(payload.lastUpdateAt) || state.market.lastUpdateAt;
      populateChartAssetOptions();
      renderLeaders();
      renderOps();

      renderTopStatus();

      if (document.querySelector('#tab-charts.panel.active')) {
        refreshChart();
      }
    } catch {
      // ignore
    }
  }

  async function refreshChart() {
    if (!FEATURES.charts) return;
    if (!els.chartAsset || !els.chartTf) return;
    initOrResizeChart();

    const sel = String(els.chartAsset.value || 'bitcoin');
    const tf = String(els.chartTf.value || 30);
    const days = tf === '1m' ? 1 : (Number(tf) || 30);
    state.charts.lastAsset = sel;
    state.charts.lastDays = days;

    const item = state.market.universe.get(sel);
    const useCandles = isCoinGeckoItem(item) || (!item && !sel.startsWith('bn:') && !sel.startsWith('dx:') && !sel.startsWith('cg:'));

    if (!state.charts.series || !state.charts.liveSeries) return;

    restoreChartPriceLines(sel);

    if (tf === '1m') {
      try {
        const sym = String(item?.symbol || '').toUpperCase();
        const isBn = String(item?.source || '') === 'binance' || sel.startsWith('bn:');
        if (!isBn || !sym) throw new Error('1m candles available for Binance-backed assets only');
        setStatus('Loading 1m candles…');
        const candles = await fetchBinanceKlines(`${sym}USDT`, 720);
        state.charts.liveSeries.setData([]);
        state.charts.series.setData(candles);
        const last = candles[candles.length - 1];
        const first = candles[0];
        const chg = first && last ? ((last.close - first.open) / first.open) * 100 : 0;
        if (els.chartStatAsset) els.chartStatAsset.textContent = `${sym} (1m)`;
        if (els.chartStatLast) els.chartStatLast.textContent = last ? `$${formatMoney(last.close)}` : '—';
        if (els.chartStatChg) els.chartStatChg.textContent = Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—';
        setStatus('Idle');
        return;
      } catch (e) {
        setStatus('Idle');
        const hist = state.charts.liveHistory.get(sel) || [];
        state.charts.series.setData([]);
        state.charts.liveSeries.setData(hist);
        appendTerminal('WARN', `1m candles unavailable (${String(e?.message || e)}). Showing live line instead.`);
        emitAudit('CHART_1M_FALLBACK_LIVE', { key: sel, error: String(e?.message || e) }, 'WARN');
        return;
      }
    }

    if (!useCandles) {
      const hist = state.charts.liveHistory.get(sel) || [];
      state.charts.series.setData([]);
      state.charts.liveSeries.setData(hist);
      const price = Number(item?.priceUsd);
      const chg = Number(item?.chg24Pct);
      if (els.chartStatAsset) els.chartStatAsset.textContent = String(item?.name || item?.symbol || sel);
      if (els.chartStatLast) els.chartStatLast.textContent = Number.isFinite(price) ? `$${formatMoney(price)}` : '—';
      if (els.chartStatChg) els.chartStatChg.textContent = Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—';
      return;
    }

    const cgId = item && isCoinGeckoItem(item) ? item.id : sel;

    try {
      setStatus('Loading chart…');
      const candles = await fetchChartData(cgId, days);
      state.charts.liveSeries.setData([]);
      state.charts.series.setData(candles);
      const last = candles[candles.length - 1];
      const first = candles[0];
      const chg = first && last ? ((last.close - first.open) / first.open) * 100 : 0;
      if (els.chartStatAsset) els.chartStatAsset.textContent = cgId;
      if (els.chartStatLast) els.chartStatLast.textContent = last ? `$${formatMoney(last.close)}` : '—';
      if (els.chartStatChg) els.chartStatChg.textContent = Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—';
      setStatus('Idle');
    } catch (e) {
      setStatus('Idle');

      const resolvedItem = item ||
        Array.from(state.market.universe.values()).find((a) => String(a?.id || '') === String(cgId)) ||
        Array.from(state.market.universe.values()).find((a) => String(a?.symbol || '').toLowerCase() === String(cgId || '').toLowerCase()) ||
        null;

      const hist = state.charts.liveHistory.get(sel) || [];
      if (hist.length > 1) {
        state.charts.series.setData([]);
        state.charts.liveSeries.setData(hist);
        const price = Number(resolvedItem?.priceUsd);
        const chg = Number(resolvedItem?.chg24Pct);
        if (els.chartStatAsset) els.chartStatAsset.textContent = String(resolvedItem?.name || resolvedItem?.symbol || cgId);
        if (els.chartStatLast) els.chartStatLast.textContent = Number.isFinite(price) ? `$${formatMoney(price)}` : '—';
        if (els.chartStatChg) els.chartStatChg.textContent = Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—';
        appendTerminal('WARN', `Candles unavailable (${String(e?.message || e)}). Showing live line instead.`);
        emitAudit('CHART_FALLBACK_LIVE', { key: sel, coinId: cgId, days, error: String(e?.message || e) }, 'WARN');
        return;
      }

      const price = Number(resolvedItem?.priceUsd);
      const chg = Number(resolvedItem?.chg24Pct);
      const p = Number.isFinite(price) && price > 0 ? price : 1;
      const now = Math.floor(Date.now() / 1000);
      state.charts.series.setData([]);
      state.charts.liveSeries.setData([{ time: now - 60, value: p }, { time: now, value: p }]);
      if (els.chartStatAsset) els.chartStatAsset.textContent = String(resolvedItem?.name || resolvedItem?.symbol || cgId);
      if (els.chartStatLast) els.chartStatLast.textContent = Number.isFinite(price) ? `$${formatMoney(price)}` : '—';
      if (els.chartStatChg) els.chartStatChg.textContent = Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—';
      appendTerminal('WARN', `Candles unavailable (${String(e?.message || e)}). Showing last known price.`);
      emitAudit('CHART_FALLBACK_FLAT', { key: sel, coinId: cgId, days, error: String(e?.message || e), priceUsd: Number.isFinite(price) ? price : null }, 'WARN');
    }
  }

  function openModal({ title, bodyHtml, primaryText = 'OK', secondaryText = 'Cancel', onPrimary, onSecondary }) {
    els.modalTitle.textContent = title;
    els.modalBody.innerHTML = bodyHtml;
    els.modalPrimary.textContent = primaryText;
    els.modalSecondary.textContent = secondaryText;
    els.modal.hidden = false;
    els.modal.style.display = 'grid';

    function cleanup() {
      els.modalPrimary.onclick = null;
      els.modalSecondary.onclick = null;
      els.modalClose.onclick = null;
      els.modal.onclick = null;
      window.removeEventListener('keydown', onKeyDown);
    }

    function close() {
      cleanup();
      els.modal.hidden = true;
      els.modal.style.display = 'none';
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') close();
    }

    els.modalClose.onclick = close;
    els.modal.onclick = (e) => {
      if (e.target === els.modal) close();
    };

    window.addEventListener('keydown', onKeyDown);

    els.modalSecondary.onclick = async () => {
      try {
        if (onSecondary) await onSecondary();
      } finally {
        close();
      }
    };

    els.modalPrimary.onclick = async () => {
      try {
        if (onPrimary) await onPrimary();
      } finally {
        close();
      }
    };
  }

  async function postJson(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data ?? {}),
    });

    const txt = await res.text();
    let payload = null;
    try {
      payload = txt ? JSON.parse(txt) : null;
    } catch {
      payload = { raw: txt };
    }

    if (!res.ok) {
      const msg = payload?.error || payload?.message || `Request failed (${res.status})`;
      throw new Error(msg);
    }

    return payload;
  }

  async function startSubscriptionCheckout() {
    try {
      const email = getEmail();
      if (!validateEmail(email)) {
        openModal({
          title: 'Enter your email',
          bodyHtml: '<div class="muted">Please type your email in the top bar before subscribing.</div>',
          primaryText: 'OK',
          secondaryText: 'Close',
        });
        return;
      }

      setStatus('Creating subscription checkout…');
      const payload = await postJson('/api/stripe/subscribe', { email });
      if (payload?.url) window.location.href = payload.url;
      setStatus('Idle');
    } catch (e) {
      setStatus('Idle');
      openModal({ title: 'Stripe error', bodyHtml: `<div class="muted">${String(e.message || e)}</div>`, primaryText: 'OK', secondaryText: 'Close' });
    }
  }

  async function startTradeFeeCheckout(tradeNotionalUsd) {
    try {
      const email = getEmail();
      if (!validateEmail(email)) {
        openModal({
          title: 'Enter your email',
          bodyHtml: '<div class="muted">Please type your email in the top bar first.</div>',
          primaryText: 'OK',
          secondaryText: 'Close',
        });
        return;
      }

      setStatus('Creating per-trade checkout…');
      const payload = await postJson('/api/stripe/trade-fee', { tradeNotional: tradeNotionalUsd, email });
      if (payload?.url) window.location.href = payload.url;
      setStatus('Idle');
    } catch (e) {
      setStatus('Idle');
      openModal({ title: 'Stripe error', bodyHtml: `<div class="muted">${String(e.message || e)}</div>`, primaryText: 'OK', secondaryText: 'Close' });
    }
  }

  async function fetchBillingStatus() {
    const email = getEmail();
    const t = Date.now();
    if (!validateEmail(email)) return;
    if (t - state.user.lastBillingFetchAt < 2500) return;
    state.user.lastBillingFetchAt = t;

    try {
      const res = await fetch(`/api/billing/status?email=${encodeURIComponent(email)}`);
      if (!res.ok) return;
      const data = await res.json();
      if (typeof data?.subscribed === 'boolean') state.billing.subscribed = data.subscribed;
      if (typeof data?.upfrontPaid === 'boolean') state.billing.upfrontPaid = data.upfrontPaid;
      if (Number.isFinite(Number(data?.upfrontForTotal))) state.billing.upfrontForTotal = Number(data.upfrontForTotal);

      if (Number.isFinite(Number(data?.feesTotal))) {
        state.fees = Number(data.feesTotal);
        els.kpiFees.textContent = `$${formatMoney(state.fees)}`;
      }

      setAutoUi();
    } catch {
      // ignore
    }
  }

  function connectWalletMock() {
    state.walletConnected = !state.walletConnected;
    if (state.walletConnected) {
      state.walletAddress = `0x${Math.floor(Math.random() * 16 ** 8).toString(16).padStart(8, '0')}…${Math.floor(Math.random() * 16 ** 4).toString(16).padStart(4, '0')}`;
      els.connectBtn.textContent = state.walletAddress;
      setStatus('Wallet connected');
    } else {
      state.walletAddress = null;
      els.connectBtn.textContent = 'Connect wallet';
      setStatus('Idle');
    }
  }

  function startAutopilot() {
    if (!canStartAutopilot()) {
      const total = Number(els.fuel.value || 0);
      const paidForThisTotal = state.billing.upfrontPaid && state.billing.upfrontForTotal === total;
      const missing = [];
      if (!state.billing.subscribed) missing.push('Subscription');
      if (!paidForThisTotal) missing.push('Upfront 1% fee');
      if (!els.gateRisk.checked) missing.push('Risk agreement');
      if (!els.gateFee.checked) missing.push('Fee agreement');
      if (!els.gateTime.checked) missing.push('24h agreement');

      openModal({
        title: 'Locked until paid & agreed',
        bodyHtml: `<div class="muted">Missing: <strong>${escapeHtml(missing.join(', '))}</strong></div><div class="muted small" style="margin-top:10px">Press Subscribe first, then pay the upfront 1% fee for the exact amount you selected.</div>`,
        primaryText: 'OK',
        secondaryText: 'Close',
      });
      return;
    }

    const total = Number(els.fuel.value || 0);
    if (!Number.isFinite(total) || total <= 0) return;

    state.autopilot.active = true;
    state.autopilot.startedAt = Date.now();
    state.autopilot.endsAt = state.autopilot.startedAt + state.autopilot.durationMs;
    state.autopilot.totalAmount = total;
    state.autopilot.sliceAmount = total / state.autopilot.slices;
    state.autopilot.nextIndex = 0;
    state.autopilot.awaitingPaymentForIndex = null;

    setStatus('Autopilot running');
    appendTerminal('INFO', `One Invest started. Total $${formatMoney(total)} split into ${state.autopilot.slices} slices.`);

    // Create a report record for the start.
    state.reports.unshift({
      id: `A-${String(Date.now())}`,
      asset: 'BASKET',
      status: 'AUTOPILOT_STARTED',
      notional: total,
      fee: total * 0.01,
      ts: Date.now(),
      detail: { safeguards: 1000, reason: 'User started One Invest (24h DCA schedule).' },
    });
    applyReportsLiveUpdate();

    setAutoUi();
  }

  function stopAutopilot() {
    if (!state.autopilot.active) return;
    state.autopilot.active = false;
    state.autopilot.awaitingPaymentForIndex = null;
    setStatus('Idle');
    appendTerminal('INFO', 'One Invest stopped by user.');

    state.reports.unshift({
      id: `A-${String(Date.now())}`,
      asset: 'BASKET',
      status: 'AUTOPILOT_STOPPED',
      notional: 0,
      fee: 0,
      ts: Date.now(),
      detail: { safeguards: 1000, reason: 'User stopped One Invest.' },
    });
    applyReportsLiveUpdate();

    setAutoUi();
  }

  function autopilotUpdate() {
    if (!state.autopilot.active) {
      els.autoNext.textContent = '—';
      els.cycleTime.textContent = '—';
      els.cycleFill.style.background = `conic-gradient(var(--blue) 0deg, rgba(255, 255, 255, 0.06) 0deg)`;
      return;
    }

    const t = Date.now();
    const remaining = Math.max(0, state.autopilot.endsAt - t);
    const pct = 1 - remaining / state.autopilot.durationMs;
    const deg = Math.floor(360 * pct);
    els.cycleFill.style.background = `conic-gradient(var(--blue) ${deg}deg, rgba(255, 255, 255, 0.06) 0deg)`;

    const hh = Math.floor(remaining / 3600000);
    const mm = Math.floor((remaining % 3600000) / 60000);
    const ss = Math.floor((remaining % 60000) / 1000);
    els.cycleTime.textContent = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;

    // Next slice time.
    const nextAt = state.autopilot.startedAt + state.autopilot.nextIndex * state.autopilot.intervalMs;
    const untilNext = Math.max(0, nextAt - t);
    const nmm = Math.floor(untilNext / 60000);
    const nss = Math.floor((untilNext % 60000) / 1000);
    els.autoNext.textContent = state.autopilot.nextIndex >= state.autopilot.slices ? 'Done' : `${String(nmm).padStart(2, '0')}:${String(nss).padStart(2, '0')}`;

    if (remaining === 0 || state.autopilot.nextIndex >= state.autopilot.slices) {
      state.autopilot.active = false;
      setStatus('Idle');
      appendTerminal('INFO', 'One Invest completed (24h window ended).');
      setAutoUi();
      return;
    }

    // When a slice is due, log it (execution is V2; V1 can still prompt).
    if (untilNext === 0 && state.autopilot.awaitingPaymentForIndex == null) {
      const idx = state.autopilot.nextIndex;
      const sliceAmount = state.autopilot.sliceAmount;
      const fee = sliceAmount * 0.01;

      state.autopilot.awaitingPaymentForIndex = idx;
      appendTerminal('PLAN', `Slice #${idx + 1}/${state.autopilot.slices} scheduled. Amount $${formatMoney(sliceAmount)}.`);

      // Create report entry.
      state.reports.unshift({
        id: `S-${String(Date.now())}`,
        asset: 'BASKET',
        status: 'SLICE_READY',
        notional: sliceAmount,
        fee,
        ts: Date.now(),
        detail: { safeguards: 1000, reason: `Slice ${idx + 1} scheduled inside 24h window.` },
      });
      applyReportsLiveUpdate();

      // For V1 scaffold we auto-advance once a slice has been logged.
      state.autopilot.awaitingPaymentForIndex = null;
      state.autopilot.nextIndex += 1;
    }
  }

  function appendTerminal(level, msg) {
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = `<div class="term-ts">${nowTs()}</div><div>[${level}] ${escapeHtml(msg)}</div>`;
    els.terminal.appendChild(line);
    els.terminal.scrollTop = els.terminal.scrollHeight;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function randomBrainEvent() {
    const events = [
      'Scanning liquidity + slippage constraints…',
      'Monitoring volatility regime shift…',
      'Checking token contract heuristics…',
      'Risk controls: max drawdown guard OK.',
      'Signal engine: no trade (insufficient edge).',
      'Order planner: preparing user-confirmed route…',
      'Fee disclosure: 1% per-trade service fee required.',
      'Audit log: snapshot saved.',
    ];
    return events[Math.floor(Math.random() * events.length)];
  }

  async function fetchLeaders() {
    const t = Date.now();
    if (t - state.leadersLastFetchAt < 3500) return;
    state.leadersLastFetchAt = t;

    try {
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COINGECKO_IDS.join(',')}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Market data unavailable');
      const data = await res.json();
      state.leaders.clear();
      for (const row of data) {
        state.leaders.set(row.id, {
          id: row.id,
          symbol: String(row.symbol || '').toUpperCase(),
          name: row.name,
          price: row.current_price,
          chg: row.price_change_percentage_24h,
        });
      }
      if (els.leadersSource) els.leadersSource.textContent = 'CoinGecko';
      if (els.leadersUniverse) els.leadersUniverse.textContent = String(state.leaders.size);
      renderLeaders();
    } catch {
      if (!els.leadersList.hasChildNodes()) {
        els.leadersList.innerHTML = '<div class="muted" style="padding:12px">Failed to load market data.</div>';
      }
    }
  }

  function renderLeaders() {
    els.leadersList.innerHTML = '';

    const liveUniverse = state.market.universe;
    const hasLive = liveUniverse && liveUniverse.size > 0;

    let rows = [];
    if (hasLive) {
      rows = Array.from(liveUniverse.values())
        .filter((a) => Number.isFinite(Number(a?.chg24Pct)) && Number.isFinite(Number(a?.priceUsd)))
        .map((a) => ({
          id: a.id || a.key,
          key: a.key,
          symbol: String(a.symbol || '').toUpperCase(),
          name: a.name || String(a.symbol || '').toUpperCase(),
          price: Number(a.priceUsd),
          chg: Number(a.chg24Pct),
          source: a.source || 'unknown',
        }));

      rows.sort((a, b) => {
        if (state.market.mode === 'losers') return a.chg - b.chg;
        return b.chg - a.chg;
      });
      rows = rows.slice(0, 80);

      if (els.leadersSource) {
        const src = state.market.source;
        const cgOk = Boolean(src?.coingecko?.ok);
        const bnOk = Boolean(src?.binance?.ok);
        els.leadersSource.textContent = cgOk && bnOk ? 'CoinGecko + Binance' : bnOk ? 'Binance' : 'CoinGecko';
      }
      if (els.leadersUniverse) els.leadersUniverse.textContent = String(liveUniverse.size);
    } else {
      rows = Array.from(state.leaders.values()).map((row) => ({
        id: row.id,
        symbol: row.symbol,
        name: row.name,
        price: Number(row.price),
        chg: Number(row.chg),
        source: 'coingecko',
      }));
      rows.sort((a, b) => {
        if (state.market.mode === 'losers') return a.chg - b.chg;
        return b.chg - a.chg;
      });
    }

    for (const row of rows) {
      const chg = Number(row.chg);
      const chgClass = Number.isFinite(chg) ? (chg >= 0 ? 'pos' : 'neg') : '';
      const el = document.createElement('div');
      el.className = 'leaders-row';
      el.innerHTML = `
        <div class="asset">
          <div class="badge">${escapeHtml(String(row.symbol || '?').slice(0, 1) || '?')}</div>
          <div>
            <div style="font-weight:950">${escapeHtml(String(row.name || ''))}</div>
            <div class="muted small">${escapeHtml(String(row.symbol || ''))}${row.source ? ` · ${escapeHtml(String(row.source))}` : ''}</div>
          </div>
        </div>
        <div class="right" style="font-weight:950">$${formatMoney(row.price)}</div>
        <div class="right chg ${chgClass}">${Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—'}</div>
      `;

      el.addEventListener('click', () => {
        openModal({
          title: `${row.name} (${row.symbol})`,
          bodyHtml: `
            <div class="muted">Price: <strong>$${formatMoney(row.price)}</strong></div>
            <div class="muted">24h: <strong class="${chgClass}">${Number.isFinite(chg) ? `${chg.toFixed(2)}%` : '—'}</strong></div>
            <div class="muted">Source: <strong>${escapeHtml(String(row.source || ''))}</strong></div>
            <div class="muted small" style="margin-top:10px">Paper mode: you can track this asset and Juzzy will bank 5% of gains each +10% step.</div>
          `,
          primaryText: 'Track (paper)',
          secondaryText: 'Close',
          onPrimary: async () => {
            const it = (row.key && state.market.universe.get(String(row.key))) ||
              Array.from(state.market.universe.values()).find((a) => String(a.symbol || '').toUpperCase() === String(row.symbol || '').toUpperCase()) ||
              null;
            if (it) {
              ensurePaperPosition(it, 100);
            } else {
              openModal({ title: 'Not live-trackable', bodyHtml: '<div class="muted">This row is not in the live universe yet. Try again after the stream updates.</div>', primaryText: 'OK', secondaryText: 'Close' });
            }
          },
        });
      });

      els.leadersList.appendChild(el);
    }
  }

  function connectMarketStream() {
    if (!window.EventSource) return;
    if (marketStreamClient) marketStreamClient.stop();
    marketStreamClient = connectSseWithRetry(
      '/api/market/stream',
      {
        onopen: () => {
          state.market.connected = true;
          renderOps();
          renderTopStatus();
        },
        onerror: () => {
          state.market.connected = false;
          renderOps();
          renderTopStatus();
          void loadMarketSnapshotOnce();
        },
        onmessage: (ev) => {
          try {
            const payload = JSON.parse(ev.data);
            if (payload?.type !== 'market_snapshot') return;
            state.market.lastServerTs = Number(payload.serverTs) || 0;
            state.market.lastUpdateAt = Number(payload.lastUpdateAt) || 0;
            state.market.source = payload.source || null;
            renderOps();
            renderTopStatus();

            const items = Array.isArray(payload.items) ? payload.items : [];
            state.market.universe.clear();
            for (const it of items) {
              if (!it?.key) continue;
              state.market.universe.set(it.key, it);
            }

            updatePaperKpis();

            populateChartAssetOptions();
            const currentChartKey = String(els.chartAsset?.value || '');
            if (currentChartKey) {
              const cur = state.market.universe.get(currentChartKey);
              if (cur && Number.isFinite(Number(cur.priceUsd))) {
                upsertLivePoint(currentChartKey, cur.priceUsd);
                if (document.querySelector('#tab-charts.panel.active')) refreshChart();
              }
            }

            const events = Array.isArray(payload.events) ? payload.events : [];
            for (const evt of events) {
              if (!evt || !evt.type || !evt.ts) continue;
              if (state.market.lastEventTs && evt.ts <= state.market.lastEventTs) continue;

              if (evt.type === 'DEX_BIRTH') {
                if (evt.key) state.market.birthKeys.add(String(evt.key));
                const sym = String(evt.symbol || '???');
                const chain = String(evt.chainId || 'dex');
                const px = Number(evt.priceUsd);
                const liq = Number(evt.liquidityUsd);
                appendTerminal('DEX', `Birth: ${sym} on ${chain} · $${formatMoney(px)} · liq $${formatMoney(liq)}`);
                emitAudit('DEX_BIRTH', { symbol: sym, chain, priceUsd: px, liquidityUsd: liq, key: evt.key || '' }, 'INFO');

                state.reports.unshift({
                  id: `L-${String(Date.now())}`,
                  asset: sym,
                  status: 'LIVE_DEX_BIRTH',
                  notional: Number.isFinite(px) ? px : 0,
                  fee: 0,
                  ts: Date.now(),
                  detail: {
                    safeguards: 950,
                    reason: `New DEX pair detected on ${chain}.`,
                    url: evt.url || '',
                  },
                });
              }

              state.market.lastEventTs = Math.max(state.market.lastEventTs || 0, evt.ts);
            }

            applyReportsLiveUpdate();

            if (els.leadersUniverse) els.leadersUniverse.textContent = String(state.market.universe.size);
            if (document.querySelector('#tab-leaders.panel.active')) {
              renderLeaders();
            }
          } catch {
            // ignore
          }
        },
      },
      'market'
    );
  }

  function seedReports() {
    const assets = ['BTC', 'ETH', 'SOL', 'XRP', 'UNI', 'LINK'];
    const statuses = ['NO_TRADE', 'PROPOSED', 'EXECUTED', 'REJECTED'];

    state.reports = Array.from({ length: 1200 }, (_, i) => {
      const asset = assets[i % assets.length];
      const status = statuses[(i * 7) % statuses.length];
      const notional = 10 + (i % 200) * 5;
      const fee = notional * 0.01;
      const ts = Date.now() - i * 37_000;
      return {
        id: `R-${String(1200 - i).padStart(6, '0')}`,
        asset,
        status,
        notional,
        fee,
        ts,
        detail: {
          safeguards: Math.floor(800 + (i % 200)),
          reason:
            status === 'EXECUTED'
              ? 'User approved; execution route selected; fee collected.'
              : status === 'PROPOSED'
                ? 'Signal found; awaiting user consent + fee payment.'
                : status === 'REJECTED'
                  ? 'Filtered by risk controls.'
                  : 'No edge detected.',
        },
      };
    });

    state.reportsRendered = 0;
  }

  function matchesReportSearch(r, q) {
    if (!q) return true;
    const s = q.toLowerCase();
    return r.id.toLowerCase().includes(s) || r.asset.toLowerCase().includes(s) || r.status.toLowerCase().includes(s);
  }

  function renderMoreReports(count = 30) {
    const q = (els.reportSearch.value || '').trim();
    const filtered = q ? state.reports.filter((r) => matchesReportSearch(r, q)) : state.reports;

    const slice = filtered.slice(state.reportsRendered, state.reportsRendered + count);
    state.reportsRendered += slice.length;

    for (const r of slice) {
      const el = buildReportRow(r);
      els.reportsList.appendChild(el);
    }

    if (!q && state.reportsRendered > 0 && state.reportsLastRenderedId == null) {
      state.reportsLastRenderedId = filtered[0]?.id || null;
    }
  }

  function resetReportsRender() {
    els.reportsList.innerHTML = '';
    state.reportsRendered = 0;
    state.reportsLastRenderedId = null;
    state.reportsNewPending = 0;
    updateReportsNewIndicator();
    renderMoreReports(40);
    const q = (els.reportSearch.value || '').trim();
    if (!q) state.reportsLastRenderedId = state.reports[0]?.id || null;
  }

  function exportReportsCsv() {
    const q = (els.reportSearch.value || '').trim();
    const filtered = q ? state.reports.filter((r) => matchesReportSearch(r, q)) : state.reports;
    const header = ['id', 'timestamp', 'asset', 'status', 'notional', 'fee', 'safeguards'];
    const rows = filtered.map((r) => [
      r.id,
      new Date(r.ts).toISOString(),
      r.asset,
      r.status,
      r.notional,
      r.fee,
      r.detail.safeguards,
    ]);

    const csv = [header, ...rows].map((a) => a.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reports.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ── Learn library (catalog + reader + TTS + AI chat) ──
  const allTutorials = [].concat(window.JUZZY_TUTORIALS || [], window.JUZZY_TUTORIALS_2 || []);
  const tutCategories = [...new Set(allTutorials.map(t => t.cat))];
  const tutCompletedKey = 'juzzy_tut_completed';

  function getTutCompleted() {
    try { return new Set(JSON.parse(localStorage.getItem(tutCompletedKey) || '[]')); } catch { return new Set(); }
  }
  function setTutCompleted(id) {
    const s = getTutCompleted(); s.add(id);
    localStorage.setItem(tutCompletedKey, JSON.stringify([...s]));
  }

  function initTutCategoryOptions() {
    if (!els.tutCat) return;
    els.tutCat.innerHTML = '<option value="all">All categories</option>';
    for (const cat of tutCategories) {
      const o = document.createElement('option');
      o.value = cat; o.textContent = cat;
      els.tutCat.appendChild(o);
    }
  }

  function renderTutCatalog() {
    if (!els.tutCatalog) return;
    const cat = String(els.tutCat?.value || 'all');
    const q = String(els.tutSearch?.value || '').trim().toLowerCase();
    const done = getTutCompleted();
    const filtered = allTutorials.filter(t => {
      if (cat !== 'all' && t.cat !== cat) return false;
      if (q && !t.title.toLowerCase().includes(q) && !t.desc.toLowerCase().includes(q) && !t.cat.toLowerCase().includes(q)) return false;
      return true;
    });
    els.tutCatalog.innerHTML = '';
    for (const t of filtered) {
      const completed = done.has(t.id);
      const card = document.createElement('div');
      card.className = 'tut-card' + (completed ? ' completed' : '');
      card.innerHTML = `<div class="tut-card-cat">${t.cat}</div><div class="tut-card-title">${t.title}</div><div class="tut-card-desc">${t.desc}</div><div class="tut-card-meta"><span>${t.steps.length} steps</span>${completed ? '<span class="tut-card-badge done">Completed</span>' : '<span class="tut-card-badge new">New</span>'}</div>`;
      card.addEventListener('click', () => openTutLesson(t.id));
      els.tutCatalog.appendChild(card);
    }
    const total = allTutorials.length;
    const doneCount = allTutorials.filter(t => done.has(t.id)).length;
    if (els.tutProgress) els.tutProgress.textContent = `${doneCount}/${total} completed`;
  }

  let activeTutId = null;
  let activeTutStep = 0;
  let tutTtsEnabled = false;

  // ── Text-to-Speech engine ──
  function tutTtsSpeak(text) {
    tutTtsStop();
    if (!window.speechSynthesis) return;
    const clean = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!clean) return;
    const utt = new SpeechSynthesisUtterance(clean);
    utt.rate = 0.95;
    utt.pitch = 1.0;
    const voices = window.speechSynthesis.getVoices();
    const eng = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('google'))
             || voices.find(v => v.lang.startsWith('en'))
             || voices[0];
    if (eng) utt.voice = eng;
    window.speechSynthesis.speak(utt);
  }
  function tutTtsStop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
  function tutTtsUpdateBtn() {
    if (!els.tutTtsToggle) return;
    els.tutTtsToggle.classList.toggle('active', tutTtsEnabled);
    els.tutTtsToggle.textContent = tutTtsEnabled ? '🔊' : '🔇';
    els.tutTtsToggle.title = tutTtsEnabled ? 'Voice ON — click to mute' : 'Voice OFF — click to enable';
  }

  // ── AI Chat assistant ──
  function tutChatClear() {
    if (els.tutChatMessages) els.tutChatMessages.innerHTML = '';
  }
  function tutChatAddMsg(role, html) {
    if (!els.tutChatMessages) return;
    const d = document.createElement('div');
    d.className = 'tut-chat-msg ' + role;
    d.innerHTML = html;
    els.tutChatMessages.appendChild(d);
    els.tutChatMessages.scrollTop = els.tutChatMessages.scrollHeight;
    return d;
  }
  function tutChatGreet() {
    tutChatClear();
    const tut = allTutorials.find(t => t.id === activeTutId);
    if (!tut) return;
    tutChatAddMsg('ai', `Hi! I\'m your AI assistant for <strong>${tut.title}</strong>. Ask me anything about this topic and I\'ll help explain it.`);
  }

  function tutAIAnswer(question) {
    const q = String(question || '').toLowerCase().trim();
    if (!q) return;
    tutChatAddMsg('user', question.replace(/</g, '&lt;'));
    const thinking = tutChatAddMsg('ai', '<span class="ai-thinking">Thinking…</span>');

    setTimeout(() => {
      const answer = generateTutAnswer(q);
      if (thinking) thinking.innerHTML = answer;
      els.tutChatMessages.scrollTop = els.tutChatMessages.scrollHeight;
      if (tutTtsEnabled) tutTtsSpeak(answer);
    }, 600 + Math.random() * 400);
  }

  function generateTutAnswer(q) {
    const tut = allTutorials.find(t => t.id === activeTutId);
    const step = tut ? tut.steps[activeTutStep] : null;
    const allText = tut ? tut.steps.map(s => s.title + ' ' + s.html.replace(/<[^>]+>/g, ' ')).join(' ').toLowerCase() : '';

    const kw = (words) => words.some(w => q.includes(w));

    if (kw(['what is', 'explain', 'define', 'meaning'])) {
      if (step) return `<p>Great question! This step covers <strong>${step.title}</strong>. ${extractFirstSentences(step.html, 2)}</p><p>Would you like me to go deeper on any part?</p>`;
    }
    if (kw(['example', 'show me', 'give me'])) {
      if (tut && tut.cat === 'Crypto Basics') return '<p>Here\'s a simple example: imagine you want to send $100 to a friend overseas. With a bank, it takes 3–5 days and costs $25 in fees. With crypto, you can send it in minutes for less than $1. That\'s the power of decentralised money.</p>';
      if (tut && tut.cat === 'Trading Strategies') return '<p>Example: You have $1,000 and want to DCA into Bitcoin. You set up $50 weekly buys. Week 1 BTC is at $60K, you get 0.00083 BTC. Week 2 it drops to $50K, you get 0.001 BTC (more coins for the same money!). Over time your average price smooths out.</p>';
      return '<p>The best way to learn is to try it in Juzzy with paper trading first. Go to the Vault tab, keep the Arm toggle OFF, and the system will simulate trades for you. Check Reports to see results.</p>';
    }
    if (kw(['risk', 'danger', 'lose', 'safe'])) {
      return '<p>Great that you\'re thinking about risk! Key rules:<br>1. Never invest more than you can afford to lose<br>2. Use the 1–2% rule per trade<br>3. Always set stop losses<br>4. Diversify across assets<br>5. Start with paper trading in Juzzy before going live</p>';
    }
    if (kw(['juzzy', 'this app', 'how do i', 'how to use'])) {
      return '<p>In Juzzy:<br>• <strong>Leaders tab</strong> — see top market movers<br>• <strong>Charts tab</strong> — analyse price charts with filters<br>• <strong>Brain tab</strong> — watch AI signals<br>• <strong>Vault tab</strong> — connect wallet and configure trades<br>• <strong>Reports tab</strong> — review all your activity<br>Want to know about a specific feature?</p>';
    }
    if (kw(['buy', 'sell', 'trade', 'execute'])) {
      return '<p>To execute a trade in Juzzy:<br>1. Go to <strong>Vault</strong> and connect your wallet<br>2. Choose your network (EVM/Solana)<br>3. Set Max USD per trade and slippage<br>4. Turn on the <strong>Arm</strong> toggle<br>5. Set resistance lines in Charts — when price crosses them, you\'ll get a trade popup<br>Always start with paper trading (Arm OFF) first!</p>';
    }
    if (kw(['fee', 'cost', 'charge', 'price'])) {
      return '<p>Juzzy charges a <strong>1% upfront service fee</strong> per trade cycle. Gas fees depend on the network: Base is typically under $0.10, Ethereum can be $5–$50+. There\'s also an optional weekly subscription for premium features.</p>';
    }
    if (kw(['dca', 'dollar cost'])) {
      return '<p>DCA means investing a fixed amount on a schedule (e.g., $100 every week). It removes the stress of timing the market. In Juzzy, the One Invest autopilot splits your amount into 24 hourly buys — essentially a micro-DCA over 24 hours.</p>';
    }
    if (kw(['wallet', 'metamask', 'phantom', 'connect'])) {
      return '<p>Juzzy supports:<br>• <strong>MetaMask</strong> for EVM chains (Ethereum, Base)<br>• <strong>Phantom</strong> for Solana (coming soon)<br>Go to the Vault tab, choose your network, and click Connect. Your wallet popup will ask for permission. Juzzy never sees your private key.</p>';
    }
    if (kw(['defi', 'decentrali'])) {
      return '<p>DeFi (Decentralised Finance) recreates banking services using smart contracts — no middlemen needed. Key services: token swaps (DEXs), lending/borrowing, yield farming, and staking. Start with the "DeFi & On-Chain" tutorials in the Learn library for a full walkthrough.</p>';
    }

    if (allText && q.length > 3) {
      const words = q.split(/\s+/).filter(w => w.length > 3);
      const relevant = tut.steps.find(s => {
        const stxt = (s.title + ' ' + s.html).toLowerCase();
        return words.some(w => stxt.includes(w));
      });
      if (relevant) {
        return `<p>Based on this lesson, here\'s what I know about that: ${extractFirstSentences(relevant.html, 2)}</p><p>Check the <strong>${relevant.title}</strong> step for the full explanation.</p>`;
      }
    }

    return `<p>That\'s a good question! While I don\'t have a specific answer for "${q.substring(0, 60)}", I\'d suggest:<br>1. Read through the current lesson steps carefully<br>2. Check related tutorials in the Learn library<br>3. For real-time info, look at the Leaders and Brain tabs</p><p>Try rephrasing your question, or ask about a specific concept like "What is DCA?" or "How do I use Charts?"</p>`;
  }

  function extractFirstSentences(html, count) {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    return sentences.slice(0, count).join(' ').trim();
  }

  // ── Mode chooser flow ──
  function openTutLesson(id) {
    const tut = allTutorials.find(t => t.id === id);
    if (!tut) return;
    activeTutId = id;
    activeTutStep = 0;
    tutTtsEnabled = false;
    if (els.tutCatalog) els.tutCatalog.style.display = 'none';
    if (els.tutReader) els.tutReader.hidden = true;
    if (els.tutModeChooser) els.tutModeChooser.hidden = false;
    if (els.tutModeTitle) els.tutModeTitle.textContent = tut.title;
    if (els.tutModeDesc) els.tutModeDesc.textContent = `${tut.steps.length} steps · ${tut.cat}`;
  }

  function startTutLesson(withVoice) {
    tutTtsEnabled = withVoice;
    if (els.tutModeChooser) els.tutModeChooser.hidden = true;
    if (els.tutReader) els.tutReader.hidden = false;
    tutTtsUpdateBtn();
    tutChatGreet();
    renderTutStep();
  }

  function closeTutLesson() {
    tutTtsStop();
    if (els.tutReader) els.tutReader.hidden = true;
    if (els.tutModeChooser) els.tutModeChooser.hidden = true;
    if (els.tutCatalog) els.tutCatalog.style.display = '';
    activeTutId = null;
    activeTutStep = 0;
    renderTutCatalog();
  }

  function renderTutStep() {
    const tut = allTutorials.find(t => t.id === activeTutId);
    if (!tut) return;
    const step = tut.steps[activeTutStep];
    if (!step) return;
    if (els.tutLessonTitle) els.tutLessonTitle.textContent = tut.title;
    if (els.tutStepLabel) els.tutStepLabel.textContent = `Step ${activeTutStep + 1} / ${tut.steps.length}`;
    if (els.tutBody) {
      els.tutBody.style.animation = 'none';
      void els.tutBody.offsetHeight;
      els.tutBody.style.animation = '';
      els.tutBody.innerHTML = `<h3>${step.title}</h3>${step.html}`;
    }
    if (els.tutPrev) els.tutPrev.disabled = activeTutStep === 0;
    if (els.tutNext) els.tutNext.textContent = activeTutStep === tut.steps.length - 1 ? 'Finish \u2713' : 'Next \u2192';
    if (tutTtsEnabled) tutTtsSpeak(step.title + '. ' + step.html);
  }

  function tutStepNav(delta) {
    tutTtsStop();
    const tut = allTutorials.find(t => t.id === activeTutId);
    if (!tut) return;
    if (delta > 0 && activeTutStep === tut.steps.length - 1) {
      setTutCompleted(activeTutId);
      closeTutLesson();
      return;
    }
    activeTutStep = Math.max(0, Math.min(tut.steps.length - 1, activeTutStep + delta));
    renderTutStep();
  }

  function initEvents() {
    qsAll('.tab').forEach((b) => {
      b.addEventListener('click', () => setActiveTab(b.dataset.tab));
    });

    qsAll('[data-jump]').forEach((b) => {
      b.addEventListener('click', () => setActiveTab(b.dataset.jump));
    });

    els.email.addEventListener('input', () => {
      state.user.email = String(els.email.value || '').trim();
      localStorage.setItem('pos_email', state.user.email);
      // refresh billing state when email changes
      state.user.lastBillingFetchAt = 0;
      fetchBillingStatus();
    });

    if (FEATURES.simpleMode && els.simpleModeBtn) {
      els.simpleModeBtn.addEventListener('click', () => setSimpleMode(!state.ui.simpleMode));
    }

    if (FEATURES.simpleMode && els.simpleSubscribe) {
      els.simpleSubscribe.addEventListener('click', () => els.subscribeBtn.click());
      els.simplePay.addEventListener('click', () => els.payTradeFee.click());
      els.simpleStart.addEventListener('click', () => els.oneInvest.click());
      els.simpleStop.addEventListener('click', () => els.stopAuto.click());
    }

    els.fuel.addEventListener('input', () => {
      els.fuelValue.textContent = String(els.fuel.value);
      // Changing the amount invalidates the previously paid upfront fee.
      setAutoUi();
    });

    [els.gateRisk, els.gateFee, els.gateTime].forEach((c) => {
      c.addEventListener('change', setAutoUi);
    });

    els.connectBtn.addEventListener('click', connectWalletMock);
    els.oneInvest.addEventListener('click', startAutopilot);
    els.stopAuto.addEventListener('click', stopAutopilot);
    els.subscribeBtn.addEventListener('click', startSubscriptionCheckout);
    els.payTradeFee.addEventListener('click', async () => {
      const notional = Number(els.fuel.value || 0);
      const fee = notional * 0.01;
      openModal({
        title: 'Pay upfront 1% service fee',
        bodyHtml: `
          <div class="muted">Agreed total amount: <strong>$${formatMoney(notional)}</strong></div>
          <div class="muted">Upfront fee (1%): <strong>$${formatMoney(fee)}</strong></div>
          <div class="muted small" style="margin-top:10px">You will be redirected to Stripe Checkout. After success, One Invest unlocks for this exact amount.</div>
        `,
        primaryText: 'Continue to Stripe',
        secondaryText: 'Cancel',
        onPrimary: async () => {
          const email = getEmail();
          if (!validateEmail(email)) {
            openModal({
              title: 'Enter your email',
              bodyHtml: '<div class="muted">Please type your email in the top bar first.</div>',
              primaryText: 'OK',
              secondaryText: 'Close',
            });
            return;
          }

          localStorage.setItem('pos_pending_upfront_total', String(notional));
          localStorage.setItem('pos_pending_upfront_fee', String(fee));
          const payload = await postJson('/api/stripe/upfront-fee', { totalAmount: notional, email });
          if (payload?.url) window.location.href = payload.url;
        },
      });
    });

    els.brainToggle.addEventListener('click', () => {
      state.brainPaused = !state.brainPaused;
      els.brainToggle.textContent = state.brainPaused ? 'Resume stream' : 'Pause stream';
      appendTerminal('INFO', state.brainPaused ? 'Stream paused.' : 'Stream resumed.');
    });

    if (els.leadersModeGainers) {
      els.leadersModeGainers.addEventListener('click', () => setLeadersMode('gainers'));
      els.leadersModeLosers.addEventListener('click', () => setLeadersMode('losers'));
    }

    if (FEATURES.charts && els.chartRefresh) {
      els.chartRefresh.addEventListener('click', refreshChart);
      if (els.chartAsset) els.chartAsset.addEventListener('change', refreshChart);
      if (els.chartTf) els.chartTf.addEventListener('change', refreshChart);
      window.addEventListener('resize', () => initOrResizeChart());

      if (els.chartSearch) els.chartSearch.addEventListener('input', populateChartAssetOptions);
      if (els.chartFilterAll) {
        els.chartFilterAll.addEventListener('click', () => setChartFilter('all'));
        els.chartFilterGains.addEventListener('click', () => setChartFilter('gains'));
        els.chartFilterFalls.addEventListener('click', () => setChartFilter('falls'));
        els.chartFilterBirths.addEventListener('click', () => setChartFilter('births'));
        if (els.chartFilterSandbox) els.chartFilterSandbox.addEventListener('click', () => setChartFilter('sandbox'));
      }

      if (els.chartAddLine) {
        els.chartAddLine.addEventListener('click', () => {
          const k = String(els.chartAsset?.value || state.charts.lastAsset || '');
          if (!k) return;
          const it = state.market.universe.get(k);
          const cur = Number(it?.priceUsd);
          const def = Number.isFinite(cur) ? String(cur) : '';
          const raw = window.prompt('Add resistance line price (USD):', def);
          if (raw == null) return;
          const price = Number(String(raw).trim());
          if (!Number.isFinite(price) || price <= 0) return;

          let saved = [];
          try {
            saved = JSON.parse(localStorage.getItem(`juzzy_chart_lines_${k}`) || '[]');
          } catch {
            saved = [];
          }
          if (!Array.isArray(saved)) saved = [];
          saved.push(price);
          saved = Array.from(new Set(saved.map((n) => Number(n)).filter((n) => Number.isFinite(n) && n > 0)));
          saved.sort((a, b) => a - b);
          try {
            localStorage.setItem(`juzzy_chart_lines_${k}`, JSON.stringify(saved));
          } catch {
            // ignore
          }
          restoreChartPriceLines(k);
        });
      }

      if (els.chartClearLines) {
        els.chartClearLines.addEventListener('click', () => {
          const k = String(els.chartAsset?.value || state.charts.lastAsset || '');
          if (!k) return;
          clearChartPriceLines(k);
        });
      }
    }

    els.exportBtn.addEventListener('click', exportReportsCsv);

    els.reportSearch.addEventListener('input', () => {
      resetReportsRender();
    });

    if (els.reportsNewBtn) {
      els.reportsNewBtn.addEventListener('click', () => {
        state.reportsNewPending = 0;
        updateReportsNewIndicator();
        if (els.reportsList) els.reportsList.scrollTop = 0;
        resetReportsRender();
      });
    }

    els.reportsList.addEventListener('scroll', () => {
      const nearBottom = els.reportsList.scrollTop + els.reportsList.clientHeight >= els.reportsList.scrollHeight - 120;
      if (nearBottom) renderMoreReports(30);

      if (isNearTop(els.reportsList) && state.reportsNewPending > 0) {
        state.reportsNewPending = 0;
        updateReportsNewIndicator();
      }
    });

    // Learn library events
    if (els.tutCat) els.tutCat.addEventListener('change', renderTutCatalog);
    if (els.tutSearch) els.tutSearch.addEventListener('input', renderTutCatalog);
    if (els.tutBack) els.tutBack.addEventListener('click', closeTutLesson);
    if (els.tutPrev) els.tutPrev.addEventListener('click', () => tutStepNav(-1));
    if (els.tutNext) els.tutNext.addEventListener('click', () => tutStepNav(1));
    if (els.tutModeRead) els.tutModeRead.addEventListener('click', () => startTutLesson(false));
    if (els.tutModeAI) els.tutModeAI.addEventListener('click', () => startTutLesson(true));
    if (els.tutTtsToggle) els.tutTtsToggle.addEventListener('click', () => {
      tutTtsEnabled = !tutTtsEnabled;
      tutTtsUpdateBtn();
      if (tutTtsEnabled) {
        const tut = allTutorials.find(t => t.id === activeTutId);
        const step = tut ? tut.steps[activeTutStep] : null;
        if (step) tutTtsSpeak(step.title + '. ' + step.html);
      } else {
        tutTtsStop();
      }
    });
    if (els.tutChatSend) els.tutChatSend.addEventListener('click', () => {
      const q = String(els.tutChatInput?.value || '').trim();
      if (!q) return;
      els.tutChatInput.value = '';
      tutAIAnswer(q);
    });
    if (els.tutChatInput) els.tutChatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const q = String(els.tutChatInput.value || '').trim();
        if (!q) return;
        els.tutChatInput.value = '';
        tutAIAnswer(q);
      }
    });

    if (els.opsForceSnapshot) {
      els.opsForceSnapshot.addEventListener('click', async () => {
        appendTerminal('INFO', 'OPS: Forcing market snapshot refresh…');
        emitAudit('OPS_FORCE_SNAPSHOT', {}, 'INFO');
        await loadMarketSnapshotOnce();
        renderOps();
      });
    }

    if (els.opsReconnect) {
      els.opsReconnect.addEventListener('click', () => {
        appendTerminal('INFO', 'OPS: Reconnecting SSE streams…');
        emitAudit('OPS_RECONNECT_STREAMS', {}, 'INFO');
        connectMarketStream();
        connectAuditStream();
        renderOps();
      });
    }

    els.addFunds.addEventListener('click', () => {
      openModal({ title: 'Add funds', bodyHtml: '<div class="muted">Non-custodial: this will deep-link to a wallet on-ramp in V2.</div>', primaryText: 'OK', secondaryText: 'Close' });
    });
    els.withdrawFunds.addEventListener('click', () => {
      openModal({ title: 'Withdraw', bodyHtml: '<div class="muted">Non-custodial: withdrawals happen from your wallet/exchange. V2 will deep-link to your wallet.</div>', primaryText: 'OK', secondaryText: 'Close' });
    });

    if (els.vaultNetwork) {
      els.vaultNetwork.addEventListener('change', () => {
        saveVaultNetwork(String(els.vaultNetwork.value || 'solana'));
      });
    }

    if (els.vaultConnect) {
      els.vaultConnect.addEventListener('click', async () => {
        try {
          if (String(state.vault.network) !== 'evm') {
            openModal({ title: 'Connect wallet', bodyHtml: '<div class="muted">EVM wallet connect uses MetaMask. Switch Execution network to EVM to connect.</div>', primaryText: 'OK', secondaryText: 'Close' });
            return;
          }
          await connectEvmWallet();
          await ensureBaseChain();
          openModal({ title: 'Wallet connected', bodyHtml: `<div class="muted">Connected: <strong>${shortAddr(state.walletAddress)}</strong> on Base.</div>`, primaryText: 'OK', secondaryText: 'Close' });
        } catch (e) {
          openModal({ title: 'Wallet connect failed', bodyHtml: `<div class="muted">${String(e?.message || e)}</div>`, primaryText: 'OK', secondaryText: 'Close' });
        }
      });
    }

    if (els.vaultArm) els.vaultArm.addEventListener('change', saveVaultRiskPrefs);
    if (els.vaultMaxUsd) els.vaultMaxUsd.addEventListener('change', saveVaultRiskPrefs);
    if (els.vaultSlippage) els.vaultSlippage.addEventListener('change', saveVaultRiskPrefs);
  }

  function heartbeatTick() {
    state.heartbeat += 1;
    els.hbMs.textContent = String(HEARTBEAT_MS);
    autopilotUpdate();
    paperBankingTick();

    if (state.heartbeat % 6 === 0) {
      computeBrainSignalsFromSnapshot();
    }

    if (state.heartbeat % 8 === 0) {
      fetchLeaders();
    }

    if (state.autopilot.active && state.heartbeat % 12 === 0) {
      const drift = (Math.random() - 0.45) * 0.55;
      state.pnl += drift;
      els.kpiPnl.textContent = `$${formatMoney(state.pnl)}`;
    }
  }

  function startLiveFallbackLoop() {
    window.setInterval(() => {
      if (!state.market.connected) void loadMarketSnapshotOnce();
    }, 6000);

    window.setInterval(() => {
      if (document.querySelector('#tab-ops.panel.active')) renderOps();
      if (document.querySelector('#tab-leaders.panel.active')) renderLeaders();
      if (document.querySelector('#tab-charts.panel.active')) {
        const k = String(els.chartAsset?.value || '');
        if (k) {
          const cur = state.market.universe.get(k);
          if (cur && Number.isFinite(Number(cur.priceUsd))) upsertLivePoint(k, cur.priceUsd);
        }
        refreshChart();
      }
    }, 4500);
  }

  function handleStripeReturn() {
    const params = new URLSearchParams(window.location.search);
    const stripeState = params.get('stripe');
    const flow = params.get('flow');
    if (!stripeState) return;

    if (stripeState === 'success') {
      if (flow === 'subscribe') {
        // Server webhook is the source of truth. This is just UX feedback.
        appendTerminal('BILL', 'Subscription active.');
        state.reports.unshift({
          id: `B-${String(Date.now())}`,
          asset: 'USD',
          status: 'SUBSCRIPTION_ACTIVE',
          notional: 0,
          fee: 0,
          ts: Date.now(),
          detail: { safeguards: 1000, reason: 'Stripe subscription activated.' },
        });
        resetReportsRender();
      }

      if (flow === 'upfront') {
        const totalRaw = localStorage.getItem('pos_pending_upfront_total');
        const feeRaw = localStorage.getItem('pos_pending_upfront_fee');
        const total = totalRaw != null ? Number(totalRaw) : 0;
        const fee = feeRaw != null ? Number(feeRaw) : 0;
        if (Number.isFinite(total) && total > 0) appendTerminal('BILL', `Upfront fee paid for total $${formatMoney(total)}.`);

        state.reports.unshift({
          id: `B-${String(Date.now())}`,
          asset: 'USD',
          status: 'UPFRONT_FEE_PAID',
          notional: Number.isFinite(total) ? total : 0,
          fee: Number.isFinite(fee) ? fee : 0,
          ts: Date.now(),
          detail: { safeguards: 1000, reason: 'Upfront 1% service fee paid via Stripe.' },
        });
        resetReportsRender();

        localStorage.removeItem('pos_pending_upfront_total');
        localStorage.removeItem('pos_pending_upfront_fee');
      }
    }

    // Refresh server-side billing state after returning from Stripe.
    state.user.lastBillingFetchAt = 0;
    fetchBillingStatus();

    // Clean URL.
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  function wireUi() {
    document.title = 'Juzzy: wireUi START';
    console.log('[BOOT] wireUi() called');
    setActiveTab('oracle');
    els.fuelValue.textContent = String(els.fuel.value);
    setStatus('Idle');
    appendTerminal('INFO', 'Dashboard loaded.');
    appendTerminal('INFO', 'This is a scaffold. No profit guarantees.');
    loadVaultPrefs();
    wireGlobalErrorHandlers();
    updatePaperKpis();

    // Always wire interactions first so the app never becomes a non-clickable shell
    // if a network call or stream setup throws.
    try {
      initEvents();
      document.title = 'Juzzy: events WIRED';
      console.log('[BOOT] initEvents() succeeded');
    } catch (e) {
      document.title = 'Juzzy: initEvents CRASHED - ' + String(e?.message || e);
      console.error('[BOOT] initEvents CRASHED', e);
      appendTerminal('ERR', `UI init failed: ${String(e?.message || e)}`);
    }

    const safe = (label, fn) => {
      try {
        const out = fn();
        return out;
      } catch (e) {
        appendTerminal('ERR', `${label} failed: ${String(e?.message || e)}`);
        emitAudit('BOOT_ERR', { label, error: String(e?.message || e) }, 'ERR');
        return null;
      }
    };

    safe('connectMarketStream', () => connectMarketStream());
    safe('connectAuditStream', () => connectAuditStream());
    safe('loadMarketSnapshotOnce', () => void loadMarketSnapshotOnce());
    safe('startLiveFallbackLoop', () => startLiveFallbackLoop());

    state.user.email = localStorage.getItem('pos_email') || '';
    els.email.value = state.user.email;

    setSimpleMode(localStorage.getItem('pos_simple_mode') === '1');

    setAutoUi();

    safe('seedReports', () => seedReports());
    safe('resetReportsRender', () => resetReportsRender());
    safe('initTutCategoryOptions', () => initTutCategoryOptions());
    safe('renderTutCatalog', () => renderTutCatalog());
    safe('fetchLeaders', () => fetchLeaders());

    safe('handleStripeReturn', () => handleStripeReturn());
    safe('fetchBillingStatus', () => fetchBillingStatus());

    if (FEATURES.charts) {
      initOrResizeChart();
      refreshChart();
    }

    window.setInterval(heartbeatTick, HEARTBEAT_MS);
  }

  try {
    wireUi();
    document.title = 'Juzzy: READY';
    console.log('[BOOT] wireUi() completed');
  } catch(e) {
    document.title = 'Juzzy: wireUi CRASHED - ' + String(e?.message || e);
    console.error('[BOOT] wireUi CRASHED', e);
  }
})();
