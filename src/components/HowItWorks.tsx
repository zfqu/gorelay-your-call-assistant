import { AspectRatio } from "@/components/ui/aspect-ratio";

const videos = [
  {
    title: "Lead capture",
    embedUrl: "https://www.youtube.com/embed/2E5fOesCJyY",
  },
  {
    title: "Review booster",
    embedUrl: "https://www.youtube.com/embed/YzhUGKAJJy0",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {videos.map((video) => (
            <div key={video.title} className="flex flex-col items-center gap-3">
              <h3 className="text-xl font-semibold text-foreground">{video.title}</h3>
              <div className="w-full max-w-xs card-elevated overflow-hidden rounded-xl">
                <AspectRatio ratio={9 / 16}>
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
