/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_82cmcneZ.mjs';
import { d as colors, c as $$Text, a as $$Button, $ as $$Hero, g as $$Footer, b as $$Layout } from '../chunks/Footer_C-OU6G65.mjs';
import { s as speaker, $ as $$FeaturedProducts, a as $$Outro } from '../chunks/Outro_CqUgzjd9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CEumd433.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$ProductSpotlight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-zg2egusm> <div class="product-spotlight-area" data-astro-cid-zg2egusm> <div class="product-spotlight-1" data-astro-cid-zg2egusm> <div class="flex justify-center" data-astro-cid-zg2egusm> ${renderComponent($$result, "Image", $$Image, { "class": "product-spotlight-1-img", "src": speaker, "alt": "headphone", "data-astro-cid-zg2egusm": true })} </div> <div class="flex flex-col gap-4 items-center lg:items-start" data-astro-cid-zg2egusm> <div class="w-[396px]" data-astro-cid-zg2egusm> ${renderComponent($$result, "Text", $$Text, { "className": "text-center lg:text-left", "type": "h1", "color": colors.white, "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`
ZX9 SPEAKER
` })} </div> <div class="w-[349px]" data-astro-cid-zg2egusm> ${renderComponent($$result, "Text", $$Text, { "className": "text-center lg:text-left", "type": "body", "color": colors.white, "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`
Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
` })} </div> <a href="/products/zx9-speaker" data-astro-cid-zg2egusm>${renderComponent($$result, "Button", $$Button, { "className": "mt-8", "type": "secondary-inverted", "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`
SEE PRODUCT
` })}</a> </div> </div> <div class="product-spotlight-2" data-astro-cid-zg2egusm> <div class="flex flex-col" data-astro-cid-zg2egusm> ${renderComponent($$result, "Text", $$Text, { "type": "h3", "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`ZX7 SPEAKER` })} <a href="/products/zx7-speaker" data-astro-cid-zg2egusm>${renderComponent($$result, "Button", $$Button, { "className": "mt-7", "type": "secondary-inverted", "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`
SEE PRODUCT
` })}</a> </div> </div> <div class="product-spotlight-3" data-astro-cid-zg2egusm> <div class="earphone-image" data-astro-cid-zg2egusm></div> <div class="flex flex-col" data-astro-cid-zg2egusm> ${renderComponent($$result, "Text", $$Text, { "type": "h3", "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`YX1 EARPHONES` })} <a href="/earphones" data-astro-cid-zg2egusm>${renderComponent($$result, "Button", $$Button, { "className": "mt-7", "type": "secondary", "data-astro-cid-zg2egusm": true }, { "default": ($$result2) => renderTemplate`SEE PRODUCT` })}</a> </div> </div> </div> </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/ProductSpotlight.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero flex justify-center lg:justify-start pt-36" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center lg:items-start gap-4" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Text", $$Text, { "type": "body", "color": colors.dimWhite, "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`NEW PRODUCT` })} <div class="w-[396px]" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Text", $$Text, { "className": "text-center lg:text-left", "type": "h1", "color": colors.white, "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
XX99 Mark II Headphones
` })} </div> <div class="w-[349px]" data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Text", $$Text, { "className": "text-center lg:text-left", "type": "body", "color": colors.white, "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
` })} </div> <a href="/products/xx99-mark-two-headphones" data-astro-cid-j7pv25f6>${renderComponent($$result3, "Button", $$Button, { "className": "mt-8", "type": "primary", "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`SEE PRODUCT` })}</a> </div> </div> ` })}  ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "ProductSpotlight", $$ProductSpotlight, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "Outro", $$Outro, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/nasked/Projects/ravalsns/src/pages/index.astro", void 0);

const $$file = "/Users/nasked/Projects/ravalsns/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
