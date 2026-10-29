import { useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { faces, type FaceId } from '../content/cube';
import type { Locale } from '../store';

const depth = 'translateZ(calc(0px - var(--half)))';

function transformFor(face: FaceId) {
  const { x, y } = faces[face];
  return `${depth} rotateX(${x}deg) rotateY(${y}deg)`;
}

/** One animation owner for navigation and language throws, with no timeout locks. */
export function useCubeMotion(
  element: RefObject<HTMLDivElement | null>,
  face: FaceId,
  locale: Locale,
  enabled: boolean,
) {
  const previous = useRef({ face, locale, enabled });
  const activeAnimation = useRef<Animation | null>(null);
  const [moving, setMoving] = useState(false);

  useLayoutEffect(() => {
    const before = previous.current;
    previous.current = { face, locale, enabled };
    const node = element.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const changed = before.face !== face || before.locale !== locale;

    if (!node || !enabled || !before.enabled || !changed || media.matches || document.hidden) {
      setMoving(false);
      return;
    }

    const target = transformFor(face);
    const { x, y } = faces[face];
    const languageChanged = before.locale !== locale;
    const frames: Keyframe[] = languageChanged ? [
      { transform: transformFor(before.face), offset: 0 },
      { transform: `${depth} translateY(-45px) scale(.72) rotateX(${x + 150}deg) rotateY(${y + 260}deg) rotateZ(-14deg)`, offset: .35 },
      { transform: `${depth} translateY(-20px) scale(.84) rotateX(${x + 310}deg) rotateY(${y + 640}deg) rotateZ(8deg)`, offset: .72 },
      { transform: `${depth} translateY(6px) scale(.98) rotateX(${x + 360}deg) rotateY(${y + 720}deg) rotateZ(0deg)`, offset: .92 },
      { transform: `${depth} rotateX(${x + 360}deg) rotateY(${y + 720}deg) rotateZ(0deg)`, offset: 1 },
    ] : [{ transform: transformFor(before.face) }, { transform: target }];

    setMoving(true);
    let disposed = false;
    let animation: Animation;
    try {
      animation = node.animate(frames, {
        duration: languageChanged ? 800 : 500,
        easing: 'cubic-bezier(.33,0,.25,1)',
      });
    } catch {
      // An unavailable animation API must never prevent reading the content.
      setMoving(false);
      return;
    }
    activeAnimation.current = animation;

    const finish = () => {
      if (disposed || activeAnimation.current !== animation) return;
      activeAnimation.current = null;
      setMoving(false);
    };
    void animation.finished.then(finish, finish);

    const skipMotion = () => {
      if (media.matches || document.hidden) {
        animation.cancel();
        finish();
      }
    };
    media.addEventListener('change', skipMotion);
    document.addEventListener('visibilitychange', skipMotion);
    return () => {
      disposed = true;
      activeAnimation.current = null;
      animation.cancel();
      media.removeEventListener('change', skipMotion);
      document.removeEventListener('visibilitychange', skipMotion);
    };
  }, [element, face, locale, enabled]);

  return moving;
}
