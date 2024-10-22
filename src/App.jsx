function App() {

    function handleLogin () {
        window.FB.login(
            function(response) {
                console.log(response);
            },
            {
                config_id: '1045272757389612',
                response_type: 'code',
                override_default_response_type: true
            }
        );
    }

    return (
        <div className="App">
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default App;