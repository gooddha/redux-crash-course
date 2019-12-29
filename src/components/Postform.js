import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form action=''>
          <div>
            <label>Title:</label>
            <br />
            <input type='text' />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea name='body' />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
