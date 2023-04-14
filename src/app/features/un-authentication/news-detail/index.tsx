import React, { useMemo } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

import { Block, Button, Icon, Spacer, Text } from '@components';
import { goBack } from '@navigation/navigation-service';
import { APP_SCREEN, StackScreenProps } from '@navigation/screen-types';

export const NewsDetail = ({
  route,
}: StackScreenProps<APP_SCREEN.NewDetail>) => {
  route;

  const insets = useSafeAreaInsets();

  const params = useMemo(() => route?.params, [route]);

  return (
    <Block
      color="white"
      block
      paddingTop={insets.top}
      paddingHorizontal={16}
      middle>
      <Block middle direction="row" paddingHorizontal={8}>
        <Button onPress={goBack}>
          <Icon icon="back" />
        </Button>
        <Spacer width={8} />
        <Text center text={params?.title || ''} fontWeight="700" />
      </Block>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: params?.link }}
        startInLoadingState
      />
    </Block>
  );
};
