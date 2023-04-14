import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Block } from '@components';

export const LoadingComp = ({ isLoading }: { isLoading: boolean }) => {
  // render
  if (!isLoading) {
    return null;
  }

  return (
    <Block
      width={'100%'}
      height={'100%'}
      position="absolute"
      top={0}
      left={0}
      right={0}
      middle
      justifyContent="center"
      zIndex={1}>
      <Block
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        color="black"
        opacity={0.3}
      />
      <ActivityIndicator size={'small'} color={'black'} />
    </Block>
  );
};
