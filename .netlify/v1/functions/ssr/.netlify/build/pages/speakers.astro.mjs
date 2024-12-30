/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_82cmcneZ.mjs';
import { $ as $$Hero, c as $$Text, d as colors, a as $$Button, g as $$Footer, b as $$Layout } from '../chunks/Footer_C-OU6G65.mjs';
import { $ as $$FeaturedProducts, a as $$Outro } from '../chunks/Outro_CqUgzjd9.mjs';
import { d as data } from '../chunks/dummyData_TpbdRhtl.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Speakers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Speakers", "data-astro-cid-z23rapkk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-z23rapkk": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero flex justify-center items-center" data-astro-cid-z23rapkk> ${renderComponent($$result3, "Text", $$Text, { "type": "h3", "color": colors.white, "data-astro-cid-z23rapkk": true }, { "default": ($$result4) => renderTemplate`SPEAKERS` })} </div> ` })} ${data.filter(({ category }) => category === "speakers").map(async (item) => {
    return renderTemplate`<div class="product-item-row container mt-16 mb-36" data-astro-cid-z23rapkk> <div class="w-full flex flex-col justify-center gap-4" data-astro-cid-z23rapkk> <div class="w-full lg:w-[396px]" data-astro-cid-z23rapkk> ${renderComponent($$result2, "Text", $$Text, { "type": "body", "color": colors.primary, "className": "text-center lg:text-left", "data-astro-cid-z23rapkk": true }, { "default": ($$result3) => renderTemplate`
NEW PRODUCT
` })} </div> <div class="w-full lg:w-[396px]" data-astro-cid-z23rapkk> ${renderComponent($$result2, "Text", $$Text, { "type": "h3", "className": "text-center lg:text-left", "data-astro-cid-z23rapkk": true }, { "default": ($$result3) => renderTemplate`${item.name}` })} </div> <div class="w-full lg:w-4/6" data-astro-cid-z23rapkk> ${renderComponent($$result2, "Text", $$Text, { "type": "body", "className": "text-center lg:text-left", "data-astro-cid-z23rapkk": true }, { "default": ($$result3) => renderTemplate`${item.description}` })} </div> <div class="flex justify-center lg:justify-start" data-astro-cid-z23rapkk> <a${addAttribute(`products/${item.slug}`, "href")} data-astro-cid-z23rapkk> ${renderComponent($$result2, "Button", $$Button, { "type": "primary", "data-astro-cid-z23rapkk": true }, { "default": ($$result3) => renderTemplate`SEE PRODUCT` })} </a> </div> </div> <div data-astro-cid-z23rapkk> <img class="mb-16 lg:mb-0"${addAttribute(item.image.desktop, "src")} alt="best-gear" data-astro-cid-z23rapkk> </div> </div>`;
  })} ${renderComponent($$result2, "FeaturedProducts", $$FeaturedProducts, { "data-astro-cid-z23rapkk": true })}  ${renderComponent($$result2, "Outro", $$Outro, { "data-astro-cid-z23rapkk": true })}  ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-z23rapkk": true })} ` })} `;
}, "/Users/nasked/Projects/ravalsns/src/pages/speakers.astro", void 0);

const $$file = "/Users/nasked/Projects/ravalsns/src/pages/speakers.astro";
const $$url = "/speakers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Speakers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
