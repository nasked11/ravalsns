import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DUc5srSg.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/checkout.astro.mjs');
const _page2 = () => import('./pages/earphones.astro.mjs');
const _page3 = () => import('./pages/headphones.astro.mjs');
const _page4 = () => import('./pages/products/_slug_.astro.mjs');
const _page5 = () => import('./pages/speakers.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.1_jiti@1.21.7_rollup@4.29.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/checkout.astro", _page1],
    ["src/pages/earphones.astro", _page2],
    ["src/pages/headphones.astro", _page3],
    ["src/pages/products/[slug].astro", _page4],
    ["src/pages/speakers.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cebd1a02-dfc9-4ebc-bb84-bbfb2b61b764"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
