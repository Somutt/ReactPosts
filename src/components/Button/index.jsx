import React from 'react';
import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};

/* export class Button extends Component {

    render(){
        const { text, onClick, disabled } = this.props;

        return(
            <button disabled={disabled} className="button" onClick={onClick} >
                { text }
            </button>
        );
    }

} */
