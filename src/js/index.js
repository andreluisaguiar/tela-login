document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('login-message').textContent = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let hasError = false;

    if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Por favor, insira um e-mail válido.';
        document.getElementById('email-error').style.display = 'block';
        hasError = true;
    }

    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'A senha deve ter pelo menos 6 caracteres.';
        document.getElementById('password-error').style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        document.getElementById('login-message').textContent = 'Login realizado com sucesso!';
        document.getElementById('login-message').style.color = 'green';
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
