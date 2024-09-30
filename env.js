document.addEventListener('DOMContentLoaded', function() {
    const envBanner = document.getElementById('envBanner');
    const environment = window.env.ENVIRONMENT;
  
    if (environment) {
      envBanner.innerText = `Environment: ${environment}`;
      envBanner.classList.add(environment === 'production' ? 'env-production' : 'env-test');
    }
  });