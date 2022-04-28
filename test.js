function getData() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/lrodriguez', { method: 'GET', headers: { 'Conent-Type': 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            /* {
                "msg": "This use does not exists, first call the POST method first to create the list for this username",
                    "trace": [
                        "\n: SlimAPI\\SlimAPI::SlimAPI\\{closure}",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:703 ::call_user_func_array",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:407 Slim\\App::handleException",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:313 Slim\\App::process",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/alesanchezr/slim-api-wrapper/src/SlimAPI.php:281 Slim\\App::run",
                        "\n/home/customer/www/assets.breatheco.de/public_html/apis/fake/todos/index.php:95 SlimAPI\\SlimAPI::run"
                    ]
            } */

            /* [
                { label: "Make the bed", done: false },
                { label: "Walk the dog", done: false },
                { label: "Do the replits", done: false }
            ] */

            createData();

        });
}

function createData() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/lrodriguez', { method: 'POST', body: JSON.stringify([]), headers: { 'Conent-Type': 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            /* {
                "msg": "This user already has a list of todos, use PUT instead to update it",
                    "trace": [
                        "\n: SlimAPI\\SlimAPI::SlimAPI\\{closure}",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:703 ::call_user_func_array",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:407 Slim\\App::handleException",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:313 Slim\\App::process",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/alesanchezr/slim-api-wrapper/src/SlimAPI.php:281 Slim\\App::run",
                        "\n/home/customer/www/assets.breatheco.de/public_html/apis/fake/todos/index.php:95 SlimAPI\\SlimAPI::run"
                    ]
            } */

            /* {
                "result": "ok"
            } */

            getData();

        });
}

function updateData() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/lrodriguez', { method: 'POST', body: JSON.stringify([{ label: 'Task 1', done: false }]), headers: { 'Conent-Type': 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            /* {
                "msg": "This user already has a list of todos, use PUT instead to update it",
                    "trace": [
                        "\n: SlimAPI\\SlimAPI::SlimAPI\\{closure}",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:703 ::call_user_func_array",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:407 Slim\\App::handleException",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:313 Slim\\App::process",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/alesanchezr/slim-api-wrapper/src/SlimAPI.php:281 Slim\\App::run",
                        "\n/home/customer/www/assets.breatheco.de/public_html/apis/fake/todos/index.php:95 SlimAPI\\SlimAPI::run"
                    ]
            } */

            /* {
                "result": "ok"
            } */

            getData();

        });
}

function deleteData() {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/lrodriguez', { method: 'DELETE', headers: { 'Conent-Type': 'application/json' } })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            /* {
                "msg": "This use does not exists, first call the POST method first to create the list for this username",
                    "trace": [
                        "\n: SlimAPI\\SlimAPI::SlimAPI\\{closure}",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:703 ::call_user_func_array",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:407 Slim\\App::handleException",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/slim/slim/Slim/App.php:313 Slim\\App::process",
                        "\n/home/customer/www/assets.breatheco.de/public_html/vendor/alesanchezr/slim-api-wrapper/src/SlimAPI.php:281 Slim\\App::run",
                        "\n/home/customer/www/assets.breatheco.de/public_html/apis/fake/todos/index.php:95 SlimAPI\\SlimAPI::run"
                    ]
            } */

            /* { "result": "ok" } */

        });
}

