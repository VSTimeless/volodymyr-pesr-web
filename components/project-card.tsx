import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-auto sm:h-full flex flex-col">
      <CardHeader className="flex-none p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl line-clamp-1 overflow-hidden">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2 overflow-hidden min-h-[3rem]">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4 sm:p-6 pt-0 sm:pt-0">
        <div className="aspect-video overflow-hidden rounded-lg mb-4 flex-none">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="flex flex-wrap gap-1.5 mt-auto overflow-hidden">
          {project.badges.map((badge, i) => (
            <Badge key={i} variant="outline" className="mb-1 text-xs sm:text-sm">{badge}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-none p-4 sm:p-6 pt-2 sm:pt-4">
        <Button variant="outline" className="w-full h-9 sm:h-10" asChild>
          <Link 
            href={project.link} 
            className="flex items-center justify-center"
            aria-label={`View details for ${project.title} project`}
          >
            <span>View Project</span> <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}