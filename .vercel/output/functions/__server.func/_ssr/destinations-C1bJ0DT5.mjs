import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n, r as localText } from "./i18n-Bx8Yl66c.mjs";
import { a as ImageTile, c as PageHero, l as Reveal, n as CtaBand } from "./site-DYv45p0_.mjs";
import { n as images, t as destinations } from "./content-Da_RfrkU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations-C1bJ0DT5.js
var import_jsx_runtime = require_jsx_runtime();
function DestinationsPage() {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.atlas,
			eyebrow: localText(lang, {
				fr: "Destinations",
				en: "Destinations",
				de: "Reiseziele",
				it: "Destinazioni"
			}),
			title: localText(lang, {
				fr: "Le Maroc, mille lieux à découvrir.",
				en: "Morocco, a thousand places to discover.",
				de: "Marokko – tausend Orte zum Entdecken.",
				it: "Il Marocco, mille luoghi da scoprire."
			}),
			text: localText(lang, {
				fr: "Des médinas animées au silence du désert, découvrez les multiples visages du Maroc.",
				en: "From vibrant medinas to the silence of the desert, discover the many faces of Morocco.",
				de: "Von lebhaften Medinas bis zur Stille der Wüste: Entdecken Sie die vielen Facetten Marokkos.",
				it: "Dalle vivaci medine al silenzio del deserto, scopri i mille volti del Marocco."
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x grid gap-5 py-24 sm:grid-cols-2 lg:grid-cols-3",
			children: destinations.map((destination, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i % 3 * 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageTile, {
					title: destination.name,
					text: destination.text,
					image: destination.image
				})
			}, destination.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: images.essaouira })
	] });
}
//#endregion
export { DestinationsPage as component };
