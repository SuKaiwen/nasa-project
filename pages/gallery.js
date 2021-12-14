import React, {useState, useEffect} from 'react';
import styles from '../styles/Gallery.module.css';

function gallery(props) {

    const [imageData, setImageData] = useState();
    const [dataFound, setDataFound] = useState(false);

    // set dates for one month
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);

    var oldDate = new Date();
    oldDate.setMonth(oldDate.getMonth() - 1);
    var date2 = oldDate.getFullYear()+'-'+(oldDate.getMonth()+1)+'-'+oldDate.getDate();

    useEffect(() => {
        getPicture();
    }, [])

    const getPicture = async () => {
        const get_api = await fetch(`https://api.nasa.gov/planetary/apod?start_date=${date2}&end_date=${date}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
        .then(response => response.json())
        .then(resData => {console.log(resData); setImageData(resData); setDataFound(true);})
        .catch(err => alert("Data not found"))
    }

    return (
        <div className = {styles.galleryContainer}>
            <h1>Gallery</h1>
            <h5>Best Images From {date2} - {date}</h5>
            <div className= {styles.grid}>
                {dataFound &&
                <>
                    {imageData.map(image => { return (
                        <div className = {styles.section}>
                            <img src = {image.url} alt = "" />
                            <h4>{image.title}</h4>
                            <h5>By {image.copyright || 'Unknown'}</h5>
                        </div>
                    );
                    })}
                </>
                }
            </div>
        </div>
    );
}

export default gallery;