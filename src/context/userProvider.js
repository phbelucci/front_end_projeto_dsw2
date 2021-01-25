import React, {useState, useEffect} from 'react';
import api from '../api/api';

export const UserContext = React.createContext();

const UserProvider = ( props ) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({});
    }, [])

    const loginSubmitHandler = (event) => {
      event.preventDefault();

      console.log("Entrou");
      const login = {
          "email" : event.target.email.value,
          "password" :  event.target.password.value,
      };
      
      console.log("Login: ", login);
      api.post('users/login', login)
      .then( (response) => {
          console.log(response.data);
          setUser(response.data);
      })
      .catch( (err) => {
          console.log("Erro", err);
      })
  };

    /*
    const onBookSubmit = (event) => {
      event.preventDefault();
      let newBooks = [...books,
        {
          id: books.length + 1,
          name: event.target.name.value,
          author: event.target.author.value,
          pages: event.target.pages.value,
          imgsrc: "https://nnp.wustl.edu/img/bookCovers/genericBookCover.jpg"
        }
      ];
      setBooks(newBooks);
    }
  
    const deleteBookHandler = (index) => {
      let newBooks = books.slice();
      newBooks.splice(index, 1);
      setBooks(newBooks);
    }

    const editBookHandler = (event, index) => {
      event.preventDefault();
      
      let newBooks = books.slice();

      newBooks[index].name = event.target.name.value
      newBooks[index].author = event.target.author.value
      newBooks[index].pages = event.target.pages.value

      setBooks(newBooks);
    }
    */

    return (
        <UserContext.Provider value={
          {
            user: user,
            loginSubmitHandler: loginSubmitHandler
          //onBookSubmit: onBookSubmit, 
          //deleteBookHandler: deleteBookHandler,
          //editBookHandler: editBookHandler
          }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;


/* ======= USAGE ============
import React, {useContext} from 'react'
import { UserContext } from '...path/userProvider'

const { user } = useContext(UserContext);
*/