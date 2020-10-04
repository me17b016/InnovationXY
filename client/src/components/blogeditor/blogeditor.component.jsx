import React, { Component } from 'react';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Testing
import CKEditor from 'ckeditor4-react';
import './blogeditor.styles.css'


import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import { WithContext as ReactTags } from 'react-tag-input';
const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];

const BlogEditor = props => {
    
        return (
            <div className="BlogEditor">
                <div style={{width:"80%", margin:"auto"}}>
                  <div className="blogeditor-text">
                    <h1>{props.section} Section</h1>
                    <i><h3>Mehta Group of Hospital, Hackathon AGBI (2020) </h3></i>
                  </div>
                  <InputLabel shrink htmlFor="bootstrap-input" style={{marginBottom:0, marginLeft : 0, fontSize : 20, fontWeight:800}}>
                    Title
                  </InputLabel>
                  <TextField 
                    variant="outlined"
                    style={{marginTop: 10, marginBottom : 10, width : 800, backgroundColor: "white"}}
                    size="small"
                    value={props.title}
                    onChange={e => props.handleTitle(e.target.value)}
                  />
                  <InputLabel shrink htmlFor="bootstrap-input" style={{marginTop: 20, marginBottom:10, marginLeft : 0, fontSize : 20, fontWeight:800}}>
                    Body
                  </InputLabel>
                  <div style={{width : 800}}>
                    <CKEditor
                        // editor={ ClassicEditor }
                        data={props.body}
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                           // console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = event.editor.getData();
                            props.handleChange(data);
                            //console.log( { event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            //console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            //console.log( 'Focus.', editor );
                        } }
                    />
                  </div>
                  <div className="blogeditor-buttons">
                    {/* <div className="editor-button1-div"><button>ADD TAG</button></div> */}
                    <div className="editor-button2-div"><button onClick={props.handleSubmit}>SUBMIT</button></div>
                    <div style={{flex: 1.3, width:200, marginTop: 0, marginBottom:300, marginLeft:-400}}>
                      <ReactTags 
                        tags={props.tags}
                        suggestions={props.suggestions}
                        handleDelete={props.handleDelete}
                        handleAddition={props.handleAddition}
                        handleDrag={props.handleDrag}
                        delimiters={delimiters} />
                    </div>
                  </div>
                  
                </div>
            </div>
        );
    
}
export default BlogEditor;