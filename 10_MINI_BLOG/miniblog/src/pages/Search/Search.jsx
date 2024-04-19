import styles from './Search.module.css'

//hooks
import { useFetchDocuments } from '../../hooks/useFecthDocuments'
import { useQuery } from '../../hooks/useQuery'


import PostDetail from '../../components/PostDetail'
import { Link } from 'react-router-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const { documents: posts } = useFetchDocuments('posts', search)
    return (
        <div className={styles.search_container}>
            <h1>Pesquisa</h1>
            <p className={styles.p_sub_titulo}>Resultado da sua pesquisa</p>
            <div>
                {/*Quando não tiver nenhum post é a presentado esse condigo abaixo */}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to='/' className='btn btn-dark'>Voltar</Link>
                    </div>
                )}

                {/*Quando tiver posts será exibidos no componente PostDetail */}
                 {/*foi passado como props key e post */}
                {posts && posts.map((post) => (                   
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search