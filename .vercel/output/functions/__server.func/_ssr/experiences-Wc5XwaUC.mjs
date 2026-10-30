import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n, r as localText } from "./i18n-Bx8Yl66c.mjs";
import { c as PageHero, l as Reveal, n as CtaBand } from "./site-DYv45p0_.mjs";
import { n as images } from "./content-Da_RfrkU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experiences-Wc5XwaUC.js
var import_jsx_runtime = require_jsx_runtime();
function ExperiencesPage() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.desertCamp,
			eyebrow: localText(lang, {
				fr: "Expériences",
				en: "Experiences",
				de: "Erlebnisse",
				it: "Esperienze"
			}),
			title: localText(lang, {
				fr: "Instants de voyage, souvenirs du désert.",
				en: "Travel moments, desert memories.",
				de: "Reisemomente und Erinnerungen an die Wüste.",
				it: "Momenti di viaggio, ricordi del deserto."
			}),
			text: localText(lang, {
				fr: "Quelques instants capturés au fil d’un voyage dans le désert marocain. Des paysages, des rencontres et des souvenirs qui racontent la beauté du voyage, sans avoir besoin de mots.",
				en: "A collection of moments captured during a journey through the Moroccan desert. Landscapes, encounters and memories that speak for themselves.",
				de: "Eine Sammlung besonderer Augenblicke einer Reise durch die marokkanische Wüste. Landschaften, Begegnungen und Erinnerungen, die für sich selbst sprechen.",
				it: "Una raccolta di momenti vissuti durante un viaggio nel deserto marocchino. Paesaggi, incontri e ricordi che parlano da soli."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			"aria-label": localText(lang, {
				fr: "Galerie de souvenirs de voyage",
				en: "Travel photo memories",
				de: "Reisefotogalerie",
				it: "Galleria di ricordi di viaggio"
			}),
			className: "container-x grid gap-5 py-24 sm:grid-cols-2 lg:grid-cols-3",
			children: Array.from({ length: 11 }, (_, index) => {
				const number = index + 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "img-zoom relative aspect-[3/4] overflow-hidden rounded-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `/${number}.jpg`,
							alt: localText(lang, {
								fr: `Souvenir de voyage dans le désert marocain, photo ${number}`,
								en: `Travel memory in the Moroccan desert, photograph ${number}`,
								de: `Reiseerinnerung aus der marokkanischen Wüste, Foto ${number}`,
								it: `Ricordo di viaggio nel deserto marocchino, foto ${number}`
							}),
							loading: "lazy",
							decoding: "async",
							className: "h-full w-full object-cover"
						})
					})
				}, number);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: images.gastronomy })
	] });
}
//#endregion
export { ExperiencesPage as component };
