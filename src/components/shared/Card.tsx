import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { CardProps } from '@/types';
import { ImageWrapper } from '@/components/shared/ImageWrapper';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { Button } from '@/components/shared/Button';

export const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  description, 
  href, 
  tag,
  className 
}) => {
  const CardContent = (
    <div className={cn(
      'group flex flex-col h-full bg-white transition-all duration-500 hover:shadow-xl rounded-lg overflow-hidden',
      className
    )}>
      <div className="relative aspect-[4/3] overflow-hidden">
        {tag && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-brand-alocasia text-text-alt text-[10px] uppercase tracking-widest font-bold">
              {tag}
            </span>
          </div>
        )}
        <ImageWrapper 
          src={image} 
          alt={title || ''} 
          className="transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <Heading as="h3" variant="card" className="group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </Heading>
          <Text variant="base" className="text-text-muted line-clamp-3">
            {description}
          </Text>
        </div>
        
        {href && (
          <div className="pt-4 mt-auto">
            <Button variant="text" size="sm" className="p-0 h-auto group-hover:translate-x-2 transition-transform duration-300">
              Discover More
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{CardContent}</Link>;
  }

  return CardContent;
};
