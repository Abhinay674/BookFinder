import React,{useState} from 'react'
import Search from './components/Search'
import Loader from './components/Loader';

function App() {
  const [search,setSearch] = useState('');
  const [books,setbooks] = useState([]);
  const [loading,setLoading] = useState(false);

  const API_KEY = 'AIzaSyAvczMKkHhjS_FIFCn-QmE56ra3RrvOFTc';

  const fetchbooks = async () => {
    setLoading(true);
    const response = await fetch(`/books/v1/volumes?q=${search}&key=${API_KEY}`);
    const data = await response.json();
    setbooks(data.items);
    setLoading(false);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = async (e) => {
    if(search){
      fetchbooks();
      setSearch('');
    } else {
      alert('Please Enter a Book Title/Author');
    }
    e.preventDefault();
  }

 return loading ? (<Loader />) : (<>
  <header>
    <form onSubmit={handleSubmit}>
      <input className='input' onChange={handleChange} type="text" placeholder='Enter Book title/author' value={search} />
    </form>
  </header>
  <div className='container'>
    {books.map((book) => (<Search key={book.id} data={book} />))}
  </div>
  {Loader}
  </>);
}

export default App
