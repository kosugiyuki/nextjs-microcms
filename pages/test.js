export default function Test(props) {
  console.log("test,js:", props);
  return <h1>Test</h1>
}

export async function getServerSideProps() {
  return {
    props: {
      message: 'データの流れ',
    }
  }
}
