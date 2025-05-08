import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { type Interest } from "@/data/interests";

interface InterestCardProps {
  interest: Interest;
}

export function InterestCard({ interest }: InterestCardProps) {
  const Icon = interest.icon;
  
  return (
    <Link 
      href={`/interests/${interest.slug}`} 
      className="block rounded-lg transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`View projects related to ${interest.title}`}
    >
      <Card className="h-auto min-h-[160px] sm:h-full sm:min-h-[180px] flex flex-col">
        <CardHeader className="flex-1 flex flex-col items-center text-center justify-center p-4 sm:p-6">
          <Icon className="h-6 w-6 sm:h-8 sm:w-8 mb-2 flex-shrink-0" aria-hidden="true" />
          <CardTitle className="flex-shrink-0 text-lg sm:text-xl">{interest.title}</CardTitle>
          <CardDescription className="line-clamp-2 overflow-hidden mt-1 text-sm sm:text-base max-w-[15rem]">
            {interest.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}