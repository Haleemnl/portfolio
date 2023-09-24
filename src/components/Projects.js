import React from 'react'
import '../css/projects.css'
import Details from './Details'
import products from './data'
import { Link } from 'react-router-dom'

const Projects = () => {

    return (
        <div className='project'>

            <h1>My Recent Projects</h1>

            <div className="project-container">

                {products.map((product) => {
                    return (

                        <div key={product.id} className='project-cover' >

                            <Link to={`/projects/${product.id}`}>
                                {/* <img className='project-coverImg' src={product.image} alt="" /> */}


                                <picture>
                                    <source
                                        srcSet="large-image.webp 1024w, medium-image.webp 640w, small-image.webp 320w"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                        type={product.image}
                                    />
                                    <img
                                        className='project-coverImg'
                                        src={product.image}
                                        alt="My Image"
                                        loading="lazy" // Enable lazy loading
                                    />
                                </picture>

                            </Link>



                            <div className="project-info">
                                <h5>{product.name}</h5>

                                <Link to={`/projects/${product.id}`}> Check Details ↗</Link>

                            </div>


                        </div>



                    )
                })}
            </div>


        </div>
    )
}

export default Projects