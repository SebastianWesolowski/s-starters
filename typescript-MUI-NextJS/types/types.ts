import { EmotionCache } from '@emotion/cache';
import { AppProps as NextAppProps } from 'next/app';

export interface AppProps extends NextAppProps {
  emotionCache: EmotionCache;
}
