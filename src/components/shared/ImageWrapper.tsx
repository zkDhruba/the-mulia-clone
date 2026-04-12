import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { withBase } from '@/lib/basePath';

interface ImageWrapperProps extends Omit<ImageProps, 'src'> {
  src?: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  overlay?: boolean;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ 
  src, 
  alt = '', 
  className, 
  aspectRatio = 'landscape',
  overlay = false,
  fill = true,
  ...props 
}) => {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]',
  };

  const placeholderImg = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className={cn(
      'relative overflow-hidden w-full',
      fill ? 'h-full w-full' : aspectRatios[aspectRatio],
      className
    )}>
      <Image
        src={withBase(src || placeholderImg)}
        alt={alt}
        fill={fill}
        className={cn(
          'object-cover transition-transform duration-700 hover:scale-105',
        )}
        {...props}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 hover:bg-black/0" />
      )}
    </div>
  );
};
