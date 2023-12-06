"use client"
import { useState, useEffect } from 'react'


const page = () => {

    const [product, setProduct] = useState([]);
    useEffect( () => {
        return async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            console.log(data, "data")
            setProduct(data.products)
        }
    }, [])
    console.log("product",product)

    return (
        <div>
            <h2>Search Filter</h2>
            {
                product && product.map((item) => (
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    )
}

export default page