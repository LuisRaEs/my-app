import { Routes, Route } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllMovies } from '../store/slices/getAllmovies'
import { Home } from './Home/Home'
import { Movie } from './Movie/Movie'
import { GenrePage } from './GenrePage/GenrePage'
import { Login } from './Login/Login'
import { SingUp} from './SingUp/SingUp'
import { Favorites } from './Favorites/Favorites'
import { SearchPage } from './SearchPape/SearchPage.js'
import './Main.css'


export function Main() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.movies)
    useEffect(()=>{dispatch(getAllMovies())},[])
    return (  
        <div className="main-container">
        <Routes>
            <Route path='/' element={loading? <p>Loading</p> : <Home/>}/>
            <Route path='/search' element={loading? <p>Loading</p> : <SearchPage/>}/>
            <Route path='/movie/:id' element={loading? <p>Loading</p> : <Movie/> }/>
            <Route path='/genres/:page' element={loading? <p>Loading</p> : <GenrePage/> }/>
            <Route path='/user/login' element={loading? <p>Loading</p> : <Login/>} />
            <Route path='/user/singup' element={loading? <p>Loading</p> : <SingUp/>} />
            <Route path='/user/favorites' element={loading? <p>Loading</p> : <Favorites/>} />
        </Routes>
        </div>
    );
}
