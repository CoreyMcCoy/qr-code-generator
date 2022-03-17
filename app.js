const input = document.querySelector('#website');
const qrColor = document.querySelector('#qrcode-color');
const qrCodeContainer = document.querySelector('#qrcode-container');
const qrCode = document.querySelector('#qrcode');
const btn = document.querySelector('#button');
const resetBtn = document.querySelector('#reset-button');

// Generate qr code
function generateQRCode() {
  if (input.value) {
    let qrcodeContainer = qrCode;
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, {
      text: website,
      width: 128,
      height: 128,
      colorDark: qrColor.value,
      colorLight: 'rgba(255,255,255,0)',
      correctLevel: QRCode.CorrectLevel.H,
    });
    qrCodeContainer.style.display = 'block';
  } else {
    alert('Please enter a valid URL');
  }
}

// Reload the page
function reset() {
  location.reload();
}

resetBtn.addEventListener('click', reset);
btn.addEventListener('click', generateQRCode);
