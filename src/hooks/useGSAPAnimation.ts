import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion';
import { DependencyList } from 'react';

gsap.registerPlugin(ScrollTrigger);

type AnimationCallback = (context: gsap.Context, gsapInstance: typeof gsap, ST: typeof ScrollTrigger) => void | (() => void);

interface UseGSAPAnimationOptions {
  scope?: React.RefObject<Element | null> | string | Element;
  dependencies?: unknown[];
  revertOnUpdate?: boolean;
}

export function useGSAPAnimation(
  callback: AnimationCallback,
  options: UseGSAPAnimationOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();
  const { scope, dependencies = [], revertOnUpdate } = options;

  useGSAP(
    (context, contextSafe) => {
      if (prefersReducedMotion) {
        // Simple instant reveal fallback if needed, but usually we just skip animations
        return;
      }

      return callback(context, gsap, ScrollTrigger);
    },
    { scope, dependencies, revertOnUpdate }
  );
}
