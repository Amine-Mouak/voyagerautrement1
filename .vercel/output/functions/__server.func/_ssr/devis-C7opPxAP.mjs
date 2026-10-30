import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { n as images } from "./content-Da_RfrkU.mjs";
import { n as QuoteForm } from "./forms-CjUqQJhh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/devis-C7opPxAP.js
var import_jsx_runtime = require_jsx_runtime();
function DevisPage() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid lg:grid-cols-[1fr_1.3fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative hidden min-h-screen lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images.riad,
				alt: lang === "en" ? "Moroccan riad" : "Riad marocain",
				className: "sticky top-0 h-screen w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pb-24 pt-32 md:px-12 lg:px-16 lg:pt-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary",
					children: t("quote.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl leading-[1] md:text-6xl",
					children: t("quote.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-muted-foreground",
					children: t("quote.text")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
				})
			]
		})]
	});
}
//#endregion
export { DevisPage as component };
