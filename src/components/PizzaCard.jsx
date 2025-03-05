import React from 'react'

export default function PizzaCard({item}) {
    return (
        <div className='pizza-card bg-white rounded p-4 shadow-md max-w-60' >
            <div className="image h-[110px] mb-5">
                <img className='mx-auto h-[100px] hover:h-[110px] transition-all duration-300' src={item.img} alt="" />
            </div>
            <div className="content">
                <div className="name-price flex justify-between">
                    <p className="name font-bold">{item.name}</p>
                    <p className="price font-bold">₹{item.price}</p>
                </div>
                <p className="description font-bold text-[12px] py-3 text-gray-500 ">{item.desc.slice(0, 50).padEnd(53, '.')}</p>
                <div className="rating-addtocart flex justify-between mt-1">
                    <p className="rating font-bold">{item.rating}</p>
                    <button className="add-to-cart bg-blue-500 p-1 rounded font-bold text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
