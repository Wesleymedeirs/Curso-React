//CSS
import styles from './PostDetail.module.css'

import {Link} from 'react-router-dom'

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
      {/*Renserizando a imagem*/}
        <img src={post.image} alt={post.title}/>
        {/*Renserizando o título  */}
        <h2>{post.title}</h2>
        {/*Renserizando o nome do usuário criador do post  */}
        <p className={styles.createdBy}>{post.createdBy}</p>
        {/*Renserizando o array com as tags */}
        <div className={styles.tags}>
          {/* Realizando um map para renderizar os itens do array  */}
            {post.tagsArray.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
            <Link to={`/posts/${post.id}`}className='btn btn-outline'>Ler</Link>
    </div>
  )
}

export default PostDetail