document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const service = data.get('service');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hello Riesesun,\n\nMy name is ${name}.\nEmail: ${email}\nService needed: ${service}\n\nWhat I need help with:\n${message}\n\nThank you.`);
    window.location.href = `mailto:riesesun.sidillo23@gmail.com?subject=${subject}&body=${body}`;
  });
}