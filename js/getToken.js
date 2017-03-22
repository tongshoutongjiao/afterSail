/**
 * Created by wy on 2017/3/16.
 */

const SVR = 'http://192.168.1.224:6200';
function getCode(account)
{
    var code;
    $.ajax({
        url: SVR + "/securityapi/v1.0/codes",
        type: 'get',
        dataType: "json",
        async: false,
        cache: false,
        data: {
            "account": account,

        },
        headers: {
            "Accept": "application/json",
        },
        success: function (data) {
            try {

                if (data.successful == true) {
                    code = data.data;
                }
                else {
                    throw "Get code fail :" + account;
                }

            }
            catch (err)
            {
                console.log(err);
            }

        },
        error: function (result) {
            console.log(result.status)
        }
    });
    return code;
}

function calculate(code,account,pw)
{

    var  signature = ($.md5(($.md5(account.toUpperCase() + ($.md5(pw)).toUpperCase())).toUpperCase() + code)).toUpperCase();

    return signature;

}
function token(account,pw) {
    var code=getCode(account);

    var sign=calculate(code,account,pw);

    var tokenNum;
    $.ajax({
        url: SVR+"/securityapi/v1.0/tokens",
        type: "GET",
        async:false,
        cache:false,
        data: {
            "account":account ,
            "signature":sign,
        },
        headers: {
            "Accept": "application/json",
        },
        success:function (data) {
            try{
                if(data.successful == true){
                    tokenNum=JSON.parse(data.data).accessToken;
                }
                else {
                    tokenNum = "ERROR";
                    throw "Get token fail:"+account;

                }
            }
            catch (err)
            {
                console.log(err);
                tokenNum = "ERROR";
            }

        },
        error:function (result) {
            console.log(result.status)
        }
    });
    return tokenNum;
}


