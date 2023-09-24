import React from 'react'
import '../css/details.css'

import { Link, useParams } from 'react-router-dom'

import products from './data'
import { Description } from '@mui/icons-material';

const Details = () => {

    // console.log(useParams());

    const { id } = useParams();

    const product = products.find((product) => product.id == id)

    const { name, image, description, goto } = product

    return (

        <div className='detail'>

            <div className="background">
                {/* <img src={image} alt="" /> */}

                <picture>
                    <source
                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        type={image}
                    />
                    <img
                        className='background-img'
                        src={image}
                        alt="My Image"
                        loading="lazy" // Enable lazy loading
                    />
                </picture>

            </div>

            <div className="details-infos">

                <h1>{name}</h1>
                <h3>Features:</h3>

                <p> ⚪{description} </p>


                <div className="detail-buttons">

                    <Link to={`${goto}`}>
                        <button>CHECK IT OUT ↗</button>
                    </Link>

                    <Link to='/projects'>
                        <button>BACK TO SITE ↗</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Details