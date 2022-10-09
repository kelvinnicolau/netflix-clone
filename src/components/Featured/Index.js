import React from 'react';
import './FeaturedMovie.css';

export default ({iten}) => {

    let firstDate = new Date(iten.first_air_date);
    let genres = [];
    for(let i in iten.genres){
        genres.push(iten.genres[i].name);
    }

    return (
        <section className="featured"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(https://image.tmdb.org//t/p/original${iten.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{iten.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{iten.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--seasons'>{iten.number_of_seasons} temporada{iten.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>

                    <div className='featured--description'>{iten.overview}</div>
                    <div className='featured--buttons'>
                        <a className='featured--watchbutton' href={`/watch/${iten.id}`}>Assistir</a>
                        <a className='featured--mylistbutton' href={`/list/add/${iten.id}`}>+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

