import React, {Component} from 'react';
import $ from 'jquery';

class Newsletter extends Component {

    state = {
        isValid: 'input-wrap',
    };

    render() {

        const {isValid} = this.state;
        return (
            <form>
                <div className='form-title'>NEWSLETTER</div>
                <div className={isValid}>
                    <input ref='textInput' name='email' type='text' placeholder='Email'/>
                    <span className='button' onClick={this.handleSubmit}>SUBSCRIBES</span>
                </div>
            </form>
        )
    }

    handleSubmit = () => {

        let emailRegExp = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        let inputVal = this.refs.textInput.value;           //get value of input

        if (!!inputVal.match(emailRegExp)) {                //if input value == email

            $.ajax({
                type: "POST",
                url: "http://wedbev.com/send.php",
                data: {email: inputVal},
                success: () => {
                    this.setState({
                        isValid: 'input-wrap ok'
                    });
                },
                error: () => {
                    this.setState({
                        isValid: 'input-wrap error'
                    });
                }
            });
        } else {
            this.setState({
                isValid: 'input-wrap error'
            });
        }
    };
}

export default Newsletter
