import React from 'react';
import { Spinner } from 'native-base';

export const Example = () => {
  return (
    
    <Spinner 
      size="lg"
      accessibilityLabel="Loading posts" 
      _light={{
        color: 'green.500',
      }}
      _dark={{
        color: 'green.200',
      }}
    />
  );
};
