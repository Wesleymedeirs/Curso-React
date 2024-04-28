import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode
}

const Modal = ({ children }: Props) => {

    //Fechar o modal

    const closeModal = (e: React.MouseEvent): void => {
        //pegando o modal pelo ID
        const modal = document.querySelector('#modal')
        modal?.classList.add('hide')
    }
    return (
        <div id='modal' className='hide' >
            <div className={styles.fade} onClick={closeModal}>

            </div>
            <div className={styles.modal}>
                <h2>Texto do modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal