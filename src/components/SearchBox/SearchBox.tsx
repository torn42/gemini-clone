import React, { FC } from 'react';
import styles from './SearchBox.module.scss';
import { setInputValue } from '@/store/chat/slice.ts';
import { assets } from '@/assets';
import { onSent } from '@/store/chat/asyncActions.ts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { inputValueSelector } from '@/store/chat/selectors.ts';

export const SearchBox: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const inputValue = useSelector(inputValueSelector);

  return (
    <div className={styles['search-box']}>
      <input
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setInputValue(event.target.value))}
        type="text"
        placeholder="Enter a prompt here" />
      <div>
        <img src={assets.gallery_icon} alt="" />
        <img src={assets.mic_icon} alt="" />
        {inputValue && <img
          onClick={() => dispatch(onSent(inputValue))}
          src={assets.send_icon} alt=""
        />}
      </div>
    </div>
  );
};