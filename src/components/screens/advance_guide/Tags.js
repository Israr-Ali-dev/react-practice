import React, { Component, Fragment } from 'react';

export class Tags extends Component {
  constructor(props) {
    super(props);

    this._addNewTag = this._addNewTag.bind(this);
    this.state = { tags: ['JavaScript', 'CSS'], newTag: null };
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    this.list = $(this.refs.list);
    this.list.tagit();
  }
  _addNewTag() {
    this.setState({ newTag: this.refs.field.value });
  }
  render() {
    return (
      <Fragment>
        <div>
          <p>Add new tag:</p>
          <div>
            <input type='text' ref='field' />
            <button onClick={this._addNewTag}>Add</button>
          </div>
          <Tags tags={this.state.tags} newTag={this.state.newTag} />
        </div>
        <ul>
          {this.state.tags.map((tag, i) => (
            <li key={i}>{tag} </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Tags;
