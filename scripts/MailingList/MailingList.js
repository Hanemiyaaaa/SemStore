document.getElementById('newsletter-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('mail');
    const email = emailInput.value.trim();
  
    if (!validateEmail(email)) {
      alert('Введите корректный email!');
      return;
    }
  
    try {
      const response = await fetch('save_email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert('Спасибо за подписку!');
        emailInput.value = '';
      } else {
        alert('Ошибка при сохранении: ' + result.message);
      }
    } catch (error) {
      alert('Ошибка соединения с сервером!');
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }