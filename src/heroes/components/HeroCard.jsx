import { Link } from "react-router-dom";

const CharactersByHeroe = ( { alter_ego, characters } ) =>{
    if (alter_ego == characters) return (<></>);
    return <p> { characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={ heroImageUrl } className="card-img" alt= { superhero } />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-tittle"> { superhero } </h5>
                        <p className="card-text"> {alter_ego } </p>
                        <CharactersByHeroe alter_ego={ alter_ego } characters= { characters }/>
                        <p>
                            <small className="text-muted"> { first_appearance } </small>
                        </p>
                        <Link to= {`/hero/${id }`}> Más información </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
