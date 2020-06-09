

import React, { Component } from 'react';
import { View, Text ,StyleSheet, StatusBar,TextInput, FlatList,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr:["第一行","第二行","第三行"]
    };
    this.getNetInfo = this.getNetInfo.bind(this)
  }


componentDidMount(){  
  this.getNetInfo()
}

getNetInfo(){
  fetch('http://www.abc.com')
    .then((res)=> res.json())
    .then((res)=>{
      this.setState({
        inputTitle:"",
        dataArr : res.data.list
      })
    })
}

 addClick(){

  console.warn(this.inputTitle);

  // if (this.inputTitle==""){
  // console.warn("kong");
  
  // }else{
  //   console.warn("feikong");
  //   // this.setState({
  //   //   dataArr:[...dataArr,tex]
  //   // })
  // }
  
  
}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' networkActivityIndicatorVisible ='true'></StatusBar>
        <View style={styles.headerV}>
           <TextInput style={styles.textInputV} placeholderTextColor='gray' placeholder='请输入添加选项' onChangeText={(e)=>{this.inputTitle=e}}></TextInput>
           <TouchableOpacity style={styles.addBut} onPress={this.addClick}><View><Text textAlign='center'>add</Text></View></TouchableOpacity>
        </View>
        <FlatList style={styles.centerV} 
          data = {this.state.dataArr}
          renderItem = {
            ({item,index})=>  
            <TouchableWithoutFeedback >
              <View style={styles.itemStyle}>
                <Text>{item}
              </Text>
            </View></TouchableWithoutFeedback> 
          }
          keyExtractor = {(item,index) => index.toString()}
          >
        </FlatList>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({

    
  container:{
    backgroundColor: 'green',
    flex:1
  },
  headerV:{
    backgroundColor: 'white',
    marginTop:40,
    height:40,
    paddingVertical:10,
    flexDirection:"row"
  },
  centerV:{
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor: 'yellow',
    flex:1,
  },
  textInputV:{
    flex:1,
    paddingHorizontal:10
  },
  addBut:{
    width:40,
    height:30,    
  },
  addButText:{
    textAlign:'center'   
  },
  itemStyle:{
    height:40,
    backgroundColor: '#ccc',
  }



});


export default App;
