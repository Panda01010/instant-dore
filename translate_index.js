const fs = require('fs');

const translations = {
  'index.html': {
    target: 'index_fr.html',
    title: "L'Instant Doré | Conciergerie de Luxe & Expériences Sur Mesure",
    desc: "Récupérez votre temps. L'Instant Doré est votre concierge privé pour vos voyages, événements exclusifs et gestion quotidienne. Disponible 24/7.",
    nav: { home: "Accueil", services: "Services", phil: "Philosophie", contact: "Contact", request: "Faire une demande" },
    hero: { 
      static1: "Créez ", 
      static2: "à ", 
      explanation: "De l'accès aux ventes privées à la Fashion Week VIP, nous ouvrons les portes fermées.",
      lead: "Appuyez sur le texte doré pour concevoir votre réalité.",
      actions: ["exclusive access", "absolute secrecy", "effortless logistics", "Michelin dining"],
      locales: ["the Eiffel Tower", "Le Marais", "Faubourg Saint-Honoré", "Le Ritz"]
    },
    marquee: ["Expériences Exclusives", "Voyages de Luxe", "Événements Privés", "Gastronomie Étoilée", "Villas Privées", "Conciergerie 24/7"],
    intro: {
      eyebrow: "Conciergerie Privée",
      title: "L'art de bien vivre,<br\/>sans l'effort.",
      body: "Chez L'Instant Doré, nous pensons que votre atout le plus précieux est votre temps. Qu'il s'agisse d'une table de dernière minute dans un restaurant complet ou d'un itinéraire sur mesure d'un mois, nous agissons comme votre moteur invisible — gérant chaque détail pour que vous puissiez simplement vivre la vie à son apogée."
    },
    services: {
      title1: "Expériences Exclusives", body1: "Dîners privés, accès culturel & sportif VIP, arrangements de chefs sur mesure.",
      title2: "Organisation Impeccable", body2: "Coordination d'événements privés, gestion du style de vie et hospitalité d'entreprise.",
      title3: "Séjours & Voyages", body3: "Villas privées, locations d'aviation & de yachts, conception d'itinéraires sur mesure.",
      discover: "Découvrir",
      viewAll: "Voir tous les services"
    },
    stats: ["Années d'Excellence", "Partenaires mondiaux", "À votre service"],
    testi: {
      eyebrow: "Clients Privés",
      title: "Les mots qu'ils<br><em>nous permettent de partager</em>",
      q1: "L'Instant Doré ne se contente pas d'organiser des voyages ; ils prévoient ce dont j'ai besoin avant même que je ne m'en rende compte. Le niveau d'accès et la discrétion absolue qu'ils fournissent continuellement sont tout à fait inégalés.",
      author1: "Client Privé", locale1: "Genève, Suisse",
      q2: "En quinze ans d'utilisation de services de conciergerie sur trois continents, L'Instant Doré reste la seule équipe qui n'a jamais dit une seule fois 'ce n'est pas possible'.",
      author2: "Fondateur, Family Office", locale2: "Dubaï, Émirats Arabes Unis",
      q3: "Ils ont organisé un dîner privé dans un château bordelais fermé avec un préavis de 48 heures. Le sommelier attendait à notre atterrissage. Extraordinaire.",
      author3: "Client Anonyme", locale3: "Monaco"
    },
    recent: {
      eyebrow: "En direct du terrain",
      title: "Moments <em>Récents</em>",
      disclaim: "Tous les clients sont anonymes. Tous les détails sont réels.",
      m1: "Un laissez-passer de dernière minute pour le garage de Formule 1 et un dîner dans le paddock pour quatre personnes, organisés en moins de six heures.",
      d1: "Il y a 3 jours",
      m2: "Séance de photographie privée après les heures d'ouverture à l'intérieur du Louvre, de la demande à la confirmation : 48 heures.",
      d2: "Il y a 1 semaine",
      m3: "Un chef privé étoilé au Michelin transporté dans un chalet à Courchevel pour un dîner de réveillon de 12 personnes.",
      d3: "Il y a 2 semaines",
      m4: "Rachat complet d'un étage à l'Atlantis Royal. Flotte privée de Rolls-Royce pour la semaine. Itinéraire complet organisé en 72 heures.",
      d4: "Il y a 1 mois"
    },
    how: {
      eyebrow: "Le Processus",
      title: "Sans effort du<br\/><em>début à la fin</em>",
      s1: "Exprimez votre besoin", b1: "Envoyez-nous votre demande — quelle qu'en soit la complexité — via formulaire, email ou WhatsApp.",
      s2: "Nous orchestrons", b2: "Notre équipe s'appuie sur notre réseau mondial pour concevoir une solution sur mesure et impeccable.",
      s3: "Vous vivez l'expérience", b3: "Arrivez simplement et profitez. Tout ce qui se passe en coulisses est géré de manière transparente.",
      btn: "Contactez votre concierge"
    },
    footer: {
      tag: "Votre moteur invisible. Organiser l'extraordinaire pour que vous puissiez simplement le vivre.",
      nav: "Navigation",
      contact: "Contact",
      copy: "© 2026 L'Instant Doré. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation"
    }
  }
};

const file = 'index.html';
const trans = translations['index.html'];
let html = fs.readFileSync(file, 'utf8');

// Update meta
html = html.replace(/<title>.*?<\/title>/, `<title>${trans.title}<\/title>`);
html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="${trans.desc}"\/>`);
html = html.replace(/<html lang="en">/, `<html lang="fr">`);

// Update Nav
html = html.replace(/<li><a href="index\.html" class="active">Home<\/a><\/li>/, `<li><a href="index_fr.html" class="active">Accueil<\/a><\/li>`);
html = html.replace(/<li><a href="services\.html">Our Services<\/a><\/li>/, `<li><a href="services_fr.html">Services<\/a><\/li>`);
html = html.replace(/<li><a href="philosophy\.html">Our Philosophy<\/a><\/li>/, `<li><a href="philosophy_fr.html">Philosophie<\/a><\/li>`);
html = html.replace(/<li><a href="contact\.html">Contact<\/a><\/li>/, `<li><a href="contact_fr.html">Contact<\/a><\/li>`);

// Languages in nav
html = hotel = html.replace(
  /<div class="nav__lang-menu">[\s\S]*?<\/div>/,
  `<div class="nav__lang-menu">
        <a href="index.html">English</a>
        <a href="index_fr.html" class="active">Français</a>
      </div>`
);
html = html.replace(
  /<div class="nav__mobile-lang">[\s\S]*?<\/div>/,
  `<div class="nav__mobile-lang"><a href="index.html">English</a><span class="nav__mobile-lang-sep">/</span><a href="index_fr.html" class="active">Français</a></div>`
);

// CTA
html = html.replace(/"nav__cta">Make a Request<\/a>/g, `"nav__cta">Faire une demande<\/a>`);
html = html.replace(/"nav__mobile-cta">Make a Request<\/a>/g, `"nav__mobile-cta">Faire une demande<\/a>`);
html = html.replace(/"mobile-bar__request".*?>Make a Request<\/a>/g, `"mobile-bar__request" id="mobile-request-btn">Faire une demande<\/a>`);

// Hero
html = html.replace(/<span class="hero-static">Curate <\/span>/, `<span class="hero-static">${trans.hero.static1}<\/span>`);
html = html.replace(/<span class="hero-static">at <\/span>/, `<span class="hero-static">${trans.hero.static2}<\/span>`);
html = html.replace(/id="hero-explanation"[\s\S]*?>[\s\S]*?<\/p>/, `id="hero-explanation" style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--gold); margin-bottom: 2.5rem; font-style: italic; min-height: 3.2em; max-width: 650px; margin-left: auto; margin-right: auto; line-height: 1.6;">${trans.hero.explanation}<\/p>`);
html = html.replace(/Tap the gold text to design your reality\./, trans.hero.lead);
html = html.replace(/>Explore Services<\/a>/, `>Découvrir nos services<\/a>`);

// Marquee
const marqueeContent = trans.marquee.map(s => `<span>${s}<\/span><span class="dot">✦<\/span>`).join('\n    ');
html = html.replace(/<div class="marquee-strip__track">[\s\S]*?<\/div>/, `<div class="marquee-strip__track">\n    ${marqueeContent}\n    ${marqueeContent}\n  <\/div>`);

// Intro
html = html.replace(/Private Concierge<\/p>/, `${trans.intro.eyebrow}<\/p>`);
html = html.replace(/<h2 class="fade-up delay-1">.*?<\/h2>/s, `<h2 class="fade-up delay-1">${trans.intro.title}<\/h2>`);
html = html.replace(/<p class="fade-up delay-2">.*?<\/p>/s, `<p class="fade-up delay-2">${trans.intro.body}<\/p>`);
html = html.replace(/Our Philosophy/, `Notre Philosophie`);

// Services
html = html.replace(/service-card fade-up" id="home-experiences-card" aria-label="Exclusive Experiences">/, `service-card fade-up" id="home-experiences-card" aria-label="Expériences Exclusives">`);
html = html.replace(/service-card fade-up delay-1" id="home-organisation-card" aria-label="Flawless Organisation">/, `service-card fade-up delay-1" id="home-organisation-card" aria-label="Organisation Impeccable">`);
html = html.replace(/service-card fade-up delay-2" id="home-stays-card" aria-label="Luxury Stays and Travel">/, `service-card fade-up delay-2" id="home-stays-card" aria-label="Séjours & Voyages">`);

html = html.replace(/<h3 class="service-card__title">Exclusive Experiences<\/h3>/, `<h3 class="service-card__title">${trans.services.title1}<\/h3>`);
html = html.replace(/<p class="service-card__body">Private dining, VIP cultural & sporting access, bespoke chef arrangements\.<\/p>/, `<p class="service-card__body">${trans.services.body1}<\/p>`);

html = html.replace(/<h3 class="service-card__title">Flawless Organisation<\/h3>/, `<h3 class="service-card__title">${trans.services.title2}<\/h3>`);
html = html.replace(/<p class="service-card__body">Private event coordination, lifestyle management, and corporate hospitality\.<\/p>/, `<p class="service-card__body">${trans.services.body2}<\/p>`);

html = html.replace(/<h3 class="service-card__title">Stays & Travel<\/h3>/, `<h3 class="service-card__title">${trans.services.title3}<\/h3>`);
html = html.replace(/<p class="service-card__body">Private villas, aviation & yacht charters, bespoke itinerary design\.<\/p>/, `<p class="service-card__body">${trans.services.body3}<\/p>`);

html = html.replace(/Discover/g, trans.services.discover);
html = html.replace(/View All Services/, trans.services.viewAll);

// Stats
html = html.replace(/Years of Excellence/, trans.stats[0]);
html = html.replace(/Global Partners/, trans.stats[1]);
html = html.replace(/At Your Service/, trans.stats[2]);

// Testimonials
html = html.replace(/Words they<br><em>allow us to share<\/em>/, trans.testi.title);
html = html.replace(/Private Clients<\/p>/, `${trans.testi.eyebrow}<\/p>`);
html = html.replace(/"L'Instant Doré doesn't just arrange travel; they predict what I need before I realise I need it\. The level of access and absolute discretion they continually provide is entirely unmatched\."/, `"${trans.testi.q1}"`);
html = html.replace(/Geneva, Switzerland/, trans.testi.locale1);
html = html.replace(/"In fifteen years of using concierge services across three continents, L'Instant Doré remains the only team that has never once said 'that is not possible\.'"/, `"${trans.testi.q2}"`);
html = html.replace(/Founder, Family Office/, trans.testi.author2);
html = html.replace(/Dubai, UAE/, trans.testi.locale2);
html = html.replace(/"They arranged a private dinner at a closed château in Bordeaux with 48 hours notice\. The sommelier was waiting when we landed. Extraordinary\."/, `"${trans.testi.q3}"`);
html = html.replace(/Anonymous Client/, trans.testi.author3);

// Recent Moments
html = html.replace(/Live from the field<\/p>/, `${trans.recent.eyebrow}<\/p>`);
html = html.replace(/Recent <em>Moments<\/em>/, trans.recent.title);
html = html.replace(/All clients anonymous\. All details real\./, trans.recent.disclaim);
html = html.replace(/A last-minute Formula 1 garage pass and paddock dinner for four, arranged in under six hours\./, trans.recent.m1);
html = html.replace(/3 days ago/, trans.recent.d1);
html = html.replace(/Private after-hours photography session inside the Louvre, from request to confirmation: 48 hours\./, trans.recent.m2);
html = html.replace(/1 week ago/, trans.recent.d2);
html = html.replace(/A Michelin 3-star private chef flown to a chalet in Courchevel for a 12-person New Year's Eve dinner\./, trans.recent.m3);
html = html.replace(/2 weeks ago/, trans.recent.d3);
html = html.replace(/Entire floor buyout at the Atlantis Royal. Private Rolls-Royce fleet for the week. Full itinerary curated in 72 hours\./, trans.recent.m4);
html = html.replace(/1 month ago/, trans.recent.d4);

// Press
html = html.replace(/As spoken about in/, `Comme mentionné dans`);

// How it works
html = html.replace(/The Process<\/p>/, `${trans.how.eyebrow}<\/p>`);
html = html.replace(/Effortless from<br\/><em>start to finish<\/em>/, trans.how.title);
html = html.replace(/Express Your Need/, trans.how.s1);
html = html.replace(/Send us your request — no matter how complex or last-minute — via form, email, or WhatsApp\./, trans.how.b1);
html = html.replace(/We Orchestrate/, trans.how.s2);
html = html.replace(/Our team leverages our global network to design a tailor-made, flawless solution\./, trans.how.b2);
html = html.replace(/You Experience/, trans.how.s3);
html = html.replace(/Simply arrive and enjoy\. Everything behind the scenes is seamlessly handled\./, trans.how.b3);
html = html.replace(/Contact Your Concierge/, trans.how.btn);

// Footer
html = html.replace(/Your invisible engine\. Curating the extraordinary, so you may simply live it\./, trans.footer.tag);
html = html.replace(/<p class=\"footer__col-title\">Navigation<\/p>/, `<p class=\"footer__col-title\">${trans.footer.nav}<\/p>`);
html = html.replace(/<p class=\"footer__col-title\">Contact<\/p>/, `<p class=\"footer__col-title\">${trans.footer.contact}<\/p>`);
html = html.replace(/For enquiries:/, `Pour toute demande :`);
html = html.replace(/© 2026 L'Instant Doré\. All rights reserved\./, trans.footer.copy);
html = html.replace(/Privacy Policy/, `Politique de confidentialité`);
html = html.replace(/Terms of Service/, `Conditions d'utilisation`);

// Update nav links for the footer
html = html.replace(/<ul class="footer__links">[\s\S]*?<\/ul>/, `<ul class="footer__links">
          <li><a href="index_fr.html">Accueil</a></li>
          <li><a href="services_fr.html">Services</a></li>
          <li><a href="philosophy_fr.html">Philosophie</a></li>
          <li><a href="contact_fr.html">Contact</a></li>
        </ul>`);

fs.writeFileSync(trans.target, html);
console.log('Created ' + trans.target);
