import React from "react"
import LocationsData from '../locationsData'
import LocationIcon from '../images/location-icon.svg'

export default function TravelCards() {
    const myTravels = LocationsData.map(item => {
        return <Card
                    key={ item.id }
                    { ...item }
                />
    })
    return (
        <div className="travels">
            <div className="travels-wrapper">
                { myTravels }
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <article role='article' className="travel-location">
            <div className="travel-location__info">
                <div className="travel-location__info--header">
                    <div className="travel-location__info--header-inner">
                        <div className="country">
                            <img src={ LocationIcon } alt="location icon" aria-hidden='true' />
                            <span>{ props.country }</span>
                        </div>
                        <a className="gmap-link" href="#">View on Google Maps</a>
                    </div>
                    <h2 className="place">{ props.place }</h2>
                </div>
                <div className="travel-duration">{ props.duration }</div>
                <div className="place-description">{ props.description }</div>
            </div>
            <div className="travel-location__image">
                <img src={ props.image } alt={ `famous picture of ${ props.place } in ${ props.country }` } />
            </div>
        </article>
    )
}