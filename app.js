const input = document.querySelector('#website');
const qrColor = document.querySelector('#qrcode-color');
const qrCodeContainer = document.querySelector('#qrcode-container');
const qrCode = document.querySelector('#qrcode');
const btn = document.querySelector('#button');
const resetBtn = document.querySelector('#reset-button');
const downloadQrCode = document.querySelector('.instruction-text');

// Generate qr code
function generateQRCode() {
  if (input.value) {
    let qrcodeContainer = qrCode;
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, {
      text: website,
      width: 200,
      height: 200,
      colorDark: qrColor.value,
      colorLight: 'rgba(255,255,255,0)',
      correctLevel: QRCode.CorrectLevel.H,
    });
    qrCodeContainer.style.display = 'block';
  } else {
    alert('Please enter a valid URL');
  }
}
// download qr code
downloadQrCode.addEventListener('click', () => {
  if (!input.value) {
    alert('Please enter a valid URL');
  } else {
    let downloadLink = document.createElement('a');
    downloadLink.href = document.querySelector('#qrcode-container canvas').toDataURL();
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  }
});

// Reload the page
function reset() {
  if (!input.value) {
    alert('Please enter a valid URL');
  } else {
    location.reload();
  }
}

resetBtn.addEventListener('click', reset);
btn.addEventListener('click', generateQRCode);
