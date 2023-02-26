import React from 'react'

function HomeNewsCard = ({news}) => {
    const{title, text} = news;
    return (
        <>
            <div>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        </>
    )
}

export default HomeNewsCard