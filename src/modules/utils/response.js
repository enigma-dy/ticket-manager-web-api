// SUCCESS_RESPONSE
export const successResponse = (res, { statusCode = 200, message = "Success", payload = {} }) => {
    return res.status(statusCode).json({
        success: true,
        message: message,
        payload
    })
};


// ERROR_RESPONSE
export const errorResponse = (res, { statusCode = 500, message = "Internal Server Error" }) => {
    return res.status(statusCode).json({
        success: false,
        message: message
    })
};
