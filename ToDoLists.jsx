import React from 'react';

const ToDoLists = (props) => {
    
    
    return( 
    <>
    <diV className='todo_style'>
    <i class="fal fa-times" aria-hidden='true'
        onClick={() => {
            props.onSelect(props.id);
        }}
    />
    <li> {props.text}</li>
    </diV>
    </>
    );
};

export default ToDoLists;