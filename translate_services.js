const fs = require('fs');

const file = 'services.html';
const target = 'services_fr.html';
let html = fs.readFileSync(file, 'utf8');

// Meta
html = html.replace(/<title>.*?<\/title>/, `<title>Services | Voyages sur Mesure, Événements & Organisation par L'Instant Doré<\/title>`);
html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="Découvrez nos trois piliers de service : Expériences organisées, Organisation Impeccable et Séjours de Luxe."\/>`);
html = html.replace(/<html lang="en">/, `<html lang="fr">`);

// Nav
html = html.replace(/<li><a href="index\.html">Home<\/a><\/li>/, `<li><a href="index_fr.html">Accueil<\/a><\/li>`);
html = html.replace(/<li><a href="services\.html" class="active">Our Services<\/a><\/li>/, `<li><a href="services_fr.html" class="active">Services<\/a><\/li>`);
html = html.replace(/<li><a href="philosophy\.html">Our Philosophy<\/a><\/li>/, `<li><a href="philosophy_fr.html">Philosophie<\/a><\/li>`);
html = html.replace(/<li><a href="contact\.html">Contact<\/a><\/li>/, `<li><a href="contact_fr.html">Contact<\/a><\/li>`);

// Dropdown
html = html.replace(
  /<div class="nav__lang-menu">[\s\S]*?<\/div>/,
  `<div class="nav__lang-menu">
        <a href="services.html">English</a>
        <a href="services_fr.html" class="active">Français</a>
      </div>`
);
html = html.replace(
  /<div class="nav__mobile-lang">[\s\S]*?<\/div>/,
  `<div class="nav__mobile-lang"><a href="services.html">English</a><span class="nav__mobile-lang-sep">/</span><a href="services_fr.html" class="active">Français</a></div>`
);

// CTA
html = html.replace(/"nav__cta">Make a Request<\/a>/g, `"nav__cta">Faire une demande<\/a>`);
html = html.replace(/"nav__mobile-cta">Make a Request<\/a>/g, `"nav__mobile-cta">Faire une demande<\/a>`);
html = html.replace(/"mobile-bar__request"(.*?)>Make a Request<\/a>/g, `"mobile-bar__request"$1>Faire une demande<\/a>`);

// Content
html = html.replace(/Our Services<\/p>/g, `Nos Services<\/p>`);
html = html.replace(/Uncompromising Service.<br\/><em>Infinite Possibilities\.<\/em>/, `Un Service sans Compromis.<br\/><em>Des Possibilités Infinies.<\/em>`);
html = html.replace(/We do not offer catalogues\. We offer blank canvases\. Whatever you require, our network and expertise make it a reality\./, `Nous ne proposons pas de catalogues. Nous offrons des pages blanches. Quel que soit votre besoin, notre réseau et notre expertise en font une réalité.`);

html = html.replace(/<p>Experiences<\/p>/, `<p>Expériences<\/p>`);
html = html.replace(/Pillar One<\/p>/, `Premier Pilier<\/p>`);
html = html.replace(/Exclusive<br\/><em>Experiences<\/em>/, `Expériences<br\/><em>Exclusives<\/em>`);
html = html.replace(/Access the inaccessible\. Whether it is securing a table at a fully booked Michelin-star restaurant, arranging a private chef for an intimate dinner, or gaining VIP access to elite cultural and sporting events, we open doors that remain closed to the public\./, `Accédez à l'inaccessible. Qu'il s'agisse de réserver une table dans un restaurant étoilé Michelin complet, d'organiser un chef privé pour un dîner intime ou d'obtenir un accès VIP à des événements culturels et sportifs d'élite, nous ouvrons des portes qui restent fermées au public.`);
html = html.replace(/Private dining at Michelin-starred venues/, `Dîners privés dans des lieux étoilés au Michelin`);
html = html.replace(/VIP access to exclusive cultural & sporting events/, `Accès VIP à des événements culturels et sportifs exclusifs`);
html = html.replace(/Bespoke chef arrangements & tastings/, `Arrangements de chefs sur mesure et dégustations`);
html = html.replace(/Curated art gallery previews & private viewings/, `Avant-premières de galeries d'art et visites privées`);

html = html.replace(/<p>Organisation<\/p>/, `<p>Organisation<\/p>`);
html = html.replace(/Pillar Two<\/p>/, `Deuxième Pilier<\/p>`);
html = html.replace(/Flawless<br\/><em>Organisation<\/em>/, `Organisation<br\/><em>Impeccable<\/em>`);
html = html.replace(/Consider us your personal lifestyle managers\. We coordinate your private celebrations, manage complex daily errands, and orchestrate high-end events\. No detail is too small, and no request is too large\./, `Considérez-nous comme vos gestionnaires personnels de style de vie. Nous coordonnons vos célébrations privées, gérons les courses quotidiennes complexes et orchestrons des événements haut de gamme. Aucun détail n'est trop petit et aucune demande n'est trop grande.`);
html = html.replace(/Private event planning & coordination/, `Planification et coordination d'événements privés`);
html = html.replace(/Daily errands & lifestyle management/, `Courses quotidiennes et gestion du style de vie`);
html = html.replace(/Corporate hospitality & gifting/, `Hospitalité d'entreprise et cadeaux`);
html = html.replace(/Exclusive procurement & sourcing/, `Approvisionnement et sourcing exclusifs`);

html = html.replace(/<p>Stays & Travel<\/p>/, `<p>Séjours & Voyages<\/p>`);
html = html.replace(/Pillar Three<\/p>/, `Troisième Pilier<\/p>`);
html = html.replace(/Luxury Stays<br\/>& <em>Travel<\/em>/, `Séjours de Luxe<br\/>& <em>Voyages<\/em>`);
html = html.replace(/Travel exactly how you live: without compromise\. We curate bespoke getaways, source exclusive private villas, arrange private aviation, and design itineraries that anticipate your every need\./, `Voyagez exactement comme vous vivez : sans compromis. Nous organisons des escapades sur mesure, trouvons des villas privées exclusives, organisons l'aviation privée et concevons des itinéraires qui anticipent chacun de vos besoins.`);
html = html.replace(/Exclusive private villa sourcing worldwide/, `Sourcing de villas privées exclusives dans le monde entier`);
html = html.replace(/Private aviation & yacht charters/, `Affrètement d'avions privés et de yachts`);
html = html.replace(/Bespoke itinerary design & management/, `Conception et gestion d'itinéraires sur mesure`);
html = html.replace(/Ground transport & chauffeur services/, `Transport terrestre et services de chauffeur`);

html = html.replace(/Request This Service/g, `Demander ce service`);

html = html.replace(/Our Home City<\/p>/, `Notre ville d'origine<\/p>`);
html = html.replace(/Paris,<br><em>without limits<\/em>/, `Paris,<br><em>sans limites<\/em>`);
html = html.replace(/From the locked doors of the Palais Royal to private viewings in Montmartre ateliers — Paris is where we were born, and where our network runs deepest\./, `Des portes fermées du Palais Royal aux visites privées dans les ateliers de Montmartre — Paris est la ville où nous sommes nés, et là où notre réseau est le plus profond.`);
html = html.replace(/Iconic Paris/, `Paris Iconique`);
html = html.replace(/Trocadéro & 7th/, `Trocadéro & 7ème`);
html = html.replace(/Private Eiffel Tower dinners, exclusive sunset terraces, and after-hours Musée d'Orsay viewings\./, `Dîners privés à la Tour Eiffel, terrasses exclusives au coucher du soleil et visites du musée d'Orsay après les heures d'ouverture.`);
html = html.replace(/Culture & Art/, `Culture & Art`);
html = html.replace(/Private gallery openings, artist atelier visits, and curated contemporary art acquisitions\./, `Vernissages privés, visites d'ateliers d'artistes et acquisitions d'art contemporain.`);
html = html.replace(/Haute Couture/, `Haute Couture`);
html = html.replace(/VIP boutique access, personal shopping, fashion week front rows, and bespoke trunk shows\./, `Accès VIP aux boutiques, shopping personnalisé, premiers rangs de la fashion week et ventes privées.`);
html = html.replace(/Palace Living/, `La Vie de Palace`);
html = html.replace(/The Palace Hotels/, `Les Hôtels Palace`);
html = html.replace(/Priority access and suite upgrades at Ritz, Le Bristol, George V, and Plaza Athénée — when availability says otherwise\./, `Accès prioritaire et surclassements de suites au Ritz, au Bristol, au George V et au Plaza Athénée — même quand la disponibilité dit le contraire.`);

html = html.replace(/Common Questions<\/p>/, `Questions Fréquentes<\/p>`);
html = html.replace(/What you may<br><em>want to know<\/em>/, `Ce que vous voudriez<br><em>savoir<\/em>`);
html = html.replace(/How quickly do you respond to requests\?/, `En combien de temps répondez-vous aux demandes ?`);
html = html.replace(/For urgent matters, we respond within the hour\. For complex arrangements, we confirm receipt immediately and deliver a full proposal within 24 hours\./, `Pour les questions urgentes, nous répondons dans l'heure. Pour les arrangements complexes, nous confirmons la réception immédiatement et livrons une proposition complète dans les 24 heures.`);
html = html.replace(/Do you operate globally or only in Europe\?/, `Opérez-vous dans le monde entier ou seulement en Europe ?`);
html = html.replace(/We are headquartered in Europe but maintain an active network spanning the Middle East, Asia, the Americas, and beyond\./, `Notre siège social est en Europe, mais nous maintenons un réseau actif couvrant le Moyen-Orient, l'Asie, les Amériques et au-delà.`);
html = html.replace(/How is my privacy protected\?/, `Comment ma vie privée est-elle protégée ?`);
html = html.replace(/Absolute discretion is the foundation of everything we do\. All client information is handled under strict confidentiality agreements\. We never share, disclose, or reference client activity\./, `La discrétion absolue est le fondement de tout ce que nous faisons. Toutes les informations des clients sont traitées selon des accords de confidentialité stricts. Nous ne partageons, ne divulguons ni ne référençons jamais l'activité des clients.`);
html = html.replace(/Is there a membership or retainer model\?/, `Existe-t-il un modèle d'adhésion ou d'abonnement ?`);
html = html.replace(/We offer both per-request and annual retainer arrangements, including a dedicated account manager and preferred partner rates\./, `Nous proposons des arrangements par demande et par abonnement annuel, comprenant un gestionnaire de compte dédié et des tarifs préférentiels pour nos partenaires.`);
html = html.replace(/What makes a request too complex\?/, `Qu'est-ce qui rend une demande trop complexe ?`);
html = html.replace(/Nothing\. Our team has arranged private Louvre access, procured items with no public market, and experiences most consider impossible\. We invite you to test us\./, `Rien. Notre équipe a organisé des accès privés au Louvre, trouvé des articles sans marché public et des expériences que la plupart considèrent comme impossibles. Nous vous invitons à nous tester.`);

html = html.replace(/Begin Today<\/p>/, `Commencez Aujourd'hui<\/p>`);
html = html.replace(/Ready to delegate<br\/><em>the details\?<\/em>/, `Prêt à déléguer<br\/><em>les détails ?<\/em>`);
html = html.replace(/Submit a Request/, `Soumettre une demande`);

// Footer
html = html.replace(/Your invisible engine\. Curating the extraordinary, so you may simply live it\./, `Votre moteur invisible. Organiser l'extraordinaire pour que vous puissiez simplement le vivre.`);
html = html.replace(/<p class=\"footer__col-title\">Navigation<\/p>/, `<p class=\"footer__col-title\">Navigation<\/p>`);
html = html.replace(/<p class=\"footer__col-title\">Contact<\/p>/, `<p class=\"footer__col-title\">Contact<\/p>`);
html = html.replace(/For enquiries:/, `Pour toute demande :`);
html = html.replace(/© 2026 L'Instant Doré\. All rights reserved\./, `© 2026 L'Instant Doré. Tous droits réservés.`);
html = html.replace(/Privacy Policy/, `Politique de confidentialité`);
html = html.replace(/Terms of Service/, `Conditions d'utilisation`);

html = html.replace(/<ul class="footer__links">[\s\S]*?<\/ul>/, `<ul class="footer__links">
          <li><a href="index_fr.html">Accueil</a></li>
          <li><a href="services_fr.html">Services</a></li>
          <li><a href="philosophy_fr.html">Philosophie</a></li>
          <li><a href="contact_fr.html">Contact</a></li>
        </ul>`);

fs.writeFileSync(target, html);
console.log('Created ' + target);
