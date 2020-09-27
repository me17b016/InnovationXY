import React, { Component } from 'react';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//Testing
import CKEditor from 'ckeditor4-react';


import './blogeditor.styles.css'

const BlogEditor = props => {
    
        return (
            <div className="BlogEditor">
                <center>
                  <div className="blogeditor-text">
                    <h1>POST SECTION</h1>
                    <i><h3>Mehta Hospitals Hackathon AGBI (2020) </h3></i>
                  </div>
                  <div style={{width : 800}}>
                    <CKEditor
                        // editor={ ClassicEditor }
                        data="<p>Write your post here..."
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = event.editor.getData();
                            props.handleChange(data);
                            console.log( { event, editor, data } );
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                  </div>
                  <div className="blogeditor-buttons">
                    <div className="editor-button1-div"><button>ADD TAG</button></div>
                    <div className="editor-button2-div"><button>SUBMIT</button></div>
                  </div>
                </center>
            </div>
        );
    
}
export default BlogEditor;