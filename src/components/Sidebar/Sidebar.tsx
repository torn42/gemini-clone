import { FC, useState } from 'react';

import styles from './sidebar.module.scss';
import { assets } from '@/assets';
import { useDispatch, useSelector } from 'react-redux';
import { previousPromptsSelector } from '@/store/chat/selectors.ts';
import { AppDispatch } from '@/store';
import { onSent } from '@/store/chat/asyncActions';
import { newChat, setRecentPrompt } from '@/store/chat/slice.ts';

export const Sidebar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const previousPrompts = useSelector(previousPromptsSelector);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const loadPrompt = async (prompt: string) => {
    dispatch(setRecentPrompt(prompt));
    await dispatch(onSent(prompt));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar__top']}>
        <img
          onClick={() => setIsOpen(!isOpen)}
          className={styles['sidebar__menu']}
          src={assets.menu_icon} alt=""
        />
        <div
          onClick={() => dispatch(newChat())}
          className={styles['sidebar__new-chat']}
        >
          <img src={assets.plus_icon} alt="" />
          {isOpen && <p>New Chat</p>}
        </div>
        {isOpen &&
          <div className={`${styles['sidebar__recent']} ${styles.recent}`}>
            <p className={styles['recent__title']}>Recent</p>
            {previousPrompts.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                key={index + item}
                className={styles['recent__entry']}
              >
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        }
      </div>
      <div className={`${styles['sidebar__bottom']} ${styles.bottom}`}>
        <div className={`${styles['bottom__item']} ${styles['recent__entry']}`}>
          <img src={assets.question_icon} alt="" />
          {isOpen && <p>Help</p>}
        </div>
        <div className={`${styles['bottom__item']} ${styles['recent__entry']}`}>
          <img src={assets.history_icon} alt="" />
          {isOpen && <p>History</p>}
        </div>
        <div className={`${styles['bottom__item']} ${styles['recent__entry']}`}>
          <img src={assets.setting_icon} alt="" />
          {isOpen && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};