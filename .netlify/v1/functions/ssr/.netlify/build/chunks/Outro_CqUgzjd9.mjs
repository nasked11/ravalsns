import { c as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, g as renderSlot, e as createAstro } from './astro/server_82cmcneZ.mjs';
import { c as $$Text, a as $$Button } from './Footer_C-OU6G65.mjs';
import { $ as $$Image } from './_astro_assets_CEumd433.mjs';
/* empty css                             */

const headphone = new Proxy({"src":"/_astro/headphone.D_LC_Pig.png","width":438,"height":570,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/exported/headphone.png";
							}
							
							return target[name];
						}
					});

const earphone = new Proxy({"src":"/_astro/earphone.BR4M9XjP.png","width":324,"height":295,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/exported/earphone.png";
							}
							
							return target[name];
						}
					});

const speaker = new Proxy({"src":"/_astro/speaker.-azY0YWK.png","width":456,"height":548,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/exported/speaker.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$FeaturedProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturedProductCard;
  const {
    image,
    imageAlt,
    title,
    width = "122.947px",
    height = "160px"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ width, height }]);
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-retkhc4t${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Image", $$Image, { "class": "item-image", "src": image, "alt": imageAlt, "data-astro-cid-retkhc4t": true })} ${renderComponent($$result, "Text", $$Text, { "type": "h4", "data-astro-cid-retkhc4t": true }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/molecules/FeaturedProductCard.astro", void 0);

const $$FeaturedProducts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container flex flex-wrap justify-center xl:justify-between gap-8 featured-products-section" data-astro-cid-k5cmaaar> ${renderComponent($$result, "FeaturedProductCard", $$FeaturedProductCard, { "image": headphone, "imageAlt": "headphone", "title": "HEADPHONES", "data-astro-cid-k5cmaaar": true }, { "default": ($$result2) => renderTemplate` <a href="/headphones" data-astro-cid-k5cmaaar>${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-k5cmaaar": true }, { "default": ($$result3) => renderTemplate`Shop` })}</a> ` })} ${renderComponent($$result, "FeaturedProductCard", $$FeaturedProductCard, { "image": speaker, "imageAlt": "speakers", "title": "SPEAKERS", "data-astro-cid-k5cmaaar": true }, { "default": ($$result2) => renderTemplate` <a href="/speakers" data-astro-cid-k5cmaaar>${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-k5cmaaar": true }, { "default": ($$result3) => renderTemplate`Shop` })}</a> ` })} ${renderComponent($$result, "FeaturedProductCard", $$FeaturedProductCard, { "width": "160px", "image": earphone, "imageAlt": "earphone", "title": "EARPHONES", "data-astro-cid-k5cmaaar": true }, { "default": ($$result2) => renderTemplate` <a href="/earphones" data-astro-cid-k5cmaaar>${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-k5cmaaar": true }, { "default": ($$result3) => renderTemplate`Shop` })}</a> ` })} </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/FeaturedProducts.astro", void 0);

const outroImg = new Proxy({"src":"/_astro/image-best-gear.VgYs-enj.jpg","width":540,"height":588,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/image-best-gear.jpg";
							}
							
							return target[name];
						}
					});

const $$Outro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container flex flex-col-reverse lg:flex-row items-center lg:items-left justify-between outro" data-astro-cid-frrg4prw> <div class="w-full flex flex-col justify-center gap-4" data-astro-cid-frrg4prw> <div class="w-full lg:w-[396px]" data-astro-cid-frrg4prw> ${renderComponent($$result, "Text", $$Text, { "type": "h3", "className": "text-center lg:text-left", "data-astro-cid-frrg4prw": true }, { "default": ($$result2) => renderTemplate`
BRINGING YOU THE BEST AUDIO GEAR
` })} </div> <div class="w-full lg:w-4/6" data-astro-cid-frrg4prw> ${renderComponent($$result, "Text", $$Text, { "type": "body", "className": "text-center lg:text-left", "data-astro-cid-frrg4prw": true }, { "default": ($$result2) => renderTemplate`
Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
` })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "class": "mb-16 lg:mb-0", "src": outroImg, "alt": "best-gear", "data-astro-cid-frrg4prw": true })} </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/Outro.astro", void 0);

export { $$FeaturedProducts as $, $$Outro as a, speaker as s };
