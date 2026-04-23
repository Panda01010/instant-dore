const fs = require('fs');
const files = ['index.html', 'services.html', 'philosophy.html', 'contact.html', 'vault.html'];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let code = fs.readFileSync(file, 'utf8');

  // Regex to match the current nav__lang structure
  const currentLang = /<div class="nav__lang"><a href="#" class="active">EN<\/a><span class="nav__lang-sep">\/<\/span><a href="#">FR<\/a><\/div>/;
  
  if (currentLang.test(code)) {
    code = code.replace(
      currentLang,
      `<div class="nav__lang-dropdown">
      <div class="nav__lang-trigger">
        <span>EN</span>
        <svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="nav__lang-menu">
        <a href="#" class="active">English</a>
        <a href="#">Français</a>
      </div>
    </div>`
    );
  }

  fs.writeFileSync(file, code);
  console.log('Updated ' + file);
});
