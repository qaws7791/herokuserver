import jwt from "jsonwebtoken";

const jwtMiddleware = (req,res,next) => {
    const token = req.cookies.access;
    

    try{
        const decoded = jwt.verify(token,"33e86a4534354864399343");
        console.log(decoded);
        return next();
    } catch (e) {
        console.log(e);
        return next();
    }
};

export default jwtMiddleware;