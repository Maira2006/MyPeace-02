import './Cabecalho.css'
function Cabecalho() {
    return (
        <header>
            <div>
                <img src="Logo.png" alt="" className='my' /> 
                <h1>MyPeace</h1>
                <nav>
                    <ul>
                    <li><a href="#">Home</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho
