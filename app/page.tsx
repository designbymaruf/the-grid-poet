import Image from 'next/image'
const cards = [
  {
    href: '#watch',
    label: 'Watch',
    eyebrow: 'YouTube / moving images',
    title: 'Ideas in motion.',
    className: 'watch-card',
    content: <span className="play-orb" aria-hidden="true">↗</span>,
  },
  {
    href: '#work',
    label: 'Work',
    eyebrow: 'Selected projects',
    title: 'Designing with a point of view.',
    className: 'work-card',
    content: <span className="work-stamp" aria-hidden="true">GP<br />/ 01</span>,
  },
  {
    href: '#photography',
    label: 'Photography',
    eyebrow: 'Light / place / pause',
    title: 'Found frames.',
    className: 'photo-card',
    content: <span className="photo-caption">A little closer to the world.</span>,
  },
  {
    href: '#journal',
    label: 'Journal / Notes',
    eyebrow: 'Writing & observations',
    title: 'Things worth keeping.',
    className: 'journal-card',
    content: <span className="journal-mark" aria-hidden="true">✳</span>,
  },
  {
    href: '#about',
    label: 'About',
    eyebrow: 'A short introduction',
    title: 'The person behind the grid.',
    className: 'about-card',
    content: null,
  },
  {
    href: '#resources',
    label: 'Resources',
    eyebrow: 'Useful things, gathered',
    title: 'Good tools & references.',
    className: 'resources-card',
    content: <span className="resource-lines" aria-hidden="true"><i /><i /><i /></span>,
  },
  {
    href: '#contact',
    label: 'Connect',
    eyebrow: 'Say hello',
    title: "Let's make something.",
    className: 'connect-card',
    content: <span className="arrow-mark" aria-hidden="true">↗</span>,
  },
]

function BentoCard({ href, label, eyebrow, title, className, content }: (typeof cards)[number]) {
  return (
    <a className={`bento-card ${className}`} href={href}>
      <div className="card-topline">
        <span>{label}</span>
        <span className="card-index">↗</span>
      </div>
      <div className="card-body">
        <span className="card-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {content}
    </a>
  )
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-meta">
        <a className="brand-lockup" href="/" aria-label="The Grid Poet home">
          <Image src="/pp-logo2.png" alt="The Grid Poet" width={220} height={44} priority />
        </a>
        <p className="edition">Not everything needs a category,<br />some things just need a place to exist</p>
        <span className="date-mark">2026 — ∞</span>
      </div>

      <header className="intro-line">
        <span>Choose your entrance</span>
        <span className="intro-rule" aria-hidden="true" />
        <span>Scroll to explore <b>↓</b></span>
      </header>

      <section className="bento-grid" aria-label="The Grid Poet navigation">
        {cards.map((card) => <BentoCard key={card.label} {...card} />)}
        <div className="grid-signature" aria-hidden="true">the<br /><em>grid</em><br />poet</div>
      </section>

      <footer className="site-footer">
        <span>© The Grid Poet</span>
        <span>Made for curious minds</span>
        <span className="footer-dot" aria-hidden="true" />
      </footer>
    </main>
  )
}

