import React, { FC } from 'react';
import styles from './greeting.module.scss';
import { CardObj, Cards } from '@/components/Card/cards.ts';
import { Card } from '@/components/Card';

export const Greeting: FC = () => {
  return (
    <>
      <div className={styles.greet}>
        <p><span>Hello, Dev.</span></p>
        <p>How can I help you today?</p>
      </div>
      <div className={styles.cards}>
        {Cards.map((item: CardObj, index: number) =>
          <Card key={index} text={item.text} icon={item.icon} />,
        )}
      </div>
    </>
  );
};