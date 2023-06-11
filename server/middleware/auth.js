import jwt from 'jsonwebtoken';

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    console.log(req);
    const token = req.headers.authorization.split(' ')[1];
    const isGoogleAuth = token.length >= 500;

    let decodedData;

    if (token && isGoogleAuth) {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    } else {
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
