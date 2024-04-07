const TemplateExpressions = () => {

    const nome = 'Wesley';
    const dados = {
        dn: 1997,
        job: 'Teste'
    }
    
    return(
        <div>
            <h2>Olá {nome}, tudo bem?</h2>
            <p>Ano de nascimento: {dados.dn}</p>
        </div>
    )
}

export default TemplateExpressions;