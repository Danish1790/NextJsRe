"use client"

import React, { useState, useEffect } from 'react'

const page = () => {
    const [products, setProducts] = useState([])

    const getData = () =>{
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((json)=>setProducts(json))
    }

    useEffect(()=>{
        getData()
    },[])

    console.log("products",products)

    return (
        <div>
            <h2>Search Filter</h2>
            {/* {
                (products)? && products.map((product)=>(
                    <div key={product.id} style={{border:'2px solid red'}}>
                        <h5>{product.title}</h5>
                    </div>
                ))
            } */}
            {products.map((product) => (
                <div key={product.id} style={{ border: '2px solid red' }}>
                    <h5>{product.title}</h5>
                </div>
            ))}
        </div>
    )
}

export default page