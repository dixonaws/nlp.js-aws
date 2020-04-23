function checkJwt() {
    const currentPageUrl=window.location.href;

    const idTokenStartPos=currentPageUrl.indexOf("#id_token");
    const accessTokenStartPos=currentPageUrl.indexOf("&access_token");
    const expiresInStartPos=currentPageUrl.indexOf("&expires_in");
    const tokenTypeStartPos=currentPageUrl.indexOf("&token_type");

    var idToken;
    var accessToken;
    var expiresIn;
    var tokenType;
    var status;
    var alertMessage;
    var redirect_url;

    console.log(idTokenStartPos);
    console.log(accessTokenStartPos);
    console.log(expiresInStartPos);
    console.log(tokenTypeStartPos);

    if(idTokenStartPos==-1) {
        console.log("No JWT tokens present in URL");
        idToken="not found"
        accessToken="not found"
        expiresIn="not found"
        tokenType="not found"
        status="redirect to login page...";
        alertMessage="redirecting to login page...";
        redirect_url="https://a2242020.auth.us-east-1.amazoncognito.com/login?client_id=538iolm2i3kupquslc23u0jb8a&response_type=token&scope=aws.cognito.signin.user.admin+email+https://kkjqf3agnl.execute-api.us-east-1.amazonaws.com/dev/TrainingApp.Configure+openid+phone+profile&redirect_uri=http://localhost:8000";
    }

    if(idTokenStartPos != -1) {
        idToken=currentPageUrl.slice(idTokenStartPos+10, accessTokenStartPos);
        accessToken=currentPageUrl.slice(accessTokenStartPos+14, expiresInStartPos);
        expiresIn=currentPageUrl.slice(expiresInStartPos+12, tokenTypeStartPos);
        tokenType=currentPageUrl.slice(tokenTypeStartPos+12);
        status="JWT tokens found, redirect to training application..."
        alertMessage="redirecting to training app...";
        redirect_url="https://d27coo1j63d8wu.cloudfront.net";
    }

    document.getElementById("status").innerHTML=status;
    document.getElementById("currentPageUrl").innerHTML=currentPageUrl;
    document.getElementById("idToken").innerHTML=idToken;
    document.getElementById("accessToken").innerHTML=accessToken;
    document.getElementById("expiresIn").innerHTML=expiresIn;
    document.getElementById("tokenType").innerHTML=tokenType;

    alert(alertMessage);

    setTimeout(window.location.replace(redirect_url),5000);
}

