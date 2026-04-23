const fs = require('fs');

const file = 'contact.html';
const target = 'contact_fr.html';
let html = fs.readFileSync(file, 'utf8');

// Meta
html = html.replace(/<title>.*?<\/title>/, `<title>Contact L'Instant Doré | Soumettez votre demande de conciergerie<\/title>`);
html = html.replace(/<meta name="description" content=".*?"\/>/, `<meta name="description" content="Contactez L'Instant Doré dès aujourd'hui pour demander votre service personnalisé de voyage, d'événement ou de gestion de style de vie. Disponible 24/7 via formulaire ou WhatsApp."\/>`);
html = html.replace(/<html lang="en">/, `<html lang="fr">`);

// Nav
html = html.replace(/<li><a href="index\.html">Home<\/a><\/li>/, `<li><a href="index_fr.html">Accueil<\/a><\/li>`);
html = html.replace(/<li><a href="services\.html">Our Services<\/a><\/li>/, `<li><a href="services_fr.html">Services<\/a><\/li>`);
html = html.replace(/<li><a href="philosophy\.html">Our Philosophy<\/a><\/li>/, `<li><a href="philosophy_fr.html">Philosophie<\/a><\/li>`);
html = html.replace(/<li><a href="contact\.html" class="active">Contact<\/a><\/li>/, `<li><a href="contact_fr.html" class="active">Contact<\/a><\/li>`);

// Dropdown
html = html.replace(
  /<div class="nav__lang-menu">[\s\S]*?<\/div>/,
  `<div class="nav__lang-menu">
        <a href="contact.html">English</a>
        <a href="contact_fr.html" class="active">Français</a>
      </div>`
);
html = html.replace(
  /<div class="nav__mobile-lang">[\s\S]*?<\/div>/,
  `<div class="nav__mobile-lang"><a href="contact.html">English</a><span class="nav__mobile-lang-sep">/</span><a href="contact_fr.html" class="active">Français</a></div>`
);

// CTA
html = html.replace(/"nav__cta">Make a Request<\/a>/g, `"nav__cta">Faire une demande<\/a>`);
html = html.replace(/"nav__mobile-cta">Make a Request<\/a>/g, `"nav__mobile-cta">Faire une demande<\/a>`);
html = html.replace(/"mobile-bar__request"(.*?)>Make a Request<\/a>/g, `"mobile-bar__request"$1>Faire une demande<\/a>`);

// Sidebar
html = html.replace(/"We do not simply fulfil requests\. We craft experiences that become memories\."/, `"Nous ne nous contentons pas de satisfaire des demandes. Nous créons des expériences qui deviennent des souvenirs."`);
html = html.replace(/Available 24 \/ 7 · Worldwide/, `Disponible 24/7 · Monde entier`);

// Form
html = html.replace(/Reach Out<\/p>/, `Nous Contacter<\/p>`);
html = html.replace(/Your Request<br\/><em>Starts Here\.<\/em>/, `Votre Demande<br\/><em>Commence Ici.<\/em>`);
html = html.replace(/Tell us what you need\. We will handle the rest\./, `Dites-nous ce dont vous avez besoin. Nous nous occupons du reste.`);

html = html.replace(/Full Name/, `Nom complet`);
html = html.replace(/placeholder="Your name"/, `placeholder="Votre nom"`);
html = html.replace(/Email Address/, `Adresse e-mail`);
html = html.replace(/Phone Number/, `Numéro de téléphone`);
html = html.replace(/\(Recommended\)/, `(Recommandé)`);
html = html.replace(/Service of Interest/, `Service souhaité`);
html = html.replace(/Select an area of interest…/, `Sélectionnez un domaine d'intérêt…`);
html = html.replace(/Exclusive Experiences<\/option>/, `Expériences Exclusives<\/option>`);
html = html.replace(/Private Organisation<\/option>/, `Organisation Privée<\/option>`);
html = html.replace(/Luxury Stays & Travel<\/option>/, `Séjours de Luxe & Voyages<\/option>`);
html = html.replace(/Something Else<\/option>/, `Autre<\/option>`);

html = html.replace(/Your Vision/, `Votre Vision`);
html = html.replace(/placeholder="What are you envisioning\? \(Dates, locations, specific desires…\)"/, `placeholder="Que visualisez-vous ? (Dates, lieux, désirs spécifiques...)"`);

html = html.replace(/<span class="btn-text">Send Request<\/span>/, `<span class="btn-text">Envoyer la demande<\/span>`);

// Success
html = html.replace(/Request Received\./, `Demande Reçue.`);
html = html.replace(/Thank you\. A member of our team will be in contact with you within the next 24 hours\./, `Merci. Un membre de notre équipe vous contactera dans les prochaines 24 heures.`);

// Alt
html = html.replace(/or<\/span>/, `ou<\/span>`);
html = html.replace(/Need an instant response\?/, `Besoin d'une réponse instantanée ?`);
html = html.replace(/Reach your concierge directly on our private line\./, `Contactez votre concierge directement sur notre ligne privée.`);
html = html.replace(/Chat on WhatsApp/g, `Discuter sur WhatsApp`);

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
