import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n, n as LANGS, r as localText } from "./i18n-Bx8Yl66c.mjs";
import { x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-DYv45p0_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var navItems = [
	{
		to: "/",
		key: "nav.home"
	},
	{
		to: "/circuits",
		key: "nav.circuits"
	},
	{
		to: "/experiences",
		key: "nav.experiences"
	},
	{
		to: "/contact",
		key: "nav.contact"
	}
];
function NavLabel({ item }) {
	const { t, lang } = useI18n();
	if (item.to === "/circuits") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("nav.circuits") });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t(item.key) });
}
function Btn({ to, children, variant = "primary", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: cn("inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300", variant === "primary" && "bg-primary text-primary-foreground hover:bg-secondary", variant === "ghost" && "border border-on-image/60 text-on-image hover:bg-on-image hover:text-ink", variant === "outline" && "border border-foreground/30 text-foreground hover:border-primary hover:text-primary", className),
		children
	});
}
function Header() {
	const { t, lang, setLang } = useI18n();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on);
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "bg-background/95 shadow-soft backdrop-blur" : "bg-gradient-to-b from-ink/50 to-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: cn("font-serif text-2xl leading-none", scrolled || open ? "text-foreground" : "text-on-image"),
					onClick: () => setOpen(false),
					children: ["Voyager ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "text-primary not-italic",
						children: "Autrement"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						activeOptions: { exact: n.to === "/" },
						className: cn("text-sm transition-colors hover:text-primary", scrolled ? "text-foreground/80" : "text-on-image/90"),
						activeProps: { className: "!text-primary" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLabel, { item: n })
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("hidden text-xs font-semibold sm:flex gap-1", scrolled || open ? "text-foreground" : "text-on-image"),
							children: LANGS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex gap-1",
								children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "opacity-40",
									children: "|"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLang(l),
									className: cn("uppercase", lang === l ? "text-primary" : "opacity-70 hover:opacity-100"),
									children: l
								})]
							}, l))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							to: "/devis",
							className: "hidden md:inline-flex px-5 py-2.5",
							children: t("cta.plan")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": localText(lang, {
								fr: "Menu",
								en: "Menu",
								de: "Menü",
								it: "Menu"
							}),
							"aria-expanded": open,
							onClick: () => setOpen(!open),
							className: cn("lg:hidden", scrolled || open ? "text-foreground" : "text-on-image"),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex flex-col gap-1 pb-8 lg:hidden",
			children: [
				navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					activeOptions: { exact: n.to === "/" },
					onClick: () => setOpen(false),
					className: "border-b border-border py-3 font-serif text-2xl",
					activeProps: { className: "!text-primary" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLabel, { item: n })
				}, n.to)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-3 text-sm font-semibold",
					children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setLang(l),
						className: cn("uppercase", lang === l ? "text-primary" : "opacity-60"),
						children: l
					}, l))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						to: "/devis",
						className: "mt-4 w-full",
						children: t("cta.plan")
					})
				})
			]
		})]
	});
}
function MobileCta() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-4 bottom-4 z-40 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
			to: "/devis",
			className: "w-full shadow-soft",
			children: t("cta.plan")
		})
	});
}
function Footer() {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink pb-24 pt-20 text-ivory/80 md:pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-12 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-3xl text-ivory",
					children: ["Voyager ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Autrement"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed",
					children: t("footer.tagline")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow mb-2 text-sand",
							children: t("footer.navigation")
						}),
						navItems.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: "hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLabel, { item: n })
						}, n.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/devis",
							className: "hover:text-primary",
							children: t("footer.quote")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow mb-4 block text-sand",
							children: t("footer.contact")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Auberge restaurant Souktana.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Taliouine par taroudant."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: "contact@voyager-autrement.ch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: "+41 779767613"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mt-16 border-t border-ivory/10 pt-6 text-xs text-ivory/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-5 gap-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Voyager Autrement"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/politique-confidentialite",
						className: "hover:text-ivory",
						children: lang === "de" ? "Datenschutzerklärung" : lang === "it" ? "Privacy" : lang === "en" ? "Privacy policy" : "Politique de confidentialité"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/mentions-legales",
						className: "hover:text-ivory",
						children: lang === "de" ? "Impressum" : lang === "it" ? "Note legali" : lang === "en" ? "Legal notice" : "Mentions légales"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/politique-cookies",
						className: "hover:text-ivory",
						children: lang === "de" ? "Cookie-Richtlinie" : lang === "it" ? "Informativa sui cookie" : lang === "en" ? "Cookie policy" : "Politique des cookies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/conditions-generales",
						className: "hover:text-ivory",
						children: lang === "de" ? "Allgemeine Geschäftsbedingungen" : lang === "it" ? "Condizioni generali" : lang === "en" ? "Terms and conditions" : "Conditions générales"
					})
				]
			})
		})]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("is-visible");
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHead({ eyebrow, title, text, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-2xl", center && "mx-auto text-center"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-4xl leading-[1.05] md:text-6xl",
				children: title
			}),
			text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
				children: text
			})
		]
	});
}
function PageHero({ image, eyebrow, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[70vh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative pb-16 pt-32 text-on-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sand",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl text-5xl leading-[1] md:text-7xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-on-image/85",
						children: text
					})
				]
			})
		]
	});
}
var journeyTranslations = {
	"Marrakech & Atlas": {
		title: "Marrakech & the Atlas",
		place: "Marrakech · High Atlas",
		duration: "7 days",
		text: "Explore the gardens and riads of the Red City, then enjoy the calm of Berber villages at the foot of the mountains."
	},
	"Échappée dans le désert": {
		title: "Desert Escape",
		place: "Merzouga · Sahara",
		duration: "5 days",
		text: "Watch the Erg Chebbi dunes glow at sunset and spend a night beneath the stars in a desert camp."
	},
	"Villes impériales": {
		title: "Imperial Cities",
		place: "Fez · Meknes · Rabat",
		duration: "9 days",
		text: "Explore ancient medinas, artisans and palaces on a journey through Morocco's history."
	},
	"Côte atlantique": {
		title: "Atlantic Coast",
		place: "Essaouira · Agadir",
		duration: "6 days",
		text: "Discover wind-swept ramparts, a blue fishing port and the Atlantic's long beaches."
	},
	"Aventure en famille": {
		title: "Family Adventure",
		place: "Marrakech · Atlas · Desert",
		duration: "8 days",
		text: "A child-friendly pace with encounters, walks and memories to share."
	},
	"Voyage sur mesure": {
		title: "Tailor-made Journey",
		place: "A Morocco that feels like you",
		duration: "Flexible duration",
		text: "Tell us what you dream of and we'll design a unique itinerary together."
	}
};
function JourneyCard({ j, i = 0 }) {
	const { t, lang } = useI18n();
	const translated = lang === "en" ? journeyTranslations[j.title] : void 0;
	const title = translated?.title ?? j.title;
	const place = translated?.place ?? j.place;
	const duration = translated?.duration ?? j.duration;
	const text = translated?.text ?? j.text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: i % 3 * 120,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "group",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "img-zoom relative aspect-[4/5] overflow-hidden rounded-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: j.image,
						alt: title,
						loading: "lazy",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1 text-xs font-semibold",
						children: duration
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-5 text-muted-foreground",
					children: place
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-3xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted-foreground",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/devis",
					className: "mt-4 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-all group-hover:gap-4",
					children: [t("cta.journey"), " →"]
				})
			]
		})
	});
}
var tileTranslations = {
	"Nuits dans le désert": {
		title: "Desert Nights",
		text: "Lanterns, campfires and an endless sky."
	},
	"Gastronomie marocaine": {
		title: "Moroccan Cuisine",
		text: "Tagines, mint tea and cooking classes."
	},
	"Villages berbères": {
		title: "Berber Villages",
		text: "Encounters and hospitality in the Atlas."
	},
	"Riads d’exception": {
		title: "Exceptional Riads",
		text: "Find calm among courtyards and fountains."
	},
	"Souks & médinas": {
		title: "Souks & Medinas",
		text: "Artisans, colours and hidden alleyways."
	},
	"Océan & plages": {
		title: "Ocean & Beaches",
		text: "Wind, waves and grilled fish by the harbour."
	},
	Marrakech: {
		title: "Marrakech",
		text: "Medina, gardens, riads and souks: the energy of the Red City."
	},
	"Merzouga & Sahara": {
		title: "Merzouga & Sahara",
		text: "Golden dunes, silence and starry nights."
	},
	"Haut Atlas": {
		title: "High Atlas",
		text: "Green valleys and traditional earthen villages."
	},
	Essaouira: {
		title: "Essaouira",
		text: "Atlantic charm and historic ramparts."
	},
	Fès: {
		title: "Fez",
		text: "One of the oldest medinas in the Arab world."
	},
	Ouarzazate: {
		title: "Ouarzazate",
		text: "Gateway to the desert, kasbahs and cinematic landscapes."
	},
	Agadir: {
		title: "Agadir",
		text: "Beaches and sunshine throughout the year."
	},
	Chefchaouen: {
		title: "Chefchaouen",
		text: "Blue-painted streets in the heart of the Rif Mountains."
	}
};
function ImageTile({ title, text, image, tall }) {
	const { lang } = useI18n();
	const translated = lang === "en" ? tileTranslations[title] : void 0;
	const displayTitle = translated?.title ?? title;
	const displayText = translated?.text ?? text;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("img-zoom relative overflow-hidden rounded-sm", tall ? "aspect-[3/4]" : "aspect-[4/3]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: displayTitle,
				loading: "lazy",
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-card-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-6 text-on-image",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-3xl",
					children: displayTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-on-image/80",
					children: displayText
				})]
			})
		]
	});
}
function CtaBand({ image }) {
	const { t, lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-32 md:py-44",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "container-x relative text-center text-on-image",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-sand",
						children: localText(lang, {
							fr: "Votre voyage",
							en: "Your journey",
							de: "Ihre Reise",
							it: "Il tuo viaggio"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-4 max-w-3xl text-5xl leading-[1] md:text-7xl",
						children: localText(lang, {
							fr: "Votre histoire marocaine commence ici.",
							en: "Your Moroccan story begins here.",
							de: "Ihre marokkanische Geschichte beginnt hier.",
							it: "La tua storia marocchina inizia qui."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-lg text-on-image/85",
						children: localText(lang, {
							fr: "Dites-nous ce que vous recherchez, et imaginons ensemble votre voyage.",
							en: "Tell us what you're looking for, and let's imagine your journey together.",
							de: "Erzählen Sie uns, wonach Sie suchen, und planen wir Ihre Reise gemeinsam.",
							it: "Raccontaci cosa cerchi e immaginiamo insieme il tuo viaggio."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							to: "/devis",
							children: t("cta.plan")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							to: "/contact",
							variant: "ghost",
							children: t("cta.contact")
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { ImageTile as a, PageHero as c, Header as i, Reveal as l, CtaBand as n, JourneyCard as o, Footer as r, MobileCta as s, Btn as t, SectionHead as u };
