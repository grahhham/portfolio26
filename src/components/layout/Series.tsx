// import React, { ReactNode } from 'react';
import { Card } from '@/components/layout/Card';
import { CardDataElement } from '@/types/Data';
import Link from 'next/link';

interface SeriesProps {
  seriesId: string;
  id: string;
  name: string;
  desc: string;
  cards: CardDataElement[];
}

export function Series({ seriesId, id, cards, name, desc }: SeriesProps) {
  return <li id={id} className="max fade-in series-container">
    <div className="series-info">
      <h2 className="series-flag series-title">{name}</h2>
      <div className="series-flag series-desc">{desc}</div>
    </div>
    <ul className="columns">
      {cards.map((card, i) => {
        const idKey = "s-"+seriesId+"-c-"+i;
        return (
          <li
            key={idKey}
          >
            <Card 
              id={idKey}
              data={card}
              animationDelay={(0.3+(i*0.15))+"s"}
            >
              {/* Copying Button component styling */}
              <li className="button-container">
                <Link 
                  href={
                    card.img_url+(
                      card.url_suffix ? 
                        (card.url_suffix + card.w)
                        : ""
                    )
                  }
                  target='_blank'
                  rel="noreferrer"
                  className="card-button"
                >
                  View
                  <span className="button-indicator"></span>
                </Link>
              </li>
            </Card>
          </li>
        )
      })}
    </ul>
  </li>;
}