var default_language = 0;
const languages = [
  
  [
      // Arabic
      'قط الأنمي',
      'مرحبا بك في موقع قط الأنمي',
      'الوجهة المفضلة لمتابعي أخبار الانمي',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
  ],
  
  [
      // English
      'AnimeCat',
      'Welcome to AnimeCat',
      'The favorite destination for anime news followers',
      ''
  ],
  
  [],  // Espanol
  [],  // Russian
  [],  // Chinese
  ];
change_language(default_language);
function change_language(lang) {
  document.getElementById('title').textContent = languages [lang][0];
  document.getElementById('logo').textContent = languages [lang][0];
  document.getElementById('home_welcome').textContent = languages [lang][1];
  document.getElementById('home_p').textContent = languages [lang][2];
  document.getElementById('title').textContent = languages [lang][3];
  document.getElementById('title').textContent = languages [lang][0];
  document.getElementById('title').textContent = languages [lang][0];
  document.getElementById('title').textContent = languages [lang][0];
  document.getElementById('title').textContent = languages [lang][0];
  document.getElementById('title').textContent = languages [lang][0];
}
