exports.handler = async(event,context)=>{
    context.getRemainingTimeInMillis();

    context.functionName;   //gives name of the lambda function
    context.functionVersion;
    context.functionArn;
    context.awsRequestId;
    context.memoryLimitInMB;
    context.identity;       //gives information about congnito identity provider
    context.logGroupName;
    context.logStreamName;
    context.clientContext;    //gives additional information about client device
}


