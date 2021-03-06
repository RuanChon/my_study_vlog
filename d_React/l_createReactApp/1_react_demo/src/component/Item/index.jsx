import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false,
  }

  // 高阶组件
  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  handleChecked = id => {
    return event => {
      console.log('id', id)
      console.log('event', event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleDelete = id => {
    console.log('id', id)
    if (window.confirm('确定删除？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, title, done } = this.props
    const { mouse } = this.state
    return (
      <li
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChecked(id)} />
          <span>{title}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
        >
          delete
        </button>
      </li>
    )
  }
}
