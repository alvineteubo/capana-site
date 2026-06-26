document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-message');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const subject = form.querySelector('#subject');
    const message = form.querySelector('#message');

    if (!name.value.trim() || !phone.value.trim() || !subject.value || !message.value.trim()) {
      msg.textContent = 'Veuillez remplir tous les champs obligatoires.';
      msg.className = 'form-message error';
      return;
    }

    const email = form.querySelector('#email').value.trim();
    const body = [
      'Nom : ' + name.value.trim(),
      'Téléphone : ' + phone.value.trim(),
      email ? 'E-mail : ' + email : '',
      '',
      message.value.trim()
    ].filter(Boolean).join('\n');

    const mailto = 'mailto:leungambiagni@gmail.com'
      + '?subject=' + encodeURIComponent('[CAPANA] ' + subject.options[subject.selectedIndex].text)
      + '&body=' + encodeURIComponent(body);

    window.location.href = mailto;

    msg.textContent = 'Votre client e-mail va s\'ouvrir. Si ce n\'est pas le cas, écrivez-nous à leungambiagni@gmail.com';
    msg.className = 'form-message success';
  });
});
