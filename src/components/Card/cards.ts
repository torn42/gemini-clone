import compass from '@/assets/compass_icon.png';
import bulb from '@/assets/bulb_icon.png';
import message from '@/assets/message_icon.png';
import code from '@/assets/code_icon.png';

export interface CardObj {
  text: string;
  icon: string;
}

export const Cards: CardObj[] = [
  {
    text: 'Suggest beautiful places to see on an upcoming road trip',
    icon: compass,
  },
  {
    text: 'Briefly summarize this concept: urban planning',
    icon: bulb,
  },
  {
    text: 'Brainstorm team building activities for our work retreat',
    icon: message,
  },
  {
    text: 'Improve the readability of the following code',
    icon: code,
  },
];