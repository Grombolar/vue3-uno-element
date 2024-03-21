import { defineConfig, ConfigEnv } from 'vite';
import path from 'path';
import createVitePlugins from './vite';

export default defineConfig(({ command, mode }: ConfigEnv) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    base: '/',
    envDir: "./env",
    plugins: createVitePlugins(command, mode),
    server: {
      port: 8123,
      host: '0.0.0.0',
      open: true,
      historyApiFallback: true,
      fs: {
        strict: false,
      }
    },
    optimizeDeps: {
      include: ['pinia', 'lodash-es', '@vueuse/core'],
    },
    esbuild: {
      charset: 'ascii',
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 4000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/stylesheet/elementPlus/index.scss" as *;`,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  };
});
