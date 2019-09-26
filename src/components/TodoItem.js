import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        //same as below but with operator
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }


        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
    }


    render() {
        const {id, title} = this.props.todo; // destructing to pull information
        return (
            <div style={this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                   {title}</p>
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        );
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;


// import React, {Component} from 'react';
//
// class TodoItem extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Names</h1>
//             </div>
//         );
//     }
// }
//
// export default TodoItem;
