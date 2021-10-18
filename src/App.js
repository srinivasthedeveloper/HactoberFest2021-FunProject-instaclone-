import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Uploader from './components/Uploader'
import Home from './screens/Home'
import React, { useState } from 'react'

function App() {
  const [isUploaderOpen, setUploaderOpen] = useState(false)
  const [isCommentOpen, setCommentOpen] = useState(false)
  const handleModal = (e) => {
    switch (e[0]) {
      case 'uploader':
        setUploaderOpen(e[1])
        break
      case 'comment':
        setCommentOpen(e[1])
        break
      default:
        setUploaderOpen(false)
        setCommentOpen(false)
    }
  }
  const [data, setData] = useState([
    {
      username: 'srinivasTheDeveloper',
      location: 'chennai',
      caption:
        'his blah blah blah content his blah blah blah content his blah blah blah content his blah blah blah content his blah blah blah content \nhis blah blah blah content \n.\n.\n.\nhis blah blah blah content \nhis blah blah blah content \n',
      logo: 'image.jpg',
      image: 'image.jpg',
      isLiked: false,
      isSaved: false,
      likes: 100,
      comment: [{ user: 'username', msg: 'comment' }],
    },
    {
      username: 'srinivasTheDeveloper',
      location: 'mumbai',
      caption: 'his blah blah blah content2',
      logo: 'image.jpg',
      image: 'image.jpg',
      isLiked: true,
      isSaved: true,
      likes: 10,
      comment: [{ user: 'username1', msg: 'comment1' }],
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
    console.log(data)
  }
  return (
    <div className="app">
      <Header />
      <div className="appHome">
        <Home
          data={data}
          handleToogle={handleToogle}
          handleComment={handleComment}
        />
        <Uploader
          isOpen={isUploaderOpen}
          handleClose={handleModal}
          handleUpload={handleUpload}
        />
      </div>
      <Footer
        userName={'SrinivasTheDeveloper'}
        logo={'image.jpg'}
        isUploaderOpen={isUploaderOpen}
        handleUploader={handleModal}
      />
    </div>
  )
}

export default App
