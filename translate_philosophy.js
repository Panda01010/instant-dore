const fs = require('fs');

const file = 'philosophy.html';
const target = 'philosophy_fr.html';
let html = fs.readFileSync(file, 'utf8');

// Meta
html = html.replace(/<title>.*?<\/title>/, `<title>À propos de L'Instant Doré | L'Art de la Conciergerie de Luxe<\/title>`);
html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="Découvrez l'engagement de L'Instant Doré envers la discrétion, l'excellence et le gain de temps grâce à notre réseau d'élite."\/>`);
html = html.replace(/<html lang="en">/, `<html lang="fr">`);

// Nav
html = html.replace(/<li><a href="index\.html">Home<\/a><\/li>/, `<li><a href="index_fr.html">Accueil<\/a><\/li>`);
html = html.replace(/<li><a href="services\.html">Our Services<\/a><\/li>/, `<li><a href="services_fr.html">Services<\/a><\/li>`);
html = html.replace(/<li><a href="philosophy\.html" class="active">Our Philosophy<\/a><\/li>/, `<li><a href="philosophy_fr.html" class="active">Philosophie<\/a><\/li>`);
html = html.replace(/<li><a href="contact\.html">Contact<\/a><\/li>/, `<li><a href="contact_fr.html">Contact<\/a><\/li>`);

// Dropdown
html = html.replace(
  /<div class="nav__lang-menu">[\s\S]*?<\/div>/,
  `<div class="nav__lang-menu">
        <a href="philosophy.html">English</a>
        <a href="philosophy_fr.html" class="active">Français</a>
      </div>`
);
html = html.replace(
  /<div class="nav__mobile-lang">[\s\S]*?<\/div>/,
  `<div class="nav__mobile-lang"><a href="philosophy.html">English</a><span class="nav__mobile-lang-sep">/</span><a href="philosophy_fr.html" class="active">Français</a></div>`
);

// CTA
html = html.replace(/"nav__cta">Make a Request<\/a>/g, `"nav__cta">Faire une demande<\/a>`);
html = html.replace(/"nav__mobile-cta">Make a Request<\/a>/g, `"nav__mobile-cta">Faire une demande<\/a>`);
html = html.replace(/"mobile-bar__request"(.*?)>Make a Request<\/a>/g, `"mobile-bar__request"$1>Faire une demande<\/a>`);

// Content
html = html.replace(/Our Philosophy<\/p>/g, `Notre Philosophie<\/p>`);
html = html.replace(/The Art of<br\/><em>Anticipation\.<\/em>/, `L'Art de<br\/><em>l'Anticipation.<\/em>`);

html = html.replace(/Our Origin<\/p>/, `Notre Origine<\/p>`);
html = html.replace(/Why We Exist<\/h2>/, `Pourquoi Nous Existons<\/h2>`);
html = html.replace(/L'Instant Doré was founded on a simple premise: the most valuable asset you have is your time\. Searching, booking, planning, and managing logistics drain that asset\. We step in to give it back to you\./, `L'Instant Doré a été fondé sur un principe simple : votre atout le plus précieux est votre temps. Rechercher, réserver, planifier et gérer la logistique épuisent cet atout. Nous intervenons pour vous le rendre.`);
html = html.replace(/Every second you spend on administration is a second taken from living\. We built L'Instant Doré to reclaim that time on your behalf, returning it to you as pure experience\./, `Chaque seconde passée dans l'administration est une seconde volée à la vie. Nous avons créé L'Instant Doré pour récupérer ce temps pour vous, en vous le rendant sous forme d'expérience pure.`);
html = html.replace(/"The measure of a life is not in its hours, but in its moments\."/, `"La mesure d'une vie ne se compte pas en heures, mais en moments."`);

html = html.replace(/Our Commitment<\/p>/, `Notre Engagement<\/p>`);
html = html.replace(/Absolute <em>Discretion<\/em>/, `Discrétion <em>Absolue<\/em>`);
html = html.replace(/Trust is the foundation of our business\. We manage the lives, travels, and events of our clients with strict confidentiality and absolute discretion\./, `La confiance est le fondement de notre activité. Nous gérons la vie, les voyages et les événements de nos clients avec une confidentialité stricte et une discrétion absolue.`);
html = html.replace(/Our team operates under a code of total privacy\. What we know, we hold in confidence\. What we arrange, we arrange with care\./, `Notre équipe opère selon un code de confidentialité totale. Ce que nous savons, nous le gardons secret. Ce que nous organisons, nous l'organisons avec soin.`);

html = html.replace(/Total Privacy<\/h3><p>Your requests, journeys and details are never shared\.<\/p>/, `Vie Privée Totale<\/h3><p>Vos demandes, trajets et détails ne sont jamais partagés.<\/p>`);
html = html.replace(/Confidential NDAs<\/h3><p>Every team member signs rigorous confidentiality agreements\.<\/p>/, `Accords de Confidentialité<\/h3><p>Chaque membre de l'équipe signe des accords de confidentialité rigoureux.<\/p>`);
html = html.replace(/Secure Operations<\/h3><p>Encrypted communications and secure data practices throughout\.<\/p>/, `Opérations Sécurisées<\/h3><p>Communications cryptées et pratiques de données sécurisées à tout moment.<\/p>`);

html = html.replace(/Our Advantage<\/p>/, `Notre Avantage<\/p>`);
html = html.replace(/An Elite <em>Network<\/em>/, `Un Réseau <em>d'Élite<\/em>`);
html = html.replace(/You are not just hiring a team; you are unlocking our global black book — the world's finest hospitality brands, transport services, and event professionals\./, `Vous ne recrutez pas seulement une équipe ; vous débloquez notre carnet d'adresses mondial — les meilleures marques d'hôtellerie, services de transport et professionnels de l'événementiel au monde.`);

html = html.replace(/Global Partners<\/h3>/, `Partenaires mondiaux<\/h3>`);
html = html.replace(/Access to 500\+ vetted partners across 60\+ countries\./, `Accès à plus de 500 partenaires vérifiés dans plus de 60 pays.`);
html = html.replace(/Finest Hospitality<\/h3>/, `L'Excellence de l'Hospitalité<\/h3>`);
html = html.replace(/Relationships with Michelin-starred chefs, Palace hotels, and private clubs\./, `Relations avec des chefs étoilés Michelin, des hôtels de luxe et des clubs privés.`);
html = html.replace(/Elite Curators<\/h3>/, `Conseillers d'Élite<\/h3>`);
html = html.replace(/Handpicked specialists who share our uncompromising standard of excellence\./, `Spécialistes triés sur le volet qui partagent notre standard d'excellence sans compromis.`);

html = html.replace(/Case Studies<\/p>/, `Études de Cas<\/p>`);
html = html.replace(/The <em>"Impossible"<\/em> Request/, `La Demande <em>"Impossible"<\/em>`);

html = html.replace(/"A Private Viewing at the Louvre"/, `"Une Visite Privée au Louvre"`);
html = html.replace(/A client requested complete, uninterrupted access to the Mona Lisa for a private proposal\. We coordinated with museum directors to secure the entire wing after hours, complete with a private string quartet and Michelin-starred catering on site\./, `Un client a demandé un accès complet et ininterrompu à la Joconde pour une demande en mariage privée. Nous avons coordonné avec les directeurs du musée pour sécuriser l'aile entière après les heures d'ouverture, avec un quatuor à cordes privé et un service de restauration étoilé au Michelin sur place.`);
html = html.replace(/Execution: 72 Hours/, `Exécution : 72 Heures`);
html = html.replace(/"The Sold-Out Grand Prix"/, `"Le Grand Prix Complet"`);
html = html.replace(/With 24 hours' notice, a client wished to attend the Monaco Grand Prix\. Paddock Club access was fully exhausted\. Instead, we secured a highly coveted private luxury yacht moored directly on the track edge, complete with full hospitality and private helicopter transfer\./, `Avec un préavis de 24 heures, un client a souhaité assister au Grand Prix de Monaco. L'accès au Paddock Club était totalement épuisé. Au lieu de cela, nous avons sécurisé un yacht de luxe privé très convoité amarré directement au bord de la piste, avec une hospitalité complète et un transfert privé en hélicoptère.`);
html = html.replace(/Execution: 24 Hours/, `Exécution : 24 Heures`);

html = html.replace(/Experience the Difference<\/p>/, `Vivez la Différence<\/p>`);
html = html.replace(/Let us elevate your<br\/><em>next experience\.<\/em>/, `Laissez-nous élever votre<br\/><em>prochaine expérience.<\/em>`);
html = html.replace(/>Contact Us<\/a>/, `>Contactez-nous<\/a>`);

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
