const fs = require('fs');

const file = 'vault.html';
const target = 'vault_fr.html';
let html = fs.readFileSync(file, 'utf8');

// Meta
html = html.replace(/<title>.*?<\/title>/, `<title>Le Coffre | Accès Hors-Marché | L'Instant Doré<\/title>`);
html = html.replace(/<html lang="en">/, `<html lang="fr">`);

// Nav
html = html.replace(/Exit Vault/, `Quitter le Coffre`);

// Login
html = html.replace(/The Vault<\/h1>/, `Le Coffre<\/h1>`);
html = html.replace(/Restricted Access\. Enter cipher to view off-market acquisitions\./, `Accès Restreint. Entrez le code pour voir les acquisitions hors-marché.`);
html = html.replace(/Access Denied\./, `Accès Refusé.`);

// Content
html = html.replace(/Off-Market <em>Assets<\/em>/, `Actifs <em>Hors-Marché<\/em>`);
html = html.replace(/Extremely rare allocations\. Contact your liaison to initiate acquisition\./, `Allocations extrêmement rares. Contactez votre liaison pour initier l'acquisition.`);

html = html.replace(/Horology/g, `Horlogerie`);
html = html.replace(/Third series, 18k yellow gold\. Unpolished case, complete original documentation\. Provenance available strictly upon request\./, `Troisième série, or jaune 18 carats. Boîtier non poli, documentation d'origine complète. Provenance disponible strictement sur demande.`);

html = html.replace(/Real Estate/g, `Immobilier`);
html = html.replace(/Completely off-market\. 8 bedrooms, infinity edge into the Mediterranean, private deep-water dock\. Anonymous seller\./, `Totalement hors-marché. 8 chambres, piscine à débordement sur la Méditerranée, quai privé en eau profonde. Vendeur anonyme.`);

html = html.replace(/Fine Art/g, `Beaux-Arts`);
html = html.replace(/Major 1950s canvas currently in a Swiss freeport\. Never before offered at public auction\. Viewing arranged by private jet only\./, `Toile majeure des années 1950 actuellement dans un port franc suisse. Jamais offerte auparavant en vente publique. Visite organisée par jet privé uniquement.`);

html = html.replace(/Inquire/g, `Se renseigner`);

fs.writeFileSync(target, html);
console.log('Created ' + target);
