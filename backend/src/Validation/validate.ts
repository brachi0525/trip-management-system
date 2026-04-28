import { ErrorType } from "../../../types/error";

export const validate = (schema: any, data: any) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        console.log(result.error.issues[0].message);

        throw new ErrorType((result.error.issues[0].message), 400);
    }

    return result.data;
};