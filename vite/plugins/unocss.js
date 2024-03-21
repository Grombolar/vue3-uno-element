import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

export default function createUnocss() {
  return Unocss({
    presets: [presetUno(), presetAttributify()],
  });
}
