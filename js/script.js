/* ==========================================================================
   Prinston Sarfo Adu Tutu — Portfolio Script
   Organized into small, self-contained modules. Each module only runs if
   its DOM elements exist, so nothing throws if a section is removed.
   ========================================================================== */

document.documentElement.classList.remove("no-js");

/* --------------------------------------------------------------------------
   PROJECT DATA
   Add, remove, or edit projects here — the cards and modal content are both
   generated from this single array, so there is only one place to update.
   CUSTOMIZATION: replace the "github" and "docs" URLs (or set them to null
   to hide the corresponding button), and swap "image" placeholders for real
   screenshots once available.
   -------------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "multi-tier-java-app",
    title: "Automated Multi-Tier Java Web Application Deployment",
    type: "Personal Project",
    category: "devops",
    summary: "Deployed a multi-tier Java web application across several virtual machines using Vagrant, with Nginx, Tomcat, MariaDB, Memcached, and RabbitMQ.",
    objective: "Practice deploying and connecting a realistic multi-service application stack across separate Linux VMs, the way it would be structured in production.",
    responsibilities: [
      "Configured Linux virtual machines with Vagrant",
      "Established private networking between services",
      "Set up Nginx as a web / reverse-proxy layer",
      "Deployed the application through Apache Tomcat",
      "Integrated database, caching, and messaging services"
    ],
    implementation: "Each service (web, application, database, caching, and messaging tiers) ran on its own VM, provisioned and networked through Vagrant so the tiers could communicate over a private network while staying isolated from the host.",
    challenges: "Troubleshot service connectivity issues and HTTP 502 errors between the Nginx layer and the Tomcat application server, tracing the problem back to networking and service-startup order.",
    outcome: "Ended up with a working multi-tier deployment and a clearer understanding of how reverse proxies, application servers, and backing services fit together in a DevOps environment.",
    tech: ["Vagrant", "Linux", "Nginx", "Tomcat", "MariaDB", "Memcached", "RabbitMQ", "Git"],
    github: null,
    docs: null
  },
  {
    id: "m365-admin",
    title: "Enterprise Microsoft 365 Administration",
    type: "Academic Project",
    category: "cloud",
    summary: "Configured and administered a Microsoft 365 tenant, covering organization settings, users, licensing, apps, security, SharePoint, and PowerShell administration.",
    objective: "Build practical Microsoft 365 tenant-administration skills that map directly onto real IT support and cloud administration work.",
    responsibilities: [
      "Configured organization-wide Microsoft 365 settings",
      "Managed user accounts and license assignment",
      "Applied baseline Microsoft Defender security settings",
      "Administered SharePoint sites and permissions",
      "Used Microsoft Graph PowerShell for administrative tasks"
    ],
    implementation: "Worked through the Microsoft 365 Admin Center and Microsoft Entra ID to configure tenant settings, then used Microsoft Graph PowerShell to automate and verify parts of the setup.",
    challenges: "Getting comfortable moving between the graphical admin center and PowerShell for the same tasks, and understanding how permission and licensing changes propagate across the tenant.",
    outcome: "Gained a working understanding of Microsoft 365 tenant administration, from user lifecycle management to baseline security configuration.",
    tech: ["Microsoft 365 Admin Center", "Microsoft Graph PowerShell", "Microsoft Entra ID", "Microsoft Defender", "SharePoint"],
    github: null,
    docs: null
  },
  {
    id: "windows-server-infra",
    title: "Enterprise Windows Server Infrastructure",
    type: "Academic Project",
    category: "systems",
    summary: "Built a multi-server Windows Server 2019 environment with domain services, DNS, DHCP, Group Policy, and virtualization.",
    objective: "Design and configure a small enterprise-style Windows Server environment from the ground up.",
    responsibilities: [
      "Installed and configured Windows Server 2019 roles",
      "Set up Active Directory Domain Services",
      "Configured DNS and DHCP for the domain",
      "Created and applied Group Policy Objects",
      "Managed virtual machines for each server role"
    ],
    implementation: "Deployed separate virtual machines for domain, DNS/DHCP, and member-server roles, then joined clients to the domain and applied Group Policy to manage settings centrally.",
    challenges: "Diagnosing DNS resolution and domain-join issues that came from misconfigured records and working through them systematically.",
    outcome: "Built a functioning small-scale Active Directory environment and a clearer picture of how core Windows Server roles work together.",
    tech: ["Windows Server 2019", "Active Directory", "DNS", "DHCP", "Group Policy", "VMware"],
    github: null,
    docs: null
  },
  {
    id: "hyperv-dr",
    title: "Hyper-V Virtualization and Disaster Recovery",
    type: "Academic Project",
    category: "systems",
    summary: "Configured Hyper-V hosts, virtual machines, Hyper-V Replica, and introductory failover-clustering components.",
    objective: "Explore how Hyper-V supports virtual machine replication and early failover concepts for disaster recovery.",
    responsibilities: [
      "Configured Hyper-V hosts and virtual machines",
      "Set up Hyper-V Replica between hosts",
      "Worked through introductory failover-clustering concepts",
      "Tested planned and unplanned failover scenarios"
    ],
    implementation: "Configured replica relationships between Hyper-V hosts so virtual machines could fail over from a primary to a secondary host, then explored basic failover-clustering concepts on top of that setup.",
    challenges: "Working through Kerberos authentication requirements between hosts for replication to succeed.",
    outcome: "Developed a foundational understanding of virtualization-based disaster recovery and how replication supports business continuity.",
    tech: ["Hyper-V", "Hyper-V Replica", "Windows Server", "Failover Clustering", "Kerberos"],
    github: null,
    docs: null
  },
  {
    id: "networking-lab",
    title: "Enterprise Networking Lab",
    type: "Academic Project",
    category: "networking",
    summary: "Configured and tested networking environments with routers, switches, IPv4 addressing, subnetting, DHCP, routing, and troubleshooting.",
    objective: "Practice designing and troubleshooting a small enterprise network topology.",
    responsibilities: [
      "Designed IPv4 addressing and subnetting schemes",
      "Configured routers and switches",
      "Set up DHCP and static routing",
      "Tested connectivity and diagnosed faults"
    ],
    implementation: "Built network topologies in Cisco Packet Tracer, configured device interfaces and routing over PuTTY-style terminal access, then verified connectivity between subnets.",
    challenges: "Resolving routing misconfigurations that blocked inter-subnet connectivity and tracing them using standard troubleshooting commands.",
    outcome: "Strengthened fundamentals in IPv4 addressing, subnetting, and systematic network troubleshooting.",
    tech: ["Cisco Packet Tracer", "Cisco IOS", "PuTTY", "IPv4", "DHCP", "Routing", "NAT"],
    github: null,
    docs: null
  },
  {
    id: "linux-admin",
    title: "Linux Systems Administration",
    type: "Academic Project",
    category: "systems",
    summary: "Completed practical Linux administration exercises covering users, groups, permissions, packages, services, and troubleshooting.",
    objective: "Build command-line confidence with day-to-day Linux administration tasks.",
    responsibilities: [
      "Managed users, groups, and file permissions",
      "Installed and managed packages and services",
      "Monitored processes and system resources",
      "Configured basic networking from the command line"
    ],
    implementation: "Worked directly in the Linux shell over SSH to complete each exercise, using standard administration commands rather than graphical tools.",
    challenges: "Getting comfortable reasoning about file-permission combinations and service dependencies without a GUI to fall back on.",
    outcome: "Built day-to-day comfort with the Linux command line for common administration and troubleshooting tasks.",
    tech: ["Linux", "Bash", "SSH", "Package Management", "File Permissions"],
    github: null,
    docs: null
  }
];

/* --------------------------------------------------------------------------
   PROJECT CARD RENDERING
   -------------------------------------------------------------------------- */
const projectsGrid = document.getElementById("projectsGrid");

function projectImagePlaceholder(project) {
  return `<img src="assets/images/${project.id}/screenshot.png" alt="${project.title} diagram" loading="lazy" />`;
}

function renderProjectCards() {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = PROJECTS.map((project) => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-card__image">${projectImagePlaceholder(project)}</div>
      <div class="project-card__body">
        <span class="project-card__type">${project.type}</span>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__desc">${project.summary}</p>
        <div class="project-card__tech">
          ${project.tech.slice(0, 4).map((t) => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
        <div class="project-card__actions">
          <button class="btn btn--small" data-project-id="${project.id}">View Project Details</button>
          ${project.github
            ? `<a class="btn btn--small" href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub</a>`
            : `<!-- REPLACE: PROJECT GITHUB URL — set project.github in js/script.js to enable this button -->`}
          ${project.docs
            ? `<a class="btn btn--small" href="${project.docs}" target="_blank" rel="noopener noreferrer">View Documentation</a>`
            : ""}
        </div>
      </div>
    </article>
  `).join("");

  projectsGrid.querySelectorAll("[data-project-id]").forEach((btn) => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.projectId));
  });
}

/* --------------------------------------------------------------------------
   PROJECT FILTERING
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;

      document.querySelectorAll(".project-card").forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* --------------------------------------------------------------------------
   PROJECT DETAILS MODAL
   -------------------------------------------------------------------------- */
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
let lastFocusedElement = null;

function buildGallery(project) {
  // CUSTOMIZATION: replace these placeholder tiles with real <img> screenshots
  // stored in assets/images/<project-id>/ once available.
  return Array.from({ length: 3 }).map((_, i) => `
    <div class="modal__gallery-item">[REPLACE: screenshot ${i + 1} — assets/images/${project.id}/]</div>
  `).join("");
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <span class="modal__type">${project.type}</span>
    <h3 id="modalTitle">${project.title}</h3>

    <div class="modal__section">
      <h4>Overview</h4>
      <p>${project.summary}</p>
    </div>
    <div class="modal__section">
      <h4>Objective</h4>
      <p>${project.objective}</p>
    </div>
    <div class="modal__section">
      <h4>My Responsibilities</h4>
      <ul>${project.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>
    </div>
    <div class="modal__section">
      <h4>Implementation Summary</h4>
      <p>${project.implementation}</p>
    </div>
    <div class="modal__section">
      <h4>Technologies</h4>
      <div class="project-card__tech">${project.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}</div>
    </div>
    <div class="modal__section">
      <h4>Challenges &amp; Troubleshooting</h4>
      <p>${project.challenges}</p>
    </div>
    <div class="modal__section">
      <h4>Outcome &amp; Learning</h4>
      <p>${project.outcome}</p>
    </div>
    <div class="modal__section">
      <h4>Screenshot Gallery</h4>
      <div class="modal__gallery">${buildGallery(project)}</div>
    </div>
    <div class="modal__actions">
      ${project.github
        ? `<a class="btn btn--secondary" href="${project.github}" target="_blank" rel="noopener noreferrer">View on GitHub</a>`
        : `<span class="btn btn--secondary" style="opacity:.5;pointer-events:none;">[REPLACE: PROJECT GITHUB URL]</span>`}
    </div>
  `;

  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__close").focus();
}

function closeProjectModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement) lastFocusedElement.focus();
}

function initModal() {
  if (!modal) return;
  modal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeProjectModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeProjectModal();
  });
  // Basic focus trap
  modal.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || modal.hidden) return;
    const focusable = modal.querySelectorAll("button, a[href]");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   NAVIGATION: mobile menu, active link, sticky-header state
   -------------------------------------------------------------------------- */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const scrim = document.getElementById("navScrim");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    scrim?.classList.remove("is-visible");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    scrim?.classList.toggle("is-visible", isOpen);
  });

  scrim?.addEventListener("click", closeMenu);
  menu.querySelectorAll(".nav__link").forEach((link) => link.addEventListener("click", closeMenu));

  // Active link highlighting based on visible section
  const links = document.querySelectorAll(".nav__link");
  const sections = Array.from(links)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `#${entry.target.id}`;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }
}

/* --------------------------------------------------------------------------
   THEME TOGGLE (persisted in localStorage)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const stored = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(theme === "light"));
      toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
  };

  applyTheme(stored || (prefersLight ? "light" : "dark"));

  toggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("portfolio-theme", next);
  });
}

/* --------------------------------------------------------------------------
   SCROLL-REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.hidden = window.scrollY < 480;
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

/* --------------------------------------------------------------------------
   COPY EMAIL BUTTON
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const btn = document.getElementById("copyEmailBtn");
  const label = document.getElementById("copyEmailText");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Fallback for browsers without Clipboard API access
      const temp = document.createElement("textarea");
      temp.value = email;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    btn.classList.add("is-copied");
    if (label) label.textContent = "Copied!";
    setTimeout(() => {
      btn.classList.remove("is-copied");
      if (label) label.textContent = "Copy";
    }, 2000);
  });
}

/* --------------------------------------------------------------------------
   FOOTER YEAR
   -------------------------------------------------------------------------- */
function initFooterYear() {
  const el = document.getElementById("currentYear");
  if (el) el.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   RESUME PDF AVAILABILITY CHECK
   Only runs when the page is served over http(s); on file:// (opened
   directly, without a server) the check is skipped and the buttons are left
   as-is, since fetch cannot reliably check local files in that mode.
   -------------------------------------------------------------------------- */
function initResumeCheck() {
  if (window.location.protocol === "file:") return;

  const notice = document.getElementById("resumeNotice");
  const viewBtn = document.getElementById("resumeViewBtn");
  const downloadBtn = document.getElementById("resumeDownloadBtn");
  if (!notice || !viewBtn) return;

  fetch(viewBtn.getAttribute("href"), { method: "HEAD" })
    .then((res) => {
      if (!res.ok) throw new Error("Resume not found");
    })
    .catch(() => {
      notice.hidden = false;
      [viewBtn, downloadBtn].forEach((btn) => {
        btn?.setAttribute("aria-disabled", "true");
        btn?.classList.add("is-disabled");
      });
    });
}

/* --------------------------------------------------------------------------
   HERO NETWORK DIAGRAM
   Draws a small, static "cloud infrastructure" node graph into the hero
   background as an SVG — a nod to the subject matter rather than a generic
   decorative shape. Positions are seeded so the layout stays consistent.
   -------------------------------------------------------------------------- */
function initHeroNetwork() {
  const layer = document.getElementById("networkLayer");
  if (!layer) return;

  const nodes = [
    { x: 620, y: 90 }, { x: 720, y: 180 }, { x: 660, y: 300 },
    { x: 740, y: 420 }, { x: 610, y: 500 }, { x: 500, y: 560 },
    { x: 780, y: 320 }, { x: 560, y: 220 }, { x: 700, y: 60 }
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [1, 6], [6, 3], [7, 1], [7, 2], [8, 1]
  ];

  const ns = "http://www.w3.org/2000/svg";
  const edgeGroup = document.createElementNS(ns, "g");
  edgeGroup.setAttribute("stroke", "var(--accent-cyan)");
  edgeGroup.setAttribute("stroke-opacity", "0.25");
  edgeGroup.setAttribute("stroke-width", "1");

  edges.forEach(([a, b]) => {
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", nodes[a].x);
    line.setAttribute("y1", nodes[a].y);
    line.setAttribute("x2", nodes[b].x);
    line.setAttribute("y2", nodes[b].y);
    edgeGroup.appendChild(line);
  });
  layer.appendChild(edgeGroup);

  nodes.forEach((n, i) => {
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", n.x);
    circle.setAttribute("cy", n.y);
    circle.setAttribute("r", i % 3 === 0 ? 5 : 3.2);
    circle.setAttribute("fill", i % 3 === 0 ? "var(--accent-cyan)" : "var(--accent-blue)");
    circle.setAttribute("fill-opacity", "0.75");
    layer.appendChild(circle);
  });
}

/* --------------------------------------------------------------------------
   INIT
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards();
  initProjectFilters();
  initModal();
  initNav();
  initThemeToggle();
  initScrollReveal();
  initBackToTop();
  initCopyEmail();
  initFooterYear();
  initResumeCheck();
  initHeroNetwork();
});
