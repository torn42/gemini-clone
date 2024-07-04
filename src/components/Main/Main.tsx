import React, { FC } from 'react';

import styles from './main.module.scss';
import { assets } from '@/assets';
import { useSelector } from 'react-redux';
import { resultSelector } from '@/store/chat/selectors';
import { Greeting } from '../Greeting';
import { Result } from '../Result';
import { SearchBox } from '../SearchBox';

export const Main: FC = () => {
  const showResult = useSelector(resultSelector);

  return (
    <div className={styles.main}>
      <div className={styles['main__nav']}>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className={styles['main__container']}>
        {!showResult
          ? <Greeting />
          : <Result />
        }
        <div className={styles.bottom}>
          <SearchBox />
          <p className={styles['bottom__info']}>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and
            Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};