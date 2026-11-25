import type { ImgHTMLAttributes } from 'react';
import { useVisibleOnce } from '@/hooks/useVisibleOnce';

export default function LazyImage({
  src,
  srcSet,
  alt,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const { ref, visible } = useVisibleOnce<HTMLImageElement>();

  return (
    <img
      {...props}
      ref={ref}
      alt={alt}
      src={visible ? src : undefined}
      srcSet={visible ? srcSet : undefined}
      loading="eager"
      decoding="async"
    />
  );
}
