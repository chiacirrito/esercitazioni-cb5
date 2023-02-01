import { useRouter } from "next/router";
import Users from "./index";

const Pages = () => {
  const router = useRouter();
  console.log(router);

  const id = router.query.id;

  return <h1>{id}</h1>;
};

export default Pages;
