const roomLinkElement = document.getElementById(
  'room-plan-ar-link',
) as HTMLAnchorElement;

const roomHandleMessage = (event: MessageEvent) => {
  if (event.data === '_apple_ar_quicklook_button_tapped') {
    // Handle the user tap.
    window.location.href =
      'mailto:room-tour@extremely-luxury.apartment?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80&body=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%20%D0%BA%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B.%20%0A%0A%D0%96%D0%9A%20%D0%92%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D0%BD%D0%B0%20%D0%A2%D0%B0%D0%BB%D0%B8%D1%81%D0%BC%D0%B0%D0%BD%D0%B5%0A%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%A1%D0%90%D0%9E%2C%20%D1%80-%D0%BD%20%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%BC.%20%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B2%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%2C%20%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2011';
  }
};

if (roomLinkElement) {
  roomLinkElement.addEventListener(
    'message',
    roomHandleMessage as EventListener,
    false,
  );
}
