import React, { useState } from 'react'
import { useDataContext } from '../context/data_context'



const Images = () => {

    let { items } = useDataContext();


    return (
        < div >
            {
                items.map((i, index) => {
                    return (
                        <div className='image-width' key={i.id}>
                            <div className="image-float">
                                <div className="image-properties">
                                    <div className='shoes-images'>
                                        <img src={`../../images/${i.images}`}
                                            alt=""
                                        />

                                        <p className='image-names'>{i.names}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Images