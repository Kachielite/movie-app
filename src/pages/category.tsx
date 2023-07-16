import { FC } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/layout";

const Category: FC = () => {
  const { type } = useParams();

  return (
    <Layout>
      <h1>{type}</h1>
    </Layout>
  );
};

export default Category;
