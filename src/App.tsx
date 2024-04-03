import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ArthurNoberto.png',
      name: 'Arthur Noberto',
      role: 'Developer Júnior'
    },
    content: [
    { type:'paragraph', content: 'Fala galeraa 👋'},
    { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2023-06-01 9:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/BenhurKulzer.png',
      name: 'Benhur Kulzer',
      role: 'Developer Senior @brandlovers'
    },
    content: [
    { type:'paragraph', content: 'Fala galeraa 👋'},
    { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare</a>' },
    ],
    publishedAt: new Date('2023-06-10 10:00')
  }
];



 export function App() {
  return (
   <div>
  <Header />
 <div className={styles.wrapper}>

    <Sidebar />

    <main>
    {posts.map(post => {
      return (
        <Post
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
        )
    })}
    </main>
  </div>

   </div>
   )
}



