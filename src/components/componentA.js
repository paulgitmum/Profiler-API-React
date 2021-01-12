import React from "react";
import axios from "axios";

const ComponentA = () => {
    const [data, setData] = React.useState([])
  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(result.data.slice(0,10));
      setData(result.data.slice(0,10))
    } catch (error) {
      console.log(error.message);
    }
  };

  return <div>
      {data.map((item)=>{
          return <p>{item.title}</p>
      })}
  </div>;

};
export default ComponentA;
