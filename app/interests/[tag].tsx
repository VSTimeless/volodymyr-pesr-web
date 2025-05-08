import { useRouter } from 'next/router';

export default function InterestTagPage() {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4 capitalize">Interest: {tag}</h1>
      <p className="text-muted-foreground mb-8">Content related to <span className="font-semibold">{tag}</span> will appear here.</p>
      {/* You can add more content or fetch posts related to the tag here */}
    </div>
  );
} 