import React from 'react';

import { Block, Button, Spacer, Text } from '@components';
import { navigationRef } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';

import { NewsItemProps } from '../type';

export const NewsItem = ({ item }: NewsItemProps) => {
  const handleToDetail = () => {
    navigationRef.current?.navigate(APP_SCREEN.NewDetail, {
      title: item.title,
      link: item.linkDetail,
    });
  };

  // render
  return (
    <Block
      color="white"
      borderRadius={8}
      paddingHorizontal={16}
      paddingVertical={16}
      marginBottom={8}>
      <Text text={item.title} fontWeight="700" />

      <Spacer height={8} />
      <Block>
        <Text text={'Comments: ' + item.commentsCount} fontSize={12} />
      </Block>
      <Spacer height={16} />
      <Button onPress={handleToDetail}>
        <Text text={'Click to detail!'} color="blue" />
      </Button>
    </Block>
  );
};
