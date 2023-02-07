import { createSlice } from "@reduxjs/toolkit";
import { gampending , gamfulfilled, gamrejected} from "./getAllmovies";
/*const db = [
	{
		Title: "Carmencita",
		Year: "1894",
		Rated: "Not Rated",
		Released: "10 Mar 1894",
		Runtime: "1 min",
		Genre: "Documentary, Short",
		Director: "William K.L. Dickson",
		Writer: "N/A",
		Actors: "Carmencita",
		Plot: "Performing on what looks like a small wooden stage, wearing a dress with a hoop skirt and white high-heeled pumps, Carmencita does a dance with kicks and twirls, a smile always on her face.",
		Language: "None",
		Country: "United States",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BZmUzOWFiNDAtNGRmZi00NTIxLWJiMTUtYzhkZGRlNzg1ZjFmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "5.7/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "5.7",
		imdbVotes: "1,942",
		imdbID: "tt0000001",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Le clown et ses chiens",
		Year: "1892",
		Rated: "N/A",
		Released: "28 Oct 1892",
		Runtime: "5 min",
		Genre: "Animation, Short",
		Director: "Émile Reynaud",
		Writer: "N/A",
		Actors: "N/A",
		Plot: "Short film of 300 individually painted images.",
		Language: "None",
		Country: "France",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BZDI4ZDgwMWQtMjA3ZS00NmU5LTk5MGQtZTMyMGFlMjYyZmFlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "6.0/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "6.0",
		imdbVotes: "259",
		imdbID: "tt0000002",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Pauvre Pierrot",
		Year: "1892",
		Rated: "TV-PG",
		Released: "28 Oct 1892",
		Runtime: "4 min",
		Genre: "Animation, Comedy, Short",
		Director: "Émile Reynaud",
		Writer: "N/A",
		Actors: "N/A",
		Plot: "One night, Arlequin come to see his lover Colombine. But then Pierrot knocks at the door and Colombine and Arlequin hide. Pierrot starts singing but Arlequin scares him and the poor man goes away.",
		Language: "None",
		Country: "France",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BYWZiY2U3MjgtMzYzNS00OGUzLWI3OTQtNjkyMmZiZjEzNDc2XkEyXkFqcGdeQXVyOTUzMjk0NDE@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "6.5/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "6.5",
		imdbVotes: "1,765",
		imdbID: "tt0000003",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Un bon bock",
		Year: "1892",
		Rated: "N/A",
		Released: "28 Oct 1892",
		Runtime: "12 min",
		Genre: "Animation, Short",
		Director: "Émile Reynaud",
		Writer: "N/A",
		Actors: "N/A",
		Plot: "A wanderer comes into a cabaret in the countryside and asks for a glass of beer to a waitress. It is visible that she appeals to him. When the waitress comes back with the beer, the wanderer begins to court her. Meanwhile the kitc...",
		Language: "None",
		Country: "France",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BOGI5NjI1NjMtMjg4Mi00YTQyLThkYjgtNTI1YjlhNzZkOTZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "6.1/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "6.1",
		imdbVotes: "178",
		imdbID: "tt0000004",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Blacksmith Scene",
		Year: "1893",
		Rated: "Unrated",
		Released: "09 May 1893",
		Runtime: "1 min",
		Genre: "Short, Comedy",
		Director: "William K.L. Dickson",
		Writer: "N/A",
		Actors: "Charles Kayser, John Ott",
		Plot: "Three men hammer on an anvil and pass a bottle of beer around.",
		Language: "None",
		Country: "United States",
		Awards: "1 win",
		Poster: "https://m.media-amazon.com/images/M/MV5BNDg0ZDg0YWYtYzMwYi00ZjVlLWI5YzUtNzBkNjlhZWM5ODk5XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "6.2/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "6.2",
		imdbVotes: "2,563",
		imdbID: "tt0000005",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Chinese Opium Den",
		Year: "1894",
		Rated: "N/A",
		Released: "17 Oct 1894",
		Runtime: "1 min",
		Genre: "Short",
		Director: "William K.L. Dickson",
		Writer: "N/A",
		Actors: "N/A",
		Plot: "N/A",
		Language: "None, English",
		Country: "United States",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BZjNlZTI1NjYtNjVkZi00MDBlLThjMDQtY2Q2NDZiZjllYmE3XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "5.3/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "5.3",
		imdbVotes: "177",
		imdbID: "tt0000006",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Corbett and Courtney Before the Kinetograph",
		Year: "1894",
		Rated: "Not Rated",
		Released: "17 Nov 1894",
		Runtime: "1 min",
		Genre: "Short, Sport",
		Director: "William K.L. Dickson, William Heise",
		Writer: "N/A",
		Actors: "James J. Corbett, Peter Courtney",
		Plot: "James J. Corbett and Peter Courtney meet in a boxing exhibition.",
		Language: "None",
		Country: "United States",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BODA4ZTI3NWYtNzAyYi00Yjc5LTk0NDUtZWIzNzQzYzdkODgyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "5.5/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "5.5",
		imdbVotes: "797",
		imdbID: "tt0000007",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Edison Kinetoscopic Record of a Sneeze",
		Year: "1894",
		Rated: "N/A",
		Released: "09 Jan 1894",
		Runtime: "1 min",
		Genre: "Documentary, Short",
		Director: "William K.L. Dickson",
		Writer: "N/A",
		Actors: "Fred Ott",
		Plot: "A man (Thomas Edison's assistant) takes a pinch of snuff and sneezes. This is one of the earliest Thomas Edison films and was the first motion picture to be copyrighted in the United States.",
		Language: "None",
		Country: "United States",
		Awards: "1 win",
		Poster: "https://m.media-amazon.com/images/M/MV5BNGQ5MjZjYzgtYjJhMC00NDIzLTk0NjgtNmRjZDc1ZGM5MmM5XkEyXkFqcGdeQXVyOTUzMjk0NDE@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "5.4/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "5.4",
		imdbVotes: "2,064",
		imdbID: "tt0000008",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Miss Jerry",
		Year: "1894",
		Rated: "N/A",
		Released: "09 Oct 1894",
		Runtime: "45 min",
		Genre: "Romance",
		Director: "Alexander Black",
		Writer: "Alexander Black",
		Actors: "Blanche Bayliss, William Courtenay, Chauncey Depew",
		Plot: "The adventures of a female reporter in the 1890s.",
		Language: "None",
		Country: "United States",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BNTUwNzM4NWYtMDkwOC00ZmQwLTk1OGQtNjAwMmU2MjI3Y2QxXkEyXkFqcGdeQXVyNzQ1NDIxMDQ@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "5.9/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "5.9",
		imdbVotes: "202",
		imdbID: "tt0000009",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	},
	{
		Title: "Leaving the Factory",
		Year: "1895",
		Rated: "Not Rated",
		Released: "22 Mar 1895",
		Runtime: "1 min",
		Genre: "Documentary, Short",
		Director: "Louis Lumière",
		Writer: "N/A",
		Actors: "N/A",
		Plot: "Workers leaving the Lumière factory for lunch in Lyon, France in 1895; a place of great photographic innovation and one of the birth places of cinema.",
		Language: "None",
		Country: "France",
		Awards: "N/A",
		Poster: "https://m.media-amazon.com/images/M/MV5BY2EwNzY0YmItOWM2MS00MmQyLWEzYmUtYmQ4ZDNlYjg1OGY0XkEyXkFqcGdeQXVyOTUzMjk0NDE@._V1_SX300.jpg",
		Ratings: [
			{
				Source: "Internet Movie Database",
				Value: "6.9/10"
			}
		],
		Metascore: "N/A",
		imdbRating: "6.9",
		imdbVotes: "6,986",
		imdbID: "tt0000010",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "True"
	}
]*/

let db = []

const moviesSlice = createSlice({
    name:'movies',
    initialState: {db:db,movieDetail:{}, loading:true},
    reducers:{
        getMovies: (state)=>{
            return state
        },
		getMovieDetail:(state,action)=>{
			const md = [...state.db].find(el=>el.imdbID===action.payload)
			return {...state,movieDetail:md}
		},
		cleanMovieDetail:(state)=>{
			return {...state,movieDetail:{}}
		}
    },
	extraReducers: {
		[gampending]:(state)=>{
			state.loading = true
		},
		[gamfulfilled]:(state,action)=>{
			console.log(action.payload);
			state.db = action.payload
			state.loading = false
		},
		[gamrejected]:(state)=>{
			state.loading = false
		}
	}
})

export const moviesReducer = moviesSlice.reducer
export const {getMovies, getMovieDetail, cleanMovieDetail} = moviesSlice.actions

