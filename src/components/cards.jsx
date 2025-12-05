import React from 'react'

const Cards = (data) => {
  return (
        <div className='card'>
            <div className="img">
                <img src={data.img}></img>
            </div>
            <div className="cname">
                <p>{data.cnam}</p>
            </div>
            <div className="skills">
                <p>{data.skill}</p>
            </div>
            <div className="tags">
                <p>
                    {data.tag1}
                </p>
                <p>
                    (data.tag2)
                </p>
            </div>
            <div className="price">
                <h3>{data.price}</h3>
            </div>
            <div className="address">
                <p>{data.location}</p>
            </div>
            <div className="botton1">
                <button className='apply'>Apply Now</button>
            </div>
        </div>

  )
}

export default Cards