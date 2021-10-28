import type { NextPage } from 'next'
import { useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'

// Data
import techData from '../json/tech.json'
import projectData from '../json/projects.json'
import headshot from '../img/david.jpg'
const repo = "https://github.com/davidvdev/portfolio-site"
const resume = "https://drive.google.com/file/d/1mtYv0woUhpOGFzAL_LjVFWKdPRkR-2ek/view?usp=sharing"
const linkedIn = "https://www.linkedin.com/in/davidvdev"
const github = "https://github.com/davidvdev"
const email = "david@davidvdev.com"

// Icons
import { BsGithub, BsEnvelopeFill, BsLinkedin, BsBootstrapFill, BsCodeSlash } from 'react-icons/bs'
import { FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaSass, FaReact, FaNodeJs, FaBars } from 'react-icons/fa'
import { SiSvelte, SiJquery, SiMarkdown, SiExpress, SiMongodb, SiPython, SiDjango, SiFastapi, SiFlask, SiRubyonrails, SiTypescript, SiPostgresql } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'
import { MdClose } from 'react-icons/md'

const icons = [
  BsGithub,
  BsEnvelopeFill,
  BsLinkedin,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  BsBootstrapFill,
  FaReact,
  SiSvelte,
  SiJquery, 
  SiMarkdown,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  BsCodeSlash,
  SiPython,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiRubyonrails,
  DiRuby,
  SiTypescript,
  SiPostgresql
]

// Interfaces
interface techData {
  name: string,
  img: string
}
interface projectData {
  name: string,
  description: string,
  github: string,
  deployed: string,
  image: string
}

const Home: NextPage = () => {
  
  const dropdownRef = useRef(null)

  const [isNavActive, setIsNavActive] = useState(false)

  const toggleNav = () => setIsNavActive(!isNavActive)

  console.log(isNavActive)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5D594F"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" ></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet"></link>
      </Head>

      <header className={styles.header}>
        <h1>David Vogel</h1>
        <nav className={isNavActive ? styles.active : styles.inactive}>
          <ul>
              <li><MdClose 
                onClick={() => toggleNav()} 
                style={{fontSize: '1.5em'}}
              /></li>
              <a href="#about" onClick={() => toggleNav()}><li>About</li></a>
              <a href="#tech" onClick={() => toggleNav()}><li>Tech</li></a>
              <a href="#work" onClick={() => toggleNav()}><li>Work</li></a>
              <a href="#contact" onClick={() => toggleNav()}><li>Contact</li></a>
          </ul>
        </nav>
        <FaBars onClick={() => toggleNav()} style={{fontSize: '1.5em'}}/>
      </header>
      <main>
        <div className={styles.about}>
          <div className={styles.headshotContainer}>
            <Image 
              src='https://i.imgur.com/T6kqhid.jpg' 
              alt="David Vogel portrait" 
              className={styles.headshot}
              height={350} 
              width={350} 
            />
          </div>
          <div className={styles.aboutText}>
              <h2 id="about">Hello!</h2>
              <p>
              My name is David Vogel, and ​​I am a fullstack software developer from Minneapolis, Minnesota with a driving motivation to help others solve problems and find joy using tech. Technology is innately human centric, and my background in literature, writing, retail, and training let me see the opportunities available for technology to assist us in bridging divides between people, cultures, and ideologies. I see empathy as a core human need, and my aim is to design software that recognizes humanity in all of us.
              </p>
          </div>
        </div>
        <div className={styles.tech}>
          <h2 id="tech">Tech</h2>
          <ul>
            {techData.sort((a,b) => a.name.localeCompare(b.name)).map(item => {
              const Icon = icons.find(icon => icon.name === item.img)
              return(
                <li key={techData.indexOf(item)}>
                  {/* @ts-ignore */}
                  <Icon />
                  <span> {item.name}</span>
                </li>
              )
            })}
            </ul>
        </div>
        <div className={styles.work}>
          <h2 id="work">Work</h2>
          <div className={styles.showcase}>
            {projectData.map(project => {
              return(
                <div className={styles.card}>
                  <Image 
                    src={project.image} 
                    className={styles.cardImage}
                    width={400} 
                    height={260}
                  />
                  <div className={styles.lowerCard}>
                    <div className={styles.projtext}>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className={styles.projbuttons}>
                      <a href={project.github} target="_blank" rel="noreferrer">Code</a>
                      <a href={project.deployed} target="_blank" rel="noreferrer">Live</a>
                      <a href={`mailto:${email}?subject=${project.name.replaceAll(" ","%20")}`} target="_blank" rel="noreferrer">Ask</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.contact}>
            <h2 id="contact">Contact</h2>
            <h4>Let's talk! Feel free to reach out to me through any of the following methods.</h4>
            <ul>
              <li>
                <a href={github} target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href={linkedIn} target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <BsEnvelopeFill />
                </a>
              </li>
            </ul>
        </div>
      </main>
      <footer className={styles.footer}>
            <span>©David Vogel | <a href={repo} target="_blank" rel="noreferrer">See the repo!</a></span>
      </footer>
    </div>
  )
}

export default Home
