(() => {
  function init() {
    const mapEl = document.getElementById('map-leaflet');
    if (!mapEl || typeof map === 'undefined') {
      setTimeout(init, 100);
      return;
    }

    const cursor = document.createElement('div');
    cursor.className = 'cx-cursor';
    const label = document.createElement('span');
    label.className = 'cx-label';
    cursor.appendChild(label);
    document.body.appendChild(cursor);

    let nearestCity = '';
    let onMap = false;
    let pendingWidth = 28;

    function getNearestCity(px, py) {
      try {
        const ll = map.mouseEventToLatLng({ clientX: px, clientY: py });
        let best = null, bestD = Infinity;
        for (const p of projects) {
          const d = (p.lat - ll.lat) ** 2 + (p.lon - ll.lng) ** 2;
          if (d < bestD) { bestD = d; best = p; }
        }
        return best ? best.city : '';
      } catch { return ''; }
    }

    document.addEventListener('mousemove', e => {
      const mx = e.clientX;
      const my = e.clientY;

      // Position: set directly — zero lag
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
      cursor.style.opacity = '1';

      const nowOnMap = mapEl.contains(e.target);

      if (nowOnMap !== onMap) {
        onMap = nowOnMap;
        cursor.classList.toggle('cx--map', onMap);
        if (!onMap) {
          label.textContent = '';
          nearestCity = '';
          cursor.style.width = '28px';
        }
      }

      if (onMap) {
        const city = getNearestCity(mx, my);
        if (city !== nearestCity) {
          nearestCity = city;
          label.textContent = city;
          // Update width without disrupting CSS transition on other props
          const w = Math.max(80, city.length * 9 + 32);
          cursor.style.setProperty('--rect-w', w + 'px');
          cursor.style.width = w + 'px';
        }
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
  }

  init();
})();
