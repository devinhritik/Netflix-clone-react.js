import React from "react"
import "./Featured.scss"
import PlayArrow from '@mui/icons-material/PlayArrow';
import InfoOutlined from '@mui/icons-material/InfoOutlined';

const Featured = ({ type }) => {
    return (
        <div className="featured">

            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option value="">Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>

                    </select>
                </div>
            )}

            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="" />

                <span className="desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi cum fugiat neque ratione maxime nam ad illo quibusdam necessitatibus in voluptatibus mollitia quod nesciunt aut dolore, minus reiciendis officia! Illum, soluta accusamus voluptates laudantium ex cum cupiditate voluptas. Hic modi sunt maiores iure voluptatem soluta atque laboriosam, dolorum cum. </span>

                <div className="buttons">

                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>


                    <button className="more">
                        <InfoOutlined />
                        <span>Info   </span>
                    </button>


                </div>
            </div>

        </div>
    )
}

export default Featured