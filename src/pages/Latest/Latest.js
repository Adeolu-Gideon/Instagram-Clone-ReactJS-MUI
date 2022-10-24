import axios from 'axios'
import React, {useEffect, useState} from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import './Latest.css'
import '../../App.css'
import myPagination from '../../components/Pagination/myPagination';
import CustomPagination from '../../components/Pagination/CustomPagination';
const Latest = () => {
    const [content, setcontent] = useState([])
    const [page, setPage] = useState(1)
    const fetchLatest = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=f56b21c32cdf3221d2b0da04638aa8da&page=${page}`);
        console.log(data);
        setcontent(data.results);
    }
    useEffect(() => {
        fetchLatest();
    }, [page]);
    
  return (
      <div>
          
          <div className='latest'>
              {content && content.map((c) => 
                  <SingleContent key={c.id} id={c.id} poster={c.poster_path} vote_average={c.vote_average} media_type={c.media_type}/>)}
          </div>
          <myPagination setPage={setPage} />
          <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Latest