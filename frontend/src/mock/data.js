// Mock data for the portfolio - this will be replaced with backend integration later

export const mockSkills = {
  technical: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "SQL", level: 90, icon: "🔍" },
        { name: "PySpark", level: 85, icon: "⚡" },
        { name: "PowerShell", level: 80, icon: "💻" },
        { name: "R", level: 75, icon: "📊" },
        { name: "Java", level: 70, icon: "☕" }
      ]
    },
    {
      category: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 90, icon: "☁️" },
        { name: "Azure", level: 85, icon: "🌐" },
        { name: "Databricks", level: 80, icon: "🔥" },
        { name: "Snowflake", level: 85, icon: "❄️" }
      ]
    },
    {
      category: "Data Tools & Technologies",
      skills: [
        { name: "Apache Airflow", level: 85, icon: "🌬️" },
        { name: "Tableau", level: 90, icon: "📈" },
        { name: "Power BI", level: 88, icon: "⚡" },
        { name: "Apache Kafka", level: 80, icon: "🚀" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "SSIS", level: 85, icon: "🔄" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 75, icon: "⚡" }
      ]
    }
  ]
};

export const mockCertifications = [
  {
    id: 1,
    name: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
    verified: true,
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: 2,
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    date: "2024",
    credentialUrl: "#",
    verified: true,
    logo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: 3,
    name: "Python for Data Science, AI & Development",
    issuer: "IBM/Coursera",
    date: "2023",
    credentialUrl: "#",
    verified: true,
    logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=faces"
  },
  {
    id: 4,
    name: "Azure Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "#",
    verified: true,
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=faces"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Data Manager",
    company: "Accenture",
    content: "Thrivikrama's expertise in data pipeline optimization is exceptional. He reduced our processing time by 50% and delivered comprehensive dashboards that transformed our decision-making process.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    linkedIn: "#"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Technical Lead",
    company: "The Arc Erie County",
    content: "Outstanding work on our enterprise data integration project. Thrivikrama's attention to detail and technical skills in PowerShell and Python automation saved us countless hours.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    linkedIn: "#"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    role: "Healthcare Analytics Director",
    company: "SRIT Pvt Ltd",
    content: "Thrivikrama's analytical skills and ability to work with complex healthcare data sets are remarkable. His clustering analysis helped us identify high-risk patient cohorts effectively.",
    avatar: "https://images.unsplash.com/photo-1559628233-7f4d0b5c1d74?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    linkedIn: "#"
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "DevOps Engineer",
    company: "Accenture",
    content: "Collaborative and highly skilled professional. Thrivikrama's work on CI/CD workflows using Azure DevOps was instrumental in achieving our 70% reduction in manual tasks.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
    linkedIn: "#"
  }
];

export const mockContactInfo = {
  email: "thrivikr@buffalo.edu",
  phone: "(716) 253-5373",
  location: "Buffalo, New York, US",
  linkedIn: "https://linkedin.com/in/thrivikramarao-kavuri-7290b6147",
  github: "https://github.com/VikramKavuri",
  availability: "Open to new opportunities",
  timezone: "EST (Eastern Standard Time)"
};

export const mockBlogPosts = [
  {
    id: 1,
    title: "Building Scalable Data Pipelines with Apache Airflow",
    excerpt: "Learn how to design and implement robust data pipelines that can handle massive datasets efficiently.",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Data Engineering", "Apache Airflow", "ETL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    slug: "scalable-data-pipelines-airflow"
  },
  {
    id: 2,
    title: "Machine Learning in Production: Best Practices",
    excerpt: "Essential strategies for deploying and maintaining ML models in production environments.",
    date: "2024-11-28",
    readTime: "10 min read",
    tags: ["Machine Learning", "MLOps", "Production"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    slug: "ml-production-best-practices"
  },
  {
    id: 3,
    title: "Data Governance in the Cloud Era",
    excerpt: "How to implement effective data governance strategies for cloud-native data architectures.",
    date: "2024-11-10",
    readTime: "6 min read",
    tags: ["Data Governance", "Cloud", "Security"],
    image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?w=400&h=250&fit=crop",
    slug: "data-governance-cloud-era"
  }
];