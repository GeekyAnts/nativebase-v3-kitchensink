import React from 'react';
import renderer from 'react-test-renderer';
import { NativeBaseProvider } from 'native-base';
import { BaseTheme } from '../src/theme';
import config from '../nativebase.config';
import { Example } from '../src/components/NativeBaseComponents/ZStack';

BaseTheme.config.initialColorMode='dark';

jest.useFakeTimers();

const Provider = (props: any) => {
  return (
    <NativeBaseProvider
    theme={BaseTheme} 
    config={config}
      {...props}
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    />
  );
};

it('renders correctly', () => {
  const tree = renderer
    .create(<Provider><Example /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});