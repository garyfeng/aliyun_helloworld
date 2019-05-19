# Aliyun helloworld
Test case for Aliyun Functional Computing
----

You must have an Aliyun primary account; sub-users won't do. 

## Aliyun Account set up
* Login to https://usercenter.console.aliyun.com/#/manage/ak using your primary account and password. 
  * I had to do a "real-name" account authentication to do anything. I did it with my AliPay mobile app, in which I have done person-id before. **You are giving your real, personal info to Ali ... as if they don't have it already**.

* Create an AccessKey and the Secret, unless you decide to use an existing one. Note that you can't use any RAM subaccounts for the `FC` API, or else you run into error messages in the `fun deploy` stage.
* Set up Multi-Factor Authentication (MFA). I did it with the `Google Authenticator` app. As you go through the MFA steps, you will be shown a QR code at some point, which is to be scanned with the Google Authenticator app. Then your app will be ready to generate auth codes that are in sync with the MFA system. You will be prompted to use the app to input the 6-digit code for MFA.

* Make sure you have openned the **Function Computing** feature: https://fc.console.aliyun.com/overview/cn-shanghai

* Make sure you have openned the **API Gateway** feature: https://cn.aliyun.com/product/apigateway
  * In the API Console you will be able to trigger specific FCs for testing purposes. 
  
* You also need to know your region. I used `Shanghai`. 

## Fun set up
[`Fun`](https://github.com/aliyun/fun) is Aliyun's command line tool for packaging FC functions. It's easier than the `fcli` tool. See the GitHub repo for documentation. This project follows the [hello_world](https://github.com/aliyun/fun/tree/master/examples/helloworld) example. 

* Installation: https://github.com/aliyun/fun/blob/master/docs/usage/installation-zh.md. Beware that you may have to update `node` if you are prompted to do so. I used
```shell
npm install -g n
n install
```

* Configuration: After you tested (`fun -h`), you need to do `fun config`. It will ask 
  * Aliyun primary account. The doc is very unclear here -- they want your **numeric account number** of the primary account; not the *username* or anything about any RAM sub-account. The function will be deployed to a domain that starts with your numeric account number. 
  * AccessKey and the secret: you created these in a previous step. Use the [AK console](https://usercenter.console.aliyun.com/#/manage/ak) to unlock the AccessKeySecret (using the MFA/authenticator app).

## Hellow World example
Follow the [hello_world](https://github.com/aliyun/fun/tree/master/examples/helloworld) example to set up your project. If all goes well, you will be able to succeed in `fun deploy`, something like:

```
fun deploy
using region: cn-shanghai
using accountId: ***********2233
using accessKeyId: ***********XQt0
using timeout: 10

Waiting for service fc to be deployed...
	Waiting for function helloworld to be deployed...
		Waiting for packaging function helloworld code...
		package function helloworld code done
	function helloworld deploy success
service fc deploy success

Waiting for api gateway HelloworldGroup to be deployed...
    URL: GET http://17xxxxxxxxxxxxxxxxxx3f-cn-shanghai.alicloudapi.com/
      stage: RELEASE, deployed, version: 20190519082820338
      stage: PRE, undeployed
      stage: TEST, undeployed
api gateway HelloworldGroup deploy success
```

## Testing

From a terminal, I did `curl http://17xxxxxxxxxxxxxxxxxx3f-cn-shanghai.alicloudapi.com/` and I got the `hello world` in return. 

You can trigger/debug the FC using Aliyun's [API Gateway console](https://apigateway.console.aliyun.com). 
