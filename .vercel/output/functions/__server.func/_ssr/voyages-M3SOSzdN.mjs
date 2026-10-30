import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n, r as localText } from "./i18n-Bx8Yl66c.mjs";
import { c as PageHero, n as CtaBand, o as JourneyCard } from "./site-DYv45p0_.mjs";
import { n as images, r as journeys } from "./content-Da_RfrkU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voyages-M3SOSzdN.js
var import_jsx_runtime = require_jsx_runtime();
function VoyagesPage() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.marrakech,
			eyebrow: localText(lang, {
				fr: "Nos voyages",
				en: "Our journeys",
				de: "Unsere Reisen",
				it: "I nostri viaggi"
			}),
			title: localText(lang, {
				fr: "Des itinéraires pensés pour vous.",
				en: "Journeys designed around you.",
				de: "Reiserouten ganz nach Ihren Wünschen.",
				it: "Itinerari pensati per te."
			}),
			text: localText(lang, {
				fr: "Inspirez-vous de nos voyages — chacun peut être entièrement adapté à vos envies.",
				en: "Find inspiration in our journeys — each one can be tailored to your preferences.",
				de: "Lassen Sie sich von unseren Reisen inspirieren – jede Route lässt sich an Ihre Wünsche anpassen.",
				it: "Lasciati ispirare dai nostri viaggi: ogni itinerario può essere adattato ai tuoi desideri."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3",
				children: journeys.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyCard, {
					j,
					i
				}, j.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: images.heroSahara })
	] });
}
//#endregion
export { VoyagesPage as component };
