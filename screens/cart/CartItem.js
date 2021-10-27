import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

var { height, width } = Dimensions.get("window");



const CartItem = (props) => {
  const data = props.item.item
  console.log(data)
  console.log(data.product.name)
  const [quantity, setQuantity] = useState(props.item.quantity);

  return (
    <ListItem style={styless.listItem} key={Math.random()} avatar>
      <Left> 
        <Thumbnail
          source={{
            uri: data.product.image
              ? data.product.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styless.body}>
        <Left>
          <Text>{data.product.name}</Text>
        </Left>
        <Right>
          <Text>$ {data.product.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styless = StyleSheet.create({
    emptyContainer: {
      height: height,
      alignItems: "center",
      justifyContent: "center",
    },
    listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center'
    },
    body:{
        margin:10,
        alignItems:'center',
        flexDirection:'row'
    },
    bottomContainer:{
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left:0,
      backgroundColor:"white",
      elevation:20
    },
    prices:{
      fontSize:18,
      margin:20,
      color:"red"
    }
  })

export default CartItem;
