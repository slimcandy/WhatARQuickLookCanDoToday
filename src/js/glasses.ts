const glassesLinkElement = document.getElementById(
  'glasses-ar-link'
) as HTMLAnchorElement;

const glassesHandleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href = 'tel:+1-800-555-5555';
  }
};

if (glassesLinkElement) {
  glassesLinkElement.addEventListener(
    'message',
    glassesHandleMessage as EventListener,
    false
  );
}
