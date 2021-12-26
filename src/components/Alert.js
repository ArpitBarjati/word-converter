import React from 'react'

export default function Alert(props) {

    function capitalize(word){
        return word.charAt(0).toUpperCase()+word.slice(1);
    }

    return (
     
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
             <strong>{capitalize(props.alert.type)}</strong> - {props.alert.message}
        </div>
        
    )
}