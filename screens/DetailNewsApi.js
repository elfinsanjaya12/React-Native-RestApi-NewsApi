import React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'

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
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: 3,
            marginBottom: 10,
            padding: 8
        }}>
                <View style={{
                     alignItems: 'flex-start',
                     padding: 8,
                     borderBottomWidth: 1,
                     borderBottomColor: '#ffffff',
                }}>
                    <Text style={{marginBottom: 7, fontWeight: 'bold'}}>{this.props.navigation.getParam('title')}</Text>
                </View>

                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: 8
                }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{uri: this.props.navigation.getParam('img')}} style={{width:100, height:100}} />
                    </View>
                    <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text>{this.props.navigation.getParam('content')}</Text>
                    </View>
                </View>
        </View>
    )
  }
}