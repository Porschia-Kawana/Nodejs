import React from "react";
import "./Account.scss";

function Account() {
    const [toggle, setToggle] = React.useState(false);
    const [signUp, setSignUp] = React.useState({
        username: "",
        hash: "",
        email: "",
        name: "",
    })
    const [login, setLogin] = React.useState({
        username: "",
        hash: "",
    })

    const handleSignUpForm = () => {
        console.log(JSON.stringify(signUp))
        fetch("/api/users/create", {
            method: 'POST',
            body: JSON.stringify(signUp),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const handleLoginForm = (data) => {
        console.log(data)
    }

    const handleSignUpInputs = (field, value) => {
        let inputs = {
            username: field === 'username' ? value : signUp.username,
            hash: field === 'hash' ? value : signUp.hash,
            email: field === 'email' ? value : signUp.email,
            name: field === 'name' ? value : signUp.name,
        }

        setSignUp(inputs)
    }

    const handleLoginInputs = (field, value) => {
        let inputs = {
            username: field === 'username' ? value : login.username,
            hash: field === 'hash' ? value : login.hash,
        }

        setLogin(inputs)
    }

    return (
        <div className="Account">
            <h2 className="title">
                <div role="button" className={`button ${!toggle ? "active" : ""}`} onClick={() => setToggle(false)}>Login</div> / <div role="button" className={`button ${toggle ? "active" : ""}`} onClick={() => setToggle(true)}>Sign Up</div>
            </h2>
            {!toggle ?
                <form onSubmit={handleLoginForm} className="form login">
                    <div className="input__container">
                        <label>Username</label>
                        <div className="input">
                            <input value={login.username} type="text" onChange={(e) => handleLoginInputs('username', e.target.value)} />
                        </div>
                    </div>
                    <div className="input__container">
                        <label>Password</label>
                        <div className="input">
                            <input type="password" value={login.hash} onChange={(e) => handleLoginInputs('hash', e.target.value)} />
                        </div>
                    </div>
                    <button className="button" type="submit"><h3>LOGIN</h3></button>
                </form>
                :
                <form onSubmit={handleSignUpForm} className="form signup">
                    <div className="input__container">
                        <label>Name</label>
                        <div className="input">
                            <input value={signUp.name} type="text" onChange={(e) => handleSignUpInputs('name', e.target.value)} />
                        </div>
                    </div>
                    <div className="input__container">
                        <label>Username</label>
                        <div className="input">
                            <input value={signUp.username} type="text" onChange={(e) => handleSignUpInputs('username', e.target.value)} />
                        </div>
                    </div>
                    <div className="input__container">
                        <label>Email</label>
                        <div className="input">
                            <input type="email" value={signUp.email} onChange={(e) => handleSignUpInputs('email', e.target.value)} />
                        </div>
                    </div>
                    <div className="input__container">
                        <label>Password</label>
                        <div className="input">
                            <input type="password" value={signUp.hash} onChange={(e) => handleSignUpInputs('hash', e.target.value)} />
                        </div>
                    </div>
                    <button className="button" type="submit"><h3>SIGN UP</h3></button>
                </form>
            }
        </div>
    );
}

export default Account;
