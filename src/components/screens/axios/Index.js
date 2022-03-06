import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Index() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {}, []);

  // GLOBAL AXIOS
  axios.defaults.headers.common['X-Auth-Token'] = 'Some TOKEN GLobal';

  // GET
  const getAxios = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        // params: { _limit: 5 },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };

  // POST
  const postAxios = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'SHERI NEW TODO',
        completed: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // PUT/PATCH
  const putAxios = () => {
    axios
      .patch('https://jsonplaceholder.typicode.com/todos/1', {
        title: 'SHERI NEW TODO',
        completed: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Delete
  const deleteAxios = () => {
    axios
      .delete('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Simultaneous Data (Send more than one Request at same time)
  const simAxios = () => {
    axios
      .all([
        axios.get('https://jsonplaceholder.typicode.com/todos'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
      ])
      .then(
        axios.spread((todos, post) => {
          console.log(todos.data);
        })
      )
      .catch((err) => console.log(err));
  };

  // Intercepting Request & Resposne
  axios.interceptors.request.use(
    (config) => {
      console.log(
        `${config.method.toUpperCase()} request sent to ${
          config.url
        } at ${new Date().getTime()}`
      );

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Custom Header
  const customHeader = () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'sometoken',
      },
    };
    axios
      .post(
        'https://jsonplaceholder.typicode.com/todos',
        {
          title: 'SHERI NEW TODO',
          completed: true,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // Transforming Requests & Resonses
  const transAxios = () => {
    const options = {
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/todos',
      data: { title: 'Sheri Fus Gya' },
      transformResponse: axios.defaults.transformResponse.concat((data) => {
        data.title = data.title.toUpperCase();
        return data;
      }),
    };
    axios(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // ERROR HANDLING
  function errorHandling() {
    axios
      .get('https://jsonplaceholder.typicode.com/todoss', {
        // validateStatus: function(status) {
        //   return status < 500; // Reject only if status is greater or equal to 500
        // }
      })
      .then((res) => console.log(res))
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

          if (err.response.status === 404) {
            alert('Error: Page Not Found');
          }
        } else if (err.request) {
          // Request was made but no response
          console.error(err.request);
        } else {
          console.error(err.message);
        }
      });
  }

  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.CancelToken.source();

    axios
      .get('https://jsonplaceholder.typicode.com/todos', {
        cancelToken: source.token,
      })
      .then((res) => console.log(res))
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        }
      });

    if (true) {
      source.cancel('Request canceled!');
    }
  }

  // AXIOS INSTANCE
  const axiosInstance = axios.create({
    // Other custom settings
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  // axiosInstance.get('/comments').then(res => showOutput(res));

  return (
    <div>
      <h1>Axios App</h1>
      <button onClick={getAxios}>GET</button>
      <button onClick={postAxios}>POST</button>
      <button onClick={putAxios}>PUT / PATCH</button>
      <button onClick={deleteAxios}>DELETE</button>
      <button onClick={simAxios}>Sim Requests</button>
      <button onClick={customHeader}>Custom Headers</button>
      <button onClick={transAxios}>Transforms</button>
      <button onClick={errorHandling}>Error Handling</button>
      <button onClick={cancelToken}>Cancel</button>
      <ul>
        {todos.map((item, i) => {
          return <li key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Index;
