import React, {useState} from 'react';
//import anime from 'animejs/lib/anime.es.js';
import {Item} from './Item';
import {getQuestions} from './services/service';

import './tailwind.output.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const [list, setList] = useState([]);
  
  async function fetchData(){
    setList([])
    setLoading(true);

    const result = await getQuestions();
    setList([...result])
  
    setLoading(false);
    setRequested(true)
  }

  return (
    <div className="App">
      <div className="flex flex-wrap">
        <div className="w-full flex-initial">
          <h1 className="font-hairline text-center text-4xl">Choose questions for your next 1-on-1 meeting</h1>
        </div>
        <div className="w-full flex-wrap flex justify-center css-results-block">
            {/* loding block */}
            {loading ? (<div data-testid="loader-ribbon" className="progress progress-infinite">
                          <div className="progress-bar3" >
                          </div>                       
                        </div>)  : null}
            {/* list */}
            {(!loading && list.length) ?list.map((data, index) => <Item data={data} key={index}/>)
            : null}
        </div>
        <div className="w-full text-center flex-initial mt-2 mb-4">
             {/* buttons */}
        {!requested ? <button className="text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => fetchData()}>Choose</button> : null}
        {requested && !loading ? <button className="text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => fetchData()}>Choose again</button> : null}

        </div> 
        <div className="w-full text-center flex-initial">
          <a rel="noopener noreferrer" className="text-xs text-blue-500 hover:text-blue-800" href="https://github.com/VGraupera/1on1-questions" target="_blank">1on1-questions on Github</a>
          &nbsp;&nbsp;&nbsp;
          <a className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-4" rel="noopener noreferrer"
          href="https://twitter.com/intent/tweet?text=1%20on%201%20Meeting%20Questions%20generator">
        Tweet</a>

        </div> 
      </div> 
    </div>
  );
}

export default App;

