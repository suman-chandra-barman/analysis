export const deleteIncomeData = (id, loading, setLoading, path) => {
  fetch(`http://localhost:5000/${path}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setLoading(!loading);
    })
    .catch((error) => {
      console.error(error);
    });
};
