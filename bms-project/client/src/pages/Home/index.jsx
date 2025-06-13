import { useEffect } from "react"
import { GetCurrentUser } from "../../apicalls/user";

function Home() {
  useEffect(() => {
    console.log("Home useEffect");

    const fetchUser = async () => {
      const response = await GetCurrentUser();
      console.log(response);
    };

    fetchUser();
  }, []);
  return <div>Home Page</div>
};

export default Home;