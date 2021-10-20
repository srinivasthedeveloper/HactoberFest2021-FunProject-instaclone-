import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Uploader from './components/Uploader'
import Home from './screens/Home'
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [isUploaderOpen, setUploaderOpen] = useState(false)
  const handleUploader = (e) => {
    setUploaderOpen(e)
  }
  const [data, setData] = useState([
    {
      username: 'starletnova',
      location: 'chennai',
      caption:
        'Tag that competitive programmer😂\n.\n©: LinkedIn il suttathu\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n#maranacoder #css #frontend #backend #code #infosys #itdood #itmemes #tcs #google #Infosys #ithunammapage #c #java #tamil #mokkapostu #leetcode #competitiveprogramming #codechef #hackerrank #code #officememes #office #tamil #itteam #itdood #tamilmemes #google #coder #hoodie #interview #linkedin',
      logo: 'image1.jpg',
      image: 'image2.jpg',
      isLiked: false,
      isSaved: false,
      likes: 100,
      comment: [{ user: 'username', msg: 'comment' }],
    },
    {
      username: 'elonaHolmes',
      location: 'mumbai',
      caption: 'his blah blah blah content2',
      logo: 'image2.jpg',
      image: 'image1.jpg',
      isLiked: true,
      isSaved: true,
      likes: 10,
      comment: [{ user: 'SrinivasTheDeveloper', msg: 'This is awesome keep doing great',logo:'image.jpg' }],
    },
  ])
  const handleToogle = (e) => {
    let update = [...data]
    update[e[0]] = { ...update[e[0]], ...e[1] }
    setData(update)
  }
  const handleUpload = (e) => {
    setData([...data, e])
  }
  const handleComment = (e) => {
    let update = [...data]
    update[e[0]]['comment'].push(e[1])
    setData(update)
    // console.log(data)
  }
  return (
    <div className="app">
      <Header />
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className="appHome">
            <Home
              data={data}
              handleToogle={handleToogle}
              handleComment={handleComment}
            />
          </div>
          <Sidebar username="SrinivasTheDeveloper" logo={'image.jpg'} />
        </div>
        <Uploader
          isOpen={isUploaderOpen}
          handleClose={handleUploader}
          handleUpload={handleUpload}
        />
      </div>
      <Footer
        username="SrinivasTheDeveloper"
        logo={'image.jpg'}
        isUploaderOpen={isUploaderOpen}
        handleUploader={handleUploader}
      />
    </div>
  )
}

export default App
