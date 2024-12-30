/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as addAttribute, e as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_82cmcneZ.mjs';
import { $ as $$Hero, a as $$Button, b as $$Layout, d as colors, c as $$Text, e as $$Input, g as $$Footer } from '../../chunks/Footer_C-OU6G65.mjs';
import { $ as $$FeaturedProducts, a as $$Outro } from '../../chunks/Outro_CqUgzjd9.mjs';
import { d as data } from '../../chunks/dummyData_TpbdRhtl.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return data.map((product) => {
    return {
      params: { slug: product.slug },
      props: product
    };
  });
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { name, description, price, features, image, includes, gallery, others } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Earphones", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-o422f4lv": true })} ${maybeRenderHead()}<div class="container back-btn" data-astro-cid-o422f4lv> ${renderComponent($$result2, "Button", $$Button, { "onClick": "history.back()", "color": "rgba(0,0,0,.7)", "data-astro-cid-o422f4lv": true }, { "default": ($$result3) => renderTemplate`Go back` })} </div> ` })} <div class="product-item-row container" data-astro-cid-o422f4lv> <div class="w-full flex flex-col justify-center gap-4" data-astro-cid-o422f4lv> <div class="w-full lg:w-[396px]" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "body", "color": colors.primary, "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`NEW PRODUCT` })} </div> <div class="w-full lg:w-[396px]" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "h3", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${name}` })} </div> <div class="w-full lg:w-4/6" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "body", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${description}` })} </div> <div class="w-full lg:w-4/6 mt-4 mb-4" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "h6", "className": " font-extrabold", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${`$${price}`}` })} </div> <div class="flex gap-4" data-astro-cid-o422f4lv> ${renderComponent($$result, "Input", $$Input, { "type": "counter", "value": 1, "data-astro-cid-o422f4lv": true })} ${renderComponent($$result, "Button", $$Button, { "type": "primary", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`ADD TO CART` })} </div> </div> <div data-astro-cid-o422f4lv> <img class="mb-16 lg:mb-0"${addAttribute(image.desktop, "src")} alt="best-gear" data-astro-cid-o422f4lv> </div> </div> <div class="container features" data-astro-cid-o422f4lv> <div class="w-full flex flex-col justify-center gap-4" data-astro-cid-o422f4lv> <div class="w-full lg:w-[396px]" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "h5", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`FEATURES` })} </div> <div class="w-full lg:w-5/6" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "body", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${features}` })} </div> </div> <div class="w-full flex flex-col justify-center gap-4" data-astro-cid-o422f4lv> <div class="w-full lg:w-[396px]" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "h5", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`IN THE BOX` })} </div> <div class="w-full lg:w-4/6" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "body", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${includes.map((extra) => renderTemplate`<div class="flex gap-4" data-astro-cid-o422f4lv> ${renderComponent($$result2, "Text", $$Text, { "type": "body", "color": colors.primary, "data-astro-cid-o422f4lv": true }, { "default": ($$result3) => renderTemplate`${`${extra.quantity}x`}` })} ${renderComponent($$result2, "Text", $$Text, { "type": "body", "data-astro-cid-o422f4lv": true }, { "default": ($$result3) => renderTemplate`${extra.item}` })} </div>`)}` })} </div> </div> </div> <div class="container gallery" data-astro-cid-o422f4lv> <div${addAttribute({ backgroundImage: `url(${gallery.first.desktop})` }, "style")} data-astro-cid-o422f4lv></div> <div${addAttribute({ backgroundImage: `url(${gallery.second.desktop})` }, "style")} data-astro-cid-o422f4lv></div> <div${addAttribute({ backgroundImage: `url(${gallery.third.desktop})` }, "style")} data-astro-cid-o422f4lv></div> </div> <div class="container flex flex-wrap justify-between md:flex-nowrap gap-4 mt-16 mb-36" data-astro-cid-o422f4lv> ${others.map((item) => renderTemplate`<div class="flex flex-col gap-8 others w-full md:w-1/3 mb-12 md:mb-0" data-astro-cid-o422f4lv> <div class="img-wrapper" data-astro-cid-o422f4lv> <img${addAttribute(item.image.desktop, "src")}${addAttribute(item.slug, "alt")} data-astro-cid-o422f4lv> </div> <div class="flex flex-col gap-8 items-center details" data-astro-cid-o422f4lv> ${renderComponent($$result, "Text", $$Text, { "type": "h5", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`${item.name}` })} <a${addAttribute(`/products/${item.slug}`, "href")} data-astro-cid-o422f4lv> ${renderComponent($$result, "Button", $$Button, { "type": "primary", "data-astro-cid-o422f4lv": true }, { "default": ($$result2) => renderTemplate`SEE PRODUCT` })} </a> </div> </div>`)} </div> <!-- Featured products --> ${renderComponent($$result, "FeaturedProducts", $$FeaturedProducts, { "data-astro-cid-o422f4lv": true })} <!-- Outro section --> ${renderComponent($$result, "Outro", $$Outro, { "data-astro-cid-o422f4lv": true })} <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-o422f4lv": true })} `;
}, "/Users/nasked/Projects/ravalsns/src/pages/products/[slug].astro", void 0);

const $$file = "/Users/nasked/Projects/ravalsns/src/pages/products/[slug].astro";
const $$url = "/products/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
