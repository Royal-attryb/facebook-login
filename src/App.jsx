function App() {
    return (
        <div className="App">
            <a 
                href="https://www.facebook.com/dialog/oauth?client_id=1030096775084808&display=page&extras={'setup':{'channel':'IG_API_ONBOARDING'}}&redirect_uri=https://successful-login-page.vercel.app/&response_type=token&scope=instagram_basic,pages_read_engagement,pages_show_list,business_management"
                target="blank"
            >
                Login
            </a>
        </div>
    );
}

export default App;
