import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { i as tripTypes } from "./content-Da_RfrkU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forms-CjUqQJhh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";
function F({ label, children, full }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: full ? "sm:col-span-2" : "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow mb-2 block text-muted-foreground",
			children: label
		}), children]
	});
}
function useSubmit(msg) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		toast.success(msg);
		e.currentTarget.reset();
	};
	return {
		sent,
		onSubmit
	};
}
function Privacy() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			required: true,
			className: "mt-1 accent-primary"
		}), t("form.privacy")]
	});
}
var tripTypeLabels = {
	Couple: {
		fr: "Couple",
		en: "Couple",
		de: "Paar",
		it: "Coppia"
	},
	Famille: {
		fr: "Famille",
		en: "Family",
		de: "Familie",
		it: "Famiglia"
	},
	Amis: {
		fr: "Amis",
		en: "Friends",
		de: "Freunde",
		it: "Amici"
	},
	"Voyage privé": {
		fr: "Voyage privé",
		en: "Private trip",
		de: "Privatreise",
		it: "Viaggio privato"
	},
	Groupe: {
		fr: "Groupe",
		en: "Group",
		de: "Gruppe",
		it: "Gruppo"
	},
	"Voyage sur mesure": {
		fr: "Voyage sur mesure",
		en: "Tailor-made trip",
		de: "Individuell gestaltete Reise",
		it: "Viaggio su misura"
	}
};
function QuoteForm() {
	const { t, lang } = useI18n();
	const { sent, onSubmit } = useSubmit(t("form.successQuote"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.firstName"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "firstName",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.lastName"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "lastName",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.email"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.phone"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "tel",
					name: "phone",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.country"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "country",
					defaultValue: lang === "fr" ? "Suisse" : lang === "it" ? "Svizzera" : lang === "de" ? "Schweiz" : "Switzerland",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.dates"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "dates",
					placeholder: t("form.datePlaceholder"),
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.travelers"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "number",
					min: 1,
					name: "travelers",
					defaultValue: 2,
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.tripType"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "type",
					className: field,
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: t("form.choose")
					}), tripTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: type,
						children: tripTypeLabels[type]?.[lang] ?? type
					}, type))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.destinations"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: "destinations",
					placeholder: t("form.destinationsPlaceholder"),
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.budget"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "budget",
					className: field,
					defaultValue: "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: t("form.perPerson")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "under-1500",
							children: t("form.budget1")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "1500-3000",
							children: t("form.budget2")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "3000-5000",
							children: t("form.budget3")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "over-5000",
							children: t("form.budget4")
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.message"),
				full: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					rows: 5,
					placeholder: t("form.messagePlaceholder"),
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Privacy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary sm:col-span-2 sm:justify-self-start",
				children: sent ? t("cta.sendAnother") : t("cta.sendRequest")
			})
		]
	});
}
function ContactForm() {
	const { t } = useI18n();
	const { onSubmit } = useSubmit(t("form.successContact"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.fullName"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					name: "fullName",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.email"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					type: "email",
					name: "email",
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(F, {
				label: t("form.message"),
				full: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					required: true,
					name: "message",
					rows: 6,
					placeholder: t("form.messagePlaceholder"),
					className: field
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Privacy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-secondary sm:justify-self-start",
				children: t("cta.send")
			})
		]
	});
}
//#endregion
export { QuoteForm as n, ContactForm as t };
