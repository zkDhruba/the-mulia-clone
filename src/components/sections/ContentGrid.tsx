import React from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/shared/Heading';
import { Text } from '@/components/shared/Text';
import { cn } from '@/lib/utils';
import { BaseProps } from '@/types';

interface ContentGridProps extends BaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'medium' | 'large';
  centered?: boolean;
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  title,
  subtitle,
  description,
  columns = 3,
  gap = 'medium',
  centered = false,
  className,
}) => {
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gapStyles = {
    small: 'gap-4 lg:gap-6',
    medium: 'gap-8 lg:gap-12',
    large: 'gap-12 lg:gap-16',
  };

  return (
    <Section className={className}>
      <Container>
        {(title || subtitle || description) && (
          <div className={cn(
            'flex flex-col mb-12 lg:mb-16',
            centered ? 'items-center text-center' : 'items-start text-left'
          )}>
            {subtitle && (
              <Heading as="h4" variant="subtitle" className="mb-4">
                {subtitle}
              </Heading>
            )}
            {title && (
              <Heading as="h2" variant="title" className="mb-6 max-w-3xl">
                {title}
              </Heading>
            )}
            {description && (
              <Text variant="lead" className="max-w-2xl text-text-muted">
                {description}
              </Text>
            )}
          </div>
        )}
        
        <div className={cn(
          'grid',
          columnStyles[columns],
          gapStyles[gap]
        )}>
          {children}
        </div>
      </Container>
    </Section>
  );
};
