import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { blogPosts } from "@/data/blogPosts";
import blogMissedCall from "@/assets/blog-missed-call.jpg";
import blogGoogleReviews from "@/assets/blog-google-reviews.jpg";
import blogSpeedToLead from "@/assets/blog-speed-to-lead.jpg";

const thumbnailMap: Record<string, string> = {
  "missed-call-text-back-hvac-plumbing": blogMissedCall,
  "get-more-google-reviews-home-services-contractors": blogGoogleReviews,
  "speed-to-lead-home-services": blogSpeedToLead,
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Blog – Insights for Home Service Businesses"
        description="Practical tips on capturing more leads and reviews, responding faster, and growing your home service business."
        path="/blog"
      />
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Insights for Home Service Businesses
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Practical tips on capturing more leads and reviews, responding faster, and growing your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group card-elevated flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={thumbnailMap[post.slug] || post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <time className="text-xs text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
