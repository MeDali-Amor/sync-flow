import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

const route = client.api.auth.register["$post"];

type ResponseType = InferResponseType<typeof route>;
type RequestType = InferRequestType<typeof route>;

export const useRegister = () => {
    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async ({ json }) => {
            const response = await route({ json });
            return await response.json();
        },
    });
    return mutation;
};
