import './global.css'
import styles from './App.module.css'
import { Post } from '../Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';



function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            autor="Diego Fernandes"
            content="Loren ipsum dolor sit amet consectetur adipisicing elit. Assumeda odio aliquam voluptate recusandae,non laborium dolore,excepturi iure repellat veniam modi, aliquid tempora facere libero cupididate unde exercitationem repellendus! Fugiat!"
          />
          <Post
            autor="Gabriel Buzzi  "
            content="Um novo post muito Legal"
          />
        </main>
      </div>
    </div>
  )
}

export default App
