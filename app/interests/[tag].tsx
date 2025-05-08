import { useRouter } from 'next/router';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
];

export default function InterestTagPage() {
  const router = useRouter();
  const { tag } = router.query;

  const filteredProjects = projects.filter(project =>
    project.tags.includes((tag as string)?.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4 capitalize">Interest: {tag}</h1>
      {filteredProjects.length === 0 ? (
        <p className="text-muted-foreground mb-8">No projects found for <span className="font-semibold">{tag}</span>.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
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
                <Link href={project.link} className="flex items-center justify-center w-full">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 