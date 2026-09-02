document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Sending…';

    const data = new FormData(form);
    data.append('_subject', 'New Admin Assistant Portfolio Inquiry');
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    try {
      const response = await fetch('https://formsubmit.co/ajax/riesesun.sidillo23@gmail.com', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error('Submission failed');
      form.reset();
      button.textContent = 'Message Sent ✓';
      alert('Thank you! Your message has been sent to Riesesun.');
    } catch (error) {
      button.textContent = originalText;
      alert('Sorry, the message could not be sent. Please email riesesun.sidillo23@gmail.com directly.');
    } finally {
      setTimeout(() => {
        button.disabled = false;
        if (button.textContent === 'Message Sent ✓') button.textContent = originalText;
      }, 3000);
    }
  });
}