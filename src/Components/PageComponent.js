const PageComponent = ({ pages, handleButtonClick }) => {
  console.log(pages);
  const totalPage = [...Array(pages).keys()].map((num) => num + 1);
  return (
    <p>
      {totalPage.map((num) => (
        <button key={num} onClick={() => handleButtonClick(num)}>
          {num}
        </button>
      ))}
    </p>
  );
};

export default PageComponent;
