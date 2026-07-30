/* Audax Softworks — reactive interactions */
(function () {
  "use strict";

  const projects = window.AUDAX_PROJECTS || [];
  const categories = window.AUDAX_CATEGORIES || [];
  let activeFilter = "all";

  /* ── Preloader ── */
  function hidePreloader() {
    const el = document.getElementById("preloader");
    if (!el) return;
    el.classList.add("hidden");
    setTimeout(() => el.remove(), 700);
  }

  window.addEventListener("load", () => setTimeout(hidePreloader, 400));
  setTimeout(hidePreloader, 3500);

  /* ── Theme toggle ── */
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("audax-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (systemDark ? "dark" : "light");

  html.setAttribute("data-theme", initialTheme);
  if (themeBtn) themeBtn.textContent = initialTheme === "dark" ? "☀" : "☾";

  themeBtn?.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("audax-theme", next);
    themeBtn.textContent = next === "dark" ? "☀" : "☾";
  });

  /* ── Mobile nav ── */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  menuToggle?.addEventListener("click", () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  /* ── Header scroll state ── */
  const header = document.querySelector(".site-header");
  window.addEventListener(
    "scroll",
    () => header?.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true }
  );

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll(".reveal");
  document.querySelectorAll(".stack-card").forEach((el, i) => {
    el.classList.add(`delay-${(i % 3) + 1}`);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ── Magnetic buttons ── */
  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

  /* ── Mesh canvas background ── */
  const canvas = document.getElementById("mesh-canvas");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let w, h, nodes, animId;
    const NODE_COUNT = 48;
    const CONNECT_DIST = 140;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initNodes();
    }

    function initNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const isLight = html.getAttribute("data-theme") === "light";

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * (isLight ? 0.08 : 0.15);
            ctx.strokeStyle = isLight
              ? `rgba(217, 119, 6, ${alpha})`
              : `rgba(245, 158, 11, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = isLight ? "rgba(217, 119, 6, 0.35)" : "rgba(245, 158, 11, 0.5)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    new MutationObserver(() => {}).observe(html, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* ── Filter bar ── */
  const filterBar = document.getElementById("filter-bar");
  const grid = document.getElementById("project-grid");

  function renderFilters() {
    if (!filterBar) return;
    filterBar.innerHTML = categories
      .map(
        (cat) =>
          `<button class="filter-btn${cat.id === activeFilter ? " active" : ""}" data-filter="${cat.id}" type="button" role="tab" aria-selected="${cat.id === activeFilter}">${cat.label}</button>`
      )
      .join("");

    filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        filterBar.querySelectorAll(".filter-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.filter === activeFilter);
          b.setAttribute("aria-selected", String(b.dataset.filter === activeFilter));
        });
        renderProjects();
      });
    });
  }

  function buildLinks(project) {
    const links = [];
    if (project.links.live) {
      links.push(`<a class="card-link primary" href="${project.links.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>`);
    }
    if (project.links.github) {
      links.push(`<a class="card-link" href="${project.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>`);
    }
    if (project.links.local) {
      links.push(`<span class="card-link" style="opacity:0.6;cursor:default">Local Project</span>`);
    }
    return links.join("");
  }

  function renderProjects() {
    if (!grid) return;

    const filtered =
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    grid.innerHTML = filtered
      .map((project) => {
        const catLabel = categories.find((c) => c.id === project.category)?.label || project.category;
        return `
          <article class="project-card visible-card${project.featured ? " featured" : ""} reveal" role="listitem"
            style="--card-accent: ${project.accent}"
            data-category="${project.category}">
            <div class="card-top">
              <span class="card-category">${catLabel}</span>
              ${project.featured ? '<span class="card-badge">Featured</span>' : ""}
            </div>
            <h3>${project.name}</h3>
            <p class="card-tagline">${project.tagline}</p>
            <p class="card-desc">${project.description}</p>
            <div class="card-stack">
              ${project.stack.map((s) => `<span class="stack-tag">${s}</span>`).join("")}
            </div>
            <div class="card-links">${buildLinks(project)}</div>
          </article>`;
      })
      .join("");

    grid.querySelectorAll(".project-card.reveal").forEach((el, i) => {
      el.classList.add(`delay-${(i % 3) + 1}`);
      revealObserver.observe(el);
    });
  }

  renderFilters();
  renderProjects();

  /* ── Live GitHub stats ── */
  async function fetchGitHubStats() {
    const reposEl = document.querySelector('[data-stat="repos"]');
    if (!reposEl) return;

    try {
      const res = await fetch("https://api.github.com/users/LeTrollologist");
      if (!res.ok) throw new Error("GitHub API unavailable");
      const data = await res.json();
      animateValue(reposEl, 0, data.public_repos, 800);
    } catch {
      reposEl.textContent = "11+";
    }
  }

  function animateValue(el, start, end, duration) {
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  fetchGitHubStats();
})();
