import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageMeta } from "@/components/PageMeta";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import blogMissedCall from "@/assets/blog-missed-call.jpg";
import blogGoogleReviews from "@/assets/blog-google-reviews.jpg";
import blogSpeedToLead from "@/assets/blog-speed-to-lead.jpg";

const thumbnailMap: Record<string, string> = {
  "missed-call-text-back-hvac-plumbing": blogMissedCall,
  "get-more-google-reviews-home-services-contractors": blogGoogleReviews,
  "speed-to-lead-home-services": blogSpeedToLead,
};

// Article content components keyed by slug
const articleContent: Record<string, React.ReactNode> = {
  "speed-to-lead-home-services": (
    <>
      <p>Most contractors think they need more leads.</p>
      <p>They believe more ads, more traffic, means more calls.</p>
      <p>But in many cases, that's a high cost, low ROI option. It may never pan out.</p>
      <p>The real problem to solve is what happens after a lead comes in.</p>
      <p>Because if you're not responding fast enough, those hot leads are lost and never turn into jobs.</p>

      <h2>What "Speed to Lead" Actually Means</h2>
      <p>Speed to lead is simple.</p>
      <p>It's how fast you respond after someone reaches out.</p>
      <p>That could be:</p>
      <ul>
        <li>a phone call</li>
        <li>a web widget/form submission</li>
        <li>a text</li>
      </ul>
      <p>From the customer's perspective, it's not complicated.</p>
      <p>They reach out, and they wait to see who responds first. (most of home service inquiries have high intent).</p>

      <h2>Customers Don't Wait — They Compare</h2>
      <p>Think about how people look for home services.</p>
      <p>If their AC stops working, or there's a plumbing issue, they don't contact just one company.</p>
      <p>They reach out to a few.</p>
      <p>Then they go with whoever responds first and seems reliable.</p>
      <p>Not necessarily the cheapest.</p>
      <p>Not necessarily the best.</p>
      <p>Just the one who got back to them quickly.</p>

      <h2>Where Most Contractors Lose the Job</h2>
      <p>It's usually not because of price.</p>
      <p>It's not because of skill.</p>
      <p>It's because of delay.</p>
      <p>You're on a job or it's after hours.</p>
      <p>You miss a call.</p>
      <p>You plan to follow up later.</p>
      <p>Or a web inquiry comes in from your website, and you don't see it right away.</p>
      <p>By the time you respond, the customer has already moved on.</p>

      <h2>The First Response Wins More Than You Think</h2>
      <p>Speed creates trust.</p>
      <p>When someone hears back quickly, it signals professionalism, reliability, and availability.</p>
      <p>Even a simple response is enough to keep the lead engaged.</p>
      <p>Without that, you're just another option they contacted.</p>

      <h2>It's Not About Being Available 24/7</h2>
      <p>Most small teams can't answer every call or reply instantly.</p>
      <p>That's not realistic.</p>
      <p>But what is realistic is making sure every lead gets a response right away — even if you're busy.</p>
      <p>That could be:</p>
      <ul>
        <li>a missed call text back</li>
        <li>an instant reply to a web widget or form</li>
        <li>a quick acknowledgment message</li>
      </ul>
      <p>If you want to see how missed calls can be handled instantly, take a look at</p>
      <p>👉 <Link to="/features/missed-call-text-back">missed call text back</Link>.</p>

      <h2>Speed Doesn't Mean Rushing — It Means Starting the Conversation</h2>
      <p>You don't need to solve customer's problem in your reply.</p>
      <p>You just need to respond.</p>
      <p>Once the conversation starts, you've already increased your chances of getting the job.</p>
      <p>From there, you can gather details and move things forward.</p>

      <h2>Fast Response + Simple System = More Booked Jobs</h2>
      <p>The contractors who consistently win more work usually have one thing in common.</p>
      <p>They respond fast, every time.</p>
      <p>Not manually. But through a simple system that makes sure no lead is missed.</p>

      <h2>Speed to Lead and Reviews Work Together</h2>
      <p>There's another layer to this.</p>
      <p>Speed helps you win the job.</p>
      <p>Reviews help you win the next job.</p>
      <p>When someone finds your business, they look at how quickly you respond and how many good reviews you have.</p>
      <p>That combination is powerful.</p>
      <p>If you're already responding quickly, the next step is making sure you consistently collect good reviews.</p>
      <p>You can see how that works here:</p>
      <p>👉 <Link to="/features/reviews">review system</Link></p>

      <h2>Most Businesses Don't Have a Lead Problem — They Have a Response Problem</h2>
      <p>Before spending more on ads or SEO, it's worth asking:</p>
      <p>Are you fully capturing the leads you already have?</p>
      <p>Because improving your response speed often has a bigger impact than generating more traffic. And it's the low hanging fruit to act on.</p>

      <h2>A Small Change That Makes a Big Difference</h2>
      <p>You don't need to overhaul your business.</p>
      <p>You just need to make sure every lead gets a fast response.</p>
      <p>That one change can increase conversion, reduce missed opportunities, and turn more inquiries into actual jobs.</p>

      <h2>Want to Respond Faster Without Changing Your Daily Workflow?</h2>
      <p>If you want to make sure every call, text, or web inquiry gets an instant response:</p>
      <p>👉 <Link to="/features/web-widget">See how it works</Link></p>
    </>
  ),
  "get-more-google-reviews-home-services-contractors": (
    <>
      <p>Most contractors don't have a quality problem.</p>
      <p>They have a visibility problem.</p>
      <p>You can do great work, have happy customers, and still struggle to get consistent Google reviews.</p>
      <p>Not because people don't like your service — but because they never get around to leaving one.</p>
      <p>And over time, that adds up.</p>
      <p>Fewer reviews → less trust → fewer calls → less revenue.</p>

      <h2>The Real Reason You're Not Getting Reviews</h2>
      <p>It's not that customers don't want to leave a review.</p>
      <p>It's that they forget.</p>
      <p>Think about what usually happens:</p>
      <p>You finish the job.</p>
      <p>The customer says "thanks."</p>
      <p>You pack up and move on to the next one.</p>
      <p>Maybe later that day — or the next — you think about sending a review link.</p>
      <p>But by then, the moment is gone.</p>
      <p>The customer is back to their routine.</p>
      <p>Your job is no longer top of mind.</p>
      <p>And asking at that point feels easy to ignore.</p>

      <h2>Timing Matters More Than You Think</h2>
      <p>The best time to ask for a review isn't later.</p>
      <p>It's right after the job is done — when the experience is still fresh.</p>
      <p>That's when the customer is:</p>
      <ul>
        <li>still thinking about the service</li>
        <li>still feeling the result</li>
        <li>most likely to respond</li>
      </ul>
      <p>Wait a few hours, and that energy drops.</p>
      <p>Wait a day, and it's mostly gone.</p>
      <p>That's why so many review systems underperform — they ask at the wrong time.</p>

      <h2>Why Most Contractors Don't Ask Consistently</h2>
      <p>Even if you know timing matters, it's hard to execute.</p>
      <p>You're busy.</p>
      <p>You're moving from job to job.</p>
      <p>You're dealing with scheduling, calls, and everything else.</p>
      <p>Remembering to manually send a review request every time just isn't realistic.</p>
      <p>So what happens?</p>
      <p>You ask sometimes.</p>
      <p>You forget most of the time.</p>
      <p>And your review growth stays very slow and inconsistent.</p>

      <h2>What Actually Works: A Simple, Consistent System</h2>
      <p>The contractors who consistently build strong review profiles don't rely on memory.</p>
      <p>They use a simple system.</p>
      <p>After every job, a message goes out automatically.</p>
      <p>Something like:</p>
      <p>"Thanks for choosing us — how did we do?"</p>
      <p>It's not pushy.</p>
      <p>It's not complicated.</p>
      <p>It just starts the conversation.</p>
      <p>From there, the flow naturally leads to a review — at the right moment.</p>
      <p>If you want to see how that works in practice, check out our <Link to="/features/reviews">review system</Link>.</p>

      <h2>Why Asking Directly for a Review Isn't Always the Best Move</h2>
      <p>A lot of people jump straight to:</p>
      <p>"Can you leave us a review?"</p>
      <p>Sometimes that works. But not always.</p>
      <p>A better approach is to start with feedback.</p>
      <p>Ask how the experience was first.</p>
      <p>It gives you a chance to understand the customer experience before sending them to Google. It avoids negative reviews showing up there.</p>

      <h2>More Reviews = More Calls (It's That Simple)</h2>
      <p>When someone searches for a home service provider, they don't overthink it.</p>
      <p>They compare:</p>
      <ul>
        <li>rating</li>
        <li>number of reviews</li>
        <li>how recent they are</li>
      </ul>
      <p>Then they pick.</p>
      <p>If your competitor has significantly more reviews, you're at a disadvantage — even if you do better work.</p>
      <p>Reviews directly impact how many calls you get.</p>

      <h2>You Can Grow Reviews From the Ones You Already Have</h2>
      <p>Most contractors are already doing enough jobs to grow their review count.</p>
      <p>The issue isn't volume.</p>
      <p>It's capture.</p>
      <p>Every completed job is an opportunity for a review.</p>
      <p>Without a system, most of those opportunities are lost.</p>

      <h2>A Small Change That Compounds Over Time</h2>
      <p>If you start consistently collecting reviews after every job, the impact builds quickly.</p>
      <p>A few extra reviews per week becomes:</p>
      <ul>
        <li>dozens per month</li>
        <li>hundreds per year</li>
      </ul>
      <p>Over time, that changes how your business shows up online.</p>
      <p>More trust.</p>
      <p>More clicks.</p>
      <p>More calls.</p>

      <h2>Want a Simple Way to Start Collecting More Reviews?</h2>
      <p>If you want to consistently ask at the right time — without having to remember every time:</p>
      <p>👉 <Link to="/features/reviews">See how the review system works</Link></p>
    </>
  ),
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
            {thumbnailMap[post.slug] && (
              <img
                src={thumbnailMap[post.slug]}
                alt={post.title}
                className="w-full rounded-lg mb-8 aspect-[16/10] object-cover"
              />
            )}
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
