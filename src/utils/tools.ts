
export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: string[];
  price: {
    type: 'free' | 'freemium' | 'paid' | 'contact';
    startingAt?: string;
  };
  popular: boolean;
  isNew: boolean;
  industries: string[];
  logo: string;
  website: string;
  affiliateLink: string;
  integrations: string[];
}

export const categories = [
  'Productivity',
  'AI',
  'Design',
  'Marketing',
  'Analytics',
  'Development',
  'Communication',
  'Customer Support',
  'Project Management',
  'Finance',
  'HR',
  'Sales',
];

export const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'Education',
  'Marketing',
  'E-commerce',
  'Design',
  'Media',
  'Manufacturing',
  'Real Estate',
];

export const priceRanges = [
  'All',
  'Free',
  'Freemium',
  'Paid',
  'Contact for Pricing',
];

export const sortOptions = [
  'Most Popular',
  'Latest',
  'Price: Low to High',
  'Price: High to Low',
  'Alphabetical: A-Z',
  'Alphabetical: Z-A',
];

export const tools: Tool[] = [
  {
    id: "1",
    name: "OpenAI",
    description: "Advanced AI models for natural language processing and image generation.",
    longDescription: "OpenAI develops cutting-edge artificial intelligence models and tools that help businesses automate tasks, generate content, and build innovative applications. Their product suite includes GPT models for language tasks and DALL-E for image generation.",
    category: ["AI", "Development", "Productivity"],
    price: {
      type: "freemium",
      startingAt: "$20/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Marketing", "Education", "Media"],
    logo: "/logos/openai.png",
    website: "https://openai.com",
    affiliateLink: "https://openai.com",
    integrations: ["Slack", "Microsoft", "Zapier"]
  },
  {
    id: "2",
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    longDescription: "Notion is an all-in-one workspace for notes, tasks, wikis, and databases. It allows teams to collaborate on documents, manage projects, and organize knowledge in a flexible, customizable interface that adapts to your workflow.",
    category: ["Productivity", "Project Management", "Communication"],
    price: {
      type: "freemium",
      startingAt: "$8/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Education", "Media", "E-commerce"],
    logo: "/logos/notion.png",
    website: "https://notion.so",
    affiliateLink: "https://notion.so",
    integrations: ["Slack", "Google Drive", "Trello", "Asana"]
  },
  {
    id: "3",
    name: "Midjourney",
    description: "AI-powered image generation tool for creating stunning visuals.",
    longDescription: "Midjourney is an AI tool that generates images from textual descriptions, allowing users to create stunning, unique visuals without traditional design skills. It's used by creative professionals, marketers, and businesses to quickly produce high-quality visual content.",
    category: ["AI", "Design"],
    price: {
      type: "paid",
      startingAt: "$10/month"
    },
    popular: true,
    isNew: false,
    industries: ["Design", "Marketing", "Media", "Technology"],
    logo: "/logos/midjourney.png",
    website: "https://midjourney.com",
    affiliateLink: "https://midjourney.com",
    integrations: ["Discord"]
  },
  {
    id: "4",
    name: "Figma",
    description: "Collaborative interface design tool for teams.",
    longDescription: "Figma is a cloud-based design platform that enables teams to collaborate on interface design. It allows multiple designers to work simultaneously on the same file, streamlining the design process from wireframing to prototyping and handoff.",
    category: ["Design", "Productivity", "Development"],
    price: {
      type: "freemium",
      startingAt: "$12/month"
    },
    popular: true,
    isNew: false,
    industries: ["Design", "Technology", "Marketing", "Media"],
    logo: "/logos/figma.png",
    website: "https://figma.com",
    affiliateLink: "https://figma.com",
    integrations: ["Slack", "Jira", "Asana", "Zeplin"]
  },
  {
    id: "5",
    name: "Ahrefs",
    description: "SEO toolset for backlink analysis, keyword research, and content marketing.",
    longDescription: "Ahrefs is a comprehensive SEO toolset that helps businesses improve their search engine rankings. It offers features for backlink analysis, keyword research, competitor analysis, and content optimization, making it essential for digital marketers.",
    category: ["Marketing", "Analytics"],
    price: {
      type: "paid",
      startingAt: "$99/month"
    },
    popular: true,
    isNew: false,
    industries: ["Marketing", "Technology", "E-commerce", "Media"],
    logo: "/logos/ahrefs.png",
    website: "https://ahrefs.com",
    affiliateLink: "https://ahrefs.com",
    integrations: ["Google Analytics", "WordPress", "Semrush"]
  },
  {
    id: "6",
    name: "Monday.com",
    description: "Work OS for team management and collaboration.",
    longDescription: "Monday.com is a Work Operating System (Work OS) that powers teams to run processes, projects, and workflows in one digital workspace. It enables organizations to build custom work applications for any team, project, or workflow.",
    category: ["Project Management", "Productivity", "Communication"],
    price: {
      type: "paid",
      startingAt: "$8/month"
    },
    popular: false,
    isNew: false,
    industries: ["Technology", "Marketing", "Design", "Manufacturing"],
    logo: "/logos/monday.png",
    website: "https://monday.com",
    affiliateLink: "https://monday.com",
    integrations: ["Slack", "Google Drive", "Zoom", "Jira"]
  },
  {
    id: "7",
    name: "HubSpot",
    description: "CRM platform with marketing, sales, service, and website tools.",
    longDescription: "HubSpot is an all-in-one CRM platform that includes marketing, sales, service, and website tools to help businesses grow. It enables companies to attract visitors, convert leads, and close and manage customers effectively.",
    category: ["Sales", "Marketing", "Customer Support"],
    price: {
      type: "freemium",
      startingAt: "$45/month"
    },
    popular: true,
    isNew: false,
    industries: ["Marketing", "Sales", "Technology", "E-commerce"],
    logo: "/logos/hubspot.png",
    website: "https://hubspot.com",
    affiliateLink: "https://hubspot.com",
    integrations: ["Salesforce", "Gmail", "Slack", "WordPress"]
  },
  {
    id: "8",
    name: "Webflow",
    description: "Visual web design platform for professional-quality websites.",
    longDescription: "Webflow is a visual web design platform that enables designers and developers to build professional, custom websites without coding. It combines design, animation, content management, and hosting in one platform, making web creation accessible.",
    category: ["Design", "Development"],
    price: {
      type: "freemium",
      startingAt: "$12/month"
    },
    popular: false,
    isNew: false,
    industries: ["Design", "Marketing", "Technology", "Media"],
    logo: "/logos/webflow.png",
    website: "https://webflow.com",
    affiliateLink: "https://webflow.com",
    integrations: ["Zapier", "MailChimp", "Google Analytics", "Airtable"]
  },
  {
    id: "9",
    name: "Canva",
    description: "Easy-to-use graphic design platform for everyone.",
    longDescription: "Canva is an intuitive graphic design platform that simplifies the creation of visual content. With templates for social media, presentations, posters, and more, it enables anyone to produce professional-looking designs without specialized training.",
    category: ["Design", "Marketing"],
    price: {
      type: "freemium",
      startingAt: "$12.99/month"
    },
    popular: true,
    isNew: false,
    industries: ["Marketing", "Education", "Media", "E-commerce"],
    logo: "/logos/canva.png",
    website: "https://canva.com",
    affiliateLink: "https://canva.com",
    integrations: ["Dropbox", "Google Drive", "Facebook", "Instagram"]
  },
  {
    id: "10",
    name: "Zapier",
    description: "Automation tool connecting apps and services without code.",
    longDescription: "Zapier is an automation tool that connects your apps and services, enabling the creation of automated workflows without coding. It helps businesses save time by automating repetitive tasks and moving data between applications automatically.",
    category: ["Productivity", "Development", "Automation"],
    price: {
      type: "freemium",
      startingAt: "$19.99/month"
    },
    popular: false,
    isNew: false,
    industries: ["Technology", "Marketing", "Finance", "HR"],
    logo: "/logos/zapier.png",
    website: "https://zapier.com",
    affiliateLink: "https://zapier.com",
    integrations: ["Gmail", "Slack", "Trello", "HubSpot", "Asana"]
  },
  {
    id: "11",
    name: "Jasper",
    description: "AI content platform for creating marketing copy and content.",
    longDescription: "Jasper is an AI content creation platform designed to help marketing teams produce high-quality content faster. It uses artificial intelligence to generate marketing copy, blog posts, social media content, and more in seconds.",
    category: ["AI", "Marketing", "Productivity"],
    price: {
      type: "paid",
      startingAt: "$49/month"
    },
    popular: false,
    isNew: true,
    industries: ["Marketing", "Media", "Technology", "E-commerce"],
    logo: "/logos/jasper.png",
    website: "https://jasper.ai",
    affiliateLink: "https://jasper.ai",
    integrations: ["Surfer SEO", "Grammarly", "WordPress", "Google Docs"]
  },
  {
    id: "12",
    name: "Semrush",
    description: "All-in-one digital marketing toolkit for SEO, content, and social media.",
    longDescription: "Semrush is a comprehensive digital marketing toolkit that provides insights and tools for SEO, PPC, content, social media, and competitive research. It helps businesses improve online visibility and discover marketing opportunities.",
    category: ["Marketing", "Analytics"],
    price: {
      type: "paid",
      startingAt: "$119.95/month"
    },
    popular: true,
    isNew: false,
    industries: ["Marketing", "E-commerce", "Technology", "Media"],
    logo: "/logos/semrush.png",
    website: "https://semrush.com",
    affiliateLink: "https://semrush.com",
    integrations: ["Google Analytics", "Google Search Console", "WordPress", "Trello"]
  },
  {
    id: "13",
    name: "Asana",
    description: "Work management platform for teams to organize and track projects.",
    longDescription: "Asana is a work management platform that helps teams organize, track, and manage their work. It provides tools for task assignment, project timelines, workflow automation, and team collaboration to increase productivity and clarity.",
    category: ["Project Management", "Productivity", "Communication"],
    price: {
      type: "freemium",
      startingAt: "$10.99/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Marketing", "Media", "Design"],
    logo: "/logos/asana.png",
    website: "https://asana.com",
    affiliateLink: "https://asana.com",
    integrations: ["Slack", "Google Drive", "Dropbox", "Zoom", "Microsoft Teams"]
  },
  {
    id: "14",
    name: "Anthropic Claude",
    description: "Advanced AI assistant focused on helpful, harmless, and honest responses.",
    longDescription: "Anthropic Claude is an AI assistant designed to be helpful, harmless, and honest. It excels at thoughtful dialogue, content creation, creative writing, and reasoning, making it a valuable tool for businesses seeking reliable AI assistance.",
    category: ["AI", "Productivity"],
    price: {
      type: "freemium",
      startingAt: "$20/month"
    },
    popular: false,
    isNew: true,
    industries: ["Technology", "Education", "Marketing", "Media"],
    logo: "/logos/anthropic.png",
    website: "https://anthropic.com",
    affiliateLink: "https://anthropic.com",
    integrations: ["Slack", "Notion", "Various AI platforms"]
  },
  {
    id: "15",
    name: "Slack",
    description: "Business communication platform for teams and workplaces.",
    longDescription: "Slack is a channel-based messaging platform that brings people, information, and tools together. It transforms how organizations communicate by creating a more productive and collaborative workspace for teams of all sizes.",
    category: ["Communication", "Productivity"],
    price: {
      type: "freemium",
      startingAt: "$7.25/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Marketing", "Design", "Finance", "Media"],
    logo: "/logos/slack.png",
    website: "https://slack.com",
    affiliateLink: "https://slack.com",
    integrations: ["Google Drive", "Asana", "Trello", "Zoom", "HubSpot"]
  },
  {
    id: "16",
    name: "Adobe Creative Cloud",
    description: "Collection of creative applications for photography, design, video, and web.",
    longDescription: "Adobe Creative Cloud is a suite of applications for photography, design, video, web, and UX. It includes industry-standard tools like Photoshop, Illustrator, and Premiere Pro, enabling creative professionals to bring their ideas to life.",
    category: ["Design", "Development", "Marketing"],
    price: {
      type: "paid",
      startingAt: "$52.99/month"
    },
    popular: true,
    isNew: false,
    industries: ["Design", "Media", "Marketing", "Technology"],
    logo: "/logos/adobe.png",
    website: "https://adobe.com",
    affiliateLink: "https://adobe.com",
    integrations: ["Dropbox", "Microsoft Teams", "Slack", "Asana"]
  },
  {
    id: "17",
    name: "GitHub",
    description: "Platform for software development and version control using Git.",
    longDescription: "GitHub is a platform and cloud-based service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, and more.",
    category: ["Development", "Productivity"],
    price: {
      type: "freemium",
      startingAt: "$4/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Development", "Education"],
    logo: "/logos/github.png",
    website: "https://github.com",
    affiliateLink: "https://github.com",
    integrations: ["Jira", "Slack", "CircleCI", "ZenHub"]
  },
  {
    id: "18",
    name: "Miro",
    description: "Online collaborative whiteboard platform for team innovation.",
    longDescription: "Miro is an online collaborative whiteboard platform designed for remote and distributed teams. It provides a space for teams to collaboratively brainstorm, plan, map user journeys, and visualize concepts in real-time.",
    category: ["Productivity", "Communication", "Project Management"],
    price: {
      type: "freemium",
      startingAt: "$8/month"
    },
    popular: false,
    isNew: false,
    industries: ["Design", "Technology", "Education", "Marketing"],
    logo: "/logos/miro.png",
    website: "https://miro.com",
    affiliateLink: "https://miro.com",
    integrations: ["Slack", "Microsoft Teams", "Asana", "Jira", "Zoom"]
  },
  {
    id: "19",
    name: "Salesforce",
    description: "Customer relationship management platform for sales, service, and marketing.",
    longDescription: "Salesforce is a comprehensive customer relationship management (CRM) platform that brings companies and customers together. It's an integrated platform that gives all departments a single, shared view of every customer across sales, service, and marketing.",
    category: ["Sales", "Marketing", "Customer Support"],
    price: {
      type: "paid",
      startingAt: "$25/month"
    },
    popular: true,
    isNew: false,
    industries: ["Technology", "Finance", "Healthcare", "Manufacturing", "Retail"],
    logo: "/logos/salesforce.png",
    website: "https://salesforce.com",
    affiliateLink: "https://salesforce.com",
    integrations: ["Slack", "Outlook", "DocuSign", "MailChimp", "QuickBooks"]
  },
  {
    id: "20",
    name: "Grammarly",
    description: "Writing assistant that checks grammar, spelling, and style.",
    longDescription: "Grammarly is an AI-powered writing assistant that checks text for grammar, spelling, punctuation, clarity, engagement, and delivery mistakes. It helps individuals and businesses communicate more effectively through clear, error-free writing.",
    category: ["Productivity", "AI"],
    price: {
      type: "freemium",
      startingAt: "$12/month"
    },
    popular: true,
    isNew: false,
    industries: ["Education", "Media", "Marketing", "Technology"],
    logo: "/logos/grammarly.png",
    website: "https://grammarly.com",
    affiliateLink: "https://grammarly.com",
    integrations: ["Microsoft Office", "Google Docs", "Chrome", "Safari", "Firefox"]
  }
];
