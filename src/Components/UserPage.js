import { useEffect, useState } from "react";
import axios from "axios";
import UserComponent from "./UserComponent";
import PageComponent from "./PageComponent";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(10);
  const [totalPage, setTotalPage] = useState(10);

  useEffect(() => fetchData(), [currentPage]);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://reqres.in/api/users?page=${currentPage}`
    );
    const data = res.data;
    setUsers(data.data);
    setLoading(false);
    setUserPerPage(data.per_page);
    setTotalPage(data.total);
  };

  const handleButtonClick = (num) => {
    setCurrentPage(num);
  };
  const startIndex = (currentPage - 1) * userPerPage;
  const selectedUser = users.slice(startIndex, startIndex * userPerPage);
  return loading ? (
    <p>Please wait, data is loading...</p>
  ) : (
    <>
      <UserComponent users={users} />
      <PageComponent
        pages={Math.ceil(totalPage / userPerPage)}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
};

export default UserPage;
