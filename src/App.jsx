import './global.css'
import styles from './App.module.css'
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlvesHamabily.png',
      name: 'Hamabily Alves',
      role: 'Full Stack Developer'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2025-04-29 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/fragoso-dev.png',
      name: 'Pablo Fragoso',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: ' Fala galeraa 👋', },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2025-04-25 20:00:00'),
  },
]


function App() {
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

export default App
