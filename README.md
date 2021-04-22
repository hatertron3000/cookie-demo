# cookie-demo

This is an AWS SAM application that demonstrates the ability for an API on a subdomain such as api.example.com to set a cookie in response to an ajax request from a broser on a subdomain of example.com such as www.example.com.

## Prerequisites

- Node 12+ (may work on earlier versions, but not tested)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- AWS CLI configured with AWS credentials

## Usage

Clone the repo
```
git clone https://github.com/hatertron3000/cookie-demo
cd cookie-demo
```

If you want to test locally, copy env.json.TEMPLATE to env.json
```
cp env.json.TEMPLATE env.json
```
Edit env.json to replace the DOMAIN and CORS_SUBDOMAIN environment variables.

To run the app locally...
```
sam local start-api --env-vars env.json
```

To deploy the app:
```
sam deploy --guided
```

Set up a custom domain for your API gateway (i.e. api.example.com) as described in the [AWS documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html)

Point the DNS record(s) for your custom domain to the custom domain URL from API gateway (i.e. point api.example.com to &lt;API_GATEWAY_DOMAIN_ID&gt;.execute-api.&lt;AWS_REGION&gt;.amazonaws.com). See the [AWS documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-api-gateway.html) for an example of using Route 53 to create a record pointing to the API gateway.