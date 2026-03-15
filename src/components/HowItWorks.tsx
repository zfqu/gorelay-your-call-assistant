import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted/50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See Relay in action in under a minute.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card-elevated overflow-hidden rounded-xl">
            <AspectRatio ratio={9 / 16}>
              <iframe
                src="https://www.youtube.com/embed/2dRuHPnvIhg"
                title="How Relay Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
