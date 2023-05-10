import React, { useEffect, useState } from "react";

import Form from '../../templates/form/index';
import Input from '../../molecules/InputWithLabel';

import './Profile.scss';

function NewAccount(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const submitAccount = (e) => {
        if (email && firstName && lastName) {
            fetch(`/api/user/${props.data.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    phone: phone
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then(() => {
                    localStorage.removeItem("newAccount");
                    props.openProfile()
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            e.stopPropagation()
        }
    }

    useEffect(() => {
        if (props.data) {
            setEmail(props.data.email || "")
            setFirstName(props.data.first_name || "")
            setLastName(props.data.last_name || "")
            setPhone(props.data.phone || "")
        }
    }, [props.data])

    return (
        <section className="NewAccount">
            <h2>Welcome to your profile</h2>
            <Form onSubmit={submitAccount} button="Continue">
                <div className="form__row">
                    <Input value={firstName} label='First name' required={true} onChange={(e) => setFirstName(e.target.value)} />
                    <Input value={lastName} label='Last name' required={true} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form__row">
                    <Input value={email} label='Email' required={true} onChange={(e) => setEmail(e.target.value)} />
                    <Input value={phone} label='Phone number' onChange={(e) => setPhone(e.target.value)} />
                </div>
            </Form>
        </section>
    );
}

export default NewAccount;
