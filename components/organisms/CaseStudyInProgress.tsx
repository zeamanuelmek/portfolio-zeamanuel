'use client';

import { Stack, Group, Anchor, Button as MantineButton } from '@mantine/core';
import { IconClock, IconExternalLink, IconBrandFigma, IconArrowRight } from '@tabler/icons-react';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Badge } from '@/components/atoms/Badge';
import { Divider } from '@/components/atoms/Divider';

export interface CaseStudyLink {
  label: string;
  url: string;
  type: 'figma' | 'live' | 'github';
}

interface CaseStudyInProgressProps {
  projectTitle: string;
  links?: CaseStudyLink[];
  note?: string;
}

const iconMap = {
  figma: <IconBrandFigma size={16} />,
  live: <IconExternalLink size={16} />,
  github: <IconExternalLink size={16} />,
};

export function CaseStudyInProgress({ projectTitle, links = [], note }: CaseStudyInProgressProps) {
  return (
    <Stack gap="xl" py="xl" maw={640}>
      {/* Status badge */}
      <Group>
        <Badge
          variant="light"
          color="gold"
          size="lg"
          leftSection={<IconClock size={14} />}
        >
          Case Study in Progress
        </Badge>
      </Group>

      {/* Message */}
      <Stack gap="md">
        <Heading order={3}>
          The full {projectTitle} case study is being written
        </Heading>
        <Text c="dimmed" size="lg" lh={1.6}>
          {note ||
            "The design work is complete. I'm currently documenting the process, decisions, and outcomes into a structured case study. Check back soon, or explore the designs directly using the links below."}
        </Text>
      </Stack>

      {/* Links to actual work */}
      {links.length > 0 && (
        <Stack gap="sm">
          <Text size="sm" tt="uppercase" fw={600} c="dimmed" style={{ letterSpacing: '0.08em' }}>
            See the work now
          </Text>
          <Group gap="sm" wrap="wrap">
            {links.map((link) => (
              <MantineButton
                key={link.url}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant={link.type === 'live' ? 'filled' : 'outline'}
                color="gold"
                size="md"
                radius="xl"
                leftSection={iconMap[link.type]}
                rightSection={<IconArrowRight size={14} />}
              >
                {link.label}
              </MantineButton>
            ))}
          </Group>
        </Stack>
      )}

      <Divider />

      {/* Contact nudge */}
      <Text size="sm" c="dimmed">
        Want to discuss this project?{' '}
        <Anchor href="/contact" c="gold" underline="hover">
          Get in touch
        </Anchor>{' '}
        and I&apos;ll walk you through it directly.
      </Text>
    </Stack>
  );
}
