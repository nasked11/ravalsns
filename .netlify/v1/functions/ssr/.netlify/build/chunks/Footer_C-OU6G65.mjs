import { c as createComponent, r as renderTemplate, b as addAttribute, h as renderHead, g as renderSlot, e as createAstro, f as defineStyleVars, m as maybeRenderHead, a as renderComponent, F as Fragment, d as renderScript } from './astro/server_82cmcneZ.mjs';
/* empty css                            */
import { $ as $$Image } from './_astro_assets_CEumd433.mjs';
/* empty css                             */

const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- <ViewTransitions /> -->${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/nasked/Projects/ravalsns/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Text;
  const { type, color, className } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${type === "h1" ? renderTemplate`${maybeRenderHead()}<h1${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h1>` : type === "h2" ? renderTemplate`<h2${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h2>` : type === "h3" ? renderTemplate`<h3${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h3>` : type === "h4" ? renderTemplate`<h4${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h4>` : type === "h5" ? renderTemplate`<h5${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h5>` : type === "h6" ? renderTemplate`<h6${addAttribute(`${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</h6>` : type === "overline" ? renderTemplate`<p${addAttribute(`overline ${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</p>` : type === "subTitle" ? renderTemplate`<p${addAttribute(`subTitle ${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`<p${addAttribute(`body ${className}`, "class")} data-astro-cid-dvngs4ld${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</p>`}`;
}, "/Users/nasked/Projects/ravalsns/src/components/atoms/Text.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.CpUtp9eK.svg","width":143,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/logo.svg";
							}
							
							return target[name];
						}
					});

const cartIcon = new Proxy({"src":"/_astro/icon-cart.Byye4yj1.svg","width":23,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/icon-cart.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Modal;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="modal"${addAttribute(id, "id")} data-astro-cid-mpt3clxy> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/molecules/Modal.astro", void 0);

const $$Astro$2 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { type, className, width, onClick, id } = Astro2.props;
  const $$definedVars = defineStyleVars([{ width: width || "10rem" }]);
  return renderTemplate`${type === "primary" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")}${addAttribute(onClick, "onclick")}${addAttribute(`primary ${className}`, "class")} data-astro-cid-3pspvxuc${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</button>` : renderTemplate`<button${addAttribute(id, "id")}${addAttribute(onClick, "onclick")}${addAttribute(`${type} ${className}`, "class")} data-astro-cid-3pspvxuc${addAttribute($$definedVars, "style")}>${renderSlot($$result, $$slots["default"])}</button>` }`;
}, "/Users/nasked/Projects/ravalsns/src/components/atoms/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Input;
  const {
    type,
    placeholder,
    label,
    name,
    id,
    min,
    max,
    value,
    width = "100%"
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ width }]);
  return renderTemplate`${type === "radio" ? renderTemplate`${maybeRenderHead()}<div class="styled-radio" data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}><input${addAttribute(id, "id")} class="radio" type="radio"${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(value, "value")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}><label${addAttribute(id, "for")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}>${label}</label></div>` : type === "text" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-c7ogtspa": true, "style": $$definedVars }, { "default": ($$result2) => renderTemplate`${label && renderTemplate`<label${addAttribute(id, "for")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}>${label}</label>`}<input class="text" type="text"${addAttribute(value, "value")}${addAttribute(name, "name")}${addAttribute(id, "id")}${addAttribute(placeholder, "placeholder")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}>` })}` : type === "counter" ? renderTemplate`<input class="counter" type="number"${addAttribute(value, "value")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(min, "min")}${addAttribute(max, "max")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}>` : type === "counter-sm" ? renderTemplate`<input class="counter-sm" type="number"${addAttribute(value, "value")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(min, "min")}${addAttribute(max, "max")} data-astro-cid-c7ogtspa${addAttribute($$definedVars, "style")}>` : null}`;
}, "/Users/nasked/Projects/ravalsns/src/components/atoms/Input.astro", void 0);

const $$Astro = createAstro();
const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLinks;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`nav-links ${className}`, "class")} data-astro-cid-hujkifid> <a href="/" data-astro-cid-hujkifid>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-hujkifid": true }, { "default": ($$result2) => renderTemplate`Home` })}</a> <a href="/headphones" data-astro-cid-hujkifid>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-hujkifid": true }, { "default": ($$result2) => renderTemplate`Headphones` })}</a> <a href="/speakers" data-astro-cid-hujkifid>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-hujkifid": true }, { "default": ($$result2) => renderTemplate`Speakers` })}</a> <a href="/earphones" data-astro-cid-hujkifid>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-hujkifid": true }, { "default": ($$result2) => renderTemplate`Earphones` })}</a> </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/molecules/NavLinks.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const cartItems = [
    {
      name: "XX59",
      image: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      price: "899"
    },
    {
      name: "XX99 MK II",
      image: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      price: "2,999"
    },
    {
      name: "YX1",
      image: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      price: "599"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="top-nav" data-astro-cid-qmrdf5nj> <a href="/" data-astro-cid-qmrdf5nj>${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo", "data-astro-cid-qmrdf5nj": true })}</a> ${renderComponent($$result, "NavLinks", $$NavLinks, { "className": "hidden lg:flex", "data-astro-cid-qmrdf5nj": true })} ${renderComponent($$result, "Image", $$Image, { "id": "cart-icon", "src": cartIcon, "alt": "logo", "data-astro-cid-qmrdf5nj": true })} </nav> ${renderComponent($$result, "NavLinks", $$NavLinks, { "className": "lg:hidden flex justify-center flex-wrap text-white pt-6 pb-6", "data-astro-cid-qmrdf5nj": true })} ${renderComponent($$result, "Modal", $$Modal, { "id": "cart", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result2) => renderTemplate` <div class="cart-wrapper" data-astro-cid-qmrdf5nj> <div class="flex justify-between items-center mb-6" data-astro-cid-qmrdf5nj> ${renderComponent($$result2, "Text", $$Text, { "type": "h6", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`CART (3)` })} ${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`Remove all` })} </div> ${cartItems.map((item) => renderTemplate`<div class="flex justify-between items-center mt-4 mb-4" data-astro-cid-qmrdf5nj> <div class="flex gap-4 items-center" data-astro-cid-qmrdf5nj> <img class="w-[55px]"${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")}${addAttribute({ borderRadius: "8px" }, "style")} data-astro-cid-qmrdf5nj> <div class="flex flex-col gap-0.5" data-astro-cid-qmrdf5nj> ${renderComponent($$result2, "Text", $$Text, { "type": "subTitle", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`${item.name}` })} ${renderComponent($$result2, "Text", $$Text, { "type": "body", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`$ ${item.price}` })} </div> </div> ${renderComponent($$result2, "Input", $$Input, { "type": "counter-sm", "value": 1, "data-astro-cid-qmrdf5nj": true })} </div>`)} <div class="flex justify-between items-center mt-6 mb-6" data-astro-cid-qmrdf5nj> ${renderComponent($$result2, "Text", $$Text, { "type": "h6", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`TOTAL` })} ${renderComponent($$result2, "Text", $$Text, { "type": "h6", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`$ 5,396` })} </div> <a href="/checkout" data-astro-cid-qmrdf5nj>${renderComponent($$result2, "Button", $$Button, { "width": "100%", "type": "primary", "data-astro-cid-qmrdf5nj": true }, { "default": ($$result3) => renderTemplate`CHECKOUT` })}</a> </div> ` })}  ${renderScript($$result, "/Users/nasked/Projects/ravalsns/src/components/organisms/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/Navbar.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hero-wrapper" data-astro-cid-yfogg3tk> <div class="container" data-astro-cid-yfogg3tk> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-yfogg3tk": true })} ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/Hero.astro", void 0);

const colors = {
  white: "#fff",
  dimWhite: "rgba(255, 255, 255, 0.5)",
  primary: "#d87d4a",
};

const facebook = new Proxy({"src":"/_astro/icon-facebook.C2bazF0K.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/icon-facebook.svg";
							}
							
							return target[name];
						}
					});

const twitter = new Proxy({"src":"/_astro/icon-twitter.RWdaKxOu.svg","width":24,"height":20,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/icon-twitter.svg";
							}
							
							return target[name];
						}
					});

const instagram = new Proxy({"src":"/_astro/icon-instagram.71vOe-dk.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/nasked/Projects/ravalsns/public/assets/shared/desktop/icon-instagram.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-ioeiary4> <nav class="container flex flex-col lg:flex-row items-center lg:justify-between gap-8" data-astro-cid-ioeiary4> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logo", "data-astro-cid-ioeiary4": true })} <div class="flex nav-links gap-8 lg:gap-12 flex-col lg:flex-row items-center lg:items-start mt-4 mb-4 lg:mt-0 lg:mb-0" data-astro-cid-ioeiary4> <a href="/" data-astro-cid-ioeiary4>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`Home` })}</a> <a href="/headphones" data-astro-cid-ioeiary4>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`Headphones` })}</a> <a href="/speakers" data-astro-cid-ioeiary4>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`Speakers` })}</a> <a href="/earphones" data-astro-cid-ioeiary4>${renderComponent($$result, "Text", $$Text, { "type": "subTitle", "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`Earphones` })}</a> </div> </nav> <div class="container flex flex-col lg:flex-row lg:justify-between" data-astro-cid-ioeiary4> <div class="w-full lg:w-[540px] flex flex-col gap-16" data-astro-cid-ioeiary4> ${renderComponent($$result, "Text", $$Text, { "type": "body", "className": "text-center lg:text-left", "color": colors.dimWhite, "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`
Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
` })} ${renderComponent($$result, "Text", $$Text, { "type": "body", "className": "text-center lg:text-left", "color": colors.dimWhite, "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`
Copyright 2021. All Rights Reserved
` })} </div> <div class="w-full flex flex-col items-center lg:items-end gap-6 social-icons justify-center mt-8 lg:mt-0" data-astro-cid-ioeiary4> <div class="flex gap-6" data-astro-cid-ioeiary4> ${renderComponent($$result, "Image", $$Image, { "src": facebook, "alt": "facebook-icon", "data-astro-cid-ioeiary4": true })} ${renderComponent($$result, "Image", $$Image, { "src": twitter, "alt": "twitter-icon", "data-astro-cid-ioeiary4": true })} ${renderComponent($$result, "Image", $$Image, { "src": instagram, "alt": "instagram-icon", "data-astro-cid-ioeiary4": true })} </div> <div data-astro-cid-ioeiary4> ${renderComponent($$result, "Text", $$Text, { "textAlign": "center", "data-astro-cid-ioeiary4": true }, { "default": ($$result2) => renderTemplate`
Built with ❤️ by <a href="https://www.linkedin.com/in/austin-asoluka-415326155/" data-astro-cid-ioeiary4>Austin Asoluka</a> ` })} </div> </div> </div> </footer> `;
}, "/Users/nasked/Projects/ravalsns/src/components/organisms/Footer.astro", void 0);

export { $$Hero as $, $$Button as a, $$Layout as b, $$Text as c, colors as d, $$Input as e, $$Modal as f, $$Footer as g };
