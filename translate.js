const LANGS = [
    { code: 'zh', name: '中文', voice: 'zh-CN', pair: 'en|zh' },
    { code: 'ja', name: '日本語', voice: 'ja-JP', pair: 'en|ja' },
    { code: 'ko', name: '한국어', voice: 'ko-KR', pair: 'en|ko' },
    { code: 'fr', name: 'Français', voice: 'fr-FR', pair: 'en|fr' },
    { code: 'de', name: 'Deutsch', voice: 'de-DE', pair: 'en|de' },
    { code: 'es', name: 'Español', voice: 'es-ES', pair: 'en|es' },
];

const $mic = document.getElementById('mic');
const $statusTxt = document.getElementById('statusTxt');
const $timer = document.getElementById('timer');
const $transSt = document.getElementById('transSt');
const $grid = document.getElementById('grid');
const $src = document.getElementById('src');

// ── Build language cards ──────────────────────────────────────────────
LANGS.forEach(l => {
    const d = document.createElement('div');
    d.className = 'lc';
    d.id = `lc-${l.code}`;
    d.setAttribute('tabindex', '0');
    d.setAttribute('role', 'button');
    d.setAttribute('aria-label', `Listen to ${l.name} translation`);
    d.innerHTML = `
                <div class="lc-top">
                    <span class="lang-pill">${l.name}</span>
                </div>
                <div class="result" id="r-${l.code}"><span class="empty">—</span></div>
                <span class="vol-btn" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                    </svg>
                </span>`;
    d.addEventListener('click', () => speak(l));
    d.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); speak(l); } });
    $grid.appendChild(d);
});

// ── SpeechRecognition ─────────────────────────────────────────────────
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SR) {
    document.getElementById('nosr').style.display = 'block';
    document.getElementById('main').style.display = 'none';
}

let recog, listening = false;
let fullText = '', interimText = '';
let seconds = 0, timerInt, transInt;
let lastTranslated = '';

function renderSrc() {
    if (!fullText && !interimText) {
        $src.innerHTML = '<span class="ph">Start speaking to see transcription…</span>';
    } else {
        const safe = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        $src.innerHTML =
            (fullText ? safe(fullText) : '') +
            (interimText ? `<span class="interim">${safe(interimText)}</span>` : '');
    }
}

if (SR) {
    recog = new SR();
    recog.lang = 'en-US';
    recog.continuous = true;
    recog.interimResults = true;

    recog.onresult = e => {
        let newFinal = '';
        interimText = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
            const t = e.results[i][0].transcript;
            if (e.results[i].isFinal) newFinal += t;
            else interimText += t;
        }
        if (newFinal) fullText += newFinal;
        renderSrc();
    };

    recog.onerror = e => {
        if (e.error === 'not-allowed') {
            $statusTxt.textContent = 'Microphone access denied';
            alert('Microphone access denied');
        };
        stopRec(false);
    };

    recog.onend = () => { if (listening) try { recog.start(); } catch (e) { } };
}

$mic.addEventListener('click', () => { if (listening) stopRec(true); else startRec(); });

function startRec() {
    if (!recog) return;
    fullText = ''; interimText = ''; seconds = 0; lastTranslated = '';
    $timer.textContent = '00:00';
    $transSt.innerHTML = '';
    renderSrc();
    LANGS.forEach(l => {
        document.getElementById(`r-${l.code}`).innerHTML = '<span class="empty">—</span>';
        document.getElementById(`lc-${l.code}`).classList.remove('speaking');
    });
    recog.start();
    listening = true;
    document.body.classList.add('recording');
    $mic.classList.add('on');
    $mic.setAttribute('aria-label', 'Stop recording');
    $statusTxt.textContent = 'Recording';
    timerInt = setInterval(() => {
        seconds++;
        $timer.textContent =
            String(Math.floor(seconds / 60)).padStart(2, '0') + ':' +
            String(seconds % 60).padStart(2, '0');
    }, 1000);
    transInt = setInterval(() => {
        const current = (fullText + interimText).trim();
        if (current && current !== lastTranslated) {
            lastTranslated = current;
            translateAll(current);
        }
    }, 3000);
    startVis();
}

function stopRec(doTrans) {
    listening = false;
    try { recog.stop(); } catch (e) { }
    document.body.classList.remove('recording');
    $mic.classList.remove('on');
    $mic.setAttribute('aria-label', 'Start recording');
    $statusTxt.textContent = 'Click to record';
    clearInterval(timerInt);
    clearInterval(transInt);
    stopVis();
    if (interimText) { fullText += interimText; interimText = ''; renderSrc(); }
    const finalText = fullText.trim();
    if (doTrans && finalText && finalText !== lastTranslated) {
        lastTranslated = finalText;
        translateAll(finalText);
    }
}

// ── Translation ───────────────────────────────────────────────────────
async function translateAll(text) {
    const total = LANGS.length;
    let done = 0;
    $transSt.innerHTML = `<span class="spinner"></span> Translating into ${total} languages…`;
    LANGS.forEach(l => {
        document.getElementById(`r-${l.code}`).innerHTML = '<span class="ld"></span>';
    });

    const promises = LANGS.map(async lang => {
        try {
            const q = text.length > 500 ? text.slice(0, 500) : text;
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${lang.pair}`;
            const res = await fetch(url);
            const data = await res.json();
            document.getElementById(`r-${lang.code}`).textContent =
                data.responseData?.translatedText || 'Translation failed';
        } catch {
            document.getElementById(`r-${lang.code}`).textContent = 'Network error';
        }
        done++;
        $transSt.innerHTML = `<span class="spinner"></span> ${done} / ${total} complete`;
    });

    await Promise.all(promises);
    $transSt.innerHTML = '✓ Done · Click any card to listen';
    setTimeout(() => { $transSt.innerHTML = ''; }, 4000);
}

// ── Speech Synthesis ──────────────────────────────────────────────────
function speak(lang) {
    const text = document.getElementById(`r-${lang.code}`).textContent;
    if (!text || text === '—' || text === 'Network error' || text === 'Translation failed') return;
    speechSynthesis.cancel();
    LANGS.forEach(l => document.getElementById(`lc-${l.code}`).classList.remove('speaking'));
    const card = document.getElementById(`lc-${lang.code}`);
    card.classList.add('speaking');
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang.voice;
    utt.rate = 0.92;
    const voices = speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(lang.voice.split('-')[0]));
    if (match) utt.voice = match;
    utt.onend = () => card.classList.remove('speaking');
    utt.onerror = () => card.classList.remove('speaking');
    speechSynthesis.speak(utt);
}

if (window.speechSynthesis) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
}

// ── Audio Visualizer ──────────────────────────────────────────────────
const canvas = document.getElementById('cv');
const cx = canvas.getContext('2d');
let audioCtx, analyser, dataArr, micSrc, raf;

function fit() {
    const dpr = devicePixelRatio || 1;
    const r = canvas.parentElement.getBoundingClientRect();
    canvas.width = r.width * dpr;
    canvas.height = r.height * dpr;
    cx.scale(dpr, dpr);
    canvas.style.width = r.width + 'px';
    canvas.style.height = r.height + 'px';
}
fit();
addEventListener('resize', fit);

// Idle: soft animated bars using accent purple
function idleDraw() {
    const w = canvas.width / (devicePixelRatio || 1);
    const h = canvas.height / (devicePixelRatio || 1);
    cx.clearRect(0, 0, w, h);
    const t = Date.now() / 1400, n = 64, gap = w / n;
    for (let i = 0; i < n; i++) {
        const x = i * gap + gap / 2;
        const wave = Math.sin(t + i * 0.14) + Math.sin(t * 0.6 + i * 0.09);
        const a = wave * 2.5 + 3.5;
        const alpha = 0.10 + Math.abs(Math.sin(t * 0.4 + i * 0.07)) * 0.08;
        cx.fillStyle = `rgba(108,99,255,${alpha})`;
        cx.fillRect(x - 1.2, h / 2 - a, 2, a * 2);
    }
    raf = requestAnimationFrame(idleDraw);
}
idleDraw();

// Live: frequency spectrum with design-system color gradient
const PAL = [
    [108, 99, 255],  // accent purple
    [56, 178, 172],  // teal
    [245, 158, 11],  // amber
    [236, 72, 153],  // pink
    [16, 185, 129],  // emerald
];

async function startVis() {
    try {
        if (!audioCtx) audioCtx = new (AudioContext || webkitAudioContext)();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        micSrc = audioCtx.createMediaStreamSource(stream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.75;
        micSrc.connect(analyser);
        dataArr = new Uint8Array(analyser.frequencyBinCount);
        cancelAnimationFrame(raf);
        liveDraw();
    } catch (e) { console.error(e); }
}

function liveDraw() {
    if (!listening) return;
    const w = canvas.width / (devicePixelRatio || 1);
    const h = canvas.height / (devicePixelRatio || 1);
    cx.clearRect(0, 0, w, h);
    analyser.getByteFrequencyData(dataArr);
    const len = dataArr.length, bw = w / len;
    for (let i = 0; i < len; i++) {
        const v = dataArr[i] / 255;
        const bh = v * h * 0.86;
        const x = i * bw;
        const ci = (i / len) * (PAL.length - 1);
        const idx = Math.floor(ci), frac = ci - idx;
        const c1 = PAL[Math.min(idx, PAL.length - 1)];
        const c2 = PAL[Math.min(idx + 1, PAL.length - 1)];
        const r = (c1[0] + (c2[0] - c1[0]) * frac) | 0;
        const g = (c1[1] + (c2[1] - c1[1]) * frac) | 0;
        const b = (c1[2] + (c2[2] - c1[2]) * frac) | 0;
        const grd = cx.createLinearGradient(0, h / 2 - bh / 2, 0, h / 2 + bh / 2);
        grd.addColorStop(0, `rgba(${r},${g},${b},0.05)`);
        grd.addColorStop(0.25, `rgba(${r},${g},${b},0.50)`);
        grd.addColorStop(0.5, `rgba(${r},${g},${b},0.80)`);
        grd.addColorStop(0.75, `rgba(${r},${g},${b},0.50)`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0.05)`);
        cx.fillStyle = grd;
        cx.fillRect(x, h / 2 - bh / 2, Math.max(bw - 0.8, 1), bh);
    }
    raf = requestAnimationFrame(liveDraw);
}

function stopVis() {
    cancelAnimationFrame(raf);
    if (micSrc) {
        micSrc.mediaStream.getTracks().forEach(t => t.stop());
        micSrc.disconnect();
        micSrc = null;
    }
    idleDraw();
}