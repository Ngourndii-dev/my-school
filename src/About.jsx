import React from 'react'
import styles from './styles/about.module.css';
import Compteur from './components/Compteur';
import Activity from './components/Activity';
import ClassRoom from './components/ClassRoom';
import Event from './components/Event';
import Review from './components/Review';
import Responsible from './components/Responsible';
export default function About() {
  return (
    <div className={styles.about}>
      <Compteur />
      <Activity />
      <ClassRoom />
      <Event />
      <Review />
      <Responsible />
    </div>
  )
}
