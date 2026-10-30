import {
  Link,
  Outlet,
  createFileRoute,
  useRouterState,
} from "@tanstack/react-router";
import { Reveal } from "@/components/site";
import { useI18n } from "@/lib/i18n";
import { seo } from "@/lib/seo";

import heroSahara from "@/assets/hero-sahara.jpg";
import sahara from "@/assets/sahara.png";
import jbelMgoun from "@/assets/jbel mgoun.png";
import jbelSaghro from "@/assets/jbel saghro.png";
import jbelSiroua from "@/assets/jbel siroua.png";
import ouedNoun from "@/assets/oued noun.png";
import randonneeCotiere from "@/assets/randonnee-cotiere.png";
import tafraout from "@/assets/tafraout.png";
import tessaout from "@/assets/tessaout.png";
import tiziNTest from "@/assets/tizi n'test.png";
import toubkal from "@/assets/toubkal.png";
import yagouZat from "@/assets/yagou-zat.png";

export const Route = createFileRoute("/circuits")({
  head: () =>
    seo(
      "/circuits",
      "Circuits et randonnées au Maroc — Voyager Autrement",
      "Explorez nos circuits au Maroc : randonnées dans l’Atlas, Jbel Siroua, Jbel Saghro, Toubkal et découverte du Sahara.",
    ),
  component: CircuitsPage,
});

const circuits = [
  {
    slug: "jbel-siroua",
    title: { fr: "Jbel Siroua", en: "Jbel Siroua" },
    place: { fr: "Anti-Atlas", en: "Anti-Atlas Mountains" },
    text: {
      fr: "Découvrez les paysages volcaniques du Siroua, ses reliefs sauvages et l’authenticité des villages de montagne.",
      en: "Discover Siroua's volcanic landscapes, rugged mountains and authentic mountain villages.",
    },
    image: jbelSiroua,
  },
  {
    slug: "sahara",
    title: { fr: "Sahara", en: "The Sahara" },
    place: { fr: "Sud marocain", en: "Southern Morocco" },
    text: {
      fr: "Partez à la découverte des grands espaces désertiques et des paysages fascinants du Sahara marocain.",
      en: "Explore vast desert spaces and the fascinating landscapes of the Moroccan Sahara.",
    },
    image: sahara,
  },
  {
    slug: "jbel-saghro",
    title: { fr: "Jbel Saghro", en: "Jbel Saghro" },
    place: { fr: "Montagnes du Sud", en: "Southern Mountains" },
    text: {
      fr: "Explorez les reliefs rocheux du Saghro et les paysages grandioses du sud marocain.",
      en: "Explore Saghro's rocky terrain and the spectacular landscapes of southern Morocco.",
    },
    image: jbelSaghro,
  },
  {
    slug: "jbel-mgoun",
    title: { fr: "Jbel Mgoun", en: "Jbel Mgoun" },
    place: { fr: "Haut Atlas", en: "High Atlas" },
    text: {
      fr: "Découvrez les montagnes du Haut Atlas, leurs vallées et leurs villages au caractère authentique.",
      en: "Discover the High Atlas Mountains, their valleys and their traditional villages.",
    },
    image: jbelMgoun,
  },
  {
    slug: "tizi-n-test",
    title: { fr: "Tizi N’Test", en: "Tizi N'Test" },
    place: { fr: "Haut Atlas", en: "High Atlas" },
    text: {
      fr: "Parcourez une région montagneuse aux paysages variés, entre cols, vallées et villages traditionnels.",
      en: "Explore a varied mountain region of high passes, valleys and traditional villages.",
    },
    image: tiziNTest,
  },
  {
    slug: "randonnee-cotiere",
    title: { fr: "Randonnée côtière", en: "Coastal Hiking" },
    place: { fr: "Littoral marocain", en: "Moroccan Coast" },
    text: {
      fr: "Découvrez les sentiers du littoral, les paysages marins et le charme de la côte marocaine.",
      en: "Discover coastal trails, seascapes and the charm of Morocco's Atlantic coastline.",
    },
    image: randonneeCotiere,
  },
  {
    slug: "tafraoute",
    title: { fr: "Tafraoute", en: "Tafraoute" },
    place: { fr: "Anti-Atlas", en: "Anti-Atlas Mountains" },
    text: {
      fr: "Laissez-vous séduire par les paysages minéraux, les villages et les couleurs de la région de Tafraoute.",
      en: "Discover the rocky landscapes, traditional villages and striking colours of the Tafraoute region.",
    },
    image: tafraout,
  },
  {
    slug: "toubkal",
    title: { fr: "Toubkal", en: "Toubkal" },
    place: { fr: "Haut Atlas", en: "High Atlas" },
    text: {
      fr: "Partez à la rencontre des paysages de haute montagne et des villages nichés au pied du massif du Toubkal.",
      en: "Explore high-mountain landscapes and villages nestled at the foot of the Toubkal massif.",
    },
    image: toubkal,
  },
  {
    slug: "yagour-zat",
    title: { fr: "Yagour & Zat", en: "Yagour & Zat" },
    place: { fr: "Haut Atlas central", en: "Central High Atlas" },
    text: {
      fr: "Explorez les plateaux d’altitude, les vallées et le patrimoine rural de cette région de l’Atlas.",
      en: "Explore high-altitude plateaus, valleys and the rural heritage of this Atlas region.",
    },
    image: yagouZat,
  },
  {
    slug: "tessaout-ait-bouli",
    title: { fr: "Tessaout & Aït Bouli", en: "Tessaout & Aït Bouli" },
    place: { fr: "Haut Atlas", en: "High Atlas" },
    text: {
      fr: "Découvrez les vallées de l’Atlas, leurs paysages préservés et l’architecture traditionnelle des villages.",
      en: "Discover the Atlas valleys, their unspoilt landscapes and the traditional architecture of their villages.",
    },
    image: tessaout,
  },
  {
    slug: "oued-noun",
    title: { fr: "Oued Noun", en: "Oued Noun" },
    place: { fr: "Sud marocain", en: "Southern Morocco" },
    text: {
      fr: "Explorez les paysages du sud du Maroc, entre espaces ouverts, nature et patrimoine local.",
      en: "Explore southern Morocco's wide-open landscapes, natural beauty and local heritage.",
    },
    image: ouedNoun,
  },
];

function CircuitsPage() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { lang } = useI18n();
  const isEnglish = lang === "en";

  if (pathname.startsWith("/circuits/")) {
    return <Outlet />;
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <img
          src={heroSahara}
          alt={isEnglish ? "The Sahara desert in Morocco" : ""}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="container-x relative pb-16 pt-32 text-on-image md:pb-20">
          <p className="eyebrow text-sand">
            {isEnglish ? "Travel " : "Voyager "}
            <span className="text-primary">Autrement</span>
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1] md:text-7xl">
            {isEnglish ? "Our tours in Morocco" : "Nos circuits au Maroc"}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-image/85">
            {isEnglish
              ? "From the Atlas Mountains to the vast Sahara, discover our destinations and let's plan your next adventure together."
              : "Des montagnes de l’Atlas aux étendues du Sahara, découvrez nos destinations et imaginons ensemble votre prochaine aventure."}
          </p>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-primary">
              {isEnglish ? "Explore Morocco" : "Explorez le Maroc"}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              {isEnglish
                ? "Find your next adventure"
                : "Trouvez votre prochaine aventure"}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {isEnglish
                ? "From Atlas peaks to desert landscapes, choose the experience that inspires you and let's plan your journey together."
                : "Des sommets de l’Atlas aux paysages du désert, choisissez l’univers qui vous attire et préparons votre voyage ensemble."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {circuits.map((circuit, index) => (
            <Reveal key={circuit.slug} delay={(index % 3) * 120}>
              <article className="group">
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={circuit.image}
                    alt={circuit.title[isEnglish ? "en" : "fr"]}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <p className="eyebrow mt-5 text-muted-foreground">
                  {circuit.place[isEnglish ? "en" : "fr"]}
                </p>

                <h3 className="mt-2 font-serif text-3xl">
                  {circuit.title[isEnglish ? "en" : "fr"]}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {circuit.text[isEnglish ? "en" : "fr"]}
                </p>

                <Link
                  to="/circuits/$slug"
                  params={{ slug: circuit.slug }}
                  className="mt-5 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-4"
                >
                  {isEnglish ? "Discover this tour" : "Découvrir le circuit"}{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src={heroSahara}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-ink/65" />

        <Reveal className="container-x relative text-center text-on-image">
          <p className="eyebrow text-sand">
            {isEnglish ? "Your journey" : "Votre voyage"}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            {isEnglish
              ? "Your Moroccan story starts here."
              : "Votre histoire marocaine commence ici."}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-on-image/85 md:text-lg">
            {isEnglish
              ? "Tell us what inspires you, and let's create an adventure that reflects who you are."
              : "Parlez-nous de vos envies et imaginons ensemble une aventure qui vous ressemble."}
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:bg-secondary"
            >
              {isEnglish ? "Request a quote" : "Demander un devis"}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
