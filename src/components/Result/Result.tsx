import React, { FC } from 'react';
import styles from './result.module.scss';
import { assets } from '@/assets';
import { Status } from '@/store/chat/types.ts';
import { useSelector } from 'react-redux';
import { chatSelector } from '@/store/chat/selectors.ts';

export const Result: FC = () => {
  const { recentPrompt, resultData, status } = useSelector(chatSelector);
 
  return (
    <div className={styles.result}>
      <div className={styles['result__title']}>
        <img src={assets.user_icon} alt="" />
        <p>{recentPrompt}</p>
      </div>
      <div className={styles['result__data']}>
        <img src={assets.gemini_icon} alt="" />
        {status === Status.LOADING
          ? <div className={styles['result__loader']}>
            <hr />
            <hr />
            <hr />
          </div>
          : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
        }
      </div>
    </div>
  );
};