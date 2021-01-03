const config = {
    s3: {
        REGION:"us-east-2",
        BUCKET:"serverless-notes-api",
    },
    apiGateway: {
        REGION:"us-east-2",
        URL:"https://sjj0m2i5ej.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION:"us-east-2",
        USER_POOL_ID: "us-east-2_ILFnszc80",
        APP_CLIENT_ID: "6micag95qf59dgm20qpubu0cgt",
        IDENTITY_POOL_ID: "us-east-2:e87d98b0-6750-4972-afa0-7f7ab2ccfe15",
    },
};

export default config;