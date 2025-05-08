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
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-none">
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="aspect-video overflow-hidden rounded-lg mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.badges.map((badge, i) => (
            <Badge key={i} variant="outline">{badge}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-none pt-6">
        <Button variant="outline" className="w-full" asChild>
          <Link href={project.link} className="flex items-center justify-center">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}