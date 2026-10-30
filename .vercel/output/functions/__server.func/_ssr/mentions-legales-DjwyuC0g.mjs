import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { t as LegalPage } from "./legal-page-Cb8i5wBK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mentions-legales-DjwyuC0g.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang } = useI18n();
	const english = lang === "en";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: english ? "Legal notice" : "Mentions légales",
		intro: english ? "The operator’s identification details must be verified and completed before publication." : "Les informations d’identification de l’exploitant doivent être vérifiées et complétées avant publication.",
		sections: english ? [{
			title: "Website operator",
			body: "Legal business name: TO BE COMPLETED.\\nLegal form and registration number: TO BE COMPLETED.\\nRegistered address: TO BE COMPLETED.\\nEmail and telephone: TO BE VERIFIED."
		}, {
			title: "Editorial responsibility and hosting",
			body: "Publication manager: TO BE COMPLETED.\\nWebsite host: Vercel (confirm against the production setup); contact details: to be completed."
		}] : [{
			title: "Éditeur du site",
			body: "Nom légal de la société ou de l’exploitant : À COMPLÉTER.\\nForme juridique et numéro d’immatriculation : À COMPLÉTER.\\nAdresse officielle : À COMPLÉTER.\\nE-mail et téléphone : À VÉRIFIER."
		}, {
			title: "Responsabilité éditoriale et hébergement",
			body: "Responsable de publication : À COMPLÉTER.\\nHébergeur du site : Vercel (à confirmer avec la configuration de production), coordonnées : à compléter."
		}]
	});
}
//#endregion
export { Page as component };
