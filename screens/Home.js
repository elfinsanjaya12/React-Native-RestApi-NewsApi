import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import axios from 'axios'

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'News App - Beranda'
  }

  constructor(){
    super();
    this.state = {
      articel : []
    }
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=31b92fba810a43ab97f4a388d61a7aae';
    axios.get(url).then((res) => this.setState({articel : res.data.articles})).catch((err) => console.log(err));
  }

  render() {
    return (
      <View>
        <Text> Berita Hari Ini </Text>
        <FlatList 
          data={this.state.articel}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Image source={{uri: item.urlToImage}} style={{width: 100, height: 100}}/>
                </View>
              </View>
            )
          }}    
        />
      </View>
    )
  }
}