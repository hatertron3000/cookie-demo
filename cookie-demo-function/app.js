let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            }),
            'headers': {
                'Set-Cookie': `my-cookie=my-cookie-value; Domain=.${process.env.DOMAIN}; path=/`,
                'Access-Control-Allow-Origin': `https://${process.env.CORS_SUBDOMAIN}`,
                'Access-Control-Allow-Credentials': 'true'
            }
        }
        console.log(response)
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
