import style from "../assets/styles/register_style.css";

const Register = () => {
    return(
        <div id="register-div">
            <form id="register-box">
                <h3>Create an account</h3>
                <div>
                    <label>EMAIL</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>USERNAME</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>PASSWORD</label>
                    <input type="password"></input>
                </div>
                <button id="register-btn">Continue</button>
                <div id="register-box-a-div">
                    <a href="./login">Already have an account?</a>
                </div>
            </form>
        </div>
    )
}

export default Register;