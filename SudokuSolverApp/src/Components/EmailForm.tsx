import './EmailForm.css';
import React, {useState} from "react";
import App from "../App";
function Email(){

    const[email,setEmail] = useState('');
    const handleSubscribeClick = (event:any) =>{
        if (email.trim().length !== 0) {
            /*fetch("http://localhost:8080/user/subscribe", {
                method:"POST",
                headers:{"Content-type": "application/json"},
                body:JSON.stringify(email)
            }).then(()=>*/
                alert(email + " email címmel sikeresen feliratkozott!")
            //)
        }else{
            alert("Sikertelen feliratkozás! Töltse ki a mezőt!");
        }
    }

    return (
        <>
            <App></App>
            <div className = "welcome-page-background">
                <div>
                    <hr className="border border-white border-2 opacity-100"/>
                    <div>
                    <form>
                        <h3>Jelentkezz!</h3>
                        <p>Szeretne feliratkozni? Itt megeheti!</p>
                        <label>Email:</label> <br/>
                        <input placeholder="Írd ide az email címed..."
                               value={email}
                                onChange={(event) =>setEmail(event.target.value)}
                        />
                        <button onClick = {handleSubscribeClick} className="btn btn-success btn-out btn-out">Feliratkozom!</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Email;