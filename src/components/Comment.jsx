import { ThumbsUp, Trash } from 'phosphor-react/dist'
import styles from './Comment.module.css'

export function Comment() {
    return(
     <div className={styles.comment}>
        <img src="https://github.com/fragoso-dev.png"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Pablo Fragoso</strong>
                        <time title='28 de Abril de 2025' dateTime='2025-04-28 15:58:38'>Cerca de 1hr atrás</time>
                    </div>
                    <button title='Deletar Comentário'>
                        <Trash size={24}/>
                    </button>
                </header >
                <p>Muito bom Hamábily, parabéns!! 👏👏!</p>
        </div>
        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
    </div>

     </div>  
      
    )

}