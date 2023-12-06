"use client"
import { useState, useEffect } from 'react'


const Product = () => {

    const [product, setProduct] = useState("");
    useEffect( () => {
        return async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            console.log(data, "data")
            setProduct(data.products)
        }
    }, [])
    console.log("product",product[0])

    return (
        <div>
            <h2>Product</h2>
            {
                product && product.map((item) => (
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}

export default Product