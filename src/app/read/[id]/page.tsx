interface IProps {
  params: {
    id: string;
  };
}

function Read(props: IProps) {
  return (
    <>
      <h1>Read</h1>
      <p>{props.params.id}</p>
    </>
  );
}

export default Read;
