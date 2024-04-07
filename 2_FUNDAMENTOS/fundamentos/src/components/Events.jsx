const Events = () => {

    const renderSomething = (x) => {
        if(x){
            return <h3>Renderizando do true</h3>
        }else{
            return <h3>Renderizando do false</h3>
        }
    }

    const handleMyEvent = (e) => {
        console.log('Ativou o evento');
    };
    const event2 = () => {
        console.log('Clicou');
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <button onClick={event2}>Clique aqui!</button>
            </div>

            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}
export default Events;