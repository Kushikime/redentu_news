import { Icon, Input, Item } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { NewsCard } from '../components/NewsCard';
import { hp, wp } from '../Dimensions';
import { selectUrl } from '../store/userReducer';
import { STYLES } from '../styles';



export type newsItem = {
    title: string,
    image: string,
    author: string,
    date: string,
    url: string
}



export const NewsScreen = ({navigation}:any) => {
    const token = `a3df7e8eee3d45e883440134696d4794`;
    const [search, setSearch] = useState("pokemon");
    const [news, setNews] = useState([]);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    useEffect(
        () => {
            
            const url = `https://newsapi.org/v2/everything?q=${search}&to=2021-05-01&sortBy=publishedAt&apiKey=${token}`
            let timer1 = setTimeout(() => setShow(true), 5 * 1000);

            fetch(url)
                .then(res => res.json())
                .then(json => {
                    console.log(json);
                    setNews(json.articles.map((item:any) => {
                        return {
                            title: item.title,
                            image: item.urlToImage,
                            author: item.author,
                            date: item.publishedAt,
                            url: item.url
                        }
                    }));
                });

            return () => {
                clearTimeout(timer1);
            };
        },
        [search]
    );


    const onCardPress = async (url:string) => {
        await dispatch(selectUrl({url}));
        navigation.navigate("NewsDetailsScreen");
    }




    return (
        <SafeAreaView style={[STYLES.screen]}>
            <Item  rounded={true} bordered={false} style={{paddingHorizontal: wp(15), position: 'absolute', top: hp(35), zIndex: 100, backgroundColor: 'white', elevation: 15, shadowColor: 'black', borderColor: 'white'}}>
                <Input onChangeText={(text)=>setSearch(text)} placeholder='Search for news...'/>
                <Icon active name='search' />
            </Item>


            <ScrollView style={[{width: '100%', paddingTop: hp(100)}, STYLES.fd_c]} showsVerticalScrollIndicator={false}>
                {
                    news.map((item:newsItem, index) => {
                        return(
                            <NewsCard title={item.title} author={item.author} date={item.date} image={item.image} onPress={()=>{onCardPress(item.url)}} key={`${index}_${item.url}`} />
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};
