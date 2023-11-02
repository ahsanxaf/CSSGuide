import { StyleSheet, 
  Text,
  View, 
  TouchableOpacity, 
  Pressable, ScrollView,
  SafeAreaView
} from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [enableCss, setEnableCss] = useState(false)
  const [enablePms, setEnablePms] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'CSS-PMS Guide',
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

  useEffect(() => {
    setEnableCss(true)
    setEnablePms(false)
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: '#fffff'}}>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
        <View style={styles.navigationButtonscontainer}>
          <Pressable style={[styles.button, {backgroundColor: enableCss ? 'lightblue' : 'white'}]} onPress={() => {
            setEnableCss(true)
            setEnablePms(false);
          }}>
            <Text>CSS</Text>
          </Pressable>
          <Pressable style={[styles.button, {backgroundColor: enablePms ? 'lightblue' : 'white'}]} onPress={() => {
            setEnableCss(false)
            setEnablePms(true);
          }}>
            <Text>PMS</Text>
          </Pressable>
        </View>
      </View>

      {enableCss && (
        <><View style={{ padding: 5, marginTop: 40, }}>
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>Cumpulsary Subjects</Text>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => {navigation.navigate('Precis')}}>
                <Text style={styles.cardText}>English Precis & Composition</Text>
                <Text style={{ fontSize: 10, fontWeight: "500", textAlign: 'center' }}>100 marks</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('Essay')}>
                <Text style={[styles.cardText, { color: '#000000' }]}>English Essay</Text>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('Gsa')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>General Science & Ability</Text>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('current')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Current Affairs</Text>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('PakAffairs')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Pakistan Afairs</Text>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('Islamiat')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Islamic Studies</Text>
                <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
              </Pressable>
              
              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('Islamiat')}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>civics (for Non-Muslims)</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>
            </ScrollView>
          </View>
          </View>

        <View style={{ padding: 5, marginTop: 40, }}>
          <View style={{ paddingLeft: 5 }}>
            <Text style={{ fontSize: 17, fontWeight: "500" }}>Optional Subjects</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold", color: 'gray' }}>Select One Subject</Text>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp1')}>
                <Text style={styles.cardText}>Group-I</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp2')}>
                <Text style={[styles.cardText, { color: '#000000' }]}>Group-II</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp3')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Group-III</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp4')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Group-IV</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp5')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Group-V</Text>
              </Pressable>

              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp6')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Group-VI</Text>
              </Pressable>
              
              <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]} onPress={() => navigation.navigate('grp7')}>
                <Text style={[styles.cardText, { color: "#000000" }]}>Group-VII</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
        </>
      )}

      {enablePms && (
        <View style={{ padding: 5, marginTop: 40, }}>
          <View>
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ fontSize: 17, fontWeight: "500" }}>Cumpulsary Subjects</Text>
            </View>

            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={styles.cardText}>English</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500", textAlign: 'center' }}>100 marks</Text>
                </Pressable>

                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: '#000000' }]}>English Essay</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>

                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>Urdu</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>

                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>Ethics (for Non-Muslims)</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>

                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>Pakistan Studies</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>

                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>Islamic Studies</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>
                
                <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                  <Text style={[styles.cardText, { color: "#000000" }]}>General knowledge</Text>
                  <Text style={{ fontSize: 10, fontWeight: "500" }}>100 Marks</Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>

          <View>
            <View style={{ padding: 5, marginTop: 40, }}>
              <View style={{ paddingLeft: 5 }}>
                <Text style={{ fontSize: 17, fontWeight: "500" }}>Optional Subjects</Text>
                <Text style={{ fontSize: 10, fontWeight: "bold", color: 'gray' }}>Select One Subject</Text>
              </View>
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={styles.cardText}>Group-A</Text>
                  </Pressable>

                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: '#000000' }]}>Group-B</Text>
                  </Pressable>

                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: "#000000" }]}>Group-C</Text>
                  </Pressable>

                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: "#000000" }]}>Group-D</Text>
                  </Pressable>

                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: "#000000" }]}>Group-E</Text>
                  </Pressable>

                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: "#000000" }]}>Group-F</Text>
                  </Pressable>
                  
                  <Pressable style={[styles.card, { alignItems: 'center', justifyContent: 'center' }]}>
                    <Text style={[styles.cardText, { color: "#000000" }]}>Group-G</Text>
                  </Pressable>
                </ScrollView>
              </View>
            </View>
          </View>

        </View>
      )}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 100
  },
  navigationButtonscontainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'gray',
    width: '50%',
    borderRadius: 10
  },
  card: {
    width: 200,
    height: 150,
    marginTop: 10,
    backgroundColor: "#008B6b",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
  },
  cardText: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 7,
  },
})