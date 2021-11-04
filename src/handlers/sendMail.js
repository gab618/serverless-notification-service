import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "eu-west-1" });

async function sendMail(event, context) {
  const params = {
    Source: "gabrielrocha1997@gmail.com",
    Destination: {
      ToAddresses: ["knuckles4x@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Blindas",
        },
      },
      Subject: {
        Data: "Test Mail",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}

export const handler = sendMail;
