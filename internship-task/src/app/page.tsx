import Image from "next/image";

const navItems = ["Home", "Studio", "Services", "Contact", "FAQ's"];

const heroPeople = [
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=360&q=80", alt: "Team member 1", cls: "p1" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=360&q=80", alt: "Team member 2", cls: "p2" },
  { src: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=360&q=80", alt: "Team member 3", cls: "p3" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=360&q=80", alt: "Team member 4", cls: "p4" },
  { src: "https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=360&q=80", alt: "Team member 5", cls: "p5" },
  { src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=360&q=80", alt: "Team member 6", cls: "p6" },
];

const offerRows = [
  {
    left: ["Office of multiple", "interest content"],
    title: "Colaborative & partnership",
  },
  {
    left: ["The hanger US Air force", "digital experimental"],
    title: "We talk about our weight",
  },
  {
    left: ["Delta faucet content,", "social, digital"],
    title: "Piloting digital confidence",
  },
];

const footerColumns = [
  {
    title: "Company",
    items: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    items: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
  },
  {
    title: "Follow Us",
    items: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
  {
    title: "Terms & Policies",
    items: ["1498w Fluton ste, STE", "2D Chicgo, IL 63867.", "(123) 456789000", "info@elementum.com"],
  },
];

function Stroke({ className = "" }: { className?: string }) {
  return <span className={`stroke ${className}`.trim()} aria-hidden="true" />;
}

function RoundPhoto({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <figure className={`round ${className}`.trim()}>
      <Image src={src} alt={alt} fill sizes="(max-width: 900px) 33vw, 220px" priority={priority} />
    </figure>
  );
}

export default function Home() {
  return (
    <main className="figma-page">
      <section className="container section-space header-wrap">
        <header className="topbar">
          <a href="#" className="logo" aria-label="Elementum home">
            Elementum
          </a>

          <nav className="topnav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href="#" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <button type="button" className="menu-btn" aria-label="Open menu">
            <span />
            <span />
          </button>
        </header>
      </section>

      <section className="container hero">
        <div className="hero-copy">
          <h1>
            <span className="hero-line hero-line-top">
              <span>The thinkers and</span>
            </span>
            <span className="hero-line hero-line-middle">
              <span>doers were</span>
              <span className="pill pink">changing</span>
            </span>
            <span className="hero-line hero-line-bottom">
              <span>the</span>
              <span className="pill green">status</span>
              <span>quo with</span>
            </span>
          </h1>

          <Stroke className="hero-s1" />
          <Stroke className="hero-s2" />

          <p>
            We are a team of strategists, designers, communicators, and researchers. Together,
            <br />
            we believe progress only happens when you refuse to play things safe.
          </p>
        </div>

        <div className="hero-ornaments" aria-hidden="true">
          <div className="purple-cut" />
          <div className="left-wiggle" />
        </div>

        <div className="people-strip" aria-label="Team members">
          {heroPeople.map((person, i) => (
            <RoundPhoto
              key={person.alt}
              src={person.src}
              alt={person.alt}
              className={person.cls}
              priority={i < 2}
            />
          ))}
        </div>
      </section>

      <section className="container feature top-feature section-space">
        <div className="feature-copy">
          <h2>
            <span className="inked">Tomorrow</span> should
            <br />
            be better than <span className="pill green">today</span>
          </h2>
          <Stroke className="feature-s1" />
          <p>
            We are a team of strategists, designers communicators, researchers.
            <br />
            Together, we belive that progress only hghappens when you refuse
            <br />
            to play things safe.
          </p>
          <a href="#" className="read-link">
            Read more <span>⟶</span>
          </a>
        </div>

        <div className="feature-media">
          <RoundPhoto
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Business meeting"
            className="feature-round lg"
            priority
          />
          <div className="triangle tri-a" aria-hidden="true" />
        </div>
      </section>

      <section className="container feature bottom-feature section-space">
        <div className="feature-media">
          <RoundPhoto
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaboration"
            className="feature-round md"
          />
          <div className="triangle tri-b" aria-hidden="true" />
        </div>

        <div className="feature-copy">
          <h2>
            <span className="pill green">See</span> how we can
            <br />
            help you <span className="inked">progress</span>
          </h2>
          <Stroke className="feature-s2" />
          <p>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="read-link">
            Read more <span>⟶</span>
          </a>
        </div>
      </section>

      <section className="container offers section-space">
        <h2>
          What we can
          <br />
          <span className="inked">offer</span> you!
        </h2>
        <Stroke className="offer-s1" />
        <Stroke className="offer-s2" />

        <ul>
          {offerRows.map((row) => (
            <li key={row.title}>
              <p>
                {row.left.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
              <h3>{row.title}</h3>
              <a href="#" aria-label={`Open ${row.title}`}>
                ⟶
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="container testimonials section-space">
        <h2>
          <span className="pill green">What</span> our customer
          <br />
          says <span className="inked">About Us</span>
        </h2>
        <Stroke className="test-s1" />
        <Stroke className="test-s2" />

        <article>
          <p>
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn&apos;t used, which have also proved to be easy to use and reliable
          </p>
        </article>

        <RoundPhoto src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=320&q=80" alt="Client 1" className="float f1" />
        <RoundPhoto src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=320&q=80" alt="Client 2" className="float f2" />
        <RoundPhoto src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=320&q=80" alt="Client 3" className="float f3" />
        <RoundPhoto src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=320&q=80" alt="Client 4" className="float f4" />
        <RoundPhoto src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=320&q=80" alt="Client 5" className="float f5" />
      </section>

      <section className="newsletter-wrap">
        <div className="container newsletter">
          <div className="arrow-waves" aria-hidden="true" />
          <h2>
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p>To make your stay special and even more memorable</p>
          <button type="button">Subscribe Now</button>
          <div className="purple-cut newsletter-cut" aria-hidden="true" />

          <footer>
            {footerColumns.map((col, index) => (
              <section key={`${col.title}-${index}`}>
                <h4>{col.title}</h4>
                <ul>
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </footer>
        </div>
      </section>
    </main>
  );
}
