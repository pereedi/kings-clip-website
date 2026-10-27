import { useState } from 'react';
import Icon from './Icon';

const faqItems = [
  {
    id: 1,
    q: 'What makes KingsClip different from traditional NLEs?',
    a: 'KingsClip combines the sub-frame timeline accuracy of heavyweight desktop NLEs with an instant neural rendering core and cloud caching. You get real-time playback on 4K/8K footage with zero proxy generation lag, right on modern hardware.',
  },
  {
    id: 2,
    q: 'Can I export vertical videos for TikTok and Instagram Reels?',
    a: 'Yes! KingsClip natively supports all standard aspect ratios including 9:16 vertical, 16:9 widescreen, 4:5 portrait, and 1:1 square. With Smart Subject Auto-Reframe, your focal point stays dead center without manual keyframing.',
  },
  {
    id: 3,
    q: 'How does the AI audio cleanup and noise reduction perform?',
    a: 'Our neural vocal isolator scrubs out HVAC hum, street traffic, room reverb, and wind distortion with a single click while preserving rich vocal body and warmth.',
  },
  {
    id: 4,
    q: 'Is there really no watermark on the Free tier?',
    a: 'Correct. We believe creators should be able to produce clean, professional work from day one. You can export up to 1080p 60FPS completely unwatermarked on the Free tier forever.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section" id="faq">
      <div className="container--900">
        <div className="section-head--center" style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="eyebrow">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={`faq-icon-rotatable ${isOpen ? 'open' : ''}`}>
                    <Icon name="expand_more" size={24} />
                  </span>
                </button>
                <div className={`faq-body-collapse ${isOpen ? 'open' : ''}`}>
                  <p className="t-body-md" style={{ color: 'var(--on-surface-variant)', paddingBottom: 'var(--space-md)' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
