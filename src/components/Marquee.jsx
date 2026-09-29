import React from 'react';


const Marquee = () => {

  const items = [
    {
      name: 'WordPress',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 34 L38 64 L48 40 L58 64 L70 34" />
        </g>
      )
    },
    {
      name: 'Shopify',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="28" y="38" width="40" height="34" rx="6" />
          <path d="M38 38 V32 A10 10 0 0 1 58 32 V38" />
        </g>
      )
    },
    {
      name: 'Laravel',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 26 V66 H62" />
          <circle cx="62" cy="34" r="4.5" fill="#000" stroke="none" />
        </g>
      )
    },
    {
      name: 'Webflow',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="26" y="28" width="44" height="40" rx="6" />
          <path d="M26 44 H70 M42 44 V68" />
        </g>
      )
    },
    {
      name: 'Next.js',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 68 V28 L62 68 V28" />
        </g>
      )
    },
    {
      name: 'WooCommerce',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 30 H33 L40 56 H62 L68 38 H36" />
          <circle cx="42" cy="66" r="3.5" fill="#000" stroke="none" />
          <circle cx="60" cy="66" r="3.5" fill="#000" stroke="none" />
        </g>
      )
    },
    {
      name: 'Klaviyo',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="26" y="32" width="44" height="32" rx="6" />
          <path d="M29 37 L48 52 L67 37" />
        </g>
      )
    },
    {
      name: 'HubSpot',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="48" cy="48" r="8" />
          <circle cx="26" cy="30" r="5" />
          <circle cx="70" cy="34" r="5" />
          <circle cx="48" cy="72" r="5" />
          <path d="M40 42 L30 34 M56 45 L66 37 M48 56 V67" />
        </g>
      )
    },
    {
      name: 'QuickBooks',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="30" y="24" width="36" height="48" rx="6" />
          <rect x="36" y="30" width="24" height="10" rx="2" />
          <g fill="#000" stroke="none">
            <circle cx="38" cy="52" r="2.5" />
            <circle cx="48" cy="52" r="2.5" />
            <circle cx="58" cy="52" r="2.5" />
            <circle cx="38" cy="62" r="2.5" />
            <circle cx="48" cy="62" r="2.5" />
            <circle cx="58" cy="62" r="2.5" />
          </g>
        </g>
      )
    },
    {
      name: 'Twilio',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 32 a6 6 0 0 1 6 -6 H64 a6 6 0 0 1 6 6 V54 a6 6 0 0 1 -6 6 H46 L34 72 V60 H32 a6 6 0 0 1 -6 -6 Z" />
        </g>
      )
    },
    {
      name: 'API',
      icon: (
        <g fill="none" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M38 34 L24 48 L38 62 M58 34 L72 48 L58 62 M52 30 L44 66" />
        </g>
      )
    }
  ];

  const renderGroup = (hidden = false) => (
    <div className="marquee-group" aria-hidden={hidden}>
      {items.map((item) => (
        <div className="marquee-item" key={item.name}>
          <svg
            viewBox="0 0 96 96"
            aria-hidden="true"
          >
            <rect
              width="96"
              height="96"
              rx="24"
              fill="var(--tile)"
            />

            {item.icon}
          </svg>

          {item.name}
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="marquee"
      aria-label="Technologies I work with"
    >
      <div className="marquee-track">
        {renderGroup()}
        {renderGroup(true)}
      </div>
    </section>
  );
};

export default Marquee;