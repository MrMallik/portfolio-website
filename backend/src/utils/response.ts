export function successResponse<T>(data: T) {
    return {
        success: true,
        data,
    };
}

export function errorResponse(error: string, statusCode = 500) {
    return {
        success: false,
        error,
        statusCode,
    };
}
