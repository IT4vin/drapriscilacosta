import type { VideoHTMLAttributes } from 'react';
import { useVisibleOnce } from '@/hooks/useVisibleOnce';

export default function LazyVideo({
  poster,
  src,
  children,
  ...props
}: VideoHTMLAttributes<HTMLVideoElement>) {
  const { ref, visible } = useVisibleOnce<HTMLVideoElement>();

  return (
    <video
      {...props}
      ref={ref}
      poster={visible ? poster : undefined}
      src={visible ? src : undefined}
      preload="none"
    >
      {visible ? children : null}
    </video>
  );
}
