import React, { 
    useState, 
    useEffect, 
    useContext 
} from 'react';

import {
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  View
} from 'react-native';

import { 
    GlobalContext 
} from "context/provider";

import {
    fetchNews
} from 'context/services/news/fetchNews';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Article             from "components/shared-components/Article";
import Search              from "components/shared-components/Search";

const styles = StyleSheet.create({
    headerText: {
      color: '#333',
      fontWeight: 'bold',
      fontSize: 20,
      paddingHorizontal: 12,
      marginBottom: 5,
      marginTop: 70,
    },
});

const renderFooter = () => {
    let Loading = false;
    if (Loading) {
      return <ActivityIndicator size="large" />;
    }

    return null;
};

const News = ({navigation}) =>  {

    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
    const clampedScroll = Animated.diffClamp(
        Animated.add(
        scrollYValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
        }),
        new Animated.Value(0),
        ),
        0,
        50,
    )

    const {

        state : { 
            newsState : { 
                feeds : { 
                    loading,
                    message,
                    showMessage,
                    data
                } 
            } 
        },

        dispatch : { 
            newsDispatch 
        }
    
    } = useContext(GlobalContext);

    useEffect(() => {

        if(data.length === 0){

            fetchNews()(newsDispatch);
        }

    },[data]);

	return (
		<>
			<SafeAreaView>
                <Search clampedScroll={clampedScroll} />
                {loading ?
                    <SkeletonPlaceholder speed={1800}>
                        {[1,2,3,4,].map(name => 
                        (
                            <SkeletonPlaceholder.Item maxHeight={1000} paddingTop={60
                            } padding={20} flexDirection="row" alignItems="center" key={name}>
                            <SkeletonPlaceholder.Item  marginLeft={10} width={60} height={60} borderRadius={50} />
                            <SkeletonPlaceholder.Item marginLeft={20}>
                                <SkeletonPlaceholder.Item width={200} height={20} borderRadius={4} />
                                <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={180}
                                height={20}
                                borderRadius={4}
                                />
                            </SkeletonPlaceholder.Item>
                            </SkeletonPlaceholder.Item>
                        )
                        )}
                  </SkeletonPlaceholder>
                    :
                    <FlatList
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
                            { useNativeDriver: false },
                            () => { },          // Optional async listener
                        )}
                        contentInsetAdjustmentBehavior="automatic"
                        showsVerticalScrollIndicator={false}
                        data={data}
                        ListHeaderComponent={
                            <Text style={styles.headerText}>News</Text>
                        }
                        renderItem={({ item }) => <Article key={item.source.url} article={item} navigation={navigation} />}
                        keyExtractor={item => item.source.url}
                        ListFooterComponent={renderFooter()}
                    />
                }
                
            </SafeAreaView>
		</>
	)
}


export default News;
