import { useEffect, useState } from 'react'
import axios from 'axios'

const fetchLoading = <T,>(ChildComponent: (data: T[]) => JSX.Element, url: string ) => {
  return () => {
    const [Data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async() => {
        try {
          const result = await axios(url);
          setData(result.data);
          setLoading(false);
        } catch (error:any) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchData();
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error}</p>;
    }
    return <ChildComponent data={Data} />;
  };
};

export default fetchLoading;