import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-page-Cb8i5wBK.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, intro, sections }) {
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container-x min-h-[65vh] py-32 md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-primary",
				children: "Voyager Autrement"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-4xl text-5xl leading-tight md:text-7xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground",
				children: intro
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 max-w-4xl space-y-10",
				children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: section.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 whitespace-pre-line leading-relaxed text-muted-foreground",
					children: section.body
				})] }, section.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-14 border-t border-border pt-6 text-sm text-muted-foreground",
				children: [lang === "en" ? "Questions? " : "Une question ? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "text-primary underline underline-offset-4",
					children: lang === "en" ? "Contact us" : "Contactez-nous"
				})]
			})
		]
	});
}
//#endregion
export { LegalPage as t };
