/* ============================================================
   NovuLabs – main.js | Light Theme 2026
   ============================================================ */
'use strict';

/* ── Preloader ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const el = document.getElementById('preloader');
    if (el) { el.classList.add('hidden'); setTimeout(() => el.remove(), 600); }
  }, 1400);
});

/* ── Scroll progress ── */
const sp = document.getElementById('sp');
if (sp) window.addEventListener('scroll', () => {
  sp.style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
});

/* ── Custom cursor ── */
const cur = document.querySelector('.cursor'), curf = document.querySelector('.cursor-f');
let mx = 0, my = 0, fx = 0, fy = 0, cursorReady = false;
if (cur && curf && window.innerWidth > 768) {
  /* Hide both until the mouse actually enters the window */
  cur.style.opacity = '0';
  curf.style.opacity = '0';

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    /* Snap to position on first move, then fade in so it doesn't jump from (0,0) */
    if (!cursorReady) {
      cursorReady = true;
      fx = mx - 18; fy = my - 18;
      cur.style.transition  = 'opacity .25s ease, transform .1s ease, background .2s';
      curf.style.transition = 'opacity .25s ease, all .18s ease';
      cur.style.opacity  = '1';
      curf.style.opacity = '1';
    }
    cur.style.transform = `translate(${mx - 4}px,${my - 4}px)`;
  });

  /* Follower ring — center offset = half of 36px = 18 */
  (function af() {
    fx += (mx - fx - 18) * 0.12; fy += (my - fy - 18) * 0.12;
    curf.style.transform = `translate(${fx}px,${fy}px)`;
    requestAnimationFrame(af);
  })();

  document.querySelectorAll('a,button,.gcard,.pcard,.icard,.wcard,.vcard,.tcard').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.classList.add('h'); curf.classList.add('h'); });
    el.addEventListener('mouseleave', () => { cur.classList.remove('h'); curf.classList.remove('h'); });
  });
}

/* ── Navbar scroll + dark hero inversion ── */
const nav = document.querySelector('.navbar');
if (nav) {
  const hasDarkHero = !!document.querySelector('.phero') || !!document.querySelector('#hero');
  if (hasDarkHero) nav.classList.add('nav-inv');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    nav.classList.toggle('scrolled', scrolled);
    if (hasDarkHero) nav.classList.toggle('nav-inv', !scrolled);
  });
}

/* ── Active nav link ── */
const pg = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link:not(.nav-cta)').forEach(l => {
  if (l.getAttribute('href') === pg) l.classList.add('active');
});

/* ── Full-screen Neural Network on particles-canvas ── */
(function initParticles() {
  const c = document.getElementById('particles-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const G1 = '201,168,76', G2 = '232,201,106', G3 = '240,217,140';
  let W, H, nodes = [], packets = [];

  function resize() {
    W = c.width  = c.offsetWidth;
    H = c.height = c.offsetHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildNodes(); });

  function buildNodes() {
    nodes = [];
    const count = Math.max(48, Math.min(80, Math.floor((W * H) / 14000)));
    for (let i = 0; i < count; i++) {
      const hub = i < 8;
      nodes.push({
        x:  hub ? W * (.08 + (.84 / 7) * i) + (Math.random() - .5) * 80
                : Math.random() * W,
        y:  hub ? H * (.25 + Math.random() * .50)
                : Math.random() * H,
        vx: hub ? 0 : (Math.random() - .5) * .32,
        vy: hub ? 0 : (Math.random() - .5) * .32,
        r:  hub ? Math.random() * 3 + 5   : Math.random() * 2.2 + 1.2,
        ph: Math.random() * Math.PI * 2,
        ps: Math.random() * .020 + .010,
        hub
      });
    }
  }
  buildNodes();

  function spawnPacket() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        if (Math.sqrt(dx * dx + dy * dy) < 160 && Math.random() < .018) {
          packets.push({ from: i, to: j, t: 0, sp: Math.random() * .006 + .004 });
          return;
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    nodes.forEach(n => {
      n.ph += n.ps;
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.x = Math.max(0, Math.min(W, n.x));
      n.y = Math.max(0, Math.min(H, n.y));
    });

    /* connections */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${G1},${(1 - d / 160) * .28})`;
          ctx.lineWidth = .7;
          ctx.stroke();
        }
      }
    }

    /* circuit cross-arms on hub nodes */
    nodes.filter(n => n.hub).forEach(n => {
      const len = 38 + Math.sin(n.ph) * 14;
      ctx.strokeStyle = `rgba(${G1},.14)`;
      ctx.lineWidth = 1;
      [[n.x - len, n.y, n.x + len, n.y],
       [n.x, n.y - len, n.x, n.y + len]].forEach(([x1,y1,x2,y2]) => {
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        ctx.beginPath(); ctx.arc(x1, y1, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G2},.42)`; ctx.fill();
        ctx.beginPath(); ctx.arc(x2, y2, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G2},.42)`; ctx.fill();
      });
    });

    /* data packets */
    packets = packets.filter(p => p.t < 1);
    packets.forEach(p => {
      p.t += p.sp;
      const n1 = nodes[p.from], n2 = nodes[p.to];
      const x = n1.x + (n2.x - n1.x) * p.t;
      const y = n1.y + (n2.y - n1.y) * p.t;
      const trail = ctx.createRadialGradient(x, y, 0, x, y, 7);
      trail.addColorStop(0, `rgba(${G3},.92)`);
      trail.addColorStop(.5, `rgba(${G1},.38)`);
      trail.addColorStop(1, `rgba(${G1},0)`);
      ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fillStyle = trail; ctx.fill();
      ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${G3},1)`; ctx.fill();
    });
    if (Math.random() < .05) spawnPacket();

    /* nodes */
    nodes.forEach(n => {
      const pulse = Math.sin(n.ph);
      const r = n.r + pulse * (n.hub ? 2 : .8);
      const a = .50 + pulse * .20;

      if (n.hub) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
        glow.addColorStop(0, `rgba(${G1},.22)`);
        glow.addColorStop(.5, `rgba(${G1},.06)`);
        glow.addColorStop(1, `rgba(${G1},0)`);
        ctx.beginPath(); ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow; ctx.fill();
        ctx.beginPath(); ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${G1},.16)`; ctx.lineWidth = 1; ctx.stroke();
      }

      const core = ctx.createRadialGradient(n.x - 1, n.y - 1, 0, n.x, n.y, r);
      core.addColorStop(0, `rgba(${G3},${a})`);
      core.addColorStop(1, `rgba(${G1},${a * .40})`);
      ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = core; ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Chart bars ── */
const HH = [40,65,55,80,70,90,60,75,85,50,95,65];
document.querySelectorAll('.cbar').forEach((b, i) => {
  b.style.height = `${HH[i % HH.length]}%`;
  b.style.animationDelay = `${i * .1}s`;
});

/* ── Counters ── */
function animCtr(el, tgt, sfx = '', dur = 1900) {
  let s = null;
  (function step(ts) {
    if (!s) s = ts;
    const p = Math.min((ts - s) / dur, 1), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * tgt) + sfx;
    if (p < 1) requestAnimationFrame(step);
  })(performance.now());
}
const cObs = new IntersectionObserver(ens => {
  ens.forEach(en => {
    if (en.isIntersecting && !en.target.dataset.done) {
      en.target.dataset.done = '1';
      animCtr(en.target, +en.target.dataset.target, en.target.dataset.suffix || '');
    }
  });
}, { threshold: .5 });
document.querySelectorAll('[data-counter]').forEach(el => cObs.observe(el));

/* ── 3D Hero tilt ── */
const scene3d = document.querySelector('.h3d-scene');
const card3d  = document.querySelector('.h3d-card');
if (scene3d && card3d) {
  scene3d.addEventListener('mousemove', e => {
    const r = card3d.getBoundingClientRect();
    const rx = ((e.clientY - r.top  - r.height / 2) / r.height) * -10;
    const ry = ((e.clientX - r.left - r.width  / 2) / r.width)  *  12;
    card3d.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    card3d.style.animation  = 'none';
  });
  scene3d.addEventListener('mouseleave', () => {
    card3d.style.transform = '';
    card3d.style.animation = '';
  });
}

/* ── Card glow — keeps glass transparency intact ── */
document.querySelectorAll('.gcard').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width)  * 100;
    const y = ((e.clientY - r.top)  / r.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(201,168,76,.09) 0%, rgba(255,255,255,.86) 42%, rgba(255,255,255,.62) 100%)`;
  });
  card.addEventListener('mouseleave', () => card.style.background = '');
});

/* ── FAQ accordion ── */
document.querySelectorAll('.fq').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.fitem'), was = item.classList.contains('open');
    document.querySelectorAll('.fitem.open').forEach(i => i.classList.remove('open'));
    if (!was) item.classList.add('open');
  });
});

/* ── Portfolio filter ── */
document.querySelectorAll('.pfbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pfbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.pcard').forEach(card => {
      const show = f === 'all' || card.dataset.cat === f;
      card.style.display = show ? '' : 'none';
      if (show) card.style.animation = 'fdUp .38s ease both';
    });
  });
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ── Contact form ── */
const cf = document.getElementById('contact-form');
if (cf) cf.addEventListener('submit', e => {
  e.preventDefault();
  const btn = cf.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="bi bi-check-circle me-2"></i>Message Sent — We\'ll be in touch!';
  btn.style.background = 'linear-gradient(135deg,#C9A84C,#E8C96A)';
  btn.disabled = true;
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.disabled = false; cf.reset(); }, 4000);
});

/* ── Newsletter form ── */
const nf = document.getElementById('nl-form');
if (nf) nf.addEventListener('submit', e => {
  e.preventDefault();
  const btn = nf.querySelector('button[type="submit"]');
  btn.textContent = '✓ Subscribed!';
  btn.style.background = 'linear-gradient(135deg,#C9A84C,#E8C96A)';
  setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; nf.reset(); }, 3000);
});


/* ── AOS ── */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') AOS.init({ duration: 640, easing: 'cubic-bezier(.4,0,.2,1)', once: true, offset: 72 });
});
