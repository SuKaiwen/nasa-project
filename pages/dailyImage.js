import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from '../styles/DailyImage.module.css';

function dailyImage(props) {

    const [imageData, setImageData] = useState();
    const [dataFound, setDataFound] = useState(false);

    useEffect(() => {
        getPicture();
    }, [])

    const getPicture = async () => {
        const get_api = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`)
        .then(response => response.json())
        .then(resData => {console.log(resData); setImageData(resData); setDataFound(true);})
        .catch(err => alert("Data not found"))
    }


    return (
        <div className = {styles.imageContainer}>
            <h1>Image of the day</h1>
            {dataFound && 
                <>
                    <div className={styles.imageBorder}>
                        <img src = {imageData.url} alt = "" />
                    </div>
                    <div className={styles.textContainer}>
                        <div className = {styles.col}>
                            <h1>{imageData.title}</h1>
                            <p>By: {imageData.copyright}</p>
                            <p>Date: {imageData.date}</p>
                            <Link href={imageData.hdurl}><p>HD image link</p></Link>
                        </div>
                        <div className = {styles.col}>
                            <p>{imageData.explanation}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default dailyImage;