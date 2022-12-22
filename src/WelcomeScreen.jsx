import React from "react";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
        <div className="WelcomeScreen text-center text-navy bg-white fixed top-0 w-full h-screen px-4">
            <h1 className="text-5xl font-extrabold my-11">Welcome to the Meet App</h1>
            <h4>
                Log in to see upcoming events around the world for full-stack developers
            </h4>
            <div className="button_cont bg-light-blue max-w-xl py-8 my-8 mx-auto rounded-md">
                <div className="google-btn  rounded-md w-60 h-11 mx-auto bg-white shadow-md shadow-navy active:shadow-inner active:translate-y-px">
                    <div className="google-icon-wrapper absolute w-10 h-10 ml-2 mt-px">
                        <img 
                            className="google-icon h-7 w-7 absolute mt-1.5 ml-1.5"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google sign-in"
                        />
                    </div>
                    <button 
                        onClick={() => { props.getAccessToken() }}
                        rel="nofollow noopener"
                        className="btn-text float-right text-center h-full w-4/5"
                    >
                        <b>Sign in with Google</b>
                    </button>
                </div>
            </div>
            <a
                href="https://amelieberry.github.io/meet/privacy.html"
                rel="nofollow noopener"
                className="underline"
            >
                Privacy Policy
            </a>
        </div>
    )
    : null
}

export default WelcomeScreen;