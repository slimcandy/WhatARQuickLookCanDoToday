// Halloween masks offical website.
const halloweenLinkElement = document.getElementById(
  'halloween-link'
) as HTMLAnchorElement;

const halloweenHandleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href = 'https://www.thehorrordome.com/pages/about-us';
  }
  return undefined;
};

if (halloweenLinkElement) {
  halloweenLinkElement.addEventListener(
    'message',
    halloweenHandleMessage as EventListener,
    false
  );
}
