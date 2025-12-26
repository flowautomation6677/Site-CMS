import homeData from './home.json';

// Type definition to ensure JSON matches expectations (optional but good for safety)
export interface SiteContent {
    hero: {
        title_highlight: string;
        title_rest: string;
        subtitle: string;
        cta: string;
        ctaLink: string;
    };
    pain: {
        title: string;
        items: { text: string }[];
        highlight: string;
    };
    method: {
        title: string;
        description: string;
        steps: { icon: string; title: string; description: string }[];
    };
    deliverables: {
        title: string;
        subtitle: string;
        items: { title: string; description: string; image: string }[];
    };
    testimonials: {
        title: string;
        subtitle: string;
        items: { text: string; author: string; role: string }[];
    };
    offer: {
        title: string;
        items: { name: string; price: string }[];
        total: string;
        price: string;
        fullPrice: string;
        cta: string;
        ctaLink: string;
        guarantee: string;
    };
    faq: {
        title: string;
        items: { question: string; answer: string }[];
    };
}

// Adapting the JSON structure to match what components expect
// Some components expected flat arrays, JSON has objects. We adapt here.
const data = homeData as SiteContent;

export const siteContent = {
    hero: {
        title: {
            highlight: data.hero.title_highlight,
            rest: data.hero.title_rest
        },
        subtitle: data.hero.subtitle,
        cta: data.hero.cta,
        ctaLink: data.hero.ctaLink
    },
    pain: {
        title: data.pain.title,
        // Converting object array {text: string}[] back to string[] if component expects simplistic strings
        // But checking PainSection.tsx, I see: items.map((item, index) => <p...>{item}</p>)
        // The original data.ts had string[]. The new JSON has {text: string}[].
        // I need to check PainSection.tsx again. Converting to string[] to be safe/compatible.
        items: data.pain.items.map(i => i.text),
        highlight: data.pain.highlight
    },
    method: data.method,
    deliverables: data.deliverables,
    testimonials: data.testimonials,
    offer: data.offer,
    faq: data.faq
};
