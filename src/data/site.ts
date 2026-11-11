// All site content lives here now (replaces Sanity).
// Edit this file to update services, reviews, metrics, logos, etc.

export const contact = {
  email: "courtneyligi@socialcirclect.com",
  calendly: "https://calendly.com/courtneyligi-socialcirclect",
  facebook: "https://www.facebook.com/socialcirclellc",
  linkedin: "https://www.linkedin.com/company/thesocialcirclect",
};

export const navLinks = [
  { id: "our-work", label: "Our Work" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export interface WorkSample {
  src: string;
  alt: string;
}

export const workSamples: WorkSample[] = [
  { src: "/worksamples/bigdipper1.jpg", alt: "Big Dipper Ice Cream social media post" },
  { src: "/worksamples/duck1.jpg", alt: "Social media work sample" },
  { src: "/worksamples/farm1.jpg", alt: "Farm social media post" },
  { src: "/worksamples/duck2.jpg", alt: "Social media work sample" },
  { src: "/worksamples/jimmy1.jpg", alt: "Jimmy's of Watertown social media post" },
  { src: "/worksamples/nardelli1.jpg", alt: "Nardelli's social media post" },
  { src: "/worksamples/weightloss1.jpg", alt: "Weight loss clinic social media post" },
  { src: "/worksamples/wellness1.jpg", alt: "Wellness social media post" },
  { src: "/worksamples/unlimited1.jpg", alt: "Social media work sample" },
];

export interface ClientMetric {
  label: string;
  value: number;
}

// TODO: replace with the live values from Sanity (see README)
export const metrics: ClientMetric[] = [
  { label: "Follow Growth", value: 10695 },
  { label: "Content Interactions", value: 14300 },
  { label: "Impressions", value: 3200000 },
  { label: "Conversions", value: 17000 },
];

export interface ClientLogo {
  name: string;
  src: string;
  facebookUrl?: string;
}

// TODO: add facebookUrl for each client if you want the logos clickable
export const logos: ClientLogo[] = [
  { name: "Arc", src: "/logos/Arc.png" },
  { name: "Big Dipper Ice Cream", src: "/logos/Big-Dipper.png" },
  { name: "Chamber of Commerce", src: "/logos/chamber.png" },
  { name: "Dependable", src: "/logos/dependable.png" },
  { name: "IMTI", src: "/logos/IMTI.png" },
  { name: "Client logo", src: "/logos/logo512.png" },
  { name: "United Way of Naugatuck", src: "/logos/UnitedWayNaugatuck.png" },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Social Media Marketing",
    description:
      "Boost your brand, drive traffic, and generate leads with digital marketing. Our team elevates your brand’s presence with captivating content and audience engagement. Our tailored approach ensures your goals are met. As a dedicated partner, we’ll help you connect with your audience authentically and effectively.",
  },
  {
    title: "Website Development",
    description:
      "Launch a new website or maintain your website to keep your online presence fresh, relevant, and aligned with your brand. We ensure your website reflects your business seamlessly for a cohesive user experience. From updating visuals and messaging to optimizing functionality, our team makes sure your digital presence stays in perfect harmony with your social media strategy.",
  },
  {
    title: "Marketing & Branding",
    description:
      "Need your message to reach more! Connect with us for print marketing, ad campaigns, press releases, event branding, all while helping you build your client base!. Our approach includes innovative marketing techniques to boost your presence wherever you are and leave a lasting impression on your audience.",
  },
  {
    title: "Business Consulting",
    description:
      "Redefine your business through our strategy and innovation. We build up your brand’s presence, enhance efficiency, and identify new revenue opportunities. Our team will assess your current strategies, streamline operations to reduce unnecessary expenses, and implement fresh marketing approaches that capture your audience’s attention all while ensuring your business stays relevant, profitable, and ready for growth!",
  },
  {
    title: "Event Planning",
    description:
      "The Social Circle offers exceptional private, corporate, and wedding event services designed to make your special occasion unforgettable. From meticulous planning and coordination, we ensure every detail aligns perfectly with your vision. Whether it's a sophisticated corporate gathering, a dream wedding, or an intimate private event, our tailored approach guarantees a seamless experience that leaves a lasting impression on your guests.",
  },
  {
    title: "Speaking Engagements",
    description:
      "Ignite your marketing team, non-profit, membership organization, business professional, or anyone who can benefit from learning the strategy behind taking advantage of your social media! With over 20 years of experience, founder, Courtney Ligi, inspires audiences to embrace digital marketing with confidence. Whether you need to strengthen your brand identity or master the art of social media, she will help you level up and thrive. Turn your digital marketing strategy into a game-changer with The Social Circle.",
  },
];

export interface Review {
  text: string;
  name: string;
  date: string;
  stars: string;
}

export const reviews: Review[] = [
  {
    text: "The best decision I ever made for my business was reaching out to Courtney. I told her I had made the business decision to commit to 6 months. 18 months later? I am customer for life!",
    name: "Tamath Rossi",
    date: "January 17, 2025",
    stars: "★★★★★",
  },
  {
    text: "We cannot say enough great things about Courtney Ligi and The Social Circle team! Courtney’s creativity and dedication have truly transformed our online presence. From captivating content and understanding our vision, she’s taken our brand to new heights. Courtney's professionalism, prompt communication, and attention to detail make her a standout in the industry. If you’re looking to elevate your brand and make a lasting impact, look no further. Courtney Ligi and The Social Circle are the real deal! Thank you, Courtney, for your incredible work and dedication. You have exceeded our expectations and continue to inspire us every day!",
    name: "SPYNE Pilates Studio",
    date: "February 11, 2025",
    stars: "★★★★★",
  },
  {
    text: "Great company to work with!!!! Very knowledgeable with all aspects of social media.",
    name: "Rob Marucci",
    date: "January 20, 2024",
    stars: "★★★★★",
  },
];

export interface AboutCard {
  text: string;
  /** Tailwind background class, written out in full so Tailwind picks it up */
  bgColor: string;
}

// TODO: paste the real "My Story" card text from Sanity (see README)
export const aboutCards: AboutCard[] = [
  {
    text: "Founded by Courtney Ligi in 2021, The Social Circle started as a passion to help small businesses help them reach current and potential customers through crafting authentic and organic digital marketing. Based in Prospect, CT, The Social Circle covers the Greater Waterbury and Naugatuck Valley area to help your business turn connections in clicks! We strategize with you so that we can deliver your brand and messaging straight to your future customers through various social media platforms. Courtney worked in a variety of roles previous to The Social Circle starting with the Waterbury Regional Chamber of Commerce as well as spearheading the Naugatuck Chamber of Commerce serving as its Director. In 2020, she was recognized by the American Chamber of Commerce notable executives 40 Under 40. ",
    bgColor: "bg-purple-100",
  },
];

export interface TeamMember {
  name: string;
  title: string;
  photo: string;
}

export const team: TeamMember[] = [
  { name: "Courtney Ligi", title: "Founder & CEO", photo: "/headshots/IMG_8964.png" },
  { name: "Katie Yoxall", title: "Content Director", photo: "/headshots/IMG_9021.png" },
  { name: "Kalle Legassey", title: "Content Manager", photo: "/headshots/IMG_8997.png" },
  { name: "Eryn Elinson", title: "Graphic Designer", photo: "/headshots/IMG_9036.png" },
];
