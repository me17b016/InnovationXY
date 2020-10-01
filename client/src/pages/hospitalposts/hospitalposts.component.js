import React, { useState } from 'react';
import './hospitalposts.styles.css';

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component';

import BlogEditor from '../../components/blogeditor/blogeditor.component';

import axios from 'axios';

const HospitalPosts = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [tags, setTags] = useState([]);
  const suggestions = [
    { id: 'USA', text: 'USA' },
    { id: 'Germany', text: 'Germany' },
    { id: 'Austria', text: 'Austria' },
    { id: 'Costa Rica', text: 'Costa Rica' },
    { id: 'Sri Lanka', text: 'Sri Lanka' },
    { id: 'Thailand', text: 'Thailand' }
  ]

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index != i))
  }

  const handleAddition = tag => {
    let temTags = [...tags, tag]
    setTags(temTags);
  }

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  }


  const handleTitle = val => {
    setTitle(val);
    //console.log(val);
  }
  const handleChange = val => {
    setBody(val);
  }

  const handleSubmit = () => {
    let post = {
      id : localStorage.getItem('userid'),
      title: title,
      body: body
    }
    axios.post('/api/post', post)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <TopNavBar />
      <BlogEditor 
        handleChange={handleChange} 
        handleTitle={handleTitle} 
        title={title} body={body}
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        handleSubmit={handleSubmit}
      />
      <Footer />
    </div>
  )
}

export default HospitalPosts;