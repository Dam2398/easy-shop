import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"


import ProductContainer from '../screens/products/ProductContainer'
import SingleProduct from '../screens/products/SingleProduct'


const Stack = createStackNavigator()

//      AQUI SE DECLARAN LAS NAVEGACIONES
function MyStack(){
    return( 
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Product Detail'
                component={SingleProduct}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator(){
    return <MyStack />
}