import styles from './Post.module.css'

//Hooks
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import { useFetchDocuments } from '../../hooks/useFecthDocuments'

const Post = () => {

    const { loading } = useFetchDocuments('posts')
    const { id } = useParams()
    const { document: post } = useFetchDocument('posts', id)

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p className={styles.bodyStyle}>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Post