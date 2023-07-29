import { FC, useEffect, useState } from "react";
import Layout from "../layout/layout";
import { Funnel } from "../components/Icon-components";
import DropdownComponent from "../components/dropdown";
import { useParams } from "react-router-dom";
import PersonsComponents from "../components/persons-components";
import { useAppDispatch, useAppSelector } from "../utils/store/hooks";
import { fetchPopularPersons } from "../utils/store/slides/movie";
import { RootState } from "../utils/store";

const Persons: FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const { isLoading, persons } = useAppSelector(
    (state: RootState) => state.movie.persons,
  );
  const { results: personData } = persons;

  useEffect(() => {
    dispatch(fetchPopularPersons({ page: page.toString() }));
  }, [page]);

  return (
    <Layout>
      <div className="px-4 w-full flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-extrabold text-left w-full text-primaryText font-lato capitalize">
          Celebrities
        </h1>
        {/*<div className="flex flex-row justify-center items-center space-x-2 mr-7">*/}
        {/*  <Funnel />*/}
        {/*  <DropdownComponent />*/}
        {/*</div>*/}
      </div>
      {personData && (
        <PersonsComponents
          isLoading={isLoading}
          persons={personData}
          setPage={setPage}
          page={page}
        />
      )}
    </Layout>
  );
};
export default Persons;
