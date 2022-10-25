import React from "react";
import Button from "react-bootstrap/Button";
import spotifyLogo from "../../styles/Spotify_Logo_RGB_Green.png"


function Login(props){
    if(props.isLoggedIn){
        return null;
    }

    return(
        <div className="app-body-container" style={{height: '100vh'}}>
            <div className="App-body">
                <h2 className="home-h2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>UTune: A <img src={spotifyLogo} alt="img" style={{ width: "12%", marginInline: "8px", }}></img> Analysis App</h2>
                <h1 className="home-h1" style={{marginBottom: '10vh'}}>LOGIN TO YOUR SPOTIFY ACCOUNT</h1>
                 <Button
                    className="submit-button"
                    variant="success"
                    onClick={()=>props.login()}
                    >
                    Login
                    </Button>
                <h3 className="home-h3">You can find the code here: <a href="https://github.com/tiny-babies/tiny-babies.github.io/tree/master">https://github.com/tiny-babies/tiny-babies.github.io/tree/master</a> </h3>
            </div>

           
        </div>

    )

}

export default Login;