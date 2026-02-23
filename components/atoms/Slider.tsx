import {
  Slider as MantineSlider,
  type SliderProps as MantineSliderProps,
} from '@mantine/core';

export type SliderProps = MantineSliderProps;

export function Slider({ ...props }: SliderProps) {
  return <MantineSlider color="gold" {...props} />;
}
