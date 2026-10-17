/* ============================================================
   Thomas Zawadi — Portfolio
   Interactions : i18n FR/EN, navigation, animations, formulaire
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     i18n — Traductions FR / EN
     ---------------------------------------------------------- */
  const translations = {
    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.projects": "Projets",
      "nav.services": "Services",
      "nav.blog": "Blog",
      "nav.contact": "Contact",

      "hero.eyebrow": "Disponible pour de nouvelles collaborations",
      "hero.title1": "Salut, je suis",
      "hero.tagline": "Je conçois des expériences web qui ont du sens.",
      "hero.sub": "Développeur front & back, blogueur, créateur de contenu et digital marketer basé à Goma, en RDC. Je bâtis des produits numériques utiles avec WabCompany LTD.",
      "hero.cta1": "Voir mes projets",
      "hero.cta2": "Me contacter",
      "hero.badge1": "Full-Stack",

      "about.eyebrow": "À propos",
      "about.title": "Plusieurs casquettes, une seule passion : le numérique",
      "about.p1": "Passionné par le web et les médias numériques, je développe des produits qui allient technique, contenu et visibilité. De la ligne de code à la stratégie de communication, j'aime relier toutes les pièces du puzzle.",
      "about.p2": "Basé à Goma, en République Démocratique du Congo, je développe des projets avec WabCompany LTD — dont wab-infos.com, une plateforme d'actualités pensée pour la RDC. Mon credo : des produits utiles, accessibles et bien racontés.",
      "about.skill1t": "Front-end",
      "about.skill2t": "Back-end",
      "about.skill3t": "Contenu & Marketing",
      "about.card1t": "Développement Full-Stack",
      "about.card1d": "Du design d'interface à la logique serveur, des sites et applications rapides et modernes.",
      "about.card2t": "Création de Contenu",
      "about.card2d": "Blogueur et créateur : rédaction, storytelling de marque et stratégie éditoriale.",
      "about.card3t": "Marketing Digital",
      "about.card3d": "SEO, réseaux sociaux et acquisition : faire grandir la visibilité des projets.",
      "about.card4t": "Accessibilité & Inclusion",
      "about.card4d": "Concevoir pour tout le monde : des expériences inclusives, avec le projet adiong.",

      "projects.eyebrow": "Projets",
      "projects.title": "Des réalisations qui racontent mon parcours",
      "projects.sub": "Une sélection de projets sur lesquels je travaille ou que j'ai menés.",
      "projects.live": "En ligne",
      "projects.wip": "En cours",
      "projects.p1d": "Plateforme d'actualités en RDC : une expérience web moderne pour s'informer en français, pensée pour le terrain congolais.",
      "projects.p2d": "Une initiative pour l'accessibilité et l'inclusion des personnes en situation de handicap : rendre le numérique ouvert à toutes et tous.",
      "projects.p3t": "Expérimentations & outils",
      "projects.p3d": "Des logiciels et prototypes réalisés en chemin — du code appris, partagé et amélioré en public sur GitHub.",
      "projects.pillImpact": "Impact social",
      "projects.pillSoftware": "Logiciel",
      "projects.visit": "Visiter le site",
      "projects.code": "Code source",
      "projects.seeAll": "Voir sur GitHub",

      "services.eyebrow": "Services",
      "services.title": "Ce que je peux faire pour vous",
      "services.sub": "Avec WabCompany LTD, un accompagnement de la conception au lancement.",
      "services.s1t": "Développement Web",
      "services.s1d": "Sites et applications modernes, rapides et accessibles — front-end soigné, back-end solide, de l'idée à la mise en ligne.",
      "services.s1l1": "Sites vitrines & plateformes web",
      "services.s1l2": "Applications front & back",
      "services.s1l3": "Maintenance & évolution",
      "services.s2t": "Marketing Digital",
      "services.s2d": "Faire connaître votre projet : stratégie de visibilité, référencement et présence sur les réseaux sociaux.",
      "services.s2l1": "SEO & visibilité web",
      "services.s2l2": "Stratégie réseaux sociaux",
      "services.s2l3": "Croissance d'audience",
      "services.s3t": "Création de Contenu",
      "services.s3d": "Des mots qui portent : articles, blog, storytelling de marque et stratégie éditoriale adaptée à votre audience.",
      "services.s3l1": "Rédaction & blogging",
      "services.s3l2": "Stratégie éditoriale",
      "services.s3l3": "Contenu pour les réseaux",
      "services.s4t": "Conseil & Accompagnement",
      "services.s4d": "Un partenaire numérique de confiance : conception, lancement et croissance de vos projets digitaux, de A à Z.",
      "services.s4l1": "Cadrage & conception",
      "services.s4l2": "Lancement de projet",
      "services.s4l3": "Suivi & croissance",

      "blog.eyebrow": "Blog",
      "blog.title": "J'écris sur la tech, le numérique en RDC et le marketing",
      "blog.text": "Sur wab-infos.com, je partage actualités, analyses et tutoriels — pour comprendre le numérique qui se construit ici, en Afrique.",
      "blog.tag3": "Marketing digital",
      "blog.tag4": "Tutoriels",
      "blog.cta": "Lire le blog",

      "contact.eyebrow": "Contact",
      "contact.title": "Travaillons ensemble !",
      "contact.sub": "Un projet, une idée, une collaboration ? Écrivez-moi, je réponds vite.",
      "contact.blog": "Blog",
      "contact.location": "Localisation",
      "contact.name": "Nom",
      "contact.subject": "Sujet",
      "contact.message": "Message",
      "contact.namePh": "Votre nom",
      "contact.emailPh": "vous@exemple.com",
      "contact.subjectPh": "De quoi souhaitez-vous parler ?",
      "contact.messagePh": "Votre message...",
      "contact.send": "Envoyer le message",
      "contact.note": "Le message est copié automatiquement — envoyez-le-moi via l'un des canaux ci-contre.",
      "contact.toastOk": "Message copié ! Envoyez-le-moi via GitHub, X ou mon blog.",
      "contact.toastErr": "Merci de remplir tous les champs obligatoires.",

      "footer.made": "Fait avec",
      "footer.in": "à Goma"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.blog": "Blog",
      "nav.contact": "Contact",

      "hero.eyebrow": "Open to new collaborations",
      "hero.title1": "Hi, I'm",
      "hero.tagline": "I craft web experiences that make sense.",
      "hero.sub": "Front & back developer, blogger, content creator and digital marketer based in Goma, DR Congo. I build useful digital products with WabCompany LTD.",
      "hero.cta1": "See my work",
      "hero.cta2": "Get in touch",
      "hero.badge1": "Full-Stack",

      "about.eyebrow": "About",
      "about.title": "Many hats, one passion: the digital world",
      "about.p1": "Passionate about the web and digital media, I build products that combine tech, content and visibility. From code to communication strategy, I love connecting every piece of the puzzle.",
      "about.p2": "Based in Goma, in the Democratic Republic of the Congo, I develop projects with WabCompany LTD — including wab-infos.com, a news platform built for the DRC. My motto: useful, accessible and well-told products.",
      "about.skill1t": "Front-end",
      "about.skill2t": "Back-end",
      "about.skill3t": "Content & Marketing",
      "about.card1t": "Full-Stack Development",
      "about.card1d": "From interface design to server logic — fast, modern websites and applications.",
      "about.card2t": "Content Creation",
      "about.card2d": "Blogger and creator: writing, brand storytelling and editorial strategy.",
      "about.card3t": "Digital Marketing",
      "about.card3d": "SEO, social media and growth: boosting the visibility of projects.",
      "about.card4t": "Accessibility & Inclusion",
      "about.card4d": "Designing for everyone: inclusive experiences, with the adiong project.",

      "projects.eyebrow": "Projects",
      "projects.title": "Work that tells my story",
      "projects.sub": "A selection of projects I'm working on or have led.",
      "projects.live": "Live",
      "projects.wip": "In progress",
      "projects.p1d": "A news platform for the DRC: a modern web experience to stay informed in French, built for the Congolese ground.",
      "projects.p2d": "An initiative for accessibility and inclusion of people with disabilities: making the digital world open to all.",
      "projects.p3t": "Experiments & tools",
      "projects.p3d": "Software and prototypes built along the way — code learned, shared and improved in public on GitHub.",
      "projects.pillImpact": "Social impact",
      "projects.pillSoftware": "Software",
      "projects.visit": "Visit the site",
      "projects.code": "Source code",
      "projects.seeAll": "See on GitHub",

      "services.eyebrow": "Services",
      "services.title": "What I can do for you",
      "services.sub": "With WabCompany LTD, support from design to launch.",
      "services.s1t": "Web Development",
      "services.s1d": "Modern, fast and accessible websites and apps — polished front-end, solid back-end, from idea to launch.",
      "services.s1l1": "Websites & web platforms",
      "services.s1l2": "Front & back applications",
      "services.s1l3": "Maintenance & evolution",
      "services.s2t": "Digital Marketing",
      "services.s2d": "Get your project known: visibility strategy, SEO and social media presence.",
      "services.s2l1": "SEO & web visibility",
      "services.s2l2": "Social media strategy",
      "services.s2l3": "Audience growth",
      "services.s3t": "Content Creation",
      "services.s3d": "Words that carry: articles, blogging, brand storytelling and editorial strategy for your audience.",
      "services.s3l1": "Writing & blogging",
      "services.s3l2": "Editorial strategy",
      "services.s3l3": "Social media content",
      "services.s4t": "Consulting & Support",
      "services.s4d": "A trusted digital partner: design, launch and growth of your digital projects, end to end.",
      "services.s4l1": "Scoping & design",
      "services.s4l2": "Project launch",
      "services.s4l3": "Follow-up & growth",

      "blog.eyebrow": "Blog",
      "blog.title": "I write about tech, the digital scene in the DRC and marketing",
      "blog.text": "On wab-infos.com, I share news, insights and tutorials — to understand the digital world being built here, in Africa.",
      "blog.tag3": "Digital marketing",
      "blog.tag4": "Tutorials",
      "blog.cta": "Read the blog",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's work together!",
      "contact.sub": "A project, an idea, a collaboration? Write to me, I answer fast.",
      "contact.blog": "Blog",
      "contact.location": "Location",
      "contact.name": "Name",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.namePh": "Your name",
      "contact.emailPh": "you@example.com",
      "contact.subjectPh": "What would you like to talk about?",
      "contact.messagePh": "Your message...",
      "contact.send": "Send the message",
      "contact.note": "The message is copied automatically — send it to me via one of the channels on the left.",
      "contact.toastOk": "Message copied! Send it to me via GitHub, X or my blog.",
      "contact.toastErr": "Please fill in all required fields.",

      "footer.made": "Made with",
      "footer.in": "in Goma"
    }
  };

  const titles = {
    fr: "Thomas Zawadi — Portfolio",
    en: "Thomas Zawadi — Portfolio"
  };

  const metaDescs = {
    fr: "Portfolio de Thomas Zawadi — développeur full-stack, blogueur, créateur de contenu et digital marketer basé à Goma, RDC.",
    en: "Portfolio of Thomas Zawadi — full-stack developer, blogger, content creator and digital marketer based in Goma, DR Congo."
  };

  /* ----------------------------------------------------------
     Système de langue
     ---------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll(".lang-switch__btn");
  let currentLang = "fr";

  function setLang(lang) {
    if (!translations[lang]) lang = "fr";
    currentLang = lang;
    htmlEl.setAttribute("lang", lang);
    document.title = titles[lang];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDescs[lang]);

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try { localStorage.setItem("tz-portfolio-lang", lang); } catch (e) { /* stockage indisponible */ }
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Langue initiale : préférence enregistrée, sinon détection du navigateur, sinon FR
  let initialLang = "fr";
  try {
    const saved = localStorage.getItem("tz-portfolio-lang");
    if (saved && translations[saved]) initialLang = saved;
    else if ((navigator.language || "").toLowerCase().startsWith("en")) initialLang = "en";
  } catch (e) { /* stockage indisponible */ }
  setLang(initialLang);

  /* ----------------------------------------------------------
     Navigation : scroll, menu mobile, lien actif
     ---------------------------------------------------------- */
  const nav = document.getElementById("nav");
  const navMenu = document.getElementById("navMenu");
  const navBurger = document.getElementById("navBurger");
  const navLinks = document.querySelectorAll(".nav__link");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 20);

    // Barre de progression
    const bar = document.getElementById("scrollBar");
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }

    // Bouton retour en haut
    const backTop = document.getElementById("backTop");
    if (backTop) backTop.classList.toggle("is-visible", y > 600);

    // Lien actif selon la section visible
    let currentId = "";
    document.querySelectorAll("main section[id]").forEach((sec) => {
      if (sec.getBoundingClientRect().top <= 140) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + currentId);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  function closeMenu() {
    navMenu.classList.remove("is-open");
    navBurger.classList.remove("is-open");
    navBurger.setAttribute("aria-expanded", "false");
  }

  navBurger.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navBurger.classList.toggle("is-open", open);
    navBurger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ----------------------------------------------------------
     Animations d'apparition au scroll
     ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(() => el.classList.add("is-visible"), i * 70);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ----------------------------------------------------------
     Bouton retour en haut
     ---------------------------------------------------------- */
  const backTop = document.getElementById("backTop");
  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ----------------------------------------------------------
     Toast
     ---------------------------------------------------------- */
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  /* ----------------------------------------------------------
     Formulaire de contact
     (copie le message + ouvre un mail si CONTACT_EMAIL est défini)
     ---------------------------------------------------------- */
  const CONTACT_EMAIL = ""; // ← mettez ici votre adresse e-mail pour activer l'envoi direct

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = translations[currentLang];

      const name = document.getElementById("formName");
      const email = document.getElementById("formEmail");
      const subject = document.getElementById("formSubject");
      const message = document.getElementById("formMessage");

      [name, email, message].forEach((f) => f.classList.remove("is-invalid"));

      let valid = true;
      [name, email, message].forEach((f) => {
        if (!f.value.trim() || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value))) {
          f.classList.add("is-invalid");
          valid = false;
        }
      });

      if (!valid) {
        showToast(dict["contact.toastErr"]);
        return;
      }

      const composed =
        (subject.value.trim() ? subject.value.trim() + "\n\n" : "") +
        message.value.trim() +
        "\n\n— " + name.value.trim() + " (" + email.value.trim() + ")";

      try {
        await navigator.clipboard.writeText(composed);
      } catch (err) {
        // Repli : sélection du texte du message
        message.focus();
        message.select();
      }

      if (CONTACT_EMAIL) {
        const mailSubject = encodeURIComponent(subject.value.trim() || "Portfolio — " + name.value.trim());
        const mailBody = encodeURIComponent(composed);
        window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + mailSubject + "&body=" + mailBody;
      } else {
        showToast(dict["contact.toastOk"]);
      }

      form.reset();
    });
  }

  /* ----------------------------------------------------------
     Année du footer
     ---------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
