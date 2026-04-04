import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";

// Article content components keyed by slug
const articleContent: Record<string, React.ReactNode> = {
  "missed-call-text-back-hvac-plumbing": (
    <div className="prose prose-lg max-w-none">
      <p className="text-xl text-muted-foreground">
        Content coming soon. Check back shortly for the full article.
      </p>
      <p>
        In the meantime, learn more about our{" "}
        <Link to="/features/missed-call-text-back" className="text-primary hover:underline font-medium">
          Missed Call Text Back
        </Link>{" "}
        feature and how it helps HVAC and plumbing businesses capture every lead.
      </p>
    </div>
  ),
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="section-padding">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 inline-block"
            >
              ← Back to Blog
            </Link>
            <time className="block text-sm text-muted-foreground mb-3">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="leading-relaxed text-foreground/90 space-y-6 [&_a]:text-primary [&_a]:font-medium [&_a:hover]:underline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-base [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2">
              {articleContent[post.slug] || (
                <p className="text-muted-foreground">Article content coming soon.</p>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
