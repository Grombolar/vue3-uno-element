import { viteMockServe } from 'vite-plugin-mock';

export default function createMock(mode) {
  console.log(mode);
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: mode === 'mock',
  });
}
