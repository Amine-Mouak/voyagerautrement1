import { v as lazyRouteComponent, y as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/circuits._slug-BaY5_sQ8.js
var configuredSiteUrl = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_SITE_URL"]?.trim();
var SITE_URL = configuredSiteUrl ? configuredSiteUrl.replace(/\/$/, "") : "";
function seo(path, title, description) {
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	const absoluteUrl = SITE_URL ? `${SITE_URL}${normalizedPath}` : void 0;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Voyager Autrement"
			},
			{
				property: "og:locale",
				content: "fr_CH"
			},
			...absoluteUrl ? [{
				property: "og:url",
				content: absoluteUrl
			}] : [],
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			}
		],
		...absoluteUrl ? { links: [{
			rel: "canonical",
			href: absoluteUrl
		}] } : {}
	};
}
var $$splitComponentImporter = () => import("./circuits._slug-zb9Wus0f.mjs");
var Route = createFileRoute("/circuits/$slug")({
	head: ({ params }) => {
		const name = params.slug.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
		return seo(`/circuits/${params.slug}`, `${name} — Circuit et randonnée au Maroc | Voyager Autrement`, `Découvrez notre circuit ${name} au Maroc : paysages, étapes et informations pour préparer votre voyage avec Voyager Autrement.`);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { seo as n, Route as t };
