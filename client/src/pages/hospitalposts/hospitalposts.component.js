import React, { useState } from 'react';
import './hospitalposts.styles.css';

import TopNavBar from '../../components/topnavbar/topnavbar.component';
import Footer from '../../components/footer/footer.component';

import { Helmet } from 'react-helmet';

import BlogEditor from '../../components/blogeditor/blogeditor.component';

import axios from 'axios';

const HospitalPosts = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [tags, setTags] = useState([])
  const suggestions = [
    { id: 'cancer', text: 'cancer' },
    { id: 'blood cancer', text: 'blood cancer' },
    { id: 'leukemia', text: 'leukemia' },
    { id: 'lymphoma', text: 'lymphoma' },
    { id: 'breast cancer', text: 'breast cancer' },
    { id: 'invasive', text: 'invasive' },
    { id: 'non-invasive', text: 'non-invasive' },
    { id: 'skin cancer', text: 'skin cancer' },
    { id: 'heart disease', text: 'heart disease' },
    { id: 'pulmonary stenosis', text: 'pulmonary stenosis' },
    { id: 'arrtythmia', text: 'arrtythmia' },
    { id: 'tachycardia', text: 'tachycardia' },
    { id: 'bradycardia', text: 'bradycardia' },
    { id: 'eye', text: 'eye' },
    { id: 'refractive errors', text: 'refractive errors' },
    { id: 'myopia', text: 'myopia' },
    { id: 'hypermeteropia', text: 'hypermeteropia' },
    { id: 'cataract', text: 'cataract' },
    { id: 'nuclear', text: 'nuclear' },
    { id: 'cartical', text: 'cartical' }
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
      <Helmet>
          <title>Posts</title>
        </Helmet>
      <TopNavBar />
      <BlogEditor 
        handleChange={handleChange} 
        handleTitle={handleTitle} 
        title={title} body={body}
        tags={tags}
        suggestions={suggestions}
        section={"Post"}
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