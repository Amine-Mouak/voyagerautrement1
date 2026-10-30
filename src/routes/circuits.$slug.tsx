
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Compass,
  MapPin,
  Mountain,
  Users,
  Footprints,
  Backpack,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

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

type Circuit = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  duration: string;
  walking: string;
  period: string;
  level: string;
  dailyWalking: string;
  transport: string;
  supervision: string;
  arrival: string;
  description: string;
  highlights: string[];
  extra?: string;
  family?: boolean;
  themeLink?: string;
};

const circuits: Circuit[] = [
  {
    slug: "jbel-siroua",
    title: "Jbel Siroua, randonnée au pays du safran",
    tagline: "Dans notre jardin secret, vous êtes accueillis comme à la maison",
    image: jbelSiroua,
    duration: "9 jours",
    walking: "5 jours et demi de marche",
    period: "Printemps et automne",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech, Agadir ou Ouarzazate",
    description:
      "Au départ de Taliouine, partez à la découverte du Siroua, un massif volcanique vivant et coloré, ponctué de villages berbères et de terrasses cultivées. Depuis ses hauteurs, le sommet du Siroua, à 3 305 m, ouvre le regard du Haut Atlas jusqu'aux portes du Sahara. Le voyage mêle paysages minéraux, patrimoine, rencontres et traditions rurales. Au printemps, les amandiers en fleurs illuminent les vallées ; en octobre, les familles récoltent le safran, véritable or rouge de la région, célébré lors du festival de Taliouine vers la fin du mois.",
    highlights: [
      "Découvrir les paysages volcaniques et les villages du Siroua",
      "Profiter de panoramas entre Haut Atlas et Sahara",
      "Rencontrer les producteurs et découvrir le safran local",
      "Marcher au printemps parmi les amandiers en fleurs",
      "Atteindre les hauteurs du Siroua à 3 305 m",
    ],
    extra:
      "Les dates, la durée et l'itinéraire peuvent être adaptés à votre projet. Une randonnée thématique consacrée au safran peut également être organisée.",
    family: true,
    themeLink:
      "http://www.zafrani.ch/index.php/voyages-a-theme/le-safran-du-siroua",
  },
  {
    slug: "sahara",
    title: "Sahara, une immersion douce",
    tagline: "Dans le vaste univers de notre dromadaire Zafrani",
    image: sahara,
    duration: "9 à 12 jours",
    walking: "5 à 6 jours de marche",
    period: "D'octobre à la mi-avril",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Dromadaires pour transporter les bagages",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Ouarzazate ou Marrakech",
    description:
      "Ce voyage associe les balades dans le désert à la découverte du patrimoine de la vallée du Drâa. Ici, l'objectif n'est pas la performance sportive, mais l'immersion dans les grands espaces sahariens. Les dromadaires transportent les bagages pour vous permettre de marcher léger. Au fil des étapes, observez les traces de la faune, découvrez comment la nature et les habitants s'adaptent à l'aridité, puis retrouvez le campement pour savourer un tajine et partager les rythmes paisibles du Sahara sous un ciel étoilé.",
    highlights: [
      "Marcher au rythme tranquille du désert",
      "Observer les traces de la faune et les paysages sahariens",
      "Rencontrer les nomades et découvrir leur mode de vie",
      "Passer des nuits en bivouac sous les étoiles",
      "Explorer également les oasis et le patrimoine du Drâa",
    ],
    extra:
      "Ce circuit peut être combiné avec la découverte des oasis du Drâa ou avec une randonnée au Jbel Saghro pour créer un voyage d'environ 15 jours. Les dates, la ville d'arrivée, la durée et l'itinéraire sont adaptables.",
    family: true,
  },
  {
    slug: "jbel-saghro",
    title: "Jbel Saghro, l'aventure nomade",
    tagline: "Connaissez-vous l'histoire des amoureux Ali et Eto !",
    image: jbelSaghro,
    duration: "8 ou 10 jours",
    walking: "5 jours de marche",
    period: "Octobre à novembre et février à mai",
    level: "Randonnée",
    dailyWalking: "Selon l'étape et l'itinéraire choisi",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Ouarzazate ou Marrakech",
    description:
      "Entre les vallées du Dadès et du Drâa, le massif du Saghro dévoile un univers minéral aux allures lunaires : aiguilles rocheuses, canyons, plateaux et horizons dégagés. C'est aussi un territoire de transhumance pour les Aït Atta, dont les troupeaux et les campements font partie du paysage. Accompagné d'une équipe locale, vous avancez au rythme de la vie nomade, à la recherche de l'eau et des coins d'ombre des palmeraies avant de retrouver les hauts plateaux. L'ascension du mont Kouaouch, à 2 662 m, récompense les marcheurs par une vue qui s'étend du Haut Atlas au Jbel Bani.",
    highlights: [
      "Traverser des paysages rocheux et des plateaux lunaires",
      "Découvrir les traditions de transhumance des Aït Atta",
      "Marcher entre canyons, oasis et reliefs volcaniques",
      "Gravir le mont Kouaouch, à 2 662 m",
      "Profiter de grands espaces propices à la contemplation",
    ],
    extra:
      "Le Saghro peut se combiner avec une randonnée dans le Sahara pour former un voyage d'environ 15 jours. Le programme peut être adapté à vos dates, à la durée souhaitée et au niveau de votre groupe.",
    family: true,
  },
  {
    slug: "jbel-mgoun",
    title: "Jbel Mgoun, traversée du Haut Atlas central",
    tagline:
      "De la vallée heureuse à la vallée des roses : émotions, couleurs et rencontres",
    image: jbelMgoun,
    duration: "12 jours",
    walking: "9 jours de marche",
    period: "De juin à octobre",
    level: "Bon marcheur",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech ou Ouarzazate",
    description:
      "Cette traversée du Haut Atlas central vous emmène autour du Jbel Mgoun, dont le sommet atteint 4 068 m, le deuxième plus haut d'Afrique du Nord. Son ascension, facultative, reste accessible aux randonneurs correctement préparés. Le parcours alterne vallées verdoyantes au nord, pâturages d'altitude, roches multicolores et gorges impressionnantes que l'on traverse parfois dans l'eau. Plus au sud, les paysages deviennent minéraux avant de laisser place aux grandes oasis. Les villages et les rencontres le long de l'oued Mgoun donnent à cette traversée toute sa dimension humaine, jusqu'à la vallée du Dadès et ses kasbahs au milieu des palmeraies.",
    highlights: [
      "Explorer les vallées et pâturages du Haut Atlas central",
      "Traverser les gorges spectaculaires du Mgoun",
      "Découvrir les villages berbères et leurs cultures",
      "Envisager l'ascension facultative du Mgoun à 4 068 m",
      "Terminer dans la vallée du Dadès et ses kasbahs",
    ],
    extra:
      "Le Haut Atlas central offre de nombreuses possibilités : Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, vallée des Roses, Dadès et Todra. Des itinéraires plus courts, des traversées longues, des programmes familiaux ou des treks plus sportifs peuvent être conçus sur mesure.",
  },
  {
    slug: "tizi-n-test",
    title: "Tizi N'Test, le pays des noyers centenaires",
    tagline:
      "De la mosquée de Tinmal au plateau du Techka, découverte d'une vallée préservée",
    image: tiziNTest,
    duration: "8 à 9 jours",
    walking: "5 jours de marche",
    period: "De la mi-mai à octobre",
    level: "Facile à modéré",
    dailyWalking: "Environ 5 à 7 h par jour",
    transport: "Mules et ânes de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech ou Agadir",
    description:
      "À l'ouest du Haut Atlas, loin des itinéraires les plus fréquentés, le pays du Tizi N'Test domine la plaine du Souss. Les roches ocre et violettes du versant sud contrastent avec les vallées vertes du nord. En chemin, les senteurs de thuya et de genévrier accompagnent les sentiers qui suivent l'oued N'Fiss, traversent des villages berbères en pierre et longent des terrasses agricoles. Noyers centenaires, pistachiers de l'Atlas et pâturages d'été ponctuent la route jusqu'au plateau du Techka. Le parcours permet également de gravir deux sommets dépassant les 3 000 m.",
    highlights: [
      "Découvrir la mosquée historique de Tinmal",
      "Marcher le long de l'oued N'Fiss",
      "Traverser des villages de pierre et des terrasses agricoles",
      "Admirer les noyers et pistachiers de l'Atlas",
      "Rejoindre les pâturages du plateau du Techka",
    ],
    extra:
      "Le circuit peut être complété par un séjour sur la côte atlantique. Les étapes et la durée peuvent être adaptées selon vos envies.",
  },
  {
    slug: "randonnee-cotiere",
    title: "Randonnée côtière au vent de l'Atlantique",
    tagline: "Dans le sillage du faucon d'Éléonore, d'Essaouira à Imsouane",
    image: randonneeCotiere,
    duration: "9 jours",
    walking: "6 jours de marche",
    period: "Octobre à novembre et février à mai",
    level: "Randonnée côtière",
    dailyWalking: "Selon l'étape et l'itinéraire choisi",
    transport: "Dromadaires pour les bagages ; âne de selle possible pour les enfants",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Marrakech ou Agadir",
    description:
      "Entre Essaouira et Imsouane, suivez le littoral atlantique à travers des villages de pêcheurs, des plages sauvages et des falaises ouvertes sur l'océan. Marchez pieds nus sur le sable parfois lisse comme un miroir, puis partagez un tajine de poisson au bivouac sous les étoiles. Les amateurs de nature pourront observer les oiseaux du rivage et les fous de Bassan ; selon la saison, le faucon d'Éléonore peut également être présent. Au printemps, les fleurs colorent le chemin et les arganiers ponctuent le paysage. À Essaouira, l'ancienne Mogador vous accueille derrière ses remparts blancs. Les échanges avec l'équipe locale Aït Haha ajoutent à ce voyage une belle dimension humaine.",
    highlights: [
      "Marcher entre plages sauvages, criques et falaises",
      "Découvrir les villages de pêcheurs de la côte atlantique",
      "Observer les oiseaux du littoral selon la saison",
      "Visiter Essaouira et ses remparts blancs",
      "Partager les soirées et les repas au bivouac",
    ],
    extra:
      "Cette randonnée peut être associée à un séjour équestre. Les dates et les étapes peuvent être adaptées, et le programme convient aussi aux familles.",
    family: true,
  },
  {
    slug: "tafraoute",
    title: "Anti-Atlas de Tafraoute, le sang du dragon",
    tagline: "Sur les traces des antilopes, de montagne en oasis",
    image: tafraout,
    duration: "9 jours",
    walking: "5 jours et demi de marche en étoile",
    period: "De l'automne au début du printemps, idéalement en janvier-février",
    level: "Facile",
    dailyWalking: "Environ 5 à 7 h par jour",
    transport: "Véhicule d'assistance ; hébergement en gîte",
    supervision: "Guide et équipe locale selon le programme",
    arrival: "Agadir ; Marrakech ou Ouarzazate possibles",
    description:
      "Autour de Tafraoute, l'Anti-Atlas compose une palette de roches roses, vertes et blanches, de blocs de granite arrondis et de reliefs de quartzite. Les randonnées conduisent dans la vallée d'Ameln, au pied du Jbel El Kest, dont on peut rejoindre le point culminant, puis vers des gorges et de magnifiques villages aux maisons traditionnelles roses et blanches. L'oasis d'Aït Mansour offre un contraste luxuriant. Dans un lieu discret pousse le dragonnier ajgal, surnommé « sang du dragon ». Les anciens sentiers et les cultures parfois abandonnées laissent aujourd'hui davantage de place à la nature, dans une région où l'on peut espérer observer une gazelle de Cuvier, un sanglier ou, plus rarement, un mouflon à manchettes.",
    highlights: [
      "Découvrir les rochers de granite et les reliefs colorés",
      "Explorer la vallée d'Ameln et le Jbel El Kest",
      "Marcher dans les gorges et les villages traditionnels",
      "Profiter de l'oasis verdoyante d'Aït Mansour",
      "Découvrir le dragonnier ajgal et la flore locale",
    ],
    extra:
      "Les randonnées peuvent être organisées en étoile et adaptées à votre rythme. Le programme convient également aux familles.",
    family: true,
  },
  {
    slug: "toubkal",
    title: "Tour du Toubkal, vallées berbères du Haut Atlas",
    tagline: "D'une vallée à l'autre, par-delà les cols touchant le ciel",
    image: toubkal,
    duration: "8 à 9 jours",
    walking: "6 à 7 jours de marche",
    period: "De juin à octobre",
    level: "Bon marcheur",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "Ce trek s'adresse aux marcheurs qui aiment la montagne, les longues journées et les paysages sauvages. D'anciens sentiers muletiers relient les villages berbères et franchissent des cols d'altitude, parfois loin des chemins les plus fréquentés. Le point fort du voyage est l'ascension du Jbel Toubkal, qui culmine à 4 168 m. Tout au long de la traversée, les vallées habitées et les reliefs de haute montagne offrent un contraste saisissant avec l'animation de Marrakech, ses palais et la place Jemaa el-Fna.",
    highlights: [
      "Traverser les vallées berbères du Haut Atlas",
      "Franchir des cols offrant de vastes panoramas",
      "Découvrir les sentiers et villages de montagne",
      "Viser le sommet du Jbel Toubkal, à 4 168 m",
      "Associer paysages sauvages et rencontres locales",
    ],
    extra:
      "Des randonnées plus courtes de 2 à 4 jours sont également possibles dans la région. Selon la saison et les conditions, le secteur se prête aussi au ski de randonnée. Un programme personnalisé peut être élaboré.",
  },
  {
    slug: "yagour-zat",
    title: "Plateau du Yagour & vallée du Zat, cheminement millénaire",
    tagline: "Gravures rupestres du Haut Atlas, un inestimable trésor",
    image: yagouZat,
    duration: "9 jours",
    walking: "Traversée de 7 jours ou boucle de 6 jours",
    period: "Du printemps à l'automne",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "À proximité de Marrakech, le vaste plateau du Yagour se trouve au pied du Haut Atlas et constitue un ancien territoire pastoral. Il abrite l'un des ensembles d'art rupestre les plus riches du massif, gravé dans le grès rose : bœufs aux cornes recourbées, roues solaires, armes et silhouettes humaines témoignent de pratiques remontant à la fin du Néolithique. Vous pouvez choisir une traversée de sept jours, de Tachdirt au col du Tizi N'Tichka, en passant par les vallées de Tachdirt, de l'Ounila et du Zat, ou une boucle de six jours au départ de la vallée de l'Ounila. Pour les marcheurs qui souhaitent prolonger l'aventure, le sommet sacré du Meltsene, à 3 595 m, peut faire l'objet d'une journée supplémentaire.",
    highlights: [
      "Explorer le plateau pastoral du Yagour",
      "Découvrir les gravures rupestres préhistoriques",
      "Traverser des vallées et villages berbères",
      "Choisir entre une traversée et un itinéraire en boucle",
      "Envisager l'ascension facultative du Meltsene, à 3 595 m",
    ],
    extra:
      "Le plateau du Yagour peut aussi se découvrir sur 3 à 4 jours depuis Marrakech. Les étapes sont adaptables et le circuit peut convenir aux familles.",
    family: true,
  },
  {
    slug: "tessaout-ait-bouli",
    title: "Ounila, Tessaout & Aït Bouli, pays amazighs",
    tagline: "Montagnes multicolores et splendides villages de l'Atlas",
    image: tessaout,
    duration: "9 jours",
    walking: "Traversée de 6 jours",
    period: "Du printemps à l'automne",
    level: "Modéré",
    dailyWalking: "Environ 6 à 7 h par jour",
    transport: "Mules de bât",
    supervision: "Guide marocain, cuisinier et muletiers",
    arrival: "Marrakech",
    description:
      "Cette randonnée relie la vallée de l'Ounila à la Tessaout, puis à Aït Bouli, au cœur du Haut Atlas. Le parcours traverse des vallées vivantes et verdoyantes, des villages traditionnels comme Megdez et des pâturages d'altitude. Le lac bleu de Tamda se niche sous les montagnes d'Anghomar. Le sentier qui relie la Tessaout à Aït Bouli compte parmi les plus beaux itinéraires du massif : bivouac dans une vallée préservée, chemin en balcon au pied de la crête du Jbel Rat et panoramas changeants accompagnent la marche. À Aït Bouli, les grès rouges contrastent avec les terrasses vertes et les témoignages anciens d'art rupestre.",
    highlights: [
      "Traverser les vallées de l'Ounila, de la Tessaout et d'Aït Bouli",
      "Découvrir les villages traditionnels, dont Megdez",
      "Admirer le lac bleu de Tamda et les montagnes d'Anghomar",
      "Marcher sur un sentier en balcon sous le Jbel Rat",
      "Découvrir les paysages et les traces d'art rupestre d'Aït Bouli",
    ],
    extra:
      "Le Haut Atlas central permet de créer des itinéraires variés autour d'Aït Bougmez, de la Tessaout, de Zawyat Ahansal, de la vallée des Roses et de l'Ounila. Des séjours familiaux, des traversées plus longues et des treks sportifs peuvent être organisés sur mesure.",
  },
  {
    slug: "oued-noun",
    title: "Sahara atlantique, Oued Noun",
    tagline: "Désert, oasis et océan : un voyage dans le monde sahraoui",
    image: ouedNoun,
    duration: "11 jours",
    walking: "4 jours de marche",
    period: "De septembre à avril",
    level: "Facile",
    dailyWalking: "Environ 5 à 6 h par jour",
    transport: "Dromadaires et véhicule d'assistance",
    supervision: "Guide et équipe locale : cuisinier et chameliers",
    arrival: "Agadir ou Marrakech",
    description:
      "Tout au sud du Maroc, ce voyage singulier vous fait découvrir l'univers saharien dans sa rencontre avec l'Atlantique. Désert, oasis, montagnes et océan composent un paysage étonnamment varié, rythmé par la culture hassanie et les chants de la guedra. Au fil du parcours, découvrez la flore et la faune de cette zone de transition, croisez des nomades accompagnés de leurs dromadaires et chèvres, et rencontrez les cultivateurs d'oasis et les artisans. Les étoffes colorées des femmes, le rituel du thé et l'accueil sous les tentes donnent à cette aventure une dimension culturelle forte. La randonnée de quatre jours mène notamment vers l'oasis de Tighermt, près de Guelmim, des sources chaudes et froides et de vastes plateaux bordés par les reliefs minéraux de l'Anti-Atlas. Le voyage s'achève à la grande Plage Blanche, face aux vagues de l'océan.",
    highlights: [
      "Explorer la rencontre entre désert, oasis et océan",
      "Découvrir la culture hassanie et le rituel du thé",
      "Rencontrer les nomades, les cultivateurs et les artisans",
      "Marcher près de l'oasis de Tighermt et des plateaux minéraux",
      "Terminer le voyage face à l'Atlantique, à la Plage Blanche",
    ],
    extra:
      "Une boucle en véhicule 4×4 peut être proposée au retour afin de découvrir davantage l'Anti-Atlas et la région de Tafraoute.",
  },
];

const circuitTranslations: Record<string, Partial<Circuit>> = {
  "jbel-siroua": {
    title: "Jbel Siroua, Hiking in the Land of Saffron",
    tagline: "Discover our hidden gem, where you are welcomed like family",
    duration: "9 days",
    walking: "5.5 days of hiking",
    period: "Spring and autumn",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech, Agadir or Ouarzazate",
    description:
      "Starting from Taliouine, discover Siroua, a colourful volcanic mountain range dotted with Amazigh villages and cultivated terraces. From its heights, the 3,305-metre summit offers views stretching from the High Atlas towards the Sahara. This journey combines striking landscapes, heritage, encounters and rural traditions. In spring, almond blossoms brighten the valleys; in October, families harvest saffron, the region’s precious red gold, celebrated at the Taliouine festival towards the end of the month.",
    highlights: [
      "Discover Siroua’s volcanic landscapes and villages",
      "Enjoy panoramic views between the High Atlas and Sahara",
      "Meet local producers and discover saffron",
      "Hike among almond blossoms in spring",
      "Reach the heights of Siroua at 3,305 metres",
    ],
    extra:
      "Dates, duration and itinerary can be tailored to your plans. A themed hiking trip focused on saffron can also be arranged.",
  },
  sahara: {
    title: "Sahara, a Gentle Immersion",
    tagline: "Discover the vast desert world of our camel, Zafrani",
    duration: "9–12 days",
    walking: "5–6 days of hiking",
    period: "October to mid-April",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Camels carry the luggage",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Ouarzazate or Marrakech",
    description:
      "This journey combines desert walks with the heritage of the Drâa Valley. The aim is not athletic performance, but an immersive experience in the vast Saharan landscapes. Camels carry your luggage so you can walk light. Along the way, discover wildlife tracks and learn how nature and local communities adapt to the arid environment. At the end of each day, return to camp to enjoy a tagine and the peaceful rhythms of the Sahara beneath a star-filled sky.",
    highlights: [
      "Walk at the peaceful rhythm of the desert",
      "Discover wildlife tracks and Saharan landscapes",
      "Meet nomadic communities and learn about their way of life",
      "Spend nights camping beneath the stars",
      "Explore the Drâa oases and their heritage",
    ],
    extra:
      "Combine this trip with a visit to the Drâa oases or a hike in Jbel Saghro for a journey of around 15 days. Dates, arrival city, duration and itinerary can be adapted.",
  },
  "jbel-saghro": {
    title: "Jbel Saghro, a Nomadic Adventure",
    tagline: "Discover the story of Ali and Eto, the two lovers",
    duration: "8 or 10 days",
    walking: "5 days of hiking",
    period: "October–November and February–May",
    level: "Hiking",
    dailyWalking: "Depending on the stage and chosen itinerary",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Ouarzazate or Marrakech",
    description:
      "Between the Dadès and Drâa valleys, the Saghro massif reveals a lunar world of rocky spires, canyons, plateaus and wide-open horizons. It is also a seasonal migration area for the Aït Atta, whose herds and camps are part of the landscape. Accompanied by a local team, travel at the pace of nomadic life, discovering water sources and shaded palm groves before reaching the high plateaus. The ascent of Mount Kouaouch, at 2,662 metres, rewards hikers with views stretching from the High Atlas to Jbel Bani.",
    highlights: [
      "Cross rocky landscapes and lunar-like plateaus",
      "Discover the seasonal migration traditions of the Aït Atta",
      "Hike through canyons, oases and volcanic terrain",
      "Climb Mount Kouaouch at 2,662 metres",
      "Enjoy vast landscapes made for quiet contemplation",
    ],
    extra:
      "Combine Saghro with a Sahara trek for a journey of around 15 days. The programme can be adapted to your dates, preferred duration and group’s experience.",
  },
  "jbel-mgoun": {
    title: "Jbel Mgoun, Crossing the Central High Atlas",
    tagline:
      "From the Happy Valley to the Valley of Roses: colour, emotion and encounters",
    duration: "12 days",
    walking: "9 days of hiking",
    period: "June to October",
    level: "Experienced hiker",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech or Ouarzazate",
    description:
      "This trek through the Central High Atlas takes you around Jbel Mgoun, whose summit reaches 4,068 metres, making it the second-highest peak in North Africa. The optional ascent is suitable for properly prepared hikers. The route alternates between green northern valleys, high-altitude pastures, colourful rock formations and impressive gorges, some of which are crossed through the water. Further south, mineral landscapes give way to vast oases. Villages and encounters along the Mgoun River add a human dimension to the journey, which ends in the Dadès Valley among kasbahs and palm groves.",
    highlights: [
      "Explore the valleys and high pastures of the Central High Atlas",
      "Cross the spectacular Mgoun Gorges",
      "Discover Amazigh villages and their cultivated lands",
      "Consider the optional ascent of Mgoun at 4,068 metres",
      "Finish in the Dadès Valley among its kasbahs",
    ],
    extra:
      "The Central High Atlas offers many possibilities, including Aït Bougmez, Tessaout, Zawyat Ahansal, Imilchil, the Valley of Roses, Dadès and Todra. Shorter walks, longer crossings, family trips and more challenging treks can all be designed to suit you.",
  },
  "tizi-n-test": {
    title: "Tizi N’Test, Land of Centuries-Old Walnut Trees",
    tagline:
      "From Tinmal Mosque to the Techka Plateau, discover a preserved valley",
    duration: "8–9 days",
    walking: "5 days of hiking",
    period: "Mid-May to October",
    level: "Easy to moderate",
    dailyWalking: "Around 5–7 hours per day",
    transport: "Pack mules and donkeys",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech or Agadir",
    description:
      "West of the High Atlas, away from the busiest routes, the Tizi N’Test region overlooks the Souss Plain. The ochre and purple rocks of the southern slopes contrast with the green northern valleys. Trails follow the N’Fiss River through the scents of thuya and juniper, past stone-built Amazigh villages and agricultural terraces. Centuries-old walnut trees, Atlas pistachio trees and summer pastures mark the way towards the Techka Plateau. The route also offers the opportunity to climb two peaks above 3,000 metres.",
    highlights: [
      "Discover the historic Tinmal Mosque",
      "Walk along the N’Fiss River",
      "Cross stone-built villages and agricultural terraces",
      "Admire walnut trees and Atlas pistachio trees",
      "Reach the pastures of the Techka Plateau",
    ],
    extra:
      "This trip can be extended with a stay on the Atlantic coast. Stages and duration can be adapted to your preferences.",
  },
  "randonnee-cotiere": {
    title: "Atlantic Coastal Hiking",
    tagline: "Following Eleonora’s falcon, from Essaouira to Imsouane",
    duration: "9 days",
    walking: "6 days of hiking",
    period: "October–November and February–May",
    level: "Coastal hiking",
    dailyWalking: "Depending on the stage and chosen itinerary",
    transport: "Camels carry luggage; a riding donkey may be available for children",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Marrakech or Agadir",
    description:
      "Between Essaouira and Imsouane, follow the Atlantic coast through fishing villages, wild beaches and cliffs overlooking the ocean. Walk barefoot across smooth sand, then share a fish tagine at camp beneath the stars. Nature lovers can observe shorebirds and gannets; depending on the season, Eleonora’s falcon may also be present. In spring, flowers brighten the trail and argan trees dot the landscape. In Essaouira, historic Mogador welcomes you behind its white ramparts. Encounters with the local Aït Haha team add a warm human dimension to the journey.",
    highlights: [
      "Walk between wild beaches, coves and cliffs",
      "Discover fishing villages along the Atlantic coast",
      "Observe coastal birds, depending on the season",
      "Visit Essaouira and its white ramparts",
      "Share evenings and meals at the campsite",
    ],
    extra:
      "This coastal trek can be combined with a horse-riding stay. Dates and stages can be adapted, and the programme is also suitable for families.",
  },
  tafraoute: {
    title: "Tafraoute Anti-Atlas, the Dragon’s Blood",
    tagline: "Following the antelopes, from mountains to oases",
    duration: "9 days",
    walking: "5.5 days of circular day hikes",
    period: "Autumn to early spring, ideally January–February",
    level: "Easy",
    dailyWalking: "Around 5–7 hours per day",
    transport: "Support vehicle; accommodation in a guesthouse",
    supervision: "Guide and local team, depending on the programme",
    arrival: "Agadir; Marrakech or Ouarzazate also possible",
    description:
      "Around Tafraoute, the Anti-Atlas displays pink, green and white rocks, rounded granite boulders and quartzite ridges. Hikes lead through the Ameln Valley, at the foot of Jbel El Kest, and towards gorges and villages with traditional pink and white houses. The Aït Mansour oasis offers a lush contrast. In a secluded spot grows the ajgal dragon tree, nicknamed the “dragon’s blood” tree. Old paths and abandoned fields are gradually giving way to nature in a region where Cuvier’s gazelles, wild boar and, more rarely, Barbary sheep may be spotted.",
    highlights: [
      "Discover granite boulders and colourful rock formations",
      "Explore the Ameln Valley and Jbel El Kest",
      "Walk through gorges and traditional villages",
      "Enjoy the green oasis of Aït Mansour",
      "Discover the ajgal dragon tree and local flora",
    ],
    extra:
      "Hikes can be organised as day trips from one base and adapted to your pace. The programme is also suitable for families.",
  },
  toubkal: {
    title: "Toubkal Circuit, Amazigh Valleys of the High Atlas",
    tagline: "From valley to valley, across sky-high mountain passes",
    duration: "8–9 days",
    walking: "6–7 days of hiking",
    period: "June to October",
    level: "Experienced hiker",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "This trek is for hikers who love mountains, long days on foot and wild landscapes. Ancient mule tracks connect Amazigh villages and cross high mountain passes, sometimes far from the busiest trails. The highlight is the ascent of Jbel Toubkal, reaching 4,168 metres. Throughout the journey, inhabited valleys and high-mountain scenery create a striking contrast with the lively atmosphere of Marrakech, its palaces and Jemaa el-Fna square.",
    highlights: [
      "Cross the Amazigh valleys of the High Atlas",
      "Cross mountain passes with sweeping views",
      "Discover mountain trails and villages",
      "Aim for the summit of Jbel Toubkal at 4,168 metres",
      "Combine wild landscapes with local encounters",
    ],
    extra:
      "Shorter 2–4 day hikes are also possible in the region. Depending on the season and conditions, the area is suitable for ski touring. A personalised programme can be arranged.",
  },
  "yagour-zat": {
    title: "Yagour Plateau & Zat Valley, an Ancient Journey",
    tagline: "High Atlas rock carvings, an invaluable treasure",
    duration: "9 days",
    walking: "7-day crossing or 6-day circular route",
    period: "Spring to autumn",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "Close to Marrakech, the vast Yagour Plateau lies at the foot of the High Atlas and has long been used as pastoral land. It contains one of the massif’s richest collections of rock art, carved into pink sandstone: curved-horned cattle, solar wheels, weapons and human figures reveal practices dating back to the late Neolithic period. Choose a seven-day crossing from Tachdirt to the Tizi N’Tichka Pass via the Tachdirt, Ounila and Zat valleys, or a six-day loop starting in the Ounila Valley. Hikers wishing to extend the adventure can add a day to climb the sacred summit of Meltsene at 3,595 metres.",
    highlights: [
      "Explore the pastoral Yagour Plateau",
      "Discover prehistoric rock carvings",
      "Cross valleys and Amazigh villages",
      "Choose between a crossing and a circular route",
      "Consider the optional ascent of Meltsene at 3,595 metres",
    ],
    extra:
      "The Yagour Plateau can also be explored on a 3–4 day trip from Marrakech. Stages can be adapted, and the route may suit families.",
  },
  "tessaout-ait-bouli": {
    title: "Ounila, Tessaout & Aït Bouli, Amazigh Lands",
    tagline: "Colourful mountains and remarkable Atlas villages",
    duration: "9 days",
    walking: "6-day crossing",
    period: "Spring to autumn",
    level: "Moderate",
    dailyWalking: "Around 6–7 hours per day",
    transport: "Pack mules",
    supervision: "Moroccan guide, cook and muleteers",
    arrival: "Marrakech",
    description:
      "This hike links the Ounila Valley with Tessaout and then Aït Bouli, in the heart of the High Atlas. The route crosses green valleys, traditional villages such as Megdez and high-altitude pastures. The blue lake of Tamda lies beneath the Anghomar mountains. The trail linking Tessaout to Aït Bouli is among the massif’s most beautiful routes, with camping in a preserved valley, a balcony path below the Jbel Rat ridge and ever-changing panoramas. In Aït Bouli, red sandstone contrasts with green terraces and traces of ancient rock art.",
    highlights: [
      "Cross the Ounila, Tessaout and Aït Bouli valleys",
      "Discover traditional villages, including Megdez",
      "Admire Tamda’s blue lake and the Anghomar mountains",
      "Walk along a balcony trail beneath Jbel Rat",
      "Discover Aït Bouli’s landscapes and traces of rock art",
    ],
    extra:
      "The Central High Atlas offers varied routes around Aït Bougmez, Tessaout, Zawyat Ahansal, the Valley of Roses and Ounila. Family holidays, longer crossings and more challenging treks can be arranged to suit your plans.",
  },
  "oued-noun": {
    title: "Atlantic Sahara, Oued Noun",
    tagline: "Desert, oases and ocean: a journey into the Sahrawi world",
    duration: "11 days",
    walking: "4 days of hiking",
    period: "September to April",
    level: "Easy",
    dailyWalking: "Around 5–6 hours per day",
    transport: "Camels and support vehicle",
    supervision: "Guide and local team, including a cook and camel handlers",
    arrival: "Agadir or Marrakech",
    description:
      "In Morocco’s far south, this unique journey explores the Saharan world where it meets the Atlantic. Desert, oases, mountains and ocean create a varied landscape shaped by Hassani culture and guedra songs. Along the way, discover local flora and fauna, meet nomads travelling with camels and goats, and encounter oasis farmers and artisans. Colourful fabrics, the tea ritual and a warm welcome beneath tents give the journey a rich cultural dimension. The four-day trek includes the Tighermt oasis near Guelmim, hot and cold springs, and vast plateaus bordered by the mineral landscapes of the Anti-Atlas. The journey ends at Plage Blanche, facing the Atlantic waves.",
    highlights: [
      "Explore the meeting point of desert, oases and ocean",
      "Discover Hassani culture and the tea ritual",
      "Meet nomads, farmers and artisans",
      "Walk near the Tighermt oasis and mineral plateaus",
      "Finish facing the Atlantic at Plage Blanche",
    ],
    extra:
      "A 4×4 vehicle loop can be arranged on the return journey to explore more of the Anti-Atlas and the Tafraoute region.",
  },
};

type InfoItemProps = {
  label: string;
  value?: string | null;
};

function InfoItem({ label, value }: InfoItemProps) {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-1 border-b border-border/60 py-3 last:border-b-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium leading-relaxed text-foreground">
        {value}
      </span>
    </div>
  );
}

function CircuitDetailPage() {
  const { slug } = Route.useParams();
  const { lang } = useI18n();
  const isEnglish = lang === "en";

  const originalCircuit = circuits.find((item) => item.slug === slug);

  const circuit = originalCircuit
    ? {
        ...originalCircuit,
        ...(isEnglish ? circuitTranslations[originalCircuit.slug] : {}),
      }
    : undefined;

  if (!circuit) {
    return (
      <main className="min-h-[70vh] bg-background px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Mountain className="mx-auto mb-5 h-12 w-12 text-primary" />
          <h1 className="mb-4 text-3xl font-bold">
            {isEnglish ? "Circuit not found" : "Circuit introuvable"}
          </h1>
          <p className="mb-8 text-muted-foreground">
            {isEnglish
              ? "This circuit is unavailable or the link is no longer valid."
              : "Ce circuit n'est pas disponible ou le lien n'est plus valide."}
          </p>
          <Link
            to="/circuits"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            {isEnglish ? "Explore all our circuits" : "Découvrir tous nos circuits"}
          </Link>
        </div>
      </main>
    );
  }

  const facts = [
    {
      icon: CalendarDays,
      label: isEnglish ? "Duration" : "Durée",
      value: circuit.duration,
    },
    {
      icon: Footprints,
      label: isEnglish ? "Hiking" : "Marche",
      value: circuit.walking,
    },
    {
      icon: Compass,
      label: isEnglish ? "Difficulty" : "Niveau",
      value: circuit.level,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate flex min-h-[460px] items-end overflow-hidden md:min-h-[560px]">
        <img
          src={circuit.image || heroSahara}
          alt={circuit.title}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pb-16">
          <Link
            to="/circuits"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/40"
          >
            <ArrowLeft className="h-4 w-4" />
            {isEnglish ? "All circuits" : "Tous les circuits"}
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Mountain className="h-4 w-4" />
              {isEnglish ? "Travel in Morocco" : "Voyage au Maroc"}
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {circuit.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
              {circuit.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-1 font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-14">
          <div>
            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {isEnglish ? "The spirit of the journey" : "L'esprit du voyage"}
                </span>
              </div>

              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                {isEnglish
                  ? "An adventure in the heart of Morocco"
                  : "Une aventure au cœur du Maroc"}
              </h2>

              <p className="text-base leading-8 text-muted-foreground md:text-lg">
                {circuit.description}
              </p>
            </div>

            <div className="mb-10">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Mountain className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                  {isEnglish ? "Discover" : "À découvrir"}
                </span>
              </div>

              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                {isEnglish ? "Trip highlights" : "Les temps forts du circuit"}
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {circuit.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl border border-border/70 bg-card p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm leading-6">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {circuit.extra && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-7">
                <div className="mb-3 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">
                    {isEnglish
                      ? "A journey tailored to you"
                      : "Un voyage qui s'adapte à vous"}
                  </h2>
                </div>

                <p className="leading-7 text-muted-foreground">
                  {circuit.extra}
                </p>

                {circuit.themeLink && (
                  <a
                    href={circuit.themeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {isEnglish
                      ? "Discover the saffron-themed journey"
                      : "Découvrir le voyage thématique autour du safran"}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="bg-primary px-6 py-5 text-primary-foreground">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    {isEnglish ? "Practical information" : "Informations pratiques"}
                  </span>
                </div>
                <h2 className="text-xl font-bold">
                  {isEnglish ? "Plan your adventure" : "Préparez votre aventure"}
                </h2>
              </div>

              <div className="px-6 py-2">
                <InfoItem
                  label={isEnglish ? "Total duration" : "Durée totale"}
                  value={circuit.duration}
                />
                <InfoItem
                  label={isEnglish ? "Hiking duration" : "Durée de marche"}
                  value={circuit.walking}
                />
                <InfoItem
                  label={isEnglish ? "Best time to visit" : "Période conseillée"}
                  value={circuit.period}
                />
                <InfoItem
                  label={isEnglish ? "Difficulty" : "Niveau"}
                  value={circuit.level}
                />
                <InfoItem
                  label={isEnglish ? "Daily walking" : "Marche quotidienne"}
                  value={circuit.dailyWalking}
                />
                <InfoItem
                  label={isEnglish ? "Luggage transport" : "Portage"}
                  value={circuit.transport}
                />
                <InfoItem
                  label={isEnglish ? "Local team" : "Encadrement"}
                  value={circuit.supervision}
                />
                <InfoItem
                  label={isEnglish ? "Arrival city" : "Ville d'arrivée"}
                  value={circuit.arrival}
                />
              </div>

              {circuit.family && (
                <div className="mx-6 mb-4 flex items-center gap-2 rounded-xl bg-primary/5 p-3 text-sm">
                  <Users className="h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {isEnglish
                      ? "This trip can be adapted for families"
                      : "Possibilité d'adapter le circuit aux familles"}
                  </span>
                </div>
              )}

              <div className="p-6 pt-2">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-center font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {isEnglish ? "Discuss your trip" : "Parler de votre projet"}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                  {isEnglish
                    ? "Dates, stages and duration can be adjusted to suit your plans."
                    : "Dates, étapes et durée peuvent être étudiées selon votre projet."}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <Backpack className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">
                  {isEnglish ? "Need advice?" : "Besoin de conseils ?"}
                </h3>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                {isEnglish
                  ? "Contact us to discuss your hiking experience, preferred dates and the kind of trip that suits you."
                  : "Contactez-nous pour échanger sur votre expérience de randonnée, vos dates et le type de voyage qui vous correspond."}
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                {isEnglish ? "Contact us" : "Nous contacter"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16 md:py-20">
        <img
          src={heroSahara}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            {isEnglish ? "Your next adventure" : "Votre prochaine aventure"}
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {isEnglish
              ? "Shall we plan this journey together?"
              : "Et si nous préparions ce voyage ensemble ?"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85">
            {isEnglish
              ? "Tell us what you have in mind. We can discuss the route, dates and ways to tailor your trip."
              : "Parlez-nous de vos envies. Nous pourrons échanger sur le parcours, les dates et les possibilités d'adaptation de votre circuit."}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {isEnglish ? "Request information" : "Demander des informations"}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/circuits"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              {isEnglish ? "Explore other circuits" : "Voir les autres circuits"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/circuits/$slug")({
  head: ({ params }) => {
    const name = params.slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    return seo(
      `/circuits/${params.slug}`,
      `${name} — Circuit et randonnée au Maroc | Voyager Autrement`,
      `Découvrez notre circuit ${name} au Maroc : paysages, étapes et informations pour préparer votre voyage avec Voyager Autrement.`,
    );
  },
  component: CircuitDetailPage,
});
