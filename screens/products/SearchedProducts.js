import React  from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import {Container, Content, Left, Body, ListItem , Thumbnail, Text,List} from 'native-base'

var {width} = Dimensions.get("window")

const SearchedProduct = (props)=>{
    const {productsFiltered} = props;
    /* console.log('hola---------------------------')
    //console.log(productsFiltered)
    if(productsFiltered.length > 0 ){
        productsFiltered.map((item)=>{
            console.log(item._id.$oid)
            console.log(item.name)
        })

    } */
    return(
       
        <Content style={{ width: width}} >
            <Text>
            JALA
            </Text>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item)=>(
                    <ListItem 
                        onPress={()=>{
                            props.navigation.navigate('Product Detail', {item:item})
                        }}
                            key={item._id.$oid}
                            avatar
                    >
                        <Left>
                            <Thumbnail
                                  source={{uri: item.image ?
                                        item.image: 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                                        }}  
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}hola</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>    
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: 'center'}}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchedProduct;
