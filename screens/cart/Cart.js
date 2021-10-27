import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import {
  Container,
  Text,
  Left,
  H1,
  ListItem,
  Thumbnail,
  Body,
  Right,
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import CartItem from "./CartItem";

import Icon from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });
  //console.log(props)
  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          <SwipeListView 
           useFlatList
            data={props.cartItems}
            renderItem={(data) => (
              <CartItem item={data} />
             )}
            renderHiddenItem={(data)=>{
              <View  >
                <TouchableOpacity 
                  style={styless.hiddenButton} 
                  onPress={()=> props.removeFromCart(data.item)}
                >
                  <Text>Hola</Text>
                  <Icon name='trash' color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            }}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styless.bottomContainer}>
            <Left>
              <Text style={styless.prices}>$ {total}</Text>
            </Left>
            <Right>
              <Button
                title="Clear"
                onPress={() => {
                  props.clearCart();
                }}
              />
            </Right>
            <Right>
              <Button
                title="Checkout"
                onPress={() => {
                  props.navigation.navigate("Checkout");
                }}
              />
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styless.emptyContainer}>
          <Text>Looks like your cart is empty</Text>
          <Text>Add products to your cart to get started</Text>
        </Container>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item)=> dispatch.actions.removefromCart(item)
  };
};

const styless = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
  },
  prices: {
    fontSize: 18,
    margin: 20,
    color: "red",
  },
  hiddenContainer:{
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  hiddenButton:{
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 70,
    width: width / 1.2
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//ProductCard