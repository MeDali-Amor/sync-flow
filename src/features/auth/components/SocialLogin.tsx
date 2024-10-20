import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="w-full flex items-center gap-x-2">
            <Button
                disabled={false}
                variant={"outline"}
                size={"lg"}
                className="w-full pl-4 flex items-center justify-center gap-2 rounded-sm "
                onClick={() => {}}
            >
                <FcGoogle size={"24"} />
                <div className=" font-bold">Google</div>
            </Button>
            {/* {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />} */}
        </div>
    );
};

export default SocialLogin;
