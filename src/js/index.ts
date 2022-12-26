const schoolLinkElement = document.getElementById(
  'school-ar-link'
) as HTMLLinkElement;

const schoolHandleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href = 'tel:+18554667467';
  }
};

if (schoolLinkElement) {
  schoolLinkElement.addEventListener(
    'message',
    schoolHandleMessage as EventListener,
    false
  );
}

// Dino wiki page.
const dinoLinkElement = document.getElementById(
  'dino-ar-link'
) as HTMLAnchorElement;

const dinoHandleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href = 'https://en.wikipedia.org/wiki/Stegosaurus';
  }
  return undefined;
};

if (dinoLinkElement) {
  dinoLinkElement.addEventListener(
    'message',
    dinoHandleMessage as EventListener,
    false
  );
}
