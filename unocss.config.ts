import {
  transformerVariantGroup,
  transformerDirectives,
  presetAttributify,
  defineConfig,
  presetMini,
  presetUno,
} from 'unocss';

export default defineConfig({
  presets: [presetMini({ dark: 'class' }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'wh-screen': 'w-screen h-screen',
    'cp-on': 'cursor-pointer outline-none',
    'flex-c': 'flex justify-center items-center',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center',
  },
  theme: {
    colors: {
      text_color_primary: 'var(--el-text-color-primary)',
      text_color_regular: 'var(--el-text-color-regular)',
      text_color_disabled: 'var(--el-text-color-disabled)',
      text_color_danger: 'var(--el-color-danger)',
    },
  },
});
