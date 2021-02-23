import React, { useState, useEffect } from 'react'
// import Labeldom from './components/label'
// import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import axios from "axios";

function App() {
  const prefectureUrl = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';
  const populationUrl = 'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear'
  const apiKey = process.env.REACT_APP_API_KEY;
  // 都道府県取得
  const prefectures = axios.get( prefectureUrl, { headers: { 'X-API-KEY': apiKey } })
  // 都道府県ごとに人口取得
  const populationByPrefecture = axios.get( populationUrl, { headers: { 'X-API-KEY': apiKey } })
  const [pref, setPref] = useState([])
  useEffect( () => {
    const allPref = [];
    prefectures.then( res => {
      const prefData = res.data.result
      for (let pref of prefData) {
        allPref.push(pref)
      }
    })
    setPref(allPref)
    console.log(allPref)
  }, [])

  return (
    <div className="App">
        {
          pref.map( (name, index) => {
            console.log(name)
            return ('test')
          })
        }
      {/*<HighchartsReact highcharts={Highcharts} options={options}></HighchartsReact>*/}
    </div>
  )
}

export default App;
