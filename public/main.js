var global_parameters={};

function checkForAuthToken() {
//    const urlstring="http://localhost:8000/auth.html?training_app_url=https://d1wdx2ecojno0a.cloudfront.net?service_endpoint=https://6gnxgjxm79.execute-api.us-east-1.amazonaws.com/dev#id_token=eyJraWQiOiJNMUl2WEZGMkJLR0p4MTJzT1lHbjZ5VFVFTWtSV2VyMWp1eDFTSk5YOUowPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiemNCUFpUWVF4NzNYM2tLcnlaUHVFUSIsInN1YiI6ImJmNjg2MTFlLWM2ZmUtNGZkMS1hYTllLWYxNWE0YzM2OWRmNSIsImF1ZCI6IjRhdGNiaGh0amNkYXY2dmU2ZmhvbTFiM3FyIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1OTI5OTQyMDMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1lIbGxybE4wZCIsImNvZ25pdG86dXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MTU5Mjk5NzgwMywiaWF0IjoxNTkyOTk0MjAzLCJlbWFpbCI6ImRpeG9uYXdzQGFtYXpvbi5jb20ifQ.NEr7WYvrZoRnOVmTJSVdgRCsIQ1IkEzq70DQ24EpY8tT7EzLv2yONMAQd1NjziLPWdKFirnWvY7YaLOUGj95sgACi9YUq89XONlM-hfjjNpP7ovS_WaxC0bZmUCy3B2qRQ5O5ISq8qnNmzLzEjaiW4jpYZEIGSr5x2Pn2oKFYuQVzWzQkw01UIC-U_pOEiqtkZfa3CgTen_ny7uwjyeli8FVV6vML_M9j2LRCbFzYQMpjMI2ATOFXk3bw3qRPznZQAtlnF2teQTW6jH5QqVHV3Q8WfY5M8nkMQ-4-zpSRMGL2CkLeysZ8mzm-az-W8toXCK5I4rY9eQoo7UP35QQSg&access_token=eyJraWQiOiJFaVRNZDlOSWVReWVwM3NROTh0WEhpVmV0bEdBTnZtZ1ZmVEtuYUF0YXBNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJiZjY4NjExZS1jNmZlLTRmZDEtYWE5ZS1mMTVhNGMzNjlkZjUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG5scGpzUmVzb3VyY2VTZXJ2ZXJcL1RyYWluaW5nQXBwLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTkyOTk0MjAzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9ZSGxscmxOMGQiLCJleHAiOjE1OTI5OTc4MDMsImlhdCI6MTU5Mjk5NDIwMywidmVyc2lvbiI6MiwianRpIjoiNTgwN2FhZWItMTA4ZS00Yzc1LTg0NmQtMzljZDU1ZGM0YTFjIiwiY2xpZW50X2lkIjoiNGF0Y2JoaHRqY2RhdjZ2ZTZmaG9tMWIzcXIiLCJ1c2VybmFtZSI6ImFkbWluIn0.3ANAA4-RpclrX_lbKtIGN1dWiZ1vlAP3Hh9KwWbRqvc1KGTeReBKaNk3ilGQ6SRIHWI4l3fpDjpXAunuOpGUUmp82eN4FfJiixNBSbGKZ88g6RoDxomGXXYip6aaOB4JA-AapgElOyFIDwmxr8u4pLrbvyjO18sMv0ispyJ8stBO9R-rXExQ8de8iGCIUVbeTqmidG67InMlDBsC9ZlLnsSDEbRNafq8lHVVCnPzSbFHQhJtE66RJ9JYFoC5fXzyqWWEBbDWg0nwiUJM6R0tuGVW5nkaThhdEsgApdUWQsYN-Z-UzwvKFSUqUQnUQasKctzjLXBXIosNtKq24gdzrA&expires_in=3600&token_type=Bearer"
    const urlstring=window.location.href
    var parameters={}
    var tokens=urlstring.split("?")
    var training_app_param=tokens[1].split("=")
    var endpoint_fragment=tokens[2].split("#")
    var endpoint_param=endpoint_fragment[0].split("=")
    var tokens_fragment=endpoint_fragment[1]
    var tokens_params=endpoint_fragment[1].split("&")

    var i
    for (i=0; i<tokens_params.length; i++) {
        var parameter=tokens_params[i].split("=")
        parameters[ parameter[0] ] = parameter[1]
    }

    console.log("parameters: ")
    parameters[endpoint_param[0]]=endpoint_param[1]
    parameters[training_app_param[0]]=training_app_param[1]

    console.log(parameters)

    document.getElementById("status").innerHTML=status;
    document.getElementById("id_token").innerHTML=parameters["id_token"];
    document.getElementById("access_token").innerHTML=parameters["access_token"];
    document.getElementById("expires_in").innerHTML=parameters["expires_in"];
    document.getElementById("token_type").innerHTML=parameters["token_type"];
    document.getElementById("training_app_url").innerHTML=parameters["training_app_url"]
    document.getElementById("service_endpoint").innerHTML=parameters["service_endpoint"]
    document.getElementById("current_page_url").innerHTML=urlstring

    document.cookie="id_token=" + parameters["id_token"]
    document.cookie="access_token=" + parameters["access_token"]
    document.cookie="expires_in=" + parameters["expires_in"]
    document.cookie="token_type=" + parameters["token_type"]
    document.cookie="training_app_url=" + parameters["training_app_url"]
    document.cookie="service_endpoint=" + parameters["service_endpoint"]

    document.getElementById("cookies").innerHTML=document.cookie;

    global_parameters=parameters
}    

function redirect(url) {
    window.location.replace(url);
}

function checkCookies() {
    console.log("cookie: " + document.cookie)

    document.getElementById("cookies").innerHTML = document.cookie;
    document.getElementById("id_token").innerHTML = getCookie("id_token");
    document.getElementById("access_token").innerHTML = getCookie("access_token");
    document.getElementById("expires_in").innerHTML = getCookie("expires_in");
    document.getElementById("token_type").innerHTML = getCookie("token_type");

}

function getCookie(key) {
    var name = key + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function sayGoodbye() {
    console.log("loadSettings() with auth");
    const url=global_parameters["service_endpoint"] + "/api/settings"
    console.log(url)

    //service_endpoint + "/api/agent/f560738e-80c6-4050-b74a-de77ef2c6509/converse?sessionId=NLPUI&text=goodbye";

    const id_token = global_parameters["access_token"];

    var myHeaders = new Headers();
    myHeaders.append("Authorization", access_token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // basic fetch:
    // fetch(url, requestOptions)
    //     .then(response => response.text())
    //     .then(result => evalResponse(result))
    //     .catch(error => console.log('error', error));

    fetch(url, requestOptions)
        .then(response => {
            int_status=response.status;
            
            console.log("status code: " + int_status);
            document.getElementById("status").innerHTML=int_status;
            
//            if(int_status==401) {
//                console.log("Unauthorized")
//                window.location.replace("https://a2242020.auth.us-east-1.amazoncognito.com/login?client_id=538iolm2i3kupquslc23u0jb8a&response_type=token&scope=aws.cognito.signin.user.admin+email+https://kkjqf3agnl.execute-api.us-east-1.amazonaws.com/dev/TrainingApp.Configure+openid+phone+profile&redirect_uri=http://localhost:8000");
//
//            }

            return response.json()
        })
        .then(JSONdata => {
            console.log(JSONdata)
            document.getElementById("settings").innerHTML=JSON.stringify(JSONdata);
            
        })
        .catch(error => {
            document.getElementById("status").innerHTML=error;
            console.log('error', error)
        });
   

}

function clearCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    console.log("cleared cookies");
    document.getElementById("cookies").innerHTML=cookies
    
}