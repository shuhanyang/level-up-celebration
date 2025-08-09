import { useEffect } from "react";
import { CheckCircle2, ArrowRight, PartyPopper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import Seo from "@/components/Seo";
import CelebrationConfetti from "@/components/CelebrationConfetti";

const Results = () => {
  useEffect(() => {
    toast({
      title: "Correct! +10 points",
      description: "Your level progress has increased.",
    });
  }, []);

  const currentLevel = 3;
  const gainedPoints = 10;
  const progressToNext = 72; // % toward next level (sample)

  return (
    <>
      <Seo
        title="Quiz Result: Correct! +10 Points"
        description="You answered correctly and earned 10 points. See your level progress and continue to the next question."
      />
      <CelebrationConfetti />

      <header className="sr-only">
        <h1>Quiz Result - Correct Answer</h1>
      </header>

      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <section className="w-full max-w-sm">
          <article className="text-center animate-enter">
            <div className="mx-auto mb-4 flex items-center justify-center">
              <div className="size-20 rounded-full bg-secondary flex items-center justify-center shadow-sm animate-scale-in">
                <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
              </div>
            </div>

            <div className="mb-2 flex items-center justify-center gap-2">
              <PartyPopper className="size-5 text-accent" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">Nice work!</p>
            </div>

            <h2 className="text-2xl font-bold tracking-tight mb-1">Correct! +{gainedPoints} Points</h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <Badge>Level {currentLevel}</Badge>
            </div>

            <Card className="mb-6 animate-fade-in">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Progress to next level</span>
                  <span className="text-sm font-medium">{progressToNext}%</span>
                </div>
                <Progress value={progressToNext} aria-label="Progress to next level" />
                <p className="mt-3 text-sm text-muted-foreground">
                  You gained <span className="font-semibold">{gainedPoints}</span> points on Level {currentLevel}.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-3">
              <Button className="w-full hover-scale" aria-label="Continue to next question">
                Continue
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
              <Button variant="secondary" className="w-full hover-scale" aria-label="Review this question">
                Review answer
              </Button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Results;
