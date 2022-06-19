const FavouriteHeroes = ({heroes, onHeroSelected}) => {
    
    const FavouriteHeroes = heroes.filter(hero => hero.isFavourite)

    return (
        <div className="fav-heroes">
            <h3>Favourite Heroes!</h3> 
            <ul>
                {FavouriteHeroes.map(hero => {
                    return (
                        <li key={hero.localized_name}>
                            <button onClick={() => onHeroSelected(hero.localized_name)}>{hero.localized_name}</button>
                        </li>
                    )
                })}      
            </ul>       
        </div>
    )
}

export default FavouriteHeroes;