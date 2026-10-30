import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { _ as Outlet, m as useRouterState, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Reveal } from "./site-DYv45p0_.mjs";
import { t as hero_sahara_default } from "./hero-sahara-C6xVhpwy.mjs";
import { a as randonnee_cotiere_default, c as tessaout_default, d as yagou_zat_default, i as oued_noun_default, l as tizi_n_test_default, n as jbel_saghro_default, o as sahara_default, r as jbel_siroua_default, s as tafraout_default, t as jbel_mgoun_default, u as toubkal_default } from "./yagou-zat-i0zFvNoZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/circuits-Bsd7o0VV.js
var import_jsx_runtime = require_jsx_runtime();
var circuits = [
	{
		slug: "jbel-siroua",
		title: {
			fr: "Jbel Siroua",
			en: "Jbel Siroua"
		},
		place: {
			fr: "Anti-Atlas",
			en: "Anti-Atlas Mountains"
		},
		text: {
			fr: "Découvrez les paysages volcaniques du Siroua, ses reliefs sauvages et l’authenticité des villages de montagne.",
			en: "Discover Siroua's volcanic landscapes, rugged mountains and authentic mountain villages."
		},
		image: jbel_siroua_default
	},
	{
		slug: "sahara",
		title: {
			fr: "Sahara",
			en: "The Sahara"
		},
		place: {
			fr: "Sud marocain",
			en: "Southern Morocco"
		},
		text: {
			fr: "Partez à la découverte des grands espaces désertiques et des paysages fascinants du Sahara marocain.",
			en: "Explore vast desert spaces and the fascinating landscapes of the Moroccan Sahara."
		},
		image: sahara_default
	},
	{
		slug: "jbel-saghro",
		title: {
			fr: "Jbel Saghro",
			en: "Jbel Saghro"
		},
		place: {
			fr: "Montagnes du Sud",
			en: "Southern Mountains"
		},
		text: {
			fr: "Explorez les reliefs rocheux du Saghro et les paysages grandioses du sud marocain.",
			en: "Explore Saghro's rocky terrain and the spectacular landscapes of southern Morocco."
		},
		image: jbel_saghro_default
	},
	{
		slug: "jbel-mgoun",
		title: {
			fr: "Jbel Mgoun",
			en: "Jbel Mgoun"
		},
		place: {
			fr: "Haut Atlas",
			en: "High Atlas"
		},
		text: {
			fr: "Découvrez les montagnes du Haut Atlas, leurs vallées et leurs villages au caractère authentique.",
			en: "Discover the High Atlas Mountains, their valleys and their traditional villages."
		},
		image: jbel_mgoun_default
	},
	{
		slug: "tizi-n-test",
		title: {
			fr: "Tizi N’Test",
			en: "Tizi N'Test"
		},
		place: {
			fr: "Haut Atlas",
			en: "High Atlas"
		},
		text: {
			fr: "Parcourez une région montagneuse aux paysages variés, entre cols, vallées et villages traditionnels.",
			en: "Explore a varied mountain region of high passes, valleys and traditional villages."
		},
		image: tizi_n_test_default
	},
	{
		slug: "randonnee-cotiere",
		title: {
			fr: "Randonnée côtière",
			en: "Coastal Hiking"
		},
		place: {
			fr: "Littoral marocain",
			en: "Moroccan Coast"
		},
		text: {
			fr: "Découvrez les sentiers du littoral, les paysages marins et le charme de la côte marocaine.",
			en: "Discover coastal trails, seascapes and the charm of Morocco's Atlantic coastline."
		},
		image: randonnee_cotiere_default
	},
	{
		slug: "tafraoute",
		title: {
			fr: "Tafraoute",
			en: "Tafraoute"
		},
		place: {
			fr: "Anti-Atlas",
			en: "Anti-Atlas Mountains"
		},
		text: {
			fr: "Laissez-vous séduire par les paysages minéraux, les villages et les couleurs de la région de Tafraoute.",
			en: "Discover the rocky landscapes, traditional villages and striking colours of the Tafraoute region."
		},
		image: tafraout_default
	},
	{
		slug: "toubkal",
		title: {
			fr: "Toubkal",
			en: "Toubkal"
		},
		place: {
			fr: "Haut Atlas",
			en: "High Atlas"
		},
		text: {
			fr: "Partez à la rencontre des paysages de haute montagne et des villages nichés au pied du massif du Toubkal.",
			en: "Explore high-mountain landscapes and villages nestled at the foot of the Toubkal massif."
		},
		image: toubkal_default
	},
	{
		slug: "yagour-zat",
		title: {
			fr: "Yagour & Zat",
			en: "Yagour & Zat"
		},
		place: {
			fr: "Haut Atlas central",
			en: "Central High Atlas"
		},
		text: {
			fr: "Explorez les plateaux d’altitude, les vallées et le patrimoine rural de cette région de l’Atlas.",
			en: "Explore high-altitude plateaus, valleys and the rural heritage of this Atlas region."
		},
		image: yagou_zat_default
	},
	{
		slug: "tessaout-ait-bouli",
		title: {
			fr: "Tessaout & Aït Bouli",
			en: "Tessaout & Aït Bouli"
		},
		place: {
			fr: "Haut Atlas",
			en: "High Atlas"
		},
		text: {
			fr: "Découvrez les vallées de l’Atlas, leurs paysages préservés et l’architecture traditionnelle des villages.",
			en: "Discover the Atlas valleys, their unspoilt landscapes and the traditional architecture of their villages."
		},
		image: tessaout_default
	},
	{
		slug: "oued-noun",
		title: {
			fr: "Oued Noun",
			en: "Oued Noun"
		},
		place: {
			fr: "Sud marocain",
			en: "Southern Morocco"
		},
		text: {
			fr: "Explorez les paysages du sud du Maroc, entre espaces ouverts, nature et patrimoine local.",
			en: "Explore southern Morocco's wide-open landscapes, natural beauty and local heritage."
		},
		image: oued_noun_default
	}
];
function CircuitsPage() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const { lang } = useI18n();
	const isEnglish = lang === "en";
	if (pathname.startsWith("/circuits/")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[70vh] items-end overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_sahara_default,
						alt: isEnglish ? "The Sahara desert in Morocco" : "",
						"aria-hidden": "true",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-x relative pb-16 pt-32 text-on-image md:pb-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-sand",
								children: [isEnglish ? "Travel " : "Voyager ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Autrement"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl",
								children: isEnglish ? "Our tours in Morocco" : "Nos circuits au Maroc"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg leading-relaxed text-on-image/85",
								children: isEnglish ? "From the Atlas Mountains to the vast Sahara, discover our destinations and let's plan your next adventure together." : "Des montagnes de l’Atlas aux étendues du Sahara, découvrez nos destinations et imaginons ensemble votre prochaine aventure."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-x py-20 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary",
							children: isEnglish ? "Explore Morocco" : "Explorez le Maroc"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-4xl leading-tight md:text-5xl",
							children: isEnglish ? "Find your next adventure" : "Trouvez votre prochaine aventure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
							children: isEnglish ? "From Atlas peaks to desert landscapes, choose the experience that inspires you and let's plan your journey together." : "Des sommets de l’Atlas aux paysages du désert, choisissez l’univers qui vous attire et préparons votre voyage ensemble."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
					children: circuits.map((circuit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index % 3 * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "img-zoom relative aspect-[4/5] overflow-hidden rounded-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: circuit.image,
										alt: circuit.title[isEnglish ? "en" : "fr"],
										loading: index < 3 ? "eager" : "lazy",
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-5 text-muted-foreground",
									children: circuit.place[isEnglish ? "en" : "fr"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-serif text-3xl",
									children: circuit.title[isEnglish ? "en" : "fr"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: circuit.text[isEnglish ? "en" : "fr"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/circuits/$slug",
									params: { slug: circuit.slug },
									className: "mt-5 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-4",
									children: [
										isEnglish ? "Discover this tour" : "Découvrir le circuit",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "→"
										})
									]
								})
							]
						})
					}, circuit.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden py-24 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_sahara_default,
						alt: "",
						"aria-hidden": "true",
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/65" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "container-x relative text-center text-on-image",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-sand",
								children: isEnglish ? "Your journey" : "Votre voyage"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl",
								children: isEnglish ? "Your Moroccan story starts here." : "Votre histoire marocaine commence ici."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-image/85 md:text-lg",
								children: isEnglish ? "Tell us what inspires you, and let's create an adventure that reflects who you are." : "Parlez-nous de vos envies et imaginons ensemble une aventure qui vous ressemble."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-9 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/devis",
									className: "inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:bg-secondary",
									children: isEnglish ? "Request a quote" : "Demander un devis"
								})
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { CircuitsPage as component };
