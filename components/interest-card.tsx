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
      className="block rounded-lg transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-1 flex flex-col items-center text-center">
          <Icon className="h-8 w-8 mb-2" />
          <CardTitle>{interest.title}</CardTitle>
          <CardDescription className="line-clamp-2">{interest.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}