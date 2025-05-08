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
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <Button variant="outline" size="sm" asChild className="self-start mb-2">
          <Link href="/#interests" aria-label="Back to all interests">
            <ArrowLeft className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Back to Interests
          </Link>
        </Button>
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 mb-2" aria-hidden="true" />
        <h1 className="text-2xl sm:text-3xl font-bold capitalize">{interest.title}</h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">{interest.description}</p>
      </div>
      
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Related Projects</h2>
      
      {filteredProjects.length === 0 ? (
        <div className="bg-muted rounded-lg p-6 sm:p-8 text-center">
          <p className="text-muted-foreground mb-4">No projects found for <span className="font-semibold capitalize">{tag}</span>.</p>
          <Button asChild>
            <Link href="/#projects">View All Projects</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}