import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Headphones, Camera, ArrowLeft } from "lucide-react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Mapping interest tags to their icons and descriptions
const interestInfo = {
  reading: {
    icon: BookOpen,
    title: "Reading",
    description: "Science fiction, technical books, and biographies"
  },
  podcasts: {
    icon: Headphones,
    title: "Podcasts",
    description: "Tech news, engineering discussions, and science podcasts"
  },
  photography: {
    icon: Camera,
    title: "Photography",
    description: "Landscape and architectural photography"
  }
};

// Example project data with tags
const projects = [
  {
    title: "Solar Power Monitoring System",
    description: "IoT-based solution for monitoring solar panel performance",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["renewable", "iot", "reading"],
    badges: ["Arduino", "IoT", "Renewable Energy"],
    link: "#"
  },
  {
    title: "Smart Home Energy Management",
    description: "System for optimizing home energy consumption",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["tech", "podcasts"],
    badges: ["Raspberry Pi", "Python", "Machine Learning"],
    link: "#"
  },
  {
    title: "Wireless Power Transfer",
    description: "Experimental setup for wireless energy transmission",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["photography", "landscape"],
    badges: ["Circuit Design", "Electromagnetics", "Power Electronics"],
    link: "#"
  },
  {
    title: "Technical Book Review Blog",
    description: "Personal blog reviewing technical books in electrical engineering",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["reading", "tech"],
    badges: ["Web Development", "Technical Writing", "Book Reviews"],
    link: "#"
  },
  {
    title: "Engineering Podcast Analysis",
    description: "Analysis of key themes across popular engineering podcasts",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["podcasts", "tech"],
    badges: ["Data Analysis", "Content Creation", "Audio Processing"],
    link: "#"
  },
  {
    title: "Urban Architecture Photography Portfolio",
    description: "Collection of architectural photos from around Vancouver",
    image: `${basePath}/project-placeholder.svg`,
    tags: ["photography", "urban"],
    badges: ["Photography", "Urban Design", "Visual Arts"],
    link: "#"
  }
];

// This is a server component
export default function InterestTagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;
  
  // Get interest info or fallback to default
  const interest = interestInfo[tag as keyof typeof interestInfo] || {
    icon: ArrowRight,
    title: tag,
    description: "Projects related to this interest"
  };
  
  const Icon = interest.icon;
  
  // Filter projects by tag
  const filteredProjects = projects.filter(project =>
    project.tags.includes(tag.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Button variant="outline" size="sm" asChild className="self-start mb-2">
          <Link href="/#interests">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Interests
          </Link>
        </Button>
        <Icon className="h-12 w-12 mb-2" />
        <h1 className="text-3xl font-bold capitalize">{interest.title}</h1>
        <p className="text-muted-foreground">{interest.description}</p>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
      
      {filteredProjects.length === 0 ? (
        <div className="bg-muted rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4">No projects found for <span className="font-semibold capitalize">{tag}</span>.</p>
          <Button asChild>
            <Link href="/#projects">View All Projects</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.badges.map((badge, i) => (
                    <Badge key={i} variant="outline">{badge}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.link} className="flex items-center justify-center">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}