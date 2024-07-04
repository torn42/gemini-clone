import React, { FC } from 'react';
import styles from './card.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { setInputValue } from '@/store/chat/slice.ts';

interface CardProps {
  text: string;
  icon: string;
}

export const Card: FC<CardProps> = ({ text, icon }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div onClick={() => dispatch(setInputValue(text))} className={styles.card}>
      <p>{text}</p>
      <img src={icon} alt="" />
    </div>
  );
};