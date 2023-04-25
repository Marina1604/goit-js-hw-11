import { gallery } from '../index';

export function scroll() {
  if (!gallery.firstElementChild) {
    return;
  } else {
    const { height: cardHeight } =
      gallery.firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

