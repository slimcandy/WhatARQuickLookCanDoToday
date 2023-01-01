const headerForNoAR = document.getElementById(
  'header-for-no-ar',
) as HTMLAnchorElement;
const headerForAR = document.getElementById(
  'header-for-ar',
) as HTMLAnchorElement;

const a: HTMLAnchorElement = document.createElement('a');
if (!a.relList.supports('ar') && headerForNoAR && headerForAR) {
  headerForAR.classList.add('hidden');
  headerForNoAR.classList.remove('hidden');
}
