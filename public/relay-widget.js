(function () {
    // Prevent double-load (common in CMS)
    if (window.__RELAY_WIDGET_LOADED__) return;
    window.__RELAY_WIDGET_LOADED__ = true;
  
    // -------------------------
    // Read config from <script>
    // -------------------------
    const scriptEl = document.currentScript || (function () {
      const scripts = document.getElementsByTagName("script");
      return scripts[scripts.length - 1];
    })();
  
    const cfg = {
      workerBaseUrl: (scriptEl?.dataset?.workerBaseUrl || "").trim() || "https://outbound.gorelay.ai",
      sourceKey: (scriptEl?.dataset?.sourceKey || "").trim(),
      turnstileSitekey: (scriptEl?.dataset?.turnstileSitekey || "").trim() || "",
      buttonText: (scriptEl?.dataset?.buttonText || "").trim() || "Text us",
      theme: (scriptEl?.dataset?.theme || "").trim() || "dark", // "dark" | "light" (Turnstile)
    };
  
    if (!cfg.turnstileSitekey) {
      // You can allow running without turnstile, but since you use it, enforce it:
      console.warn("[RelayWidget] Missing data-turnstile-sitekey");
    }
  
    // -------------------------
    // CSS (scoped with rw- prefix)
    // -------------------------
    const css = `
    :root { --rw-accent:#3b82f6; --rw-text:#e5e7eb; --rw-muted:#94a3b8; --rw-danger:#ef4444; --rw-ok:#22c55e; --rw-shadow:0 20px 60px rgba(0,0,0,.5); --rw-font:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; }
    .rw-fab{position:fixed;right:20px;bottom:20px;z-index:2147483646;background:var(--rw-accent);color:#fff;border:none;border-radius:999px;padding:14px 18px;font-weight:800;cursor:pointer;box-shadow:0 10px 30px rgba(59,130,246,.35);display:flex;align-items:center;gap:10px;font-family:var(--rw-font);}
    .rw-fab:active{transform:translateY(1px);}
    .rw-fab svg{width:18px;height:18px}
    .rw-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);z-index:2147483647;display:none;align-items:flex-end;justify-content:flex-end;padding:18px;}
    .rw-overlay.open{display:flex;}
    .rw-modal{width:min(420px,100%);background:rgba(17,24,39,.92);border:1px solid rgba(148,163,184,.25);border-radius:20px;box-shadow:var(--rw-shadow);overflow:hidden;transform:translateY(10px);opacity:0;transition:all .18s ease;font-family:var(--rw-font);color:var(--rw-text);}
    .rw-overlay.open .rw-modal{transform:translateY(0);opacity:1;}
    .rw-header{padding:16px 16px 12px;background:rgba(15,23,42,.85);border-bottom:1px solid rgba(148,163,184,.18);display:flex;align-items:center;justify-content:space-between;gap:12px;}
    .rw-title{display:flex;flex-direction:column;gap:2px}
    .rw-title strong{font-size:14px;letter-spacing:.2px}
    .rw-title span{font-size:12px;color:var(--rw-muted)}
    .rw-close{background:transparent;border:1px solid rgba(148,163,184,.25);color:var(--rw-text);border-radius:10px;padding:6px 10px;cursor:pointer;font-weight:800}
    .rw-body{padding:14px 16px 16px}
    .rw-label{display:block;font-size:12px;color:var(--rw-muted);margin:10px 0 6px}
    .rw-input{width:100%;box-sizing:border-box;padding:12px;border-radius:12px;border:1px solid rgba(148,163,184,.25);background:rgba(2,6,23,.5);color:var(--rw-text);outline:none;font-family:var(--rw-font);}
    .rw-input:focus{border-color:rgba(59,130,246,.7);box-shadow:0 0 0 4px rgba(59,130,246,.18);}
    .rw-actions{margin-top:12px;display:grid;grid-template-columns:1fr;gap:10px}
    .rw-send{background:var(--rw-accent);border:none;color:#fff;font-weight:900;padding:12px 14px;border-radius:12px;cursor:pointer}
    .rw-send[disabled]{opacity:.6;cursor:not-allowed}
    .rw-status{font-size:12px;color:var(--rw-muted);min-height:18px}
    .rw-status.ok{color:var(--rw-ok)} .rw-status.err{color:var(--rw-danger)}
    .rw-footnote{margin-top:10px;font-size:11px;color:rgba(148,163,184,.85);line-height:1.35}
    .rw-turnstile{margin-top:12px}
    `;
  
    function injectCSS() {
      const style = document.createElement("style");
      style.setAttribute("data-relay-widget", "true");
      style.textContent = css;
      document.head.appendChild(style);
    }
  
    // -------------------------
    // DOM creation
    // -------------------------
    function el(tag, attrs, children) {
      const node = document.createElement(tag);
      if (attrs) {
        Object.entries(attrs).forEach(([k, v]) => {
          if (k === "class") node.className = v;
          else if (k === "text") node.textContent = v;
          else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
          else node.setAttribute(k, v);
        });
      }
      (children || []).forEach((c) => node.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
      return node;
    }
  
    const ids = {
      overlay: "rw-overlay-" + Math.random().toString(16).slice(2),
      turnstile: "rw-turnstile-" + Math.random().toString(16).slice(2),
    };
  
    function buildUI() {
      const fab = el("button", { class: "rw-fab", type: "button", "aria-label": "Text us" }, [
        (function () {
          const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.setAttribute("fill", "none");
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z");
          path.setAttribute("stroke", "white");
          path.setAttribute("stroke-width", "2");
          path.setAttribute("stroke-linejoin", "round");
          svg.appendChild(path);
          return svg;
        })(),
        document.createTextNode(cfg.buttonText),
      ]);
  
      const overlay = el("div", { class: "rw-overlay", id: ids.overlay, role: "dialog", "aria-modal": "true" }, [
        el("div", { class: "rw-modal" }, [
          el("div", { class: "rw-header" }, [
            el("div", { class: "rw-title" }, [
              el("strong", { text: "Text us" }),
              el("span", { text: "We’ll text you back ASAP." }),
            ]),
            el("button", { class: "rw-close", type: "button", text: "Close" }),
          ]),
          el("div", { class: "rw-body" }, [
            el("label", { class: "rw-label", for: "rw-name", text: "Name (optional)" }),
            el("input", { class: "rw-input", id: "rw-name", placeholder: "John", autocomplete: "name" }),
  
            el("label", { class: "rw-label", for: "rw-phone", text: "Phone" }),
            el("input", { class: "rw-input", id: "rw-phone", placeholder: "801-555-1234", autocomplete: "tel", inputmode: "tel" }),
  
            el("div", { class: "rw-turnstile", id: ids.turnstile }),
  
            el("div", { class: "rw-actions" }, [
              el("button", { class: "rw-send", id: "rw-send", type: "button", text: "Send", disabled: "true" }),
              el("div", { class: "rw-status", id: "rw-status" }),
            ]),
  
            el("div", { class: "rw-footnote", text: "By texting, you agree to receive messages related to your request. Reply STOP to opt out." }),
          ]),
        ]),
      ]);
  
      document.body.appendChild(fab);
      document.body.appendChild(overlay);
  
      return { fab, overlay };
    }
  
    // -------------------------
    // Turnstile load/render
    // -------------------------
    function loadTurnstileScript() {
      return new Promise((resolve, reject) => {
        if (window.turnstile && typeof window.turnstile.render === "function") return resolve();
        const existing = document.querySelector('script[data-relay-turnstile="true"]');
        if (existing) {
          const t = setInterval(() => {
            if (window.turnstile && typeof window.turnstile.render === "function") {
              clearInterval(t);
              resolve();
            }
          }, 50);
          setTimeout(() => {
            clearInterval(t);
            reject(new Error("Turnstile timeout"));
          }, 8000);
          return;
        }
  
        const s = document.createElement("script");
        s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        s.async = true;
        s.defer = true;
        s.setAttribute("data-relay-turnstile", "true");
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("Turnstile load failed"));
        document.head.appendChild(s);
      });
    }
  
    let turnstileToken = null;
    let turnstileWidgetId = null;
  
    function setStatus(msg, kind) {
      const status = document.getElementById("rw-status");
      if (!status) return;
      status.className = "rw-status" + (kind ? " " + kind : "");
      status.textContent = msg || "";
    }
  
    function setSendEnabled(enabled) {
      const btn = document.getElementById("rw-send");
      if (!btn) return;
      btn.disabled = !enabled;
    }
  
    function renderTurnstile() {
      if (!cfg.turnstileSitekey) {
        setStatus("Verification unavailable. Please try later.", "err");
        return;
      }
  
      const container = document.getElementById(ids.turnstile);
      if (!container) return;
  
      // Clear old
      container.innerHTML = "";
  
      turnstileWidgetId = window.turnstile.render(container, {
        sitekey: cfg.turnstileSitekey,
        theme: cfg.theme,
        callback: (token) => {
          turnstileToken = token;
          setSendEnabled(true);
        },
        "error-callback": () => {
          turnstileToken = null;
          setSendEnabled(false);
          setStatus("Verification failed. Please refresh.", "err");
        },
        "expired-callback": () => {
          turnstileToken = null;
          setSendEnabled(false);
          setStatus("Verification expired. Please verify again.", "err");
        },
      });
    }
  
    function resetTurnstile() {
      try {
        if (window.turnstile && turnstileWidgetId !== null) window.turnstile.reset(turnstileWidgetId);
      } catch (_) {}
      turnstileToken = null;
      setSendEnabled(false);
    }
  
    function uuidv4() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      const s = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
      );
      return s;
    }
  
    async function send() {
      const nameEl = document.getElementById("rw-name");
      const phoneEl = document.getElementById("rw-phone");
      const name = (nameEl?.value || "").trim();
      const phone = (phoneEl?.value || "").trim();
  
      if (!phone) return setStatus("Please enter your phone number.", "err");
      if (!turnstileToken) return setStatus("Please complete verification.", "err");
  
      setSendEnabled(false);
      setStatus("Sending…", "");
  
      const payload = {
        domain: window.location.hostname,
        source_key: cfg.sourceKey,
        turnstile_token: turnstileToken,
        submission_id: uuidv4(),
        name: name || undefined,
        phone,
      };
  
      try {
        const res = await fetch(`${cfg.workerBaseUrl}/ingest/chat`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
  
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) {
          const msg = data?.error ? `Error: ${data.error}` : `Request failed (${res.status})`;
          setStatus(msg, "err");
          resetTurnstile();
          return;
        }
  
        setStatus("✅ Sent. We’ll text you shortly.", "ok");
        setTimeout(() => closeModal(), 3500);
      } catch (_) {
        setStatus("Network error. Please try again.", "err");
        resetTurnstile();
      }
    }
  
    function openModal() {
      const overlay = document.getElementById(ids.overlay);
      overlay?.classList.add("open");
      setStatus("", "");
  
      // Ensure turnstile is ready each open
      loadTurnstileScript()
        .then(() => renderTurnstile())
        .catch(() => setStatus("Verification failed to load. Please refresh.", "err"));
    }
  
    function closeModal() {
      const overlay = document.getElementById(ids.overlay);
      overlay?.classList.remove("open");
      setStatus("", "");
      // Token should not be reused across opens
      resetTurnstile();
    }
  
    function wireEvents(ui) {
      ui.fab.addEventListener("click", openModal);
      ui.overlay.addEventListener("click", (e) => {
        if (e.target === ui.overlay) closeModal();
      });
      ui.overlay.querySelector(".rw-close")?.addEventListener("click", closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
      });
  
      document.getElementById("rw-send")?.addEventListener("click", send);
    }
  
    // -------------------------
    // Init (safe on any CMS)
    // -------------------------
    function init() {
      injectCSS();
  
      // Wait for body if script is in <head>
      const ready = () => {
        const ui = buildUI();
        wireEvents(ui);
      };
  
      if (document.body) ready();
      else document.addEventListener("DOMContentLoaded", ready);
    }
  
    init();
  })();
  
