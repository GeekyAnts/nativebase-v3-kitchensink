import React from 'react';
import { Slider, FormControl } from 'native-base';

export const Example = () => {
	return (
		<FormControl.Label nativeID="sliderLabel" w="80%">
			<Slider 
				defaultValue={70} colorScheme="fuchsia" w="100%" 
				aria-label="slider-example" 
				accessibilityLabel="slider example"
				aria-labelledby="sliderLabel"
				nativeID="sliderExample"
			>
				<Slider.Track>
					<Slider.FilledTrack />
				</Slider.Track>
				<Slider.Thumb aria-label="pointer of slider"/>
			</Slider>
		</FormControl.Label>
	);
};
