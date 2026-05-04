const projects = [
    {
        id: 1,
        name: "House NA",
        architect: "Sou Fujimoto",
        city: "Tokyo",
        region: "Kanto",
        type: "House",
        year: 2011,
        lat: 35.6644816,
        lon: 139.7918745,
        image: "./photos/1.jpg",
        note: "A transparent domestic stack that turns privacy into a calibrated spatial gradient.",
        link: 'https://www.archdaily.com/230533/house-na-sou-fujimoto-architects'
    },
    {
        id: 2,
        name: "Musashino Art University Museum & Library",
        architect: "Sou Fujimoto",
        city: "Tokyo",
        region: "Kanto",
        type: "Library",
        year: 2010,
        lat: 35.7228,
        lon: 139.4795,
        image: "./photos/2.jpg",
        note: "A labyrinth of bookshelves where circulation becomes reading, browsing, and architectural orientation.",
        link: 'https://www.archdaily.com/145789/musashino-art-university-museum-library-sou-fujimoto'
    },
    {
        id: 3,
        name: "Teshima Art Museum",
        architect: "Ryue Nishizawa",
        city: "Teshima",
        region: "Shikoku / Setouchi",
        type: "Museum",
        year: 2010,
        lat: 34.4886,
        lon: 134.0911,
        image: "./photos/3.jpg",
        note: "A concrete shell hovering between landscape, weather, and the slow choreography of water.",
        link: 'https://www.archdaily.com/151535/teshima-art-museum'
    },
    {
        id: 4,
        name: "Benesse House",
        architect: "Tadao Ando",
        city: "Naoshima",
        region: "Shikoku / Setouchi",
        type: "Museum",
        year: 1992,
        lat: 34.4491,
        lon: 133.9936,
        image: "./photos/4.jpg",
        note: "A coastal museum-hotel sequence that binds art viewing to terrain, sea, and concrete mass.",
        link: 'https://www.archdaily.com/964675/japans-art-islands-the-work-of-tadao-ando-in-naoshima'
    },
    {
        id: 5,
        name: "Church of the Light",
        architect: "Tadao Ando",
        city: "Ibaraki, Osaka",
        region: "Kansai",
        type: "Religious",
        year: 1989,
        lat: 34.8189,
        lon: 135.5686,
        image: "./photos/5.jpg",
        note: "A strict concrete box cut by luminous absence, turning light into structure.",
        link: 'https://www.archdaily.com/101260/ad-classics-church-of-the-light-tadao-ando'
    },
    {
        id: 6,
        name: "21st Century Museum of Contemporary Art",
        architect: "SANAA",
        city: "Kanazawa",
        region: "Chubu",
        type: "Museum",
        year: 2004,
        lat: 36.5609,
        lon: 136.6582,
        image: "./photos/6.jpg",
        note: "A circular plan that disperses hierarchy into a public field of galleries and urban shortcuts.",
        link: 'https://www.archdaily.com/798275/spotlight-sanaa'
    },
    {
        id: 7,
        name: "Sendai Mediatheque",
        architect: "Toyo Ito",
        city: "Sendai",
        region: "Tohoku",
        type: "Cultural",
        year: 2001,
        lat: 38.2655,
        lon: 140.8660,
        image: "./photos/7.jpg",
        note: "A public media building organized by tube-like structural organisms and open floor plates.",
        link: 'https://www.archdaily.com/118627/ad-classics-sendai-mediatheque-toyo-ito-and-associates-architects'
    },
    {
        id: 8,
        name: "Mikimoto Ginza 2",
        architect: "Toyo Ito",
        city: "Tokyo",
        region: "Kanto",
        type: "Retail",
        year: 2005,
        lat: 35.6732,
        lon: 139.7656,
        image: "./photos/8.jpg",
        note: "A perforated urban jewel box where facade, structure, and brand identity merge.",
        link: 'https://www.archdaily.com/206560/architecture-city-guide-tokyo-ii/mikimoto-ginza-2-building'
    },
    {
        id: 9,
        name: "SunnyHills Minami-Aoyama",
        architect: "Kengo Kuma",
        city: "Tokyo",
        region: "Kanto",
        type: "Retail",
        year: 2013,
        lat: 35.6631,
        lon: 139.7163,
        image: "./photos/9.jpg",
        note: "A lattice of interlocking timber pieces that converts craft into urban texture.",
        link: 'https://www.archdaily.com/484981/sunnyhills-at-minami-aoyama-kengo-kuma-and-associates'
    },
    {
        id: 10,
        name: "Asakusa Culture Tourist Information Center",
        architect: "Kengo Kuma",
        city: "Tokyo",
        region: "Kanto",
        type: "Cultural",
        year: 2012,
        lat: 35.7107,
        lon: 139.7965,
        image: "./photos/10.jpg",
        note: "Stacked rooflines compress a neighborhood skyline into a vertical civic marker.",
        link: 'https://www.archdaily.com/251370/asakusa-culture-and-tourism-center-kengo-kuma-associates'
    },
    {
        id: 11,
        name: "KAIT Workshop",
        architect: "Junya Ishigami",
        city: "Atsugi",
        region: "Kanto",
        type: "Education",
        year: 2008,
        lat: 35.4419,
        lon: 139.3456,
        image: "./photos/11.jpg",
        note: "A forest of thin columns where structure becomes atmosphere, density, and ambiguity.",
        link: 'https://www.archdaily.com/66661/66661'
    },
    {
        id: 12,
        name: "House & Restaurant",
        architect: "Junya Ishigami",
        city: "Yamaguchi",
        region: "Chugoku",
        type: "Restaurant",
        year: 2022,
        lat: 33.9515,
        lon: 131.2585,
        image: "./photos/12.jpg",
        note: "A cave-like interior cast from excavated ground, blurring building and earth.",
        link: 'https://www.archdaily.com/987227/house-and-restaurant-junya-ishigami-plus-associates'
    },
    {
        id: 13,
        name: "Moriyama House",
        architect: "Ryue Nishizawa",
        city: "Tokyo",
        region: "Kanto",
        type: "House",
        year: 2005,
        lat: 35.5714,
        lon: 139.7161,
        image: "./photos/13.jpg",
        note: "A dispersed domestic village where rooms become separate buildings inside the city fabric.",
        link: 'https://www.archdaily.com/tag/moriyama-house'
    },
    {
        id: 14,
        name: "Tokyo Toilet: Yoyogi Fukamachi Mini Park",
        architect: "Shigeru Ban",
        city: "Tokyo",
        region: "Kanto",
        type: "Public Facility",
        year: 2020,
        lat: 35.6691,
        lon: 139.6896,
        image: "./photos/14.jpg",
        note: "A small public facility using transparency and color to challenge urban hesitation.",
        link: 'https://www.archdaily.com/946426/yoyogi-fukamachi-mini-park-toilet-shigeru-ban-architects'
    },
    {
        id: 15,
        name: "Paper Church",
        architect: "Shigeru Ban",
        city: "Kobe",
        region: "Kansai",
        type: "Religious",
        year: 1995,
        lat: 34.6644,
        lon: 135.1381,
        image: "./photos/15.jpg",
        note: "A temporary sacred space built from paper tubes after disaster, later relocated and remembered.",
        link: 'https://www.archdaily.com/489255/the-humanitarian-works-of-shigeru-ban'
    },
    {
        id: 16,
        name: "Yokohama International Passenger Terminal",
        architect: "FOA",
        city: "Yokohama",
        region: "Kanto",
        type: "Transport",
        year: 2002,
        lat: 35.4517,
        lon: 139.6477,
        image: "./photos/16.jpg",
        note: "A folded ground-plane pier where roof, deck, path, and landscape braid together.",
        link: 'https://www.archdaily.com/554132/ad-classics-yokohama-international-passenger-terminal-foreign-office-architects-foa'
    }
];

const regions = ['All', ...Array.from(new Set(projects.map(p => p.region)))];
const architects = ['All', ...Array.from(new Set(projects.map(p => p.architect))).sort()];
const types = ['All', ...Array.from(new Set(projects.map(p => p.type))).sort()];

const architectData = {
    'FOA': {
        meta: 'est. 1993 · UK / Spain',
        bio: 'Farshid Moussavi and Alejandro Zaera-Polo. Theoretical practice focused on surface, program, and the politics of architectural form.',
    },
    'Junya Ishigami': {
        meta: 'b. 1974 · Kanagawa',
        bio: 'Pushes structural and perceptual limits to create environments that blur the line between architecture, landscape, and atmosphere.',
    },
    'Kengo Kuma': {
        meta: 'b. 1954 · Kanagawa',
        bio: 'Advocates for material honesty and craft, dissolving buildings into texture, natural material, and local identity.',
    },
    'Ryue Nishizawa': {
        meta: 'b. 1966 · Kanagawa',
        bio: 'Co-founder of SANAA. Works at the intersection of transparency, lightness, and site-specific spatial dissolution.',
    },
    'SANAA': {
        meta: 'est. 1995 · Tokyo',
        bio: 'Practice of Kazuyo Sejima and Ryue Nishizawa. Known for fluid, borderless spaces and a minimal material language.',
    },
    'Shigeru Ban': {
        meta: 'b. 1957 · Tokyo',
        bio: 'Known for humanitarian projects and unconventional materials — paper tubes, cardboard — applied to emergency and permanent works alike.',
    },
    'Sou Fujimoto': {
        meta: 'b. 1971 · Hokkaido',
        bio: 'Explores primordial shelter, ambiguous boundaries, and nature-architecture hybrids through lightweight, open structures.',
    },
    'Tadao Ando': {
        meta: 'b. 1941 · Osaka',
        bio: 'Self-taught master of exposed concrete, geometric precision, and the choreography of natural light through architecture.',
    },
    'Toyo Ito': {
        meta: 'b. 1941 · Seoul',
        bio: 'Pioneer of digital and structural experimentation, pursuing architecture as an extension of information flow and urban life.',
    },
};

// ── OpenWeatherMap ──
const WEATHER_KEY = '2f3164ce121e65bca0e3285fc4088655';
const weatherCache = {};

function owmTypeToLocal(main) {
    if (main === 'Clear') return 'sunny';
    if (main === 'Rain' || main === 'Drizzle' || main === 'Thunderstorm') return 'rainy';
    if (main === 'Snow') return 'snowy';
    return 'cloudy';
}

function weatherEmoji(type) {
    return { sunny: '☀️', cloudy: '☁️', rainy: '🌧️', snowy: '❄️' }[type] || '🌤️';
}

async function fetchWeather(project) {
    if (weatherCache[project.id]) return weatherCache[project.id];
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${project.lat}&lon=${project.lon}&appid=${WEATHER_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        const w = {
            type: owmTypeToLocal(data.weather[0].main),
            desc: data.weather[0].description,
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity
        };
        weatherCache[project.id] = w;
        return w;
    } catch {
        return null;
    }
}

async function loadAllWeather() {
    const BATCH = 2;
    for (let i = 0; i < projects.length; i += BATCH) {
        const batch = projects.slice(i, i + BATCH);
        await Promise.all(batch.map(p => fetchWeather(p)));
        renderPins(getFiltered());
        if (i + BATCH < projects.length) {
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}

function buildWeatherOverlay(type, cx, bottomOffset) {
    let content = '';
    if (type === 'sunny') {
        content = '<div class="mini-sun"></div>';
    } else if (type === 'rainy') {
        for (let i = 0; i < 5; i++) {
            const l = (10 + Math.random() * 80).toFixed(0);
            const d = (Math.random() * 0.5).toFixed(2);
            const dur = (0.35 + Math.random() * 0.2).toFixed(2);
            content += `<div class="mini-raindrop" style="left:${l}%;animation-delay:${d}s;animation-duration:${dur}s;"></div>`;
        }
    } else if (type === 'snowy') {
        for (let i = 0; i < 7; i++) {
            const l = (10 + Math.random() * 80).toFixed(0);
            const d = (Math.random() * 2).toFixed(2);
            const dur = (1.2 + Math.random() * 1).toFixed(2);
            const sz = (2 + Math.random() * 1.5).toFixed(1);
            content += `<div class="mini-snowflake" style="left:${l}%;width:${sz}px;height:${sz}px;animation-delay:${d}s;animation-duration:${dur}s;"></div>`;
        }
    } else if (type === 'cloudy') {
        for (let i = 0; i < 2; i++) {
            const top = (Math.random() * 8).toFixed(0);
            const d = (-Math.random() * 3).toFixed(2);
            const dur = (4 + Math.random() * 3).toFixed(2);
            content += `<div class="mini-cloud" style="top:${top}px;width:28px;height:10px;animation-delay:${d}s;animation-duration:${dur}s;"></div>`;
        }
    }
    return `<div class="weather-overlay" style="position:absolute;bottom:${bottomOffset}px;left:${cx}px;transform:translateX(-50%);width:50px;height:30px;pointer-events:none;overflow:visible;display:flex;justify-content:center;align-items:center;">${content}</div>`;
}

let activeProject = projects[0];
let globeOn = false;
let showIndex = false;
let filterQuery = '';
let filterRegion = 'All';
let filterArchitect = 'All';
let filterType = 'All';

let map;
let markerLayer;
let regionHighlightLayer = null;
let japanGeoJSON = null;

const REGION_PREFECTURES = {
    'Kanto': ['Tokyo To', 'Kanagawa Ken', 'Saitama Ken', 'Chiba Ken', 'Ibaraki Ken', 'Tochigi Ken', 'Gunma Ken'],
    'Shikoku / Setouchi': ['Tokushima Ken', 'Kagawa Ken', 'Ehime Ken', 'Kochi Ken'],
    'Kansai': ['Mie Ken', 'Shiga Ken', 'Kyoto Fu', 'Osaka Fu', 'Hyogo Ken', 'Nara Ken', 'Wakayama Ken'],
    'Chubu': ['Niigata Ken', 'Toyama Ken', 'Ishikawa Ken', 'Fukui Ken', 'Yamanashi Ken', 'Nagano Ken', 'Gifu Ken', 'Shizuoka Ken', 'Aichi Ken'],
    'Tohoku': ['Aomori Ken', 'Iwate Ken', 'Miyagi Ken', 'Akita Ken', 'Yamagata Ken', 'Fukushima Ken'],
    'Chugoku': ['Tottori Ken', 'Shimane Ken', 'Okayama Ken', 'Hiroshima Ken', 'Yamaguchi Ken']
};


async function loadJapanGeoJSON() {
    if (japanGeoJSON) return;
    try {
        const res = await fetch('./assets/japan.geojson');
        japanGeoJSON = await res.json();
    } catch (e) { /* silently skip if offline */ }
}

function updateRegionHighlight(region) {
    if (regionHighlightLayer) { map.removeLayer(regionHighlightLayer); regionHighlightLayer = null; }
    if (region === 'All' || !japanGeoJSON) return;
    const prefs = REGION_PREFECTURES[region];
    if (!prefs) return;
    const features = japanGeoJSON.features.filter(f => prefs.includes(f.properties.nam));
    if (!features.length) return;
    regionHighlightLayer = L.geoJSON({ type: 'FeatureCollection', features }, {
        style: { color: '#404040', weight: 1.5, fillColor: '#404040', fillOpacity: 0.13, opacity: 0.5 }
    }).addTo(map);
    regionHighlightLayer.eachLayer(l => {
        const el = l.getElement();
        if (el) {
            el.classList.add('region-highlight');
            el.style.filter = 'drop-shadow(0 0 6px rgba(0,0,0,0.18))';
            requestAnimationFrame(() => el.classList.add('visible'));
        }
    });
    regionHighlightLayer.bringToBack();
    const regionProjects = projects.filter(p => p.region === region);
    const avgLat = regionProjects.reduce((s, p) => s + p.lat, 0) / regionProjects.length;
    const avgLon = regionProjects.reduce((s, p) => s + p.lon, 0) / regionProjects.length;
    map.flyTo([avgLat, avgLon], 9, { duration: 0.9 });
}

function initMap() {
    map = L.map('map-leaflet', {
        center: [36.8, 136.5],
        zoom: 7,
        zoomControl: true,
        attributionControl: true
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19,
        subdomains: 'abcd'
    }).addTo(map);

    markerLayer = L.layerGroup().addTo(map);
    loadJapanGeoJSON();
}

function createPinIcon(id, selected, weatherType) {
    const inner = selected ? 10 : 7;
    const outer = selected ? 24 : 17;
    const pad = outer + 4;
    const w = pad * 2 + 22;
    const h = pad * 2;
    const cx = pad;
    const cy = pad;
    const opacity = selected ? 0.75 : 0.32;

    const svg = `<svg class="map-pin-svg" width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${cx}" cy="${cy}" r="${outer}" fill="transparent" stroke="#111" stroke-width="1" opacity="${opacity}"/>
        <circle cx="${cx}" cy="${cy}" r="${inner}" fill="#f4f3ef" stroke="#111" stroke-width="${selected ? 3.5 : 3}"/>
        <text x="${cx + inner + 4}" y="${cy - 7}" font-size="11" fill="#111" font-family="-apple-system,BlinkMacSystemFont,sans-serif">${String(id).padStart(2, '0')}</text>
    </svg>`;

    const overlay = weatherType
        ? buildWeatherOverlay(weatherType, cx, h - cy + inner + 4)
        : '';

    const html = `<div style="position:relative;width:${w}px;height:${h}px;overflow:visible;">${svg}${overlay}</div>`;
    return L.divIcon({ html, className: '', iconSize: [w, h], iconAnchor: [cx, cy] });
}

function getFiltered() {
    const q = filterQuery.trim().toLowerCase();
    return projects.filter(p => {
        const text = [p.name, p.architect, p.city, p.region, p.type, p.note].join(' ').toLowerCase();
        return (q === '' || text.includes(q))
            && (filterRegion === 'All' || p.region === filterRegion)
            && (filterArchitect === 'All' || p.architect === filterArchitect)
            && (filterType === 'All' || p.type === filterType);
    });
}

function populateSelect(el, options) {
    options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        el.appendChild(o);
    });
}
populateSelect(document.getElementById('select-region'), regions);
populateSelect(document.getElementById('select-type'), types);

// ── Custom architect dropdown ──
(function buildArchDropdown() {
    const pill = document.getElementById('arch-pill');
    const btn = document.getElementById('arch-select-btn');
    const dropdown = document.getElementById('arch-dropdown');
    const popup = document.getElementById('architect-popup');

    const archProjectCount = {};
    projects.forEach(p => { archProjectCount[p.architect] = (archProjectCount[p.architect] || 0) + 1; });

    architects.forEach(name => {
        const el = document.createElement('div');
        el.className = 'arch-option' + (name === 'All' ? ' selected' : '');
        el.textContent = name;
        el.dataset.value = name;

        el.addEventListener('mouseenter', () => {
            if (name === 'All') { popup.classList.remove('visible'); return; }
            const info = architectData[name];
            if (!info) return;
            const count = archProjectCount[name] || 0;
            popup.innerHTML =
                '<div class="arch-popup-name">' + name + '</div>' +
                '<div class="arch-popup-meta">' + info.meta + '</div>' +
                '<div class="arch-popup-bio">' + info.bio + '</div>' +
                '<div class="arch-popup-count">' + count + ' project' + (count !== 1 ? 's' : '') + ' in this atlas</div>';

            const dropRect = dropdown.getBoundingClientRect();
            popup.style.top = dropRect.top + 'px';
            popup.style.left = (dropRect.left - 270) + 'px';
            popup.classList.add('visible');
        });

        el.addEventListener('mouseleave', () => {
            popup.classList.remove('visible');
        });

        el.addEventListener('click', () => {
            filterArchitect = name;
            btn.textContent = name;
            dropdown.querySelectorAll('.arch-option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            dropdown.classList.remove('open');
            pill.classList.remove('open');
            popup.classList.remove('visible');
            render();
        });

        dropdown.appendChild(el);
    });

    btn.addEventListener('click', e => {
        e.stopPropagation();
        const opening = !dropdown.classList.contains('open');
        dropdown.classList.toggle('open');
        pill.classList.toggle('open', opening);
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
        pill.classList.remove('open');
        popup.classList.remove('visible');
    });

    pill.addEventListener('click', e => e.stopPropagation());
})();
let timer = null;
function renderPins(filtered) {
    markerLayer.clearLayers();
    filtered.forEach(project => {
        const selected = activeProject && activeProject.id === project.id;
        const wType = weatherCache[project.id] ? weatherCache[project.id].type : null;
        const marker = L.marker([project.lat, project.lon], {
            icon: createPinIcon(project.id, selected, wType),
            zIndexOffset: selected ? 1000 : 0
        });
        marker.on('click', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setActive(project)
            }, 300);
        });
        markerLayer.addLayer(marker);
    });
}

function renderIndex(filtered) {
    const grid = document.getElementById('index-grid');
    grid.innerHTML = '';
    filtered.forEach(project => {
        const btn = document.createElement('button');
        btn.className = 'index-card';
        btn.innerHTML =
            '<div class="index-card-header">' +
            '<span>' + String(project.id).padStart(2, '0') + '</span>' +
            '<span>' + project.region + '</span>' +
            '</div>' +
            '<h3 class="index-card-name">' + project.name + '</h3>' +
            '<p class="index-card-arch"><a href="' + project.link + '" target="_blank">' + project.architect + '</a></p>' +
            '<div class="index-card-loc"><span>&#8226;</span> ' + project.city + ' / ' + project.type + '</div>';
        btn.addEventListener('click', () => setActive(project));
        grid.appendChild(btn);
    });
}

function updateCount(filtered) {
    const countEl = document.getElementById('filtered-count');
    const totalEl = document.getElementById('total-count');
    if (countEl) countEl.textContent = filtered.length;
    if (totalEl) totalEl.textContent = projects.length;
}

async function showCard(project) {
    document.getElementById('card-img').src = project.image;
    document.getElementById('card-img').alt = project.name;
    document.getElementById('card-badge').textContent =
        String(project.id).padStart(2, '0') + ' / ' + project.region;
    document.getElementById('card-type').textContent =
        project.type + ' / ' + project.year;
    document.getElementById('card-name').textContent = project.name;
    const archEl = document.getElementById('card-architect');
    archEl.innerHTML = '<a href="' + project.link + '" target="_blank">' + project.architect + '</a>';
    document.getElementById('card-city').textContent = project.city;
    document.getElementById('card-lat').textContent = project.lat.toFixed(4);
    document.getElementById('card-lon').textContent = project.lon.toFixed(4);
    document.getElementById('card-note').textContent = project.note;
    document.getElementById('card-arrow-link').href = project.link;
    document.getElementById('project-card').classList.add('visible');

    // Weather — show loading state then fill in
    const weatherBox = document.getElementById('card-weather');
    weatherBox.style.display = 'flex';
    document.getElementById('card-weather-emoji').textContent = '⏳';
    document.getElementById('card-weather-temp').textContent = '—';
    document.getElementById('card-weather-desc').textContent = 'Fetching weather…';
    document.getElementById('card-weather-humidity').textContent = '';
    document.getElementById('card-footer-weather').textContent = 'Live Weather';

    const w = await fetchWeather(project);
    if (w) {
        document.getElementById('card-weather-emoji').textContent = weatherEmoji(w.type);
        document.getElementById('card-weather-temp').textContent = `${w.temp}°C`;
        document.getElementById('card-weather-desc').textContent = w.desc;
        document.getElementById('card-weather-humidity').textContent = `${w.humidity}% RH`;
        document.getElementById('card-footer-weather').textContent = 'Live Weather ✓';
    } else {
        document.getElementById('card-weather-emoji').textContent = '—';
        document.getElementById('card-weather-desc').textContent = 'Unavailable';
        document.getElementById('card-footer-weather').textContent = 'Live Weather ✗';
    }
}

function setActive(project) {
    activeProject = project;
    showCard(project);
    renderPins(getFiltered());
    map.flyTo([project.lat, project.lon], Math.max(map.getZoom(), 9), { animate: true, duration: 0.8 });
}

function render() {
    const filtered = getFiltered();
    renderPins(filtered);
    renderIndex(filtered);
    updateCount(filtered);
}


document.getElementById('search-input').addEventListener('input', e => {
    filterQuery = e.target.value; render();
});
document.getElementById('select-region').addEventListener('change', e => {
    filterRegion = e.target.value;
    render();
    updateRegionHighlight(filterRegion);
    if (filterRegion === 'All') map.flyTo([36.8, 136.5], 7, { duration: 0.9 });
});
document.getElementById('select-type').addEventListener('change', e => {
    filterType = e.target.value; render();
});

document.getElementById('card-close').addEventListener('click', () => {
    activeProject = null;
    document.getElementById('project-card').classList.remove('visible');
    renderPins(getFiltered());
});

initMap();
render();
showCard(activeProject);
loadAllWeather();
