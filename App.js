import {View, Text, StatusBar, SafeAreaView, Touchable} from 'react-native';
import React from 'react';
import Button from './component/Button';
import { colors } from './src/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} />
      <View style={{flex: 0.4, justifyContent:'flex-end',alignItems:'flex-end', paddingBottom:10,}}>
        <Text style={{color:'white',fontSize:80, marginRight:'10%', fontWeight:'200'}}>0</Text>
      </View>

      <View style={{flex: 0.6}}>
        {/* FIRST ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="AC" color={colors.gry}/>
          <Button text="+/-" color={colors.gry}/>
          <Button text="%" color={colors.gry}/>
          <Button text="÷" color={colors.orange} textColor={'#fff'}/>
        </View>

        {/* SECOND ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="7" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="8" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="9" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="×" color={colors.orange} textColor={'#fff'}/>
        </View>

        {/* THIRD ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="4" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="5" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="6" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="−" color={colors.orange} textColor={'#fff'}/>
        </View>

        {/* FOURTH ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="1" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="2" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="3" color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="+" color={colors.orange} textColor={'#fff'}/>
        </View>

        {/* FIFTH ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="0" color={colors.btnBlack} textColor={'#fff'} width={'47%'}/> 
          <Button text="." color={colors.btnBlack} textColor={'#fff'}/>
          <Button text="=" color={colors.orange} textColor={'#fff'}/>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default App;
