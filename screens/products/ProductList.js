import React from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native'

import ProductCard from './ProductCard';



var {width} = Dimensions.get('window');

const ProductList = (props) =>{
    const {item} = props;
    return(//Los tres puntos '...item' son atributos de propagacion
    /* 
    //just assume we have an object like this:
    var person= {
        name: 'Alex',
        age: 35 
    }
    //////////////////////////
    <Modal {...person} title='Modal heading' animation={false} />
    /////////////////////////
    <Modal name={person.name} age={person.age} title='Modal heading' animation={false} />
    */
    <TouchableOpacity 
        style={{width: '50%'}}
        onPress={()=>
            props.navigation.navigate('Product Detail', {item:item})//Debe llevar el mismo nombre que en HOMENAVIGATION
            //PRIMER item es de SINGLEPRODUCT o sea que es el manda a alla, y el segundo lo recibe del Prodcutcontainer
        }
    >
        <View style={{
            width: width / 2,
            backgroundColor: 'gainsboro'
        }}>

            <ProductCard {...item} />
        </View>
    </TouchableOpacity>
    )
}

export default ProductList;