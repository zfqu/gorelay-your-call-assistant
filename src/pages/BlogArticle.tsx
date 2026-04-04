import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import blogMissedCall from "@/assets/blog-missed-call.jpg";

const thumbnailMap: Record<string, string> = {
  "missed-call-text-back-hvac-plumbing": blogMissedCall,
};

// Article content components keyed by slug
const articleContent: Record<string, React.ReactNode> = {
  "missed-call-text-back-hvac-plumbing": (
    <>
      <p>If you run an HVAC or plumbing business, you already know how this goes.</p>
      <p>Your phone rings while you're in the middle of a job.</p>
      <p>You glance at it, can't pick up, and think — I'll call them back in a bit.</p>
      <p>But by the time you do, they're gone.</p>
      <p>Not because they didn't need your service — but because they didn't wait.</p>
      <p>They called the next company.</p>

      <h2>The Problem Isn't Missed Calls — It's What Happens After</h2>
      <p>Missing a call isn't the real issue. That's just part of the job.</p>
      <p>You're busy on-site, driving, after hours, holidays, and with families — of course you'll miss calls.</p>
      <p>The real problem is what happens next.</p>
      <p>Most contractors rely on calling back later or hoping the customer leaves a voicemail.</p>
      <p>In reality, neither works very well anymore.</p>
      <p>Customers dealing with no heat, a leaking pipe, or a broken AC aren't patient. They're actively looking for someone who can help right now.</p>
      <p>If they don't hear back quickly, they move on.</p>

      <h2>Why Voicemail Quietly Kills Good Leads</h2>
      <p>Voicemail feels like a safety net, but it's not.</p>
      <p>Most people don't leave messages anymore. And even when they do, it's usually something like:</p>
      <p>"Hey, call me back."</p>
      <p>No details. No context.</p>
      <p>By the time you return the call, they've likely already booked someone else.</p>
      <p>It's not that the lead wasn't good — it's that the timing didn't work in your favor.</p>

      <h2>What Actually Works: Responding Instantly (Without Picking Up)</h2>
      <p>The contractors who consistently win more jobs aren't necessarily better at their trade.</p>
      <p>They're just faster to respond.</p>
      <p>That doesn't mean you need to answer every call live.</p>
      <p>But it does mean the customer should hear from you immediately — even if you're busy.</p>
      <p>A simple text like:</p>
      <p>"Sorry we missed your call — how can we help?"</p>
      <p>…can be the difference between winning and losing that job.</p>
      <p>It keeps the conversation alive while the customer is still deciding who to go with.</p>

      <h2>Why Texting Changes the Game</h2>
      <p>Texting works because it fits how people behave now.</p>
      <p>They don't want to play phone tag. They don't want to explain everything twice.</p>
      <p>They just want to quickly say:</p>
      <p>"AC not working"</p>
      <p>"Water heater leaking"</p>
      <p>"Need someone today"</p>
      <p>Once they send that, they're engaged.</p>
      <p>At that point, you're no longer just another missed call — you're already in conversation.</p>

      <h2>Turning That Conversation Into a Real Job</h2>
      <p>This is where most missed call text back setups fall short.</p>
      <p>They send a text — and that's it.</p>
      <p>But the real value comes from turning that conversation into a qualified lead.</p>
      <p>Instead of stopping at one reply, the conversation should naturally gather what you actually need:</p>
      <ul>
        <li>what's going on</li>
        <li>where the job is</li>
        <li>how urgent it is</li>
      </ul>
      <p>So when you follow up, you're not starting from zero.</p>
      <p>If you want to see how that works in practice, check out our <Link to="/features/missed-call-text-back">missed call text back system</Link>.</p>

      <h2>Why This Matters More for HVAC & Plumbing</h2>
      <p>In trades like HVAC and plumbing, most inbound calls are high intent.</p>
      <p>These aren't people browsing.</p>
      <p>They're dealing with something that needs to be fixed — often the same day.</p>
      <p>That urgency is what makes speed so important.</p>
      <p>If your competitor responds first, they usually get the job.</p>

      <h2>You Don't Need to Answer Every Call — But You Do Need to Respond</h2>
      <p>Trying to pick up every call isn't realistic.</p>
      <p>What is realistic is making sure every call gets a response instantly.</p>
      <p>That small shift changes everything:</p>
      <ul>
        <li>fewer missed opportunities</li>
        <li>more conversations started</li>
        <li>more jobs booked</li>
      </ul>

      <h2>If You're Already Getting Calls, This Is the Easiest Win</h2>
      <p>Most contractors don't need more leads.</p>
      <p>They just need to stop losing the ones they already have.</p>
      <p>If your phone is ringing and you're missing even a portion of those calls, there's real revenue being lost.</p>
      <p>Fixing that is often easier — and more impactful — than spending more on ads or SEO.</p>

      <h2>Want to Capture More of the Jobs You're Already Getting?</h2>
      <p>If you want to automatically respond to missed calls, qualify leads over text, and get job details before calling back:</p>
      <p>👉 <Link to="/features/missed-call-text-back">See how it works</Link></p>
    </>
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
