import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListBusinessAction, ResetListBusinessAction } from "../../actions/home/getListBusinessLinesAction";

const ListBusinessLines = () => {
  const dispatch = useDispatch();
  const getReducerListBusinessLines = useSelector((state) => state.BusinessLines);

  useEffect(() => {
    const FetchData = () => {
      dispatch(
        GetListBusinessAction({
          empresa_id: 103, // aqui deberia ir empresa_ID
        })
      );
    };
    FetchData();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(ResetListBusinessAction());
    };
  }, [dispatch]);

  console.log( getReducerListBusinessLines.data)

  return <div>lista de weas y si mejor lo dejo en select jjjj</div>;
};

export default ListBusinessLines;
