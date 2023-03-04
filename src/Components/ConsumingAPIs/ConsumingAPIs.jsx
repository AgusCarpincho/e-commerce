import { Button } from "@mui/material";
import { useEffect, useState } from "react";

async function GETData() {
  return await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function POSTData() {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: "Esta es una del front",
      userId: 2,
      body: "Aca estamos probando el verbo post desde react",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

const ConsumingAPIs = () => {
  const [posts, setPosts] = useState({});
  const [sended, setSended] = useState(false);

  useEffect(() => {
    /*const data = GETData();
    setPosts(data);*/
    /*POSTData();*/
  }, []);

  return (
    <Button
      onClick={() => {
        POSTData();
        setSended(true);
      }}
    >
      Post It
    </Button>
  );
};

export default ConsumingAPIs;
