import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import Pdf from 'react-native-pdf';

const Group1 = () => {
    const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Group - I',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#008B6b',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent'
      },
    })
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        trustAllCerts={false}
        source={require('../../../css_guide_files/Files/group_one_syllabus.pdf')}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
      />
    </View>
  )
}

export default Group1

const styles = StyleSheet.create({
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})