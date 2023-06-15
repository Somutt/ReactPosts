import React from 'react';
import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Post } from '../../components/Post';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

import { loadPosts } from '../../utils/loadPosts';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const photosAndPosts = await loadPosts();

    setPosts(photosAndPosts.slice(page, postsPerPage));
    setAllPosts(photosAndPosts);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {searchValue && <h1>Search Value: {searchValue} </h1>}
        <SearchInput onChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Post posts={filteredPosts} />}

      {filteredPosts.length === 0 && <p>Nada encontrado na busca</p>}

      <div className="button-container">
        {!searchValue && <Button text={'Load More Posts'} onClick={loadMorePosts} disabled={noMorePosts} />}
      </div>
    </section>
  );
};

/* export class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 3,
      searchValue: ''
    }
  }

  async componentDidMount() {
    const { posts, postsPerPage } = this.state;
    const photosAndPosts = await loadPosts();

    this.setState({
      posts: photosAndPosts.slice(posts, postsPerPage),
      allPosts: photosAndPosts
    });
  }

  handleClick = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, allPosts, postsPerPage, page, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = searchValue ? allPosts.filter( post => post.title.toLowerCase()
      .includes(searchValue.toLowerCase()) ) : posts;

    return(
      <section className="container">
        <div className="search-container" >
          { searchValue && (
            <>
              <h1> Search value: {searchValue} </h1> <br />
            </>
          )}

          <SearchInput onChange={this.handleChange} />
        </div>

        { filteredPosts.length > 0 ? <Post posts={filteredPosts} /> : <p>Nada encontrado na busca =( </p> }

        <div className="button-container" >
          { !searchValue && (
            <Button
              disabled={noMorePosts}
              text={'Load More Posts'}
              onClick={ this.handleClick }
            />
          )}
        </div>
      </section>
    );
  }
} */

/* constructor(props) {
  super(props)

  this.state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'Titulo 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'Titulo 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Titulo 3',
        body: 'Corpo 3'
      }
    ]
  }
}

//Chamado sempre que o componente é montado
componentDidMount() {
  this.handleTimeout();
}

//Chamado quando o componente atualiza
componentDidUpdate() {
  this.handleTimeout();
}

//Chamado quando o componente irá ser desmontado, importante p/ evitar propagação de erro e limpar o lixo
componentWillUnmount() {
  clearInterval(this.timoutUpdate);
}

handleTimeout = () => {
  const { posts, counter } = this.state;
  posts[0].title = 'Novo Título';

  this.timoutUpdate = setTimeout( () => {
    this.setState({
      posts, counter: counter + 1
    })
  }, 2000 )
}

render() {

  const { posts, counter } = this.state;

  return(
    <div className="App" >
        <h1>{ counter }</h1>
        {
        posts.map( post => (
          <div key={post.id} >
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))
        }
    </div>
  );
}
} */

/* constructor(props) {
  super(props);
  this.handlePClick = this.handlePClick.bind(this); //Bind p/ funções não arrow

  this.state = {
    name: 'Samuel Moura Alves',
    age: 25
  };
}

//Funções possuem seu próprio escopo e o this precisa ser bindado externamente
handlePClick() {
  const { name, age } = this.state;
  console.log(`Clicado em ${name}, que tem ${age} anos`);
}

//O functionamento do escopo de arrow function é diferente, o bind this é o pertencente ao escopo superior
handleAClick = (e) => {
  e.preventDefault();
  const { age } = this.state;
  this.setState({ age: age + 1 });
}

render() {
  const { name, age } = this.state; //Destructuring assignment

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ this.handlePClick } >
          {name}, {age} anos
        </p>
        <a
          onClick={ this.handleAClick } //Apenas atribui o método a onClick, não o chama
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feliz Aniversário!
        </a>
      </header>
    </div>
  );
}
} */
