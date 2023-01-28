import './Header.css'
const Header=(props)=>{
    return(
        <div className='card'>
            <h2 className="heading">{props.title}</h2>
            <p className='loremText'>{props.description}</p>
        </div>

    )
}
export default Header;