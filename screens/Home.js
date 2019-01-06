import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import axios from 'axios'

export default class Home extends React.Component {

  static navigationOptions = {
      title: 'Berita News',
      headerStyle: {
          backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
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
        <FlatList 
          data={this.state.articel}
          renderItem={({item}) => {
            return (
              <View>
                <View>
                  <Text  
                    onPress={() => 
                      this.props.navigation.navigate('DetailNewsApi', 
                      { 
                        content: item.content,
                        title: item.title,
                        img: item.urlToImage
                      })
                  }>{item.title}</Text>
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