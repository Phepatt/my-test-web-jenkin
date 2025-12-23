document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('checkHealthBtn');
  const resultDiv = document.getElementById('healthResult');

  button.addEventListener('click', async () => {
    resultDiv.textContent = 'Checking...';
    resultDiv.className = 'result';

    try {
      const response = await fetch('/api/health');
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();
      resultDiv.textContent = `API status: ${data.status}`;
      resultDiv.classList.add('success');
    } catch (err) {
      resultDiv.textContent = 'Failed to reach API';
      resultDiv.classList.add('error');
      // eslint-disable-next-line no-console
      console.error(err);
    }
  });
});


