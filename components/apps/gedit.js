import React, { Component } from 'react';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
            name: '',
            subject: '',
            message: '',
            nameError: '',
            messageError: ''
        };
        this.nameInput = React.createRef();
        this.subjectInput = React.createRef();
        this.messageInput = React.createRef();
    }

    componentDidMount() {
        emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validateForm = () => {
        let nameError = '';
        let messageError = '';

        if (this.state.name.trim().length === 0) {
            nameError = 'Name must not be empty!';
        }

        if (this.state.message.trim().length === 0) {
            messageError = 'Message must not be empty!';
        }

        this.setState({ nameError, messageError });

        return !nameError && !messageError;
    }

    sendMessage = async () => {
        if (!this.validateForm()) return;

        this.setState({ sending: true });

        const { name, subject, message } = this.state;
        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const templateParams = {
            name,
            subject,
            message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams);
            this.setState({ sending: false });
            this.resetForm();
        } catch (error) {
            console.error('Failed to send message:', error);
            this.setState({ sending: false });
        }

        ReactGA.event({
            category: "Send Message",
            action: `Name: ${name}, Subject: ${subject}, Message: ${message}`
        });
    }

    resetForm = () => {
        this.setState({
            name: '',
            subject: '',
            message: '',
            nameError: '',
            messageError: ''
        });
    }

    render() {
        const { name, subject, message, nameError, messageError, sending } = this.state;

        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
                    <span className="font-bold ml-2">Send a Message to Me</span>
                    <div className="flex">
                        <div onClick={this.sendMessage} className="border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80">Send</div>
                    </div>
                </div>
                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen">
                    <div className="absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker"></div>
                    <div className="relative">
                        <input
                            ref={this.nameInput}
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                            className="w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent"
                            placeholder="Your Email / Name :"
                            spellCheck="false"
                            autoComplete="off"
                            type="text"
                        />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
                        {nameError && <div className="text-red-500 text-xs">{nameError}</div>}
                    </div>
                    <div className="relative">
                        <input
                            ref={this.subjectInput}
                            name="subject"
                            value={subject}
                            onChange={this.handleInputChange}
                            className="w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent"
                            placeholder="Subject (may be a feedback for this website!)"
                            spellCheck="false"
                            autoComplete="off"
                            type="text"
                        />
                        <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold text-sm text-ubt-gedit-blue">2</span>
                    </div>
                    <div className="relative flex-grow">
                        <textarea
                            ref={this.messageInput}
                            name="message"
                            value={message}
                            onChange={this.handleInputChange}
                            className="w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent"
                            placeholder="Message"
                            spellCheck="false"
                            autoComplete="none"
                        />
                        <span className="absolute left-1 top-1 font-bold text-sm text-ubt-gedit-blue">3</span>
                        {messageError && <div className="text-red-500 text-xs">{messageError}</div>}
                    </div>
                </div>
                {sending && (
                    <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
                        <img className="w-8 absolute animate-spin" src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
                    </div>
                )}
            </div>
        );
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit />;
};
