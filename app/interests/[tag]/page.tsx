import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { interests } from "@/data/interests";
import { projects } from "@/data/projects";

// Generate all possible tag values at build time for static export
export function generateStaticParams() {
  return Object.keys(interests).map(tag => ({ tag }));
}

// This is a static component for output: export
export default function InterestTagPage({ params }: { params: { tag: string } }) {
  const { tag } = params;
  
  // Get interest info
  const interest = interests[tag as keyof typeof interests];
  
  // Filter projects by tag
  const filteredProjects = projects.filter(project =>
    project.tags.includes(tag.toLowerCase())
  );

  // If interest not found, redirect
  if (!interest) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-muted-foreground mb-4">Interest not found.</p>
        <Button asChild>
          <Link href="/#interests">Back to All Interests</Link>
        </Button>
      </div>
    );
  }

  const Icon = interest.icon;

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
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}