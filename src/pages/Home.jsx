import React from 'react';

import List from '../components/List';
import Form from '../components/Form';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      {/* To do list 입력 부분 */}
      <Form />
      {/* To do list 카드 부분 */}
      <List />
    </Layout>
  );
}

export default Home;
