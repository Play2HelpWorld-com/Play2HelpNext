import { useRouter } from "next/navigation";


type NextNavigationRouter = ReturnType<typeof useRouter>;
export interface CustomRouter extends NextNavigationRouter {
  customMethod: () => void;
}
