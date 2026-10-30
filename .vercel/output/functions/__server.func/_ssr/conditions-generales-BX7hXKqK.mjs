import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useI18n } from "./i18n-Bx8Yl66c.mjs";
import { t as LegalPage } from "./legal-page-Cb8i5wBK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/conditions-generales-BX7hXKqK.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang } = useI18n();
	const english = lang === "en";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegalPage, {
		title: english ? "Terms and conditions" : "Conditions générales",
		intro: english ? "Booking and sales terms must accurately reflect the organiser’s practices. This is a draft framework to complete and review before accepting bookings." : "Les conditions de réservation et de vente doivent refléter exactement les pratiques de l’organisateur. Ce document est une trame à compléter et à faire vérifier avant toute réservation.",
		sections: english ? [
			{
				title: "Booking and payment",
				body: "To complete: booking steps, confirmation, deposit, payment deadlines, payment methods, currency and documents supplied to travellers."
			},
			{
				title: "Changes and cancellations",
				body: "To complete: changes, cancellation by the traveller or organiser, applicable fees, refunds and exceptional circumstances."
			},
			{
				title: "Services and responsibilities",
				body: "To complete: included and excluded services, role of guides and local providers, physical requirements, insurance, safety, complaints and applicable law."
			}
		] : [
			{
				title: "Réservation et paiement",
				body: "À compléter : étapes de réservation, confirmation, acompte, échéances, moyens de paiement, devise et documents remis au voyageur."
			},
			{
				title: "Modification et annulation",
				body: "À compléter : conditions de modification, annulation par le voyageur ou l’organisateur, frais éventuels, remboursements et conséquences des événements exceptionnels."
			},
			{
				title: "Prestations et responsabilités",
				body: "À compléter : prestations incluses et exclues, rôle des guides et prestataires locaux, exigences physiques, assurances, sécurité, réclamations et droit applicable."
			}
		]
	});
}
//#endregion
export { Page as component };
