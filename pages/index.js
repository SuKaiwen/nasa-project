import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react';
import spaceman from '../public/images/spaceman.jpg';
import Link from 'next/link';

export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.fourCols}>
        <div className={`${styles.col} ${styles.mainCol}`}>
          <i class="fas fa-rocket fa-6x"></i>
          <div className={styles.headText}>
            <h1>NASA</h1>
          </div>
          <h3>The National Aeronautics and Space Administration</h3>
          <div className={styles.smallText}>
            <p>NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NACA). The new agency was to have a distinctly civilian orientation, encouraging peaceful applications in space science. NASA's science is focused on better understanding Earth.</p>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.rowHalf}>
            <div className={styles.imageContainer}>
              <Image src = {spaceman} alt = "" />
            </div>
          </div>
          <div className={`${styles.rowHalf} ${styles.textCol}`}>
            <i class="fas fa-camera"></i> 
            <p>As of 13/12/2021</p>
            <h1>200+ images collected by NASA</h1>
            <div className = {styles.bottom}>
              <Link href="/gallery"><p>View Our Gallery <i className="fas fa-arrow-right"></i></p></Link>
            </div>
          </div>
        </div>
        <div className={styles.col}>
        <div className={`${styles.rowHalf} ${styles.textCol}`}>
            <h1>Hubble Space Telescope</h1>
            <div className={styles.smallText}>
              <p>The Hubble Space Telescope (often referred to as HST or Hubble) is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.</p>
            </div>
            <div className = {styles.bottom}>
              <p>More Info <i className="fas fa-arrow-right"></i></p>
            </div>
          </div>
          <div className={`${styles.rowHalf} ${styles.textCol}`}>
            <h1>Mars Rover</h1>
            <div className={styles.smallText}>
              <p>The Mars 2020 Perseverance Rover will search for signs of ancient microbial life, which will advance NASA's quest to explore the past habitability of Mars. The rover has a drill to collect core samples of Martian rock and soil, then store them in sealed tubes for pickup by a future mission.</p>
            </div>
            <div className = {styles.bottom}>
              <p>More Info <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={`${styles.rowHalf} ${styles.textCol} ${styles.sideCol}`}>
            <p>We are proud of our achievements</p>
            <h1>Follow Our Journey</h1>
            <div className = {styles.bottom}>
              <p>About Us <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>
          <div className={`${styles.rowHalf} ${styles.textCol}`}>
            <i class="fas fa-camera"></i> 
            <p>As of 13/12/2021</p>
            <h2>Image of the day</h2>
            <div className = {styles.bottom}>
              <Link href="/dailyImage"><p>View Image <i class="fas fa-arrow-right"></i></p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
