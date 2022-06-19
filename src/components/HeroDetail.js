const HeroDetail = ({hero, onFavouriteToggle}) => {

    if (!hero) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(hero.localized_name)
    }

    const favouriteBtnText = hero.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return (
    <div className="box">
        <h2>Name: {hero.localized_name}</h2>
        <p>Primary Attribute: {hero.primary_attr}</p>
        <p>Attack Type: {hero.attack_type}</p>
        <p>No of Legs: {hero.legs}</p>
        <p>Roles: {hero.roles}</p>
        <button className="fav-button" onClick={handleClick}>{favouriteBtnText}</button>
    </div>
    )
}

export default HeroDetail;