# [Winston Logger](https://www.npmjs.com/package/winston)

### used  to get meaningful data from application. For this we can log tools such as [**DataDog**], [**Loggly**], [**Splunk**].

### If we have a site which has 3000-5000 user which visits then we need to know which are the routes they are hitting, how many users with single login using your application, how many IPs are going on so we can find out how many user are using same account, so we can block their account. For this we used logger which are already hosted in AWS, Digital Ocean.

## Here I used winston logger, configure it and created log files.

Created two separate basic logger
![Screenshot from 2021-09-25 23-47](https://user-images.githubusercontent.com/56266493/134783334-e107f5f9-d29c-41a4-9b7c-078cd500d379.png)


Syntax for creation logger
![Screenshot from 2021-09-25 23-47](https://user-images.githubusercontent.com/56266493/134783341-4f571113-5484-482f-bb05-9fde619d232d.png)


It creates two files combined.log and error.log where all logs are there
![Screenshot from 2021-09-26 00-00](https://user-images.githubusercontent.com/56266493/134783345-e2f18d96-f8c7-41a0-a971-6b67d80270b4.png)


Created separated myError.log file using `transports.File({ filename: "myErrors.log" })`
![Screenshot from 2021-09-26 00-00 (1)](https://user-images.githubusercontent.com/56266493/134783347-197828e9-b352-47e2-8970-ce4797b13d67.png)











