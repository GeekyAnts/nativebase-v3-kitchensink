import React from 'react';
import { Slider, FormControl } from 'native-base';

export const Example = () => {
	return (
		<FormControl.Label nativeID="sliderLabel">
			<Slider 
				defaultValue={70} colorScheme="fuchsia" w="80%" 
				aria-label="slider-example" 
				accessibilityLabel="slider example"
				aria-labelledby="sliderLabel"
				nativeID="sliderExample"
			>
				<Slider.Track>
					<Slider.FilledTrack />
				</Slider.Track>
				<Slider.Thumb />
			</Slider>
		</FormControl.Label>
	);
};
