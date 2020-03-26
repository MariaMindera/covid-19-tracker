import { useState, useEffect } from "react";

export default function getState(url) {
  const [items, setItems] = useState();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLoaded(true);
        setItems(data);
      })
      .catch(error => {
        setError(error);
        setLoaded(true);
      });
  }, [url]);

  return { items, error, loaded };
}
