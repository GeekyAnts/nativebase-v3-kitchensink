import React from 'react';
import { Slider, Box } from 'native-base';

export const Example = () => {
	return (
		<Slider defaultValue={70} colorScheme="fuchsia" w="80%" aria-label="slider-example" nativeID="slider1">
			<Slider.Track>
				<Slider.FilledTrack />
			</Slider.Track>
			<Slider.Thumb />
		</Slider>
	);
};
