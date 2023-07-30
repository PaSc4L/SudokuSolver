import './EmailForm.css';
import React, {useState} from "react";
import App from "../App";
function Email(){

    const[email,setEmail] = useState('');
    //subscribe
    const handleSubscribeClick = (event:any) =>{
        if (email.trim().length !== 0) {
            fetch("http://localhost:8080/user/subscribe", {
                method:"POST",
                headers:{"Content-type": "application/json"},
                body:JSON.stringify(email)
            }).then(()=>
                alert(email + " email címmel sikeresen feliratkozott!")
            ).catch(()=>{
                const acceptedEmail = "proba123@gmail.com";
                if(acceptedEmail == email){
                    alert(email + " email címmel sikeresen feliratkozott!");
                }else{
                    alert("Sikertelen feliratkozás! Az email cím nem létezik!");
                }
            }
            ) 
        }else{
            alert("Sikertelen feliratkozás! Töltse ki a mezőt!");
        }
    }

    return (
        <>
            <App></App>
            <div className = "welcome-page-background">
                <div>
                    <div>
                    <form>
                        <h3>Jelentkezz!</h3>
                        <p>Szeretne feliratkozni? Itt megteheti!</p>
                        <label>Email:</label> <br/>
                        <input placeholder="Írd ide az email címed..."
                               value={email}
                               onChange={(event) =>setEmail(event.target.value)}
                        />
                        <button onClick = {handleSubscribeClick} className="btn btn-success btn-out btn-out">Feliratkozom!</button>
                        <div>
                            <input type="radio" className='difficulty' name="fav_language" value="Könnyű"/>
                            <label>Könnyű</label>
                            <input type="radio" className='difficulty' name="fav_language" value="Közepes"/>
                            <label>Közepes</label>
                            <input type="radio" className='difficulty' name="fav_language" value="Nehéz"/>
                            <label>Nehéz</label>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Email;