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
          <h1 className="font-hairline text-center text-4xl">1on1ミーティングの質問を選びましょう</h1>
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
        {!requested ? <button className="text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => fetchData()}>選択</button> : null}
        {requested && !loading ? <button className="text-3xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => fetchData()}>もう一度選択</button> : null}

        </div> 
        <div className="w-full text-center flex-initial">
          <a rel="noopener noreferrer" className="text-xs text-blue-500 hover:text-blue-800" href="https://github.com/danishi/1on1-question-generator-ja" target="_blank">GitHub</a>
          &nbsp;&nbsp;&nbsp;
        </div> 
      </div> 
    </div>
  );
}

export default App;

