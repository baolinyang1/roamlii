import type { DiscoveryTool, NonEmptyArray } from "@/types";

export const DISCOVERY_TOOLS: NonEmptyArray<DiscoveryTool> = [
  {
    id: "social-links",
    title: "Social Links",
    description:
      "An important aspect of many business' digital presence are the social media platforms that they've curated a presence on over time.",
    category: "engagement",
    iconName: "Share2",
    features: [
      "Social media integration",
      "Profile linking",
      "Cross-platform visibility",
    ],
  },
  {
    id: "media-highlights",
    title: "Media Highlights",
    description:
      "In the vast majority of scenarios, images speak louder than words. And in an extremely visual industry like tourism, travel and hospitality, providing images and videos for customers to peruse is an incredibly powerful promotional tool.",
    category: "promotion",
    iconName: "Image",
    features: ["Image galleries", "Video showcases", "Visual storytelling"],
    isPopular: true,
  },
  {
    id: "newsletter-signup",
    title: "Newsletter Sign-up",
    description:
      "It's a basic feature, but as we all know, having the ability to engage directly with our customer base and keep them informed, is incredibly important.",
    category: "engagement",
    iconName: "Mail",
    features: [
      "Email collection",
      "Customer engagement",
      "Direct communication",
    ],
  },
  {
    id: "search-filters",
    title: "Search Filters",
    description:
      "Search Filters are one of those features that's incredibly important, intrinsically utilitarian and is often taken for granted.",
    category: "discovery",
    iconName: "Filter",
    features: ["Advanced filtering", "User experience", "Content discovery"],
  },
  {
    id: "events-festivals",
    title: "Events & Festivals",
    description:
      "The Events & Festivals is an incredibly useful feature for our Business Community, and a super interesting space for our #TravelTribe. It'll also evolve over time as we enhance its features.",
    category: "promotion",
    iconName: "Calendar",
    features: ["Event listings", "Festival promotion", "Community engagement"],
  },
  {
    id: "experience-inquiries",
    title: "Experience Inquiries",
    description:
      "The Experience Inquiry system gives businesses the power to showcase all of their fantastic products. This ever-evolving tool showcases the wide range of Experiences that the #TravelTribe needs to know about.",
    category: "management",
    iconName: "Lightbulb",
    features: [
      "Product showcasing",
      "Inquiry management",
      "Experience promotion",
    ],
    isPopular: true,
  },
  {
    id: "map-promotion",
    title: "Promotion on the Map",
    description:
      "The map is a fundamental aspect of Roamlii, a key differentiator from any other platform out there, and plays an integral role in making the platform a discovery engine for our Travellers.",
    category: "discovery",
    iconName: "MapPin",
    features: [
      "Geographic visibility",
      "Location-based discovery",
      "Map integration",
    ],
  },
  {
    id: "job-board",
    title: "Job Board",
    description:
      "The Tourism and Hospitality industry is comprised of an extremely diverse and dynamic employment sector, which is constantly cycling and requiring attention.",
    category: "management",
    iconName: "Briefcase",
    features: ["Job postings", "Recruitment", "Industry networking"],
  },
  {
    id: "share-it",
    title: "Share-it",
    description:
      "This is another feature that's both a Traveller Tool and a Business Tool. It's kind of a light and fluffy feature, but again, it's also pretty darn fun and useful.",
    category: "engagement",
    iconName: "Share2",
    features: ["Content sharing", "Social engagement", "Viral promotion"],
  },
  {
    id: "business-overview",
    title: "Business Overview",
    description:
      "With a Roamlii profile, Businesses have the opportunity to include an overview of their organization, which gives Travellers a great snapshot of their Business.",
    category: "promotion",
    iconName: "Building",
    features: [
      "Company profiles",
      "Business information",
      "Brand presentation",
    ],
  },
] as const;

export const DISCOVERY_SUITE_CONFIG = {
  sectionTitle: "The Discovery Suite (100% free)",
  subtitle:
    "Explore our collection of free tools designed to help your business get discovered by travelers.",
  ctaText: "Complete Your Business Profile",
  ctaIcon: "ArrowRight",
  supportText: {
    title: "All Included with Your Roamlii Account",
    description:
      "The Discovery Suite tools are included for free with your Roamlii business account. These tools help increase your visibility and engagement with travelers.",
  },
  brandColors: {
    primary: "#4682B4",
    primaryWithAlpha: "#4682B41A",
  },
} as const;

export const getToolById = (id: string): DiscoveryTool | undefined => {
  return DISCOVERY_TOOLS.find((tool) => tool.id === id);
};

export const getToolsByCategory = (
  category: DiscoveryTool["category"],
): DiscoveryTool[] => {
  return DISCOVERY_TOOLS.filter((tool) => tool.category === category);
};

export const getPopularTools = (): DiscoveryTool[] => {
  return DISCOVERY_TOOLS.filter((tool) => tool.isPopular === true);
};
