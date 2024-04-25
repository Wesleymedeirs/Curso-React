//Aula 3 - componentes

type Props = {
    name: string
    title: string
    content: string
    commentsQty: number
    tags: string[]

    //Aula 8 - enum
    category: Category
}
export enum Category {
    JS = 'JavaScript',
    TS = 'TypeScript',
    P = 'Python'
}

function FirstComponent({ name, title, content, commentsQty, tags, category }: Props) {
    return (
        <div>
            <h1>Desestruturando props</h1>
            <h3>Menu</h3>
            <p>O nome dele é: {name}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <li key={tag}>#{tag}</li>
                ))}
                <h1>enum</h1>
            </div>
            <h4>Categorias: {category}</h4>
        </div>
    )
}

export default FirstComponent