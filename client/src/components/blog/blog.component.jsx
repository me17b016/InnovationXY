import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CKEditor from 'ckeditor4-react';

class TwoWayBinding extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: '<p>This is a CKEditor 4 WYSIWYG editor instance created by ️⚛️ React.</p>'
		};

		this.handleChange = this.handleChange.bind( this );
		this.onEditorChange = this.onEditorChange.bind( this );
	}

	onEditorChange( evt ) {
		this.setState( {
			data: evt.editor.getData()
		} );
	}

	handleChange( changeEvent ) {
		this.setState( {
			data: changeEvent.target.value
		} );
	}

	render() {
		return (
			<div>
				<SourceEditor data={this.state.data} handler={this.handleChange} />

				<div style={{overflow: 'auto'}}>
					<CKEditor
						data={this.state.data}
						onChange={this.onEditorChange}
						style={{
							float: 'left',
							width: '50%'
						}}
					/>
					<EditorPreview data={this.state.data} />
				</div>
			</div>
		);
	}
}

class EditorPreview extends Component {
	render() {
		return (
			<div className="editor-preview">
				<h2>Rendered content</h2>
				<div dangerouslySetInnerHTML={{ __html: this.props.data }}></div>
			</div>
		);
	}
}

class SourceEditor extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			focused: false
		};
	}

	render() {
		var textareaValue = {};

		if ( !this.state.focused ) {
			textareaValue = {
				value: this.props.data
			};
		}

		return (
			<>
				<p>
					<label htmlFor="editor-editor">The editor content:</label>
				</p>
				<p>
					<textarea
						id="editor-editor"
						className="binding-editor"
						{...textareaValue}
						onChange={this.props.handler}
						onFocus={ () => { this.setState( {
								focused: true
							} );
						}}
						onBlur={ () => { this.setState( {
								focused: false
							} );
						}}
					/>
				</p>
			</>
		);
	}
}

export default TwoWayBinding;