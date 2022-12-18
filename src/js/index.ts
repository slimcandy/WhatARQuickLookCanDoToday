const linkElement = document.getElementById('room-plan-ar-link');

const handleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href = 'tel:+2306989800';
  }
};

if (linkElement) {
  linkElement.addEventListener('message', handleMessage, false, true);
}
