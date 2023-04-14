import React, { useEffect, useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Block, Text } from '@components';
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list';
import axios from 'axios';
import xml2js from 'xml2js';

import { NewsItem } from './components/news-item';
import { NewsItemType } from './type';

const URL = 'https://vnexpress.net/rss/tin-moi-nhat.rss';

export const BasicNews = () => {
  const [data, setData] = useState<Array<NewsItemType>>([]);

  const insets = useSafeAreaInsets();

  const handleRenderItem = ({ item }: ListRenderItemInfo<NewsItemType>) => {
    return <NewsItem item={item} />;
  };

  // effect
  useEffect(() => {
    axios.get(URL).then((res: any) => {
      // parse xml to json
      // set data
      // setData
      const parser = new xml2js.Parser();

      parser?.parseString(res.data, function (_err: any, result: any) {
        setData(
          result.rss.channel[0].item.map((item: any) => ({
            ...item,
            linkDetail: item.link?.[0],
            commentsCount: Number(item?.['slash:comments']?.[0] || 0),
          })),
        );
      });
    });
  }, []);

  return (
    <Block block paddingTop={insets.top} paddingHorizontal={16}>
      <Block marginBottom={16}>
        <Text
          text="Tin mới nhất - VnExpress RSS"
          fontSize={18}
          fontWeight="700"
        />
      </Block>
      <FlashList
        data={data}
        renderItem={handleRenderItem}
        estimatedItemSize={80}
        showsVerticalScrollIndicator={false}
      />
    </Block>
  );
};
