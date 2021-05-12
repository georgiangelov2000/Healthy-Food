export const createFood = async (food) => {
  console.log(JSON.stringify(food));
  return fetch(
    "https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    }
  ).catch((err) => {
    console.log(err);
  });
};

export const getAll = async () => {
  let getAllFood = await fetch(
    "https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/.json"
  ).catch((err) => {
    console.log(err);
  });
  let data = await getAllFood.json();
  return Object.keys(data).map((key) => ({ key, ...data[key] }));
};

export const getDetails = async (id) => {
  let details = await fetch(
    `https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/${id}.json`
  ).catch((err) => {
    console.log(err);
  });
  return await details.json();
};

export const updateFood = async (food, id) => {
  return fetch(
    `https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/${id}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    }
  ).catch((error) => {
    console.log(error);
  });
};

export const deleteFood = async (id) => {
  return await fetch(
    `https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/${id}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const favouriteFood = async (id) => {
  console.log(JSON.stringify(id));
  return fetch(
    `https://healthy-food-5ba55-default-rtdb.firebaseio.com/food/${id}.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    }
  ).catch((err) => {
    console.log(err);
  });
};
