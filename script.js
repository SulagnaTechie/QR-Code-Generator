// script.js
async function generateQRCode() {
  const inputData = document.getElementById('data').value;

  if (!inputData) {
    alert('Please enter data to generate QR Code.');
    return;
  }

  const response = await fetch('/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: inputData }),
  });

  const result = await response.json();

  const qrCodeContainer = document.getElementById('qr-code-container');
  qrCodeContainer.innerHTML = `<img src="${result.qrCode}" alt="Generated QR Code">`;
}
