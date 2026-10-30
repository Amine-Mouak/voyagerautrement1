import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n, r as localText } from "./i18n-Bx8Yl66c.mjs";
import { t as Btn } from "./site-DYv45p0_.mjs";
import { t as ContactForm } from "./forms-CjUqQJhh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ogrJAJbY.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x grid gap-16 pb-24 pt-36 md:grid-cols-[1fr_1.4fr] md:pt-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-primary",
				children: "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-5xl leading-[1] md:text-7xl",
				children: localText(lang, {
					fr: "Parlons de votre voyage.",
					en: "Let's talk about your trip.",
					de: "Sprechen wir über Ihre Reise.",
					it: "Parliamo del tuo viaggio."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted-foreground",
				children: localText(lang, {
					fr: "Une question, une idée, une envie ? Écrivez-nous, nous vous répondons personnellement.",
					en: "A question, an idea, a travel dream? Write to us and we'll reply personally.",
					de: "Eine Frage, eine Idee oder ein Reisetraum? Schreiben Sie uns – wir antworten persönlich.",
					it: "Una domanda, un’idea o un sogno di viaggio? Scrivici, ti risponderemo personalmente."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-serif text-2xl",
						children: "contact@voyager-autrement.ch"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: localText(lang, {
							fr: "Téléphone",
							en: "Phone",
							de: "Telefon",
							it: "Telefono"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-serif text-2xl",
						children: "+41 779767613"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: localText(lang, {
							fr: "Adresse",
							en: "Address",
							de: "Adresse",
							it: "Indirizzo"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-serif text-2xl",
						children: "\"Auberge restaurant Souktana, Taliouine, province de Taroudant.\""
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				to: "/devis",
				variant: "outline",
				className: "mt-10",
				children: localText(lang, {
					fr: "Demander un devis détaillé",
					en: "Request a detailed quote",
					de: "Detailliertes Angebot anfragen",
					it: "Richiedi un preventivo dettagliato"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-sm bg-card p-6 shadow-soft md:p-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
		})]
	});
}
//#endregion
export { ContactPage as component };
