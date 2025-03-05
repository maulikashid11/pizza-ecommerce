import React, { useEffect, useState } from 'react'
import PizzaCard from './PizzaCard'

export default function ProductList({ data }) {
    console.log(data)
    return (
        <div className="container flex flex-wrap justify-center items-center gap-10 py-3">
            {
                data.map((item) => {
                    return <PizzaCard key={item.id} item={item} />
                })
            }
        </div>
    )
}
