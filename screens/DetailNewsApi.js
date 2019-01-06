import React from 'react'
import { Text, View, Image} from 'react-native'

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Baca Berita',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

  render() {
    return (
      <View>
            <View>
                <Text>{this.props.navigation.getParam('title')}</Text>
            </View>
            <View>
                <Image source={{uri: this.props.navigation.getParam('img')}} style={{width:100, height:100}} />
            </View>
            <View>
                <Text>{this.props.navigation.getParam('content')}</Text>
            </View>
      </View>
    )
  }
}