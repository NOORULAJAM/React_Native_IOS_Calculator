import {View, Text, StatusBar, SafeAreaView, Touchable} from 'react-native';
import React, { useState } from 'react';
import Button from './component/Button';
import { colors } from './src/colors';
 

const App = () => {

  const [state, setstate] = useState('') 
  const [currentVal, setcurrentVal] = useState('0') 
  const [preVal, setpreVal] = useState('')  
  const [operator, setoperator] = useState('')  
  
  const tapHandler =(type,value)=>{
    setstate((state) => calculator(type, value, state)); 
   }

  const calculator = (type, value, state)=>{
    switch (type) {
      case 'number':
        return handleNumber(value, state);
      case "operator": 
        return setoperator(value), setpreVal(currentVal),setcurrentVal("0");
      case "percentage":
        return handleNumber(value, state);
      case "equal":
        return handleEqual();
      default:
        break;
    }
 }

 const handleNumber=(value, state)=>{
  /// NOT ADD ZERO MORE THEN ONE
  if(value == 0 && currentVal == ''){
    return
  }
  /// NOT ADD DECIMAL MORE THEN ONE
  if(value == '.' && currentVal.includes('.')){
    return
  }
  if(currentVal === '0'){
    setcurrentVal(value)
  }else{
    setcurrentVal(`${currentVal}${value}`)
  }  

 }
 
 const handleEqual =()=>{
  switch (operator) {
    case "+":
      return  [setcurrentVal(`${preVal + currentVal}`)];
    case "-":
      return  [setcurrentVal(`${preVal - currentVal}`)];
    case "*":
      return  [setcurrentVal(`${preVal*currentVal}`)];
    case "/":
      return  [setcurrentVal(`${preVal / currentVal}`)];
    case "%":
      return setcurrentVal(`${parseFloat(preVal) * 100 / parseFloat(currentVal)}`)
    default:
      break;
  }
 }

 const clear =()=>{
  setcurrentVal('0');
  setoperator('')
  setpreVal('0')
 }

 
const deleteFunction = () => {
  if(currentVal > 0){
    return setcurrentVal(currentVal.slice(0, -1));
  }else{
    return setcurrentVal('0');
  }
 
};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor={'black'} />
      <View style={{flex: 0.4, justifyContent:'flex-end',alignItems:'flex-end', paddingBottom:10,}}>
        <Text style={{color:'white',fontSize:80, marginRight:'10%', fontWeight:'200'}}>{currentVal}</Text>
      </View>

      <View style={{flex: 0.6}}>
        {/* FIRST ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="AC" color={colors.gry} onPress={()=>clear()}/>
          <Button text="=>" color={colors.gry} onPress={()=>deleteFunction()}/>
          <Button text="%" color={colors.gry} onPress={()=>tapHandler('operator','%')}/>
          <Button text="÷" color={colors.orange} textColor={'#fff'} onPress={()=>tapHandler('operator','/')}/>
        </View>

        {/* SECOND ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="7" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',7)}/>
          <Button text="8" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',8)}/>
          <Button text="9" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',9)}/>
          <Button text="×" color={colors.orange} textColor={'#fff'} onPress={()=>tapHandler('operator','*')}/>
        </View>

        {/* THIRD ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="4" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',4)}/>
          <Button text="5" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',5)}/>
          <Button text="6" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',6)}/>
          <Button text="−" color={colors.orange} textColor={'#fff'} onPress={()=>tapHandler('operator','-')}/>
        </View>

        {/* FOURTH ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="1" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',1)}/>
          <Button text="2" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',2)}/>
          <Button text="3" color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number',3)}/>
          <Button text="+" color={colors.orange} textColor={'#fff'} onPress={()=>tapHandler('operator','+')}/>
        </View>

        {/* FIFTH ROW */}
        <View style={{flexDirection:'row'}}>
          <Button text="0" color={colors.btnBlack} textColor={'#fff'} width={'47%'} onPress={()=>tapHandler('number',0)}/> 
          <Button text="." color={colors.btnBlack} textColor={'#fff'} onPress={()=>tapHandler('number','.')}/>
          <Button text="=" color={colors.orange} textColor={'#fff'} onPress={()=>tapHandler('equal','=')}/>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

export default App;
